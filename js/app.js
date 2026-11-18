/* =========================================================
   Lộ Trình Hán–Nhật — ứng dụng luyện tiếng Trung & tiếng Nhật
   Thuần HTML/CSS/JS, lưu tiến độ trong localStorage.
   ========================================================= */
(function () {
  'use strict';

  // ---------- Dữ liệu ----------
  const D = window.LANG_DATA || {};
  const META = {
    zh: { name: 'Tiếng Trung', tts: 'zh-CN', flag: '🇨🇳', exam: 'HSK', char: '中', reading: 'Pinyin', pron: 'Phát âm & Pinyin', pronIco: '🔤' },
    ja: { name: 'Tiếng Nhật', tts: 'ja-JP', flag: '🇯🇵', exam: 'JLPT', char: '日', reading: 'Cách đọc', pron: 'Bảng chữ Kana', pronIco: 'あ' }
  };
  ['zh', 'ja'].forEach(l => {
    D[l] = D[l] || { levels: [] };
    D[l].levels = D[l].levels || [];
    D[l].levels.forEach(lv => {
      ['units', 'vocab', 'grammar', 'goals', 'kanji'].forEach(k => { lv[k] = Array.isArray(lv[k]) ? lv[k] : []; });
      lv.units.forEach(u => { u.tasks = u.tasks || []; });
    });
  });

  // ---------- Trạng thái ----------
  const KEY = 'ltp_state_v1';
  const DAY = 86400000;
  const SRS_INT = [0, 1, 2, 4, 7, 15, 30]; // ngày, theo hộp Leitner 0..6
  const defaultState = () => ({
    lang: 'zh', theme: 'light', dailyGoal: 50, totalXp: 0,
    history: {}, streak: { count: 0, last: null },
    tasks: {}, gram: {}, srs: {}, sel: {}, quizzes: 0, newPerSession: 10
  });
  let S = load();
  function load() {
    try { return Object.assign(defaultState(), JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch (e) { return defaultState(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

  // ---------- Tiện ích ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const dateKey = d => { const x = new Date(d); return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); };
  const today = () => dateKey(Date.now());
  const yesterday = () => dateKey(Date.now() - DAY);
  const L = () => S.lang;
  const levels = () => D[L()].levels;
  const getLevel = id => levels().find(l => l.id === id);
  const isCJK = s => /[\u3040-\u30ff\u3400-\u9fff]/.test(s || '');

  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // ---------- XP & chuỗi ngày ----------
  function addXp(n) {
    const d = today();
    S.history[d] = (S.history[d] || 0) + n;
    S.totalXp += n;
    if (S.streak.last !== d) {
      S.streak.count = S.streak.last === yesterday() ? S.streak.count + 1 : 1;
      S.streak.last = d;
    }
    const before = S.history[d] - n;
    if (before < S.dailyGoal && S.history[d] >= S.dailyGoal) toast('🎉 Hoàn thành mục tiêu hôm nay!');
    save(); updatePills();
  }
  const streakNow = () => (S.streak.last === today() || S.streak.last === yesterday()) ? S.streak.count : 0;
  const xpToday = () => S.history[today()] || 0;
  function updatePills() {
    $('#streakPill').textContent = streakNow();
    $('#xpPill').textContent = xpToday() + '/' + S.dailyGoal;
  }

  // ---------- Phát âm (Web Speech API) ----------
  let voices = [];
  function loadVoices() { voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; }
  if (window.speechSynthesis) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function speak(text, lang) {
    if (!window.speechSynthesis) { toast('Trình duyệt không hỗ trợ đọc phát âm'); return; }
    lang = lang || META[L()].tts;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang; u.rate = 0.82;
    const norm = s => s.replace('_', '-').toLowerCase();
    const v = voices.find(v => norm(v.lang) === lang.toLowerCase()) || voices.find(v => norm(v.lang).startsWith(lang.slice(0, 2)));
    if (v) u.voice = v;
    else if (!speak._warned) { speak._warned = true; toast('Máy chưa có giọng đọc ' + META[L()].name + ' — hãy cài thêm trong cài đặt hệ thống'); }
    speechSynthesis.speak(u);
  }
  const spk = (text, cls = 'speak') => `<button class="${cls}" data-speak="${esc(text)}" title="Nghe phát âm">🔊</button>`;

  // ---------- Tiến độ ----------
  const taskKey = (unitId, i) => L() + '|' + unitId + '|' + i;
  const gramKey = (lvId, i) => L() + '|' + lvId + '|' + i;
  const cardId = w => L() + '|' + w;
  const card = w => S.srs[cardId(w)];

  function levelStats(lv) {
    let tDone = 0, tTotal = 0;
    lv.units.forEach(u => u.tasks.forEach((_, i) => { tTotal++; if (S.tasks[taskKey(u.id, i)]) tDone++; }));
    let learned = 0, mastered = 0;
    lv.vocab.forEach(v => { const c = card(v.w); if (c && c.b >= 1) learned++; if (c && c.b >= 4) mastered++; });
    let gDone = 0; lv.grammar.forEach((_, i) => { if (S.gram[gramKey(lv.id, i)]) gDone++; });
    const parts = [pct(tDone, tTotal)];
    if (lv.vocab.length) parts.push(pct(learned, lv.vocab.length));
    if (lv.grammar.length) parts.push(pct(gDone, lv.grammar.length));
    const overall = Math.round(parts.reduce((a, b) => a + b, 0) / parts.length);
    return { tDone, tTotal, learned, mastered, gDone, overall };
  }
  function currentLevel() {
    const lv = levels();
    return lv.find(l => levelStats(l).overall < 100) || lv[lv.length - 1];
  }
  function selLevel(filter) {
    const list = levels().filter(filter || (() => true));
    if (!list.length) return null;
    const id = S.sel[L()];
    let lv = list.find(l => l.id === id);
    if (!lv) { const c = currentLevel(); lv = list.find(l => c && l.id === c.id) || list[0]; }
    return lv;
  }
  function levelSelect(filter, current) {
    const list = levels().filter(filter || (() => true));
    return `<select class="select" id="lvSel">${list.map(l => `<option value="${esc(l.id)}" ${current && l.id === current.id ? 'selected' : ''}>${esc(l.name)} — ${esc(l.title)}</option>`).join('')}</select>`;
  }
  function bindLevelSelect() {
    const s = $('#lvSel');
    if (s) s.onchange = () => { S.sel[L()] = s.value; save(); render(); };
  }
  function allVocab() { return levels().flatMap(l => l.vocab.map(v => Object.assign({ _lv: l.id }, v))); }
  function dueCards(list) { const now = Date.now(); return list.filter(v => { const c = card(v.w); return c && c.d <= now; }); }

  // ---------- Router ----------
  const ROUTES = {
    home: { title: 'Tổng quan', fn: pageHome },
    roadmap: { title: 'Lộ trình học', fn: pageRoadmap },
    pronounce: { title: 'Phát âm', fn: pagePronounce },
    vocab: { title: 'Từ vựng', fn: pageVocab },
    flashcards: { title: 'Flashcard (lặp lại ngắt quãng)', fn: pageFlashcards },
    quiz: { title: 'Trắc nghiệm', fn: pageQuiz },
    grammar: { title: 'Ngữ pháp', fn: pageGrammar },
    kanji: { title: 'Kanji', fn: pageKanji },
    writing: { title: 'Luyện viết chữ', fn: pageWriting },
    stats: { title: 'Thống kê & cài đặt', fn: pageStats }
  };
  let pageKey = null; // xử lý phím tắt của trang hiện tại
  function route() {
    const parts = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
    return { name: ROUTES[parts[0]] ? parts[0] : 'home', arg: parts[1] ? decodeURIComponent(parts[1]) : null };
  }
  function render() {
    const r = route();
    if (r.name === 'kanji' && L() !== 'ja') { location.hash = '#/home'; return; }
    pageKey = null;
    if (window.speechSynthesis) speechSynthesis.cancel();
    document.body.classList.toggle('lang-ja', L() === 'ja');
    document.body.classList.toggle('dark', S.theme === 'dark');
    $$('#langSwitch button').forEach(b => b.classList.toggle('active', b.dataset.lang === L()));
    $$('#nav a').forEach(a => a.classList.toggle('active', a.dataset.route === r.name));
    $('#navKanji').style.display = L() === 'ja' ? '' : 'none';
    $('#navPron').textContent = META[L()].pron;
    $('#navPronIco').textContent = META[L()].pronIco;
    $('#pageTitle').textContent = r.name === 'pronounce' ? META[L()].pron : ROUTES[r.name].title;
    $('#themeBtn').textContent = S.theme === 'dark' ? '☀️ Sáng' : '🌙 Tối';
    const view = $('#view');
    if (!levels().length) {
      view.innerHTML = `<div class="card empty"><h2>⚠️ Chưa tải được dữ liệu</h2><p>Không tìm thấy dữ liệu cho ${esc(META[L()].name)}. Hãy kiểm tra thư mục <code>data/</code>.</p></div>`;
    } else {
      ROUTES[r.name].fn(view, r.arg);
    }
    updatePills();
    window.scrollTo(0, 0);
    $('#sidebar').classList.remove('open'); $('#overlay').classList.remove('show');
  }

  // =========================================================
  //  TRANG: TỔNG QUAN
  // =========================================================
  function pageHome(view) {
    const m = META[L()];
    const cur = currentLevel();
    const st = levelStats(cur);
    const all = allVocab();
    const learned = all.filter(v => { const c = card(v.w); return c && c.b >= 1; }).length;
    const due = dueCards(all).length;
    const goalP = Math.min(100, pct(xpToday(), S.dailyGoal));
    const nextTasks = [];
    cur.units.forEach(u => u.tasks.forEach((t, i) => { if (!S.tasks[taskKey(u.id, i)] && nextTasks.length < 5) nextTasks.push({ u, t, i }); }));
    const totalLevels = levels().length;
    const idx = levels().indexOf(cur);

    view.innerHTML = `
      <div class="hero">
        <div style="flex:1;min-width:240px">
          <p>${m.flag} ${esc(m.name)} • Giai đoạn ${idx + 1}/${totalLevels}</p>
          <h2>${esc(cur.name)} — ${esc(cur.title)}</h2>
          <p>${esc(cur.description || '')}</p>
          <div class="progress mt" style="background:rgba(255,255,255,.25);border:0"><div style="width:${st.overall}%;background:#fff"></div></div>
          <p class="small" style="margin-top:6px">Hoàn thành ${st.overall}% • Thời lượng gợi ý: ${esc(cur.duration || '')}</p>
          <div class="row mt">
            <a class="btn" href="#/roadmap">🗺️ Xem lộ trình</a>
            <a class="btn" href="#/flashcards">🃏 Học từ ngay</a>
          </div>
        </div>
        <div class="big-char">${m.char}</div>
      </div>

      <div class="grid g4 mt">
        <div class="card stat"><div class="ico">🔥</div><div><b>${streakNow()}</b><span>ngày liên tiếp</span></div></div>
        <div class="card stat"><div class="ico">📚</div><div><b>${learned}</b><span>từ đã học / ${all.length}</span></div></div>
        <div class="card stat"><div class="ico">⏰</div><div><b>${due}</b><span>thẻ cần ôn hôm nay</span></div></div>
        <div class="card stat"><div class="ico">⭐</div><div><b>${S.totalXp}</b><span>tổng điểm XP</span></div></div>
      </div>

      <div class="grid g2 mt">
        <div class="card">
          <div class="row between"><h3>🎯 Mục tiêu hôm nay</h3><a class="small" href="#/stats">Đổi mục tiêu</a></div>
          <div class="row" style="gap:22px">
            <div class="ring" style="--p:${goalP}"><div>${xpToday()}<small>/ ${S.dailyGoal} XP</small></div></div>
            <div style="flex:1;min-width:180px">
              <p class="small muted" style="margin-top:0">Gợi ý lịch học ~45–60 phút/ngày:</p>
              <ol class="goals small">
                <li>10' ôn flashcard đến hạn</li>
                <li>15' học 10 từ mới của ${esc(cur.name)}</li>
                <li>10' một điểm ngữ pháp + đặt câu</li>
                <li>10' luyện nghe / viết chữ</li>
                <li>5' trắc nghiệm củng cố</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row between"><h3>✅ Việc tiếp theo (${esc(cur.name)})</h3><a class="small" href="#/roadmap">Tất cả</a></div>
          ${nextTasks.length ? nextTasks.map(x => taskHtml(x.u, x.t, x.i, true)).join('') : '<p class="muted">Bạn đã hoàn thành mọi nhiệm vụ của cấp độ này! 🎉</p>'}
        </div>
      </div>

      <div class="section-title"><h2>Luyện tập nhanh</h2></div>
      <div class="grid g4 quick">
        <a class="card" href="#/flashcards"><span class="q-ico">🃏</span><b>Flashcard</b><span class="small muted">Lặp lại ngắt quãng, nhớ lâu</span></a>
        <a class="card" href="#/quiz"><span class="q-ico">🎯</span><b>Trắc nghiệm</b><span class="small muted">5 dạng bài: nghĩa, đọc, nghe, gõ…</span></a>
        <a class="card" href="#/pronounce"><span class="q-ico">${m.pronIco}</span><b>${esc(m.pron)}</b><span class="small muted">Nền tảng phát âm chuẩn</span></a>
        <a class="card" href="#/writing"><span class="q-ico">✍️</span><b>Luyện viết</b><span class="small muted">Tập viết chữ trên khung</span></a>
      </div>

      <div class="card mt">
        <h3>📈 Hoạt động 7 ngày qua</h3>
        ${weekChart(7)}
      </div>`;
    bindTasks(view);
  }

  function weekChart(n) {
    const days = [];
    for (let i = n - 1; i >= 0; i--) { const d = Date.now() - i * DAY; days.push({ k: dateKey(d), d: new Date(d) }); }
    const max = Math.max(S.dailyGoal, ...days.map(x => S.history[x.k] || 0));
    const wd = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    return `<div class="week-chart">${days.map(x => {
      const v = S.history[x.k] || 0;
      return `<div class="bar" title="${x.k}: ${v} XP"><span>${v || ''}</span><div style="height:${Math.max(2, v / max * 100)}%"></div><span>${n > 7 ? x.d.getDate() + '/' + (x.d.getMonth() + 1) : wd[x.d.getDay()]}</span></div>`;
    }).join('')}</div>`;
  }

  function taskHtml(u, t, i, showUnit) {
    const k = taskKey(u.id, i), done = !!S.tasks[k];
    return `<label class="task ${done ? 'checked' : ''}"><input type="checkbox" data-task="${esc(k)}" ${done ? 'checked' : ''}/><span>${esc(t)}${showUnit ? ` <span class="tag">${esc(u.title)}</span>` : ''}</span></label>`;
  }
  function bindTasks(root) {
    $$('input[data-task]', root).forEach(cb => cb.onchange = () => {
      if (cb.checked) { S.tasks[cb.dataset.task] = 1; addXp(5); } else { delete S.tasks[cb.dataset.task]; }
      save();
      cb.closest('.task').classList.toggle('checked', cb.checked);
      if (route().name === 'roadmap') refreshRoadmapProgress();
    });
  }

  // =========================================================
  //  TRANG: LỘ TRÌNH
  // =========================================================
  function pageRoadmap(view, openId) {
    const m = META[L()];
    const cur = currentLevel();
    const lvs = levels();
    const totVocab = lvs.reduce((a, l) => a + l.vocab.length, 0);
    view.innerHTML = `
      <div class="card">
        <h2>${m.flag} Lộ trình ${esc(m.name)} từ con số 0 đến ${m.exam === 'HSK' ? 'HSK 6' : 'JLPT N1'}</h2>
        <p class="muted" style="margin:0">Lộ trình gồm <b>${lvs.length} giai đoạn</b>, mỗi giai đoạn chia thành các tuần học với nhiệm vụ cụ thể.
        Đánh dấu ✔ khi hoàn thành nhiệm vụ — tiến độ được lưu tự động trên trình duyệt. Tổng cộng <b>${totVocab}</b> từ vựng trọng tâm có sẵn để luyện.</p>
        <div style="overflow-x:auto" class="mt">
          <table class="vocab-table">
            <thead><tr><th>Giai đoạn</th><th>Nội dung</th><th class="hide-sm">Thời lượng</th><th class="hide-sm">Từ / Ngữ pháp${L() === 'ja' ? ' / Kanji' : ''}</th><th>Tiến độ</th></tr></thead>
            <tbody>${lvs.map(l => { const s = levelStats(l); return `<tr>
              <td><b style="color:${esc(l.color || 'var(--primary)')}">${esc(l.name)}</b></td>
              <td>${esc(l.title)}</td><td class="hide-sm">${esc(l.duration || '')}</td>
              <td class="hide-sm">${l.vocab.length} / ${l.grammar.length}${L() === 'ja' ? ' / ' + l.kanji.length : ''}</td>
              <td style="min-width:110px"><div class="progress" data-lvbar="${esc(l.id)}"><div style="width:${s.overall}%"></div></div><span class="small muted" data-lvpct="${esc(l.id)}">${s.overall}%</span></td></tr>`; }).join('')}</tbody>
          </table>
        </div>
      </div>

      <div class="timeline mt2">
        ${lvs.map(l => {
          const s = levelStats(l);
          const state = s.overall >= 100 ? 'done' : (l.id === cur.id ? 'current' : '');
          const open = openId ? openId === l.id : l.id === cur.id;
          return `<div class="tl-item ${state} ${open ? 'open' : ''}" id="lv-${esc(l.id)}">
            <span class="tl-dot"></span>
            <div class="card">
              <div class="tl-head" data-toggle>
                <div class="tl-badge" style="background:${esc(l.color || 'var(--primary)')}">${esc(l.name)}</div>
                <div class="tl-info">
                  <h3>${esc(l.title)} ${state === 'current' ? '<span class="tag primary">Đang học</span>' : ''}${state === 'done' ? '<span class="tag" style="color:var(--ok)">Hoàn thành</span>' : ''}</h3>
                  <div class="tl-meta">
                    <span class="tag">⏱ ${esc(l.duration || '')}</span>
                    <span class="tag">📚 ${l.vocab.length} từ</span>
                    <span class="tag">📝 ${l.grammar.length} ngữ pháp</span>
                    ${l.kanji.length ? `<span class="tag">🈶 ${l.kanji.length} kanji</span>` : ''}
                    <span class="tag">✅ <span data-lvtask="${esc(l.id)}">${s.tDone}/${s.tTotal}</span> nhiệm vụ</span>
                  </div>
                  <div class="progress"><div data-lvbar2="${esc(l.id)}" style="width:${s.overall}%"></div></div>
                </div>
                <span class="chev">▾</span>
              </div>
              <div class="tl-body">
                <p>${esc(l.description || '')}</p>
                ${l.goals.length ? `<h4>🎯 Mục tiêu đầu ra</h4><ul class="goals">${l.goals.map(g => `<li>${esc(g)}</li>`).join('')}</ul>` : ''}
                <div class="row mt">
                  ${l.vocab.length ? `<a class="btn sm" href="#/vocab" data-golv="${esc(l.id)}">📚 Từ vựng</a><a class="btn sm" href="#/flashcards" data-golv="${esc(l.id)}">🃏 Flashcard</a><a class="btn sm" href="#/quiz" data-golv="${esc(l.id)}">🎯 Trắc nghiệm</a>` : ''}
                  ${l.grammar.length ? `<a class="btn sm" href="#/grammar" data-golv="${esc(l.id)}">📝 Ngữ pháp</a>` : ''}
                  ${l.kanji.length ? `<a class="btn sm" href="#/kanji" data-golv="${esc(l.id)}">🈶 Kanji</a>` : ''}
                  ${(l.id === 'pinyin' || l.id === 'kana') ? `<a class="btn sm primary" href="#/pronounce">${META[L()].pronIco} ${esc(META[L()].pron)}</a>` : ''}
                  <a class="btn sm" href="#/writing" data-golv="${esc(l.id)}">✍️ Luyện viết</a>
                </div>
                <h4 class="mt">🗓 Kế hoạch theo tuần</h4>
                ${l.units.map(u => {
                  const done = u.tasks.filter((_, i) => S.tasks[taskKey(u.id, i)]).length;
                  return `<div class="unit"><div class="unit-head"><h4>${esc(u.title)}</h4><span class="tag" data-unit="${esc(u.id)}">${done}/${u.tasks.length}</span></div>
                    ${u.desc ? `<div class="small muted">${esc(u.desc)}</div>` : ''}
                    ${u.tasks.map((t, i) => taskHtml(u, t, i)).join('')}</div>`;
                }).join('')}
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>

      <div class="card mt">
        <h3>💡 Nguyên tắc học hiệu quả</h3>
        <ul class="goals">
          <li><b>Đều đặn hơn dồn dập:</b> 45 phút mỗi ngày tốt hơn 5 tiếng vào cuối tuần.</li>
          <li><b>Ôn đúng lúc:</b> luôn làm hết thẻ flashcard đến hạn trước khi học từ mới.</li>
          <li><b>Học từ trong câu:</b> đọc to câu ví dụ, tự đặt 1–2 câu với từ mới.</li>
          <li><b>Nghe – nói song song:</b> bấm 🔊 và nhại lại (shadowing) ngay từ giai đoạn đầu.</li>
          <li><b>Thi thử định kỳ:</b> cuối mỗi giai đoạn làm một đề ${m.exam} thật để đo năng lực.</li>
        </ul>
      </div>`;

    $$('[data-toggle]', view).forEach(h => h.onclick = () => h.closest('.tl-item').classList.toggle('open'));
    $$('[data-golv]', view).forEach(a => a.addEventListener('click', () => { S.sel[L()] = a.dataset.golv; save(); }));
    bindTasks(view);
    if (openId) { const el = document.getElementById('lv-' + openId); if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50); }
  }
  function refreshRoadmapProgress() {
    levels().forEach(l => {
      const s = levelStats(l);
      $$(`[data-lvbar="${l.id}"] > div`).forEach(d => d.style.width = s.overall + '%');
      $$(`[data-lvbar2="${l.id}"]`).forEach(d => d.style.width = s.overall + '%');
      $$(`[data-lvpct="${l.id}"]`).forEach(d => d.textContent = s.overall + '%');
      $$(`[data-lvtask="${l.id}"]`).forEach(d => d.textContent = s.tDone + '/' + s.tTotal);
      l.units.forEach(u => {
        const done = u.tasks.filter((_, i) => S.tasks[taskKey(u.id, i)]).length;
        $$(`[data-unit="${u.id}"]`).forEach(d => d.textContent = done + '/' + u.tasks.length);
      });
    });
  }

  // =========================================================
  //  TRANG: PHÁT ÂM (Pinyin / Kana)
  // =========================================================
  let pronTab = { zh: 'tones', ja: 'hiragana' };
  function pagePronounce(view) {
    if (L() === 'zh') return pronZh(view);
    return pronJa(view);
  }

  const TONE_SETS = [
    [['mā', '妈'], ['má', '麻'], ['mǎ', '马'], ['mà', '骂']],
    [['bā', '八'], ['bá', '拔'], ['bǎ', '把'], ['bà', '爸']],
    [['yī', '一'], ['yí', '姨'], ['yǐ', '椅'], ['yì', '亿']],
    [['tī', '踢'], ['tí', '提'], ['tǐ', '体'], ['tì', '替']],
    [['fēn', '分'], ['fén', '坟'], ['fěn', '粉'], ['fèn', '份']],
    [['qī', '七'], ['qí', '骑'], ['qǐ', '起'], ['qì', '气']],
    [['shū', '书'], ['shú', '熟'], ['shǔ', '鼠'], ['shù', '树']],
    [['tāng', '汤'], ['táng', '糖'], ['tǎng', '躺'], ['tàng', '烫']]
  ];

  function pronZh(view) {
    const P = D.zh.pinyin || {};
    const tab = pronTab.zh;
    const tabs = [['tones', 'Thanh điệu'], ['initials', 'Thanh mẫu'], ['finals', 'Vận mẫu'], ['rules', 'Quy tắc'], ['drill', '🎧 Luyện nghe thanh điệu']];
    let body = '';
    if (tab === 'tones') {
      body = `<div class="grid g3">${(P.tones || []).map(t => `
        <div class="card tone-card"><div class="mark">${esc(t.mark)}</div><h3>${esc(t.name)}</h3><p class="small muted">${esc(t.desc)}</p>
        <div class="row" style="justify-content:center"><span class="cjk">${esc(t.ex)}</span>${spk((t.ex || '').replace(/[^\u4e00-\u9fff]/g, '') || t.mark)}</div></div>`).join('')}</div>`;
    } else if (tab === 'initials' || tab === 'finals') {
      const list = P[tab] || [];
      body = `<p class="muted">Bấm vào từng ô để nghe ví dụ. ${tab === 'initials' ? 'Thanh mẫu là phụ âm đầu của âm tiết.' : 'Vận mẫu là phần vần đứng sau thanh mẫu.'}</p>
        <div class="py-grid">${list.map(x => {
          const han = (x.ex || '').replace(/[^\u4e00-\u9fff]/g, '');
          return `<div class="py" data-speak="${esc(han || x.p)}"><b>${esc(x.p)}</b> ${x.ipa ? `<span class="small muted">${esc(x.ipa)}</span>` : ''}<div class="small">${esc(x.tip || '')}</div><div class="small cjk muted">${esc(x.ex || '')}</div></div>`;
        }).join('')}</div>`;
    } else if (tab === 'rules') {
      body = (P.rules || []).map(r => `<div class="card gram mb"><h3>${esc(r.title)}</h3><p>${esc(r.desc)}</p>${r.ex ? `<div class="pattern">${esc(r.ex)}</div>` : ''}</div>`).join('');
    } else {
      body = `<div class="quiz-wrap" id="toneDrill"></div>`;
    }
    view.innerHTML = `<div class="tabs">${tabs.map(t => `<button data-tab="${t[0]}" class="${t[0] === tab ? 'active' : ''}">${t[1]}</button>`).join('')}</div>${body || '<div class="empty">Chưa có dữ liệu.</div>'}`;
    $$('[data-tab]', view).forEach(b => b.onclick = () => { pronTab.zh = b.dataset.tab; render(); });
    if (tab === 'drill') toneDrill($('#toneDrill'));
  }

  function toneDrill(box) {
    let score = 0, total = 0;
    const next = () => {
      const set = TONE_SETS[Math.floor(Math.random() * TONE_SETS.length)];
      const ans = Math.floor(Math.random() * 4);
      box.innerHTML = `<div class="card">
        <div class="row between"><span class="muted">Nghe và chọn thanh điệu đúng</span><span class="tag primary">Đúng ${score}/${total}</span></div>
        <div class="q-prompt"><button class="btn primary" id="play">🔊 Nghe lại</button></div>
        <div class="options">${set.map((s, i) => `<button class="option" data-i="${i}"><span class="key">${i + 1}</span>${esc(s[0])} <span class="cjk muted">${esc(s[1])}</span></button>`).join('')}</div>
        <div class="feedback" id="fb"></div></div>`;
      const play = () => speak(set[ans][1]);
      $('#play', box).onclick = play; setTimeout(play, 250);
      let answered = false;
      const choose = i => {
        if (answered) return; answered = true; total++;
        const ok = i === ans; if (ok) { score++; addXp(1); }
        $$('.option', box).forEach((b, j) => { b.disabled = true; if (j === ans) b.classList.add('correct'); else if (j === i) b.classList.add('wrong'); });
        const fb = $('#fb', box); fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
        fb.innerHTML = `${ok ? '✅ Chính xác!' : '❌ Chưa đúng.'} Đáp án: <b>${esc(set[ans][0])}</b> <span class="cjk">${esc(set[ans][1])}</span> <button class="btn sm primary" id="nx" style="margin-left:8px">Tiếp ↵</button>`;
        $('#nx', box).onclick = next;
      };
      $$('.option', box).forEach(b => b.onclick = () => choose(+b.dataset.i));
      pageKey = e => { if (e.key >= '1' && e.key <= '4') choose(+e.key - 1); else if (e.key === 'Enter' && answered) next(); else if (e.key === ' ') { e.preventDefault(); play(); } };
    };
    next();
  }

  function kanaChart(set, rows, cols) {
    return `<div class="kana-grid ${cols === 3 ? 'c3' : ''}">${rows.flat().map(c => c ? `<div class="kana" data-speak="${esc(c.k)}"><div class="k">${esc(c.k)}</div><div class="r">${esc(c.r)}</div></div>` : '<div class="kana blank"></div>').join('')}</div>`;
  }

  function pronJa(view) {
    const K = D.ja.kana || {};
    const tab = pronTab.ja;
    const tabs = [['hiragana', 'Hiragana ひらがな'], ['katakana', 'Katakana カタカナ'], ['drill', '🎯 Luyện nhận mặt chữ'], ['tips', 'Mẹo phát âm']];
    let body = '';
    if (tab === 'hiragana' || tab === 'katakana') {
      const t = K[tab] || {};
      body = `<p class="muted">Bấm vào chữ để nghe. Học theo thứ tự: bảng cơ bản → âm đục/bán đục → âm ghép.</p>
        <div class="grid g2">
          <div class="card"><h3>Bảng cơ bản (gojūon)</h3>${kanaChart(tab, t.basic || [], 5)}</div>
          <div>
            <div class="card"><h3>Âm đục & bán đục (dakuten ゛/ handakuten ゜)</h3>${kanaChart(tab, t.dakuten || [], 5)}</div>
            <div class="card mt"><h3>Âm ghép (yōon)</h3>${kanaChart(tab, t.youon || [], 3)}</div>
          </div>
        </div>`;
    } else if (tab === 'drill') {
      body = `<div class="card mb"><div class="row">
          <b>Bộ chữ:</b>
          <label><input type="checkbox" data-kset="hiragana" ${kanaOpt.hiragana ? 'checked' : ''}/> Hiragana</label>
          <label><input type="checkbox" data-kset="katakana" ${kanaOpt.katakana ? 'checked' : ''}/> Katakana</label>
          <span class="muted">|</span>
          <label><input type="checkbox" data-kset="basic" ${kanaOpt.basic ? 'checked' : ''}/> Cơ bản</label>
          <label><input type="checkbox" data-kset="dakuten" ${kanaOpt.dakuten ? 'checked' : ''}/> Âm đục</label>
          <label><input type="checkbox" data-kset="youon" ${kanaOpt.youon ? 'checked' : ''}/> Âm ghép</label>
        </div></div><div class="quiz-wrap" id="kanaDrill"></div>`;
    } else {
      body = `<div class="grid g2">
        <div class="card gram"><h3>Trường âm (âm dài)</h3><p>Nguyên âm kéo dài gấp đôi: おばさん (cô) ≠ おばあさん (bà). Katakana dùng dấu ー: コーヒー.</p></div>
        <div class="card gram"><h3>Âm ngắt (っ / ッ nhỏ)</h3><p>Dừng một nhịp trước phụ âm sau: きって (tem) ≠ きて (hãy đến).</p></div>
        <div class="card gram"><h3>Âm mũi ん</h3><p>Đọc như "n", "m" hoặc "ng" tuỳ âm phía sau và chiếm trọn một nhịp: ほん, さんぽ.</p></div>
        <div class="card gram"><h3>Trợ từ は・へ・を</h3><p>Khi làm trợ từ: は đọc "wa", へ đọc "e", を đọc "o".</p></div>
        <div class="card gram"><h3>Âm し・ち・つ・ふ</h3><p>Đọc là shi, chi, tsu, fu — không phải "si, ti, tu, hu".</p></div>
        <div class="card gram"><h3>Nhịp (mora)</h3><p>Mỗi kana là một nhịp đều nhau: が・っ・こ・う = 4 nhịp. Giữ nhịp đều giúp nói tự nhiên.</p></div>
      </div>`;
    }
    view.innerHTML = `<div class="tabs">${tabs.map(t => `<button data-tab="${t[0]}" class="${t[0] === tab ? 'active' : ''}">${t[1]}</button>`).join('')}</div>${body}`;
    $$('[data-tab]', view).forEach(b => b.onclick = () => { pronTab.ja = b.dataset.tab; render(); });
    if (tab === 'drill') {
      $$('[data-kset]', view).forEach(cb => cb.onchange = () => { kanaOpt[cb.dataset.kset] = cb.checked; kanaDrill($('#kanaDrill')); });
      kanaDrill($('#kanaDrill'));
    }
  }
  const kanaOpt = { hiragana: true, katakana: false, basic: true, dakuten: false, youon: false };
  function kanaPool() {
    const K = D.ja.kana || {}; const pool = [];
    ['hiragana', 'katakana'].forEach(s => { if (!kanaOpt[s] || !K[s]) return; ['basic', 'dakuten', 'youon'].forEach(g => { if (kanaOpt[g] && K[s][g]) K[s][g].flat().forEach(c => c && pool.push(c)); }); });
    return pool;
  }
  function kanaDrill(box) {
    const pool = kanaPool();
    if (pool.length < 4) { box.innerHTML = '<div class="card empty">Hãy chọn ít nhất một bộ chữ và một nhóm.</div>'; pageKey = null; return; }
    let score = 0, total = 0;
    const next = () => {
      const ans = pool[Math.floor(Math.random() * pool.length)];
      const opts = shuffle([ans, ...shuffle(pool.filter(c => c.r !== ans.r)).slice(0, 3)]);
      box.innerHTML = `<div class="card">
        <div class="row between"><span class="muted">Chữ này đọc là gì?</span><span class="tag primary">Đúng ${score}/${total}</span></div>
        <div class="q-prompt"><div class="cjk" style="font-size:96px">${esc(ans.k)}</div></div>
        <div class="options">${opts.map((o, i) => `<button class="option" data-i="${i}"><span class="key">${i + 1}</span>${esc(o.r)}</button>`).join('')}</div>
        <div class="feedback" id="fb"></div></div>`;
      let answered = false;
      const choose = i => {
        if (answered) return; answered = true; total++;
        const ok = opts[i].r === ans.r; if (ok) { score++; addXp(1); }
        speak(ans.k, 'ja-JP');
        $$('.option', box).forEach((b, j) => { b.disabled = true; if (opts[j].r === ans.r) b.classList.add('correct'); else if (j === i) b.classList.add('wrong'); });
        const fb = $('#fb', box); fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
        fb.innerHTML = `${ok ? '✅ Chính xác!' : '❌ Chưa đúng.'} <span class="cjk">${esc(ans.k)}</span> = <b>${esc(ans.r)}</b> <button class="btn sm primary" id="nx" style="margin-left:8px">Tiếp ↵</button>`;
        $('#nx', box).onclick = next;
        if (ok) setTimeout(() => { if ($('#nx', box)) next(); }, 900);
      };
      $$('.option', box).forEach(b => b.onclick = () => choose(+b.dataset.i));
      pageKey = e => { if (e.key >= '1' && e.key <= '4') choose(+e.key - 1); else if (e.key === 'Enter' && answered) next(); };
    };
    next();
  }

  // =========================================================
  //  TRANG: TỪ VỰNG
  // =========================================================
  let vocabFilter = { q: '', topic: '' };
  function srsBadge(w) {
    const c = card(w);
    if (!c) return '<span class="tag">Mới</span>';
    if (c.b >= 4) return '<span class="tag" style="color:var(--ok)">Đã thuộc</span>';
    if (c.b >= 1) return '<span class="tag primary">Đang học</span>';
    return '<span class="tag" style="color:var(--bad)">Cần ôn</span>';
  }
  function readingCell(v) {
    if (L() === 'zh') return `<div>${esc(v.r)}</div>${v.hv ? `<div class="small muted">${esc(v.hv)}</div>` : ''}`;
    return `<div class="cjk">${v.r && v.r !== v.w ? esc(v.r) : ''}</div><div class="small muted">${esc(v.ro || '')}</div>`;
  }
  function exHtml(v) {
    if (!v.ex) return '';
    return `<div class="ex"><span class="cjk">${esc(v.ex)}</span> ${spk(v.ex, 'speak" style="width:24px;height:24px;font-size:11px')}${v.exr ? `<br>${esc(v.exr)}` : ''}${v.exm ? `<br><i>${esc(v.exm)}</i>` : ''}</div>`;
  }
  function pageVocab(view) {
    const lv = selLevel(l => l.vocab.length);
    if (!lv) { view.innerHTML = '<div class="card empty">Chưa có từ vựng.</div>'; return; }
    const topics = [...new Set(lv.vocab.map(v => v.t).filter(Boolean))];
    if (vocabFilter.topic && !topics.includes(vocabFilter.topic)) vocabFilter.topic = '';
    const st = levelStats(lv);
    view.innerHTML = `
      <div class="card">
        <div class="row between">
          <div class="row">${levelSelect(l => l.vocab.length, lv)}
            <input class="input" id="vq" placeholder="🔍 Tìm từ, cách đọc, nghĩa…" value="${esc(vocabFilter.q)}" style="min-width:230px"/></div>
          <div class="row"><a class="btn primary" href="#/flashcards">🃏 Học flashcard</a><a class="btn" href="#/quiz">🎯 Kiểm tra</a></div>
        </div>
        <div class="row mt small"><span class="muted">Đã học ${st.learned}/${lv.vocab.length} • Đã thuộc ${st.mastered}</span></div>
        <div class="progress" style="margin-top:6px"><div style="width:${pct(st.learned, lv.vocab.length)}%"></div></div>
        ${topics.length > 1 ? `<div class="tabs mt" id="topics"><button data-t="" class="${!vocabFilter.topic ? 'active' : ''}">Tất cả (${lv.vocab.length})</button>${topics.map(t => `<button data-t="${esc(t)}" class="${vocabFilter.topic === t ? 'active' : ''}">${esc(t)}</button>`).join('')}</div>` : ''}
      </div>
      <div class="card mt" style="padding:6px 6px;overflow-x:auto"><table class="vocab-table"><thead><tr><th></th><th>Từ</th><th>${META[L()].reading}</th><th>Nghĩa</th><th class="hide-sm">Trạng thái</th></tr></thead><tbody id="vbody"></tbody></table></div>`;
    const draw = () => {
      const q = vocabFilter.q.trim().toLowerCase();
      const qn = normLatin(q);
      const list = lv.vocab.filter(v => (!vocabFilter.topic || v.t === vocabFilter.topic) &&
        (!q || [v.w, v.r, v.m, v.hv, v.ro].some(x => x && String(x).toLowerCase().includes(q)) || (qn && [v.r, v.ro].some(x => x && normLatin(x).includes(qn)))));
      $('#vbody').innerHTML = list.length ? list.map(v => `<tr>
        <td style="width:44px">${spk(v.w)}</td>
        <td class="w">${esc(v.w)}</td>
        <td>${readingCell(v)}</td>
        <td><b>${esc(v.m)}</b>${v.t ? ` <span class="tag hide-sm">${esc(v.t)}</span>` : ''}${exHtml(v)}</td>
        <td class="hide-sm">${srsBadge(v.w)}</td></tr>`).join('') : '<tr><td colspan="5" class="empty">Không tìm thấy từ phù hợp.</td></tr>';
    };
    draw();
    bindLevelSelect();
    $('#vq').oninput = e => { vocabFilter.q = e.target.value; draw(); };
    $$('#topics button').forEach(b => b.onclick = () => { vocabFilter.topic = b.dataset.t; $$('#topics button').forEach(x => x.classList.toggle('active', x === b)); draw(); });
  }

  // =========================================================
  //  TRANG: FLASHCARD (SRS - hệ Leitner)
  // =========================================================
  let fcOpt = { reverse: false };
  function pageFlashcards(view) {
    const lv = selLevel(l => l.vocab.length);
    if (!lv) { view.innerHTML = '<div class="card empty">Chưa có từ vựng.</div>'; return; }
    const now = Date.now();
    const dueLv = dueCards(lv.vocab);
    const newLv = lv.vocab.filter(v => !card(v.w));
    const dueAll = dueCards(allVocab());
    const boxes = [0, 0, 0, 0, 0, 0, 0];
    lv.vocab.forEach(v => { const c = card(v.w); if (c) boxes[c.b]++; });
    view.innerHTML = `
      <div class="card">
        <div class="row between">
          <div class="row">${levelSelect(l => l.vocab.length, lv)}
            <label class="row small"><input type="checkbox" id="rev" ${fcOpt.reverse ? 'checked' : ''}/> Đảo chiều (nghĩa → từ)</label>
            <label class="row small">Từ mới/lượt: <select class="select" id="npn">${[5, 10, 15, 20, 30].map(n => `<option ${S.newPerSession === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
          </div>
        </div>
        <div class="grid g3 mt">
          <div class="stat"><div class="ico">⏰</div><div><b>${dueLv.length}</b><span>thẻ đến hạn (cấp này)</span></div></div>
          <div class="stat"><div class="ico">🆕</div><div><b>${newLv.length}</b><span>từ chưa học</span></div></div>
          <div class="stat"><div class="ico">🌐</div><div><b>${dueAll.length}</b><span>thẻ đến hạn (mọi cấp)</span></div></div>
        </div>
        <div class="row mt">
          <button class="btn primary" id="startLv" ${dueLv.length + newLv.length ? '' : 'disabled'}>▶ Học ${esc(lv.name)} (${dueLv.length} ôn + ${Math.min(newLv.length, S.newPerSession)} mới)</button>
          <button class="btn" id="startAll" ${dueAll.length ? '' : 'disabled'}>🔁 Ôn tất cả thẻ đến hạn</button>
          <button class="btn ghost" id="cram">🎲 Ôn tự do 20 thẻ</button>
        </div>
        <details class="mt small"><summary class="muted" style="cursor:pointer">Flashcard hoạt động thế nào?</summary>
          <p class="muted">Mỗi thẻ nằm trong một "hộp" từ 0 đến 6. Trả lời <b>Nhớ</b> → thẻ lên hộp và được hẹn ôn lại sau 1, 2, 4, 7, 15, 30 ngày. <b>Quên</b> → thẻ quay về hộp 0 và xuất hiện lại ngay trong lượt. Thẻ ở hộp ≥ 4 được tính là <b>đã thuộc</b>.
          Phím tắt: <b>Space</b> lật thẻ, <b>1–4</b> chấm điểm, <b>S</b> nghe phát âm.</p>
          <div class="row">${boxes.map((n, i) => `<span class="tag">Hộp ${i}: ${n}</span>`).join('')}</div>
        </details>
      </div>
      <div id="fcArea" class="mt"></div>`;
    bindLevelSelect();
    $('#rev').onchange = e => { fcOpt.reverse = e.target.checked; };
    $('#npn').onchange = e => { S.newPerSession = +e.target.value; save(); render(); };
    $('#startLv').onclick = () => runFlashcards(shuffle(dueLv).concat(newLv.slice(0, S.newPerSession)), false);
    $('#startAll').onclick = () => runFlashcards(shuffle(dueAll), false);
    $('#cram').onclick = () => runFlashcards(shuffle(lv.vocab).slice(0, 20), true);
    void now;
  }

  function rateCard(v, rating, cram) {
    const id = cardId(v.w);
    const isNew = !S.srs[id];
    const c = S.srs[id] || { b: 0, d: 0, n: 0, lapses: 0 };
    if (!cram || isNew || rating === 'again') {
      if (rating === 'again') { c.b = 0; c.d = Date.now(); c.lapses++; }
      else if (rating === 'hard') { c.b = Math.max(1, c.b); c.d = Date.now() + Math.max(0.5, SRS_INT[c.b] / 2) * DAY; }
      else if (rating === 'good') { c.b = Math.min(6, c.b + 1); c.d = Date.now() + SRS_INT[c.b] * DAY; }
      else { c.b = Math.min(6, c.b + 2); c.d = Date.now() + SRS_INT[c.b] * DAY; }
    }
    c.n++;
    S.srs[id] = c;
    addXp(isNew ? 3 : (rating === 'again' ? 1 : 2));
  }

  function runFlashcards(queue, cram) {
    const area = $('#fcArea');
    if (!queue.length) { area.innerHTML = '<div class="card empty">Không có thẻ nào để học. 🎉</div>'; return; }
    queue = queue.slice();
    let done = 0, again = 0;
    const totalStart = queue.length;
    const show = () => {
      if (!queue.length) {
        area.innerHTML = `<div class="card fc-wrap" style="text-align:center"><div class="result-big">🎉</div><h2>Hoàn thành lượt học!</h2>
          <p class="muted">Đã ôn ${done} lượt thẻ • ${again} lần quên. Hãy quay lại khi có thẻ đến hạn nhé.</p>
          <div class="row" style="justify-content:center"><button class="btn primary" id="back">Quay lại</button><a class="btn" href="#/quiz">🎯 Làm trắc nghiệm</a></div></div>`;
        $('#back').onclick = render; pageKey = null; return;
      }
      const v = queue[0];
      const c = card(v.w);
      const rev = fcOpt.reverse;
      const front = rev
        ? `<div class="fc-mean">${esc(v.m)}</div>${v.t ? `<span class="tag">${esc(v.t)}</span>` : ''}`
        : `<div class="fc-word">${esc(v.w)}</div>`;
      const back = `<div class="fc-word" style="font-size:52px">${esc(v.w)}</div>
          <div class="fc-reading">${esc(L() === 'zh' ? v.r : (v.r !== v.w ? v.r : ''))} ${L() === 'ja' && v.ro ? `<span class="small muted">(${esc(v.ro)})</span>` : ''}</div>
          ${v.hv ? `<div class="small muted">Hán Việt: ${esc(v.hv)}</div>` : ''}
          <div class="fc-mean">${esc(v.m)}</div>
          ${v.ex ? `<div class="small"><span class="cjk">${esc(v.ex)}</span>${v.exm ? `<br><i class="muted">${esc(v.exm)}</i>` : ''}</div>` : ''}`;
      area.innerHTML = `<div class="fc-wrap">
        <div class="row between small muted"><span>${cram ? 'Ôn tự do' : 'Lượt học'} • còn ${queue.length} thẻ</span><span>${c ? 'Hộp ' + c.b : '🆕 Từ mới'}</span></div>
        <div class="progress" style="margin-top:6px"><div style="width:${pct(totalStart - Math.min(queue.length, totalStart), totalStart)}%"></div></div>
        <div class="flashcard" id="fc"><div class="fc-inner">
          <div class="fc-face">${front}<span class="fc-hint">Bấm hoặc nhấn Space để lật</span></div>
          <div class="fc-face fc-back">${back}</div>
        </div></div>
        <div class="row" style="justify-content:center;margin-bottom:12px">${spk(v.w)}<span class="small muted">Nghe phát âm (S)</span></div>
        <div class="fc-actions" id="acts" style="visibility:hidden">
          <button class="btn again" data-r="again">😵 Quên<small>1 • ngay</small></button>
          <button class="btn hard" data-r="hard">😐 Khó<small>2</small></button>
          <button class="btn good" data-r="good">🙂 Nhớ<small>3 • ${SRS_INT[Math.min(6, (c ? c.b : 0) + 1)]} ngày</small></button>
          <button class="btn easy" data-r="easy">😎 Dễ<small>4 • ${SRS_INT[Math.min(6, (c ? c.b : 0) + 2)]} ngày</small></button>
        </div></div>`;
      let flipped = false;
      const flip = () => { flipped = !flipped; $('#fc').classList.toggle('flipped', flipped); if (flipped) { $('#acts').style.visibility = 'visible'; if (!rev) speak(v.w); } };
      if (rev) { /* không đọc trước khi lật */ } else setTimeout(() => speak(v.w), 200);
      $('#fc').onclick = flip;
      const rate = r => {
        if (!flipped) return;
        rateCard(v, r, cram); done++;
        queue.shift();
        if (r === 'again') { again++; queue.splice(Math.min(queue.length, 3), 0, v); }
        show();
      };
      $$('#acts [data-r]').forEach(b => b.onclick = () => rate(b.dataset.r));
      pageKey = e => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
        else if (e.key === 's' || e.key === 'S') speak(v.w);
        else if (flipped && ['1', '2', '3', '4'].includes(e.key)) rate(['again', 'hard', 'good', 'easy'][+e.key - 1]);
      };
    };
    show();
    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // =========================================================
  //  TRANG: TRẮC NGHIỆM
  // =========================================================
  let quizOpt = { mode: 'meaning', n: 10 };
  const QUIZ_MODES = () => {
    const m = [
      ['meaning', '🈯 Từ → Nghĩa', 'Nhìn từ, chọn nghĩa tiếng Việt'],
      ['reverse', '🇻🇳 Nghĩa → Từ', 'Nhìn nghĩa, chọn chữ đúng'],
      ['reading', '🔤 Cách đọc', L() === 'zh' ? 'Chọn pinyin đúng' : 'Chọn cách đọc kana đúng'],
      ['listen', '🎧 Nghe', 'Nghe phát âm, chọn từ đúng'],
      ['type', '⌨️ Gõ cách đọc', L() === 'zh' ? 'Gõ pinyin (không cần dấu)' : 'Gõ hiragana hoặc romaji']
    ];
    if (L() === 'ja') m.push(['kanji', '🈶 Kanji', 'Nhìn kanji, chọn âm Hán Việt & nghĩa']);
    return m;
  };
  function normLatin(s) {
    return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/v/g, 'u').replace(/[^a-z]/g, '')
      .replace(/ou/g, 'o').replace(/oo/g, 'o').replace(/uu/g, 'u').replace(/aa/g, 'a').replace(/ii/g, 'i').replace(/ee/g, 'e');
  }
  const toHira = s => String(s || '').replace(/[\u30a1-\u30f6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60)).replace(/[\s・。、]/g, '');

  function pageQuiz(view) {
    const isKanji = quizOpt.mode === 'kanji';
    const lv = selLevel(isKanji ? (l => l.kanji.length >= 4) : (l => l.vocab.length >= 4));
    const modes = QUIZ_MODES();
    if (!modes.find(m => m[0] === quizOpt.mode)) quizOpt.mode = 'meaning';
    view.innerHTML = `
      <div class="card">
        <div class="row between">
          <div class="row">${lv ? levelSelect(isKanji ? (l => l.kanji.length >= 4) : (l => l.vocab.length >= 4), lv) : ''}
            <label class="row small">Số câu: <select class="select" id="qn">${[10, 20, 30].map(n => `<option ${quizOpt.n === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label></div>
          <button class="btn primary" id="qstart" ${lv ? '' : 'disabled'}>▶ Bắt đầu</button>
        </div>
        <div class="grid g3 mt">${modes.map(m => `<div class="card ${quizOpt.mode === m[0] ? '' : ''}" data-mode="${m[0]}" style="cursor:pointer;padding:14px;${quizOpt.mode === m[0] ? 'border-color:var(--primary);background:var(--primary-soft)' : ''}"><b>${m[1]}</b><div class="small muted">${m[2]}</div></div>`).join('')}</div>
      </div>
      <div id="qArea" class="mt"></div>`;
    bindLevelSelect();
    $$('[data-mode]', view).forEach(c => c.onclick = () => { quizOpt.mode = c.dataset.mode; render(); });
    $('#qn').onchange = e => { quizOpt.n = +e.target.value; };
    if (lv) $('#qstart').onclick = () => runQuiz(lv);
  }

  function runQuiz(lv) {
    const area = $('#qArea');
    const mode = quizOpt.mode;
    let pool;
    if (mode === 'kanji') pool = lv.kanji.map(k => ({ w: k.k, m: (k.hv ? k.hv + ' — ' : '') + k.m, r: [k.on, k.kun].filter(Boolean).join(' / '), _k: k }));
    else pool = lv.vocab.slice();
    if (mode === 'reading' && L() === 'ja') { const f = pool.filter(v => v.r && v.r !== v.w); if (f.length >= 4) pool = f; }
    const distractPool = mode === 'kanji' ? pool : (pool.length >= 8 ? pool : allVocab());
    const qs = shuffle(pool).slice(0, quizOpt.n);
    let i = 0, score = 0; const wrong = [];
    const field = mode === 'reverse' || mode === 'listen' ? 'w' : (mode === 'reading' ? 'r' : 'm');

    const showQ = () => {
      if (i >= qs.length) return finish();
      const v = qs[i];
      let prompt = '';
      if (mode === 'meaning' || mode === 'reading' || mode === 'kanji') prompt = `<div class="cjk">${esc(v.w)}</div>`;
      else if (mode === 'reverse') prompt = `<div class="vi">${esc(v.m)}</div>`;
      else if (mode === 'listen') prompt = `<button class="btn primary" id="play" style="font-size:20px;padding:16px 28px">🔊 Nghe</button>`;
      else if (mode === 'type') prompt = `<div class="cjk">${esc(v.w)}</div><div class="muted">${esc(v.m)}</div>`;

      let answerArea;
      let opts = [];
      if (mode === 'type') {
        answerArea = `<div class="row" style="justify-content:center"><input class="input" id="ans" autocomplete="off" placeholder="${L() === 'zh' ? 'vd: ni hao' : 'vd: がくせい hoặc gakusei'}" style="min-width:260px;font-size:18px"/><button class="btn primary" id="check">Kiểm tra ↵</button></div>`;
      } else {
        const seen = new Set([v[field]]);
        const ds = [];
        shuffle(distractPool).forEach(d => { if (ds.length < 3 && d[field] && !seen.has(d[field]) && d.w !== v.w) { seen.add(d[field]); ds.push(d); } });
        opts = shuffle([v, ...ds]);
        const cjkOpt = field === 'w' || (field === 'r' && L() === 'ja');
        answerArea = `<div class="options">${opts.map((o, j) => `<button class="option ${cjkOpt ? 'cjk' : ''}" data-j="${j}"><span class="key">${j + 1}</span>${esc(o[field])}</button>`).join('')}</div>`;
      }
      area.innerHTML = `<div class="card quiz-wrap">
        <div class="row between small muted"><span>Câu ${i + 1}/${qs.length}</span><span>Đúng: ${score}</span></div>
        <div class="progress" style="margin-top:6px"><div style="width:${pct(i, qs.length)}%"></div></div>
        <div class="q-prompt">${prompt}</div>
        ${answerArea}
        <div class="feedback" id="fb"></div></div>`;
      const play = () => speak(v.w);
      if (mode === 'listen') { $('#play').onclick = play; setTimeout(play, 250); }
      let answered = false;
      const reveal = (ok, given) => {
        answered = true;
        if (ok) { score++; addXp(2); }
        else {
          wrong.push({ v, given });
          if (mode !== 'kanji') { const id = cardId(v.w); const c = S.srs[id] || { b: 0, d: 0, n: 0, lapses: 0 }; c.b = 0; c.d = Date.now(); c.lapses++; S.srs[id] = c; save(); }
        }
        if (mode !== 'listen') speak(v.w);
        const fb = $('#fb'); fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
        const detail = mode === 'kanji'
          ? `<span class="cjk" style="font-size:22px">${esc(v.w)}</span> — <b>${esc(v.m)}</b><br><span class="small">On: ${esc(v._k.on || '–')} • Kun: ${esc(v._k.kun || '–')}</span>${v._k.ex ? `<br><span class="small cjk">${esc(v._k.ex)}</span>` : ''}`
          : `<span class="cjk" style="font-size:22px">${esc(v.w)}</span> <b>${esc(L() === 'ja' && v.r === v.w ? (v.ro || '') : v.r)}</b> ${L() === 'ja' && v.ro && v.r !== v.w ? `(${esc(v.ro)})` : ''} — ${esc(v.m)}${v.hv ? ` <span class="small muted">[${esc(v.hv)}]</span>` : ''}`;
        fb.innerHTML = `${ok ? '✅ Chính xác!' : '❌ Chưa đúng.'}<br>${detail}<div style="margin-top:8px"><button class="btn sm primary" id="nx">${i + 1 < qs.length ? 'Câu tiếp ↵' : 'Xem kết quả ↵'}</button></div>`;
        $('#nx').onclick = () => { i++; showQ(); };
      };
      if (mode === 'type') {
        const inp = $('#ans'); inp.focus();
        const check = () => {
          if (answered) return;
          const val = inp.value.trim(); if (!val) return;
          let ok;
          if (L() === 'zh') ok = normLatin(val) === normLatin(v.r);
          else ok = toHira(val) === toHira(v.r) || toHira(val) === toHira(v.w) || (v.ro && normLatin(val) === normLatin(v.ro));
          inp.disabled = true; reveal(ok, val);
        };
        $('#check').onclick = check;
        pageKey = e => { if (e.key === 'Enter') { if (answered) { i++; showQ(); } else check(); } };
      } else {
        const choose = j => {
          if (answered) return;
          const ok = opts[j].w === v.w;
          $$('.option', area).forEach((b, k) => { b.disabled = true; if (opts[k].w === v.w) b.classList.add('correct'); else if (k === j) b.classList.add('wrong'); });
          reveal(ok, opts[j][field]);
        };
        $$('.option', area).forEach(b => b.onclick = () => choose(+b.dataset.j));
        pageKey = e => {
          if (!answered && e.key >= '1' && e.key <= '4') choose(+e.key - 1);
          else if (answered && e.key === 'Enter') { i++; showQ(); }
          else if (e.key === ' ' && mode === 'listen') { e.preventDefault(); play(); }
        };
      }
    };
    const finish = () => {
      S.quizzes++; save();
      const p = pct(score, qs.length);
      if (p === 100) addXp(5);
      area.innerHTML = `<div class="card quiz-wrap" style="text-align:center">
        <div class="result-big">${score}/${qs.length}</div>
        <h2>${p >= 90 ? 'Xuất sắc! 🏆' : p >= 70 ? 'Tốt lắm! 👍' : p >= 50 ? 'Cố gắng thêm nhé! 💪' : 'Hãy ôn lại flashcard rồi thử lại 📚'}</h2>
        ${wrong.length ? `<div style="text-align:left" class="mt"><h3>Các câu sai (đã thêm vào flashcard cần ôn):</h3>
          ${wrong.map(x => `<div class="row" style="padding:6px 0;border-bottom:1px solid var(--border)">${spk(x.v.w)}<span class="cjk" style="font-size:22px">${esc(x.v.w)}</span><span>${esc(x.v.r || '')}</span><b>${esc(x.v.m)}</b><span class="small muted">— bạn chọn: ${esc(x.given)}</span></div>`).join('')}</div>` : ''}
        <div class="row mt" style="justify-content:center"><button class="btn primary" id="again">🔁 Làm lại</button><a class="btn" href="#/flashcards">🃏 Ôn flashcard</a></div></div>`;
      $('#again').onclick = () => runQuiz(lv);
      pageKey = e => { if (e.key === 'Enter') runQuiz(lv); };
    };
    showQ();
    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // =========================================================
  //  TRANG: NGỮ PHÁP
  // =========================================================
  let gramQ = '';
  function pageGrammar(view) {
    const lv = selLevel(l => l.grammar.length);
    if (!lv) { view.innerHTML = '<div class="card empty">Chưa có ngữ pháp.</div>'; return; }
    const st = levelStats(lv);
    view.innerHTML = `
      <div class="card"><div class="row between">
        <div class="row">${levelSelect(l => l.grammar.length, lv)}<input class="input" id="gq" placeholder="🔍 Tìm mẫu ngữ pháp…" value="${esc(gramQ)}"/></div>
        <span class="tag primary">Đã học ${st.gDone}/${lv.grammar.length}</span></div>
        <p class="small muted" style="margin-bottom:0">Đọc giải thích → nghe và đọc to ví dụ → tự đặt 2 câu mới → đánh dấu "Đã học".</p>
      </div>
      <div id="glist" class="mt"></div>`;
    const draw = () => {
      const q = gramQ.toLowerCase();
      $('#glist').innerHTML = lv.grammar.map((g, i) => ({ g, i })).filter(({ g }) => !q || [g.title, g.pattern, g.explain].some(x => x && x.toLowerCase().includes(q))).map(({ g, i }) => {
        const k = gramKey(lv.id, i), done = !!S.gram[k];
        return `<div class="card gram mb">
          <div class="row between"><h3 style="margin:0">${i + 1}. ${esc(g.title)}</h3>
          <label class="task ${done ? 'checked' : ''}" style="padding:0"><input type="checkbox" data-gram="${esc(k)}" ${done ? 'checked' : ''}/><span>Đã học</span></label></div>
          ${g.pattern ? `<div class="pattern">${esc(g.pattern)}</div>` : ''}
          <p style="margin-top:0">${esc(g.explain)}</p>
          ${(g.examples || []).map(e => `<div class="eg">${spk(e.s)}<div><div class="cjk">${esc(e.s)}</div>${e.r ? `<div class="small muted">${esc(e.r)}</div>` : ''}<div class="small"><i>${esc(e.m)}</i></div></div></div>`).join('')}
        </div>`;
      }).join('') || '<div class="card empty">Không tìm thấy.</div>';
      $$('[data-gram]').forEach(cb => cb.onchange = () => {
        if (cb.checked) { S.gram[cb.dataset.gram] = 1; addXp(5); } else delete S.gram[cb.dataset.gram];
        save(); cb.closest('.task').classList.toggle('checked', cb.checked);
      });
    };
    draw();
    bindLevelSelect();
    $('#gq').oninput = e => { gramQ = e.target.value; draw(); };
  }

  // =========================================================
  //  TRANG: KANJI (tiếng Nhật)
  // =========================================================
  let kanjiQ = '';
  function pageKanji(view) {
    const lv = selLevel(l => l.kanji.length);
    if (!lv) { view.innerHTML = '<div class="card empty">Chưa có dữ liệu kanji.</div>'; return; }
    view.innerHTML = `
      <div class="card"><div class="row between">
        <div class="row">${levelSelect(l => l.kanji.length, lv)}<input class="input" id="kq" placeholder="🔍 Tìm kanji, Hán Việt, nghĩa…" value="${esc(kanjiQ)}"/></div>
        <div class="row"><a class="btn" href="#/writing">✍️ Luyện viết</a><button class="btn primary" id="kquiz">🎯 Kiểm tra kanji</button></div></div>
        <p class="small muted" style="margin-bottom:0">Mẹo cho người Việt: nhớ <b>âm Hán Việt</b> giúp đoán nghĩa của rất nhiều từ ghép (vd: 学生 = HỌC SINH).</p>
      </div>
      <div class="kanji-grid mt" id="kgrid"></div>`;
    const draw = () => {
      const q = kanjiQ.toLowerCase();
      $('#kgrid').innerHTML = lv.kanji.filter(k => !q || [k.k, k.hv, k.m, k.on, k.kun].some(x => x && x.toLowerCase().includes(q))).map(k => `
        <div class="card kanji-card"><div class="kc" data-speak="${esc(k.k)}" style="cursor:pointer" title="Nghe">${esc(k.k)}</div>
        <div><div class="hv">${esc(k.hv || '')}</div><b>${esc(k.m)}</b>
        <div class="small"><span class="muted">On:</span> <span class="cjk">${esc(k.on || '–')}</span></div>
        <div class="small"><span class="muted">Kun:</span> <span class="cjk">${esc(k.kun || '–')}</span></div>
        ${k.ex ? `<div class="small cjk muted">${esc(k.ex)}</div>` : ''}</div></div>`).join('') || '<div class="card empty">Không tìm thấy.</div>';
    };
    draw();
    bindLevelSelect();
    $('#kq').oninput = e => { kanjiQ = e.target.value; draw(); };
    $('#kquiz').onclick = () => { quizOpt.mode = 'kanji'; location.hash = '#/quiz'; };
  }

  // =========================================================
  //  TRANG: LUYỆN VIẾT
  // =========================================================
  let writeState = { idx: 0, guide: true, lvId: null };
  function writingChars(lv) {
    if (L() === 'ja') {
      if (lv.kanji.length) return lv.kanji.map(k => ({ c: k.k, info: `<div class="hv">${esc(k.hv || '')}</div><b>${esc(k.m)}</b><div class="small">On: <span class="cjk">${esc(k.on || '–')}</span> • Kun: <span class="cjk">${esc(k.kun || '–')}</span></div>${k.ex ? `<div class="small cjk muted">${esc(k.ex)}</div>` : ''}` }));
      const K = D.ja.kana || {};
      const out = [];
      ['hiragana', 'katakana'].forEach(s => K[s] && (K[s].basic || []).flat().forEach(c => c && out.push({ c: c.k, info: `<b>${esc(c.r)}</b><div class="small muted">${s === 'hiragana' ? 'Hiragana' : 'Katakana'}</div>` })));
      return out;
    }
    const seen = new Map();
    lv.vocab.forEach(v => Array.from(v.w).forEach(ch => {
      if (!/[\u4e00-\u9fff]/.test(ch)) return;
      if (!seen.has(ch)) seen.set(ch, []);
      seen.get(ch).push(v);
    }));
    return Array.from(seen.entries()).map(([c, vs]) => {
      const self = vs.find(v => v.w === c);
      return { c, info: (self ? `<b style="font-size:20px;color:var(--primary)">${esc(self.r)}</b>${self.hv ? ` <span class="small muted">${esc(self.hv)}</span>` : ''}<div><b>${esc(self.m)}</b></div>` : '') +
        `<div class="small muted mt">Có trong từ:</div>${vs.slice(0, 4).map(v => `<div class="small"><span class="cjk">${esc(v.w)}</span> ${esc(v.r)} — ${esc(v.m)}</div>`).join('')}` };
    });
  }
  function pageWriting(view) {
    const lv = selLevel(l => writingChars(l).length);
    if (!lv) { view.innerHTML = '<div class="card empty">Chưa có dữ liệu.</div>'; return; }
    const chars = writingChars(lv);
    if (writeState.lvId !== lv.id) { writeState.idx = 0; writeState.lvId = lv.id; }
    if (writeState.idx >= chars.length) writeState.idx = 0;
    const cur = chars[writeState.idx];
    view.innerHTML = `
      <div class="card"><div class="row between">${levelSelect(l => writingChars(l).length, lv)}
        <span class="small muted">${chars.length} chữ • Mẹo: viết theo thứ tự trên → dưới, trái → phải, ngang trước sổ sau.</span></div></div>
      <div class="write-area mt">
        <div>
          <div class="canvas-box" id="cbox"><div class="lines"></div><div class="guide" id="guide" style="${writeState.guide ? '' : 'display:none'}">${esc(cur.c)}</div><canvas id="cv"></canvas></div>
          <div class="row mt" style="justify-content:center">
            <button class="btn sm" id="prev">◀</button>
            <button class="btn sm" id="undo">↶ Hoàn tác</button>
            <button class="btn sm" id="clr">🧹 Xoá</button>
            <button class="btn sm" id="tg">${writeState.guide ? '🙈 Ẩn mẫu' : '👁 Hiện mẫu'}</button>
            <button class="btn sm primary" id="next">Tiếp ▶</button>
          </div>
        </div>
        <div style="flex:1;min-width:260px">
          <div class="card">
            <div class="row"><span class="cjk" style="font-size:64px;line-height:1">${writeState.guide ? esc(cur.c) : '?'}</span>${spk(cur.c)}</div>
            <div class="mt">${cur.info}</div>
            <p class="small muted">${writeState.guide ? 'Tô theo nét mờ trong khung 3–5 lần, sau đó bấm "Ẩn mẫu" để tự viết lại theo trí nhớ.' : 'Chế độ tự kiểm tra: đọc nghĩa & cách đọc rồi viết chữ theo trí nhớ, sau đó bấm "Hiện mẫu" để so sánh.'}</p>
          </div>
          <div class="card mt"><h3>Danh sách chữ (${writeState.idx + 1}/${chars.length})</h3>
            <div class="char-list">${chars.map((c, i) => `<button data-ci="${i}" class="${i === writeState.idx ? 'active' : ''}">${esc(c.c)}</button>`).join('')}</div></div>
        </div>
      </div>`;
    bindLevelSelect();
    const pad = drawPad($('#cv'));
    const go = d => { if (pad.count() > 0) addXp(1); writeState.idx = (writeState.idx + d + chars.length) % chars.length; render(); };
    $('#prev').onclick = () => go(-1);
    $('#next').onclick = () => go(1);
    $('#clr').onclick = pad.clear;
    $('#undo').onclick = pad.undo;
    $('#tg').onclick = () => { writeState.guide = !writeState.guide; render(); };
    $$('[data-ci]').forEach(b => b.onclick = () => { writeState.idx = +b.dataset.ci; render(); });
    const active = $('.char-list .active'); if (active) active.scrollIntoView({ block: 'nearest' });
    pageKey = e => { if (e.key === 'ArrowRight') go(1); else if (e.key === 'ArrowLeft') go(-1); else if ((e.ctrlKey || e.metaKey) && e.key === 'z') pad.undo(); };
  }
  function drawPad(cv) {
    const box = cv.parentElement;
    const dpr = window.devicePixelRatio || 1;
    const W = box.clientWidth, H = box.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
    const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
    const color = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#e11d48';
    let strokes = [], cur = null;
    const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const redraw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = color; ctx.lineWidth = Math.max(8, W / 32);
      strokes.concat(cur ? [cur] : []).forEach(s => {
        ctx.beginPath(); ctx.moveTo(s[0][0], s[0][1]);
        if (s.length === 1) ctx.lineTo(s[0][0] + 0.1, s[0][1] + 0.1);
        for (let i = 1; i < s.length; i++) { const p = s[i - 1], q = s[i]; ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2); }
        ctx.stroke();
      });
    };
    cv.onpointerdown = e => { e.preventDefault(); cv.setPointerCapture(e.pointerId); cur = [pos(e)]; redraw(); };
    cv.onpointermove = e => { if (!cur) return; cur.push(pos(e)); redraw(); };
    cv.onpointerup = cv.onpointercancel = () => { if (cur) { strokes.push(cur); cur = null; redraw(); } };
    return { clear: () => { strokes = []; redraw(); }, undo: () => { strokes.pop(); redraw(); }, count: () => strokes.length };
  }

  // =========================================================
  //  TRANG: THỐNG KÊ & CÀI ĐẶT
  // =========================================================
  function pageStats(view) {
    const langStats = ['zh', 'ja'].map(l => {
      const prev = S.lang; S.lang = l;
      const lvs = D[l].levels;
      const vocab = lvs.flatMap(x => x.vocab);
      const learned = vocab.filter(v => { const c = card(v.w); return c && c.b >= 1; }).length;
      const mastered = vocab.filter(v => { const c = card(v.w); return c && c.b >= 4; }).length;
      const rows = lvs.map(x => ({ x, s: levelStats(x) }));
      const tasks = rows.reduce((a, r) => a + r.s.tDone, 0), tTotal = rows.reduce((a, r) => a + r.s.tTotal, 0);
      const boxes = [0, 0, 0, 0, 0, 0, 0]; vocab.forEach(v => { const c = card(v.w); if (c) boxes[c.b]++; });
      S.lang = prev;
      return { l, vocab: vocab.length, learned, mastered, rows, tasks, tTotal, boxes };
    });
    const activeDays = Object.keys(S.history).filter(k => S.history[k] > 0).length;
    view.innerHTML = `
      <div class="grid g4">
        <div class="card stat"><div class="ico">⭐</div><div><b>${S.totalXp}</b><span>tổng XP</span></div></div>
        <div class="card stat"><div class="ico">🔥</div><div><b>${streakNow()}</b><span>chuỗi ngày hiện tại</span></div></div>
        <div class="card stat"><div class="ico">📅</div><div><b>${activeDays}</b><span>ngày đã học</span></div></div>
        <div class="card stat"><div class="ico">🎯</div><div><b>${S.quizzes}</b><span>bài trắc nghiệm</span></div></div>
      </div>
      <div class="card mt"><h3>📈 Hoạt động 14 ngày</h3>${weekChart(14)}</div>
      <div class="grid g2 mt">
        ${langStats.map(x => `<div class="card">
          <h3>${META[x.l].flag} ${META[x.l].name}</h3>
          <div class="row small muted">Từ đã học <b style="color:var(--text)">${x.learned}/${x.vocab}</b> • Đã thuộc <b style="color:var(--text)">${x.mastered}</b> • Nhiệm vụ <b style="color:var(--text)">${x.tasks}/${x.tTotal}</b></div>
          <div class="mt">${x.rows.map(r => `<div style="margin:8px 0"><div class="row between small"><span><b>${esc(r.x.name)}</b> ${esc(r.x.title)}</span><span>${r.s.overall}%</span></div><div class="progress"><div style="width:${r.s.overall}%"></div></div></div>`).join('')}</div>
          <div class="small muted mt">Phân bố thẻ theo hộp SRS:</div>
          <div class="week-chart" style="height:90px">${x.boxes.map((n, i) => `<div class="bar"><span>${n || ''}</span><div style="height:${Math.max(2, n / Math.max(1, ...x.boxes) * 100)}%"></div><span>H${i}</span></div>`).join('')}</div>
        </div>`).join('')}
      </div>
      <div class="card mt">
        <h3>⚙️ Cài đặt</h3>
        <div class="row"><label>Mục tiêu XP mỗi ngày:</label>
          <select class="select" id="goal">${[20, 30, 50, 80, 100, 150].map(n => `<option ${S.dailyGoal === n ? 'selected' : ''}>${n}</option>`).join('')}</select>
          <span class="small muted">(~1 XP ≈ 1 thẻ/câu hỏi; tick nhiệm vụ = 5 XP)</span></div>
        <div class="row mt">
          <button class="btn" id="exp">⬇️ Xuất tiến độ (JSON)</button>
          <label class="btn">⬆️ Nhập tiến độ<input type="file" id="imp" accept="application/json" hidden/></label>
          <button class="btn" id="rst" style="color:var(--bad)">🗑 Xoá toàn bộ tiến độ</button>
        </div>
        <p class="small muted">Tiến độ được lưu trong trình duyệt (localStorage). Hãy xuất file định kỳ để sao lưu hoặc chuyển sang máy khác.</p>
      </div>`;
    $('#goal').onchange = e => { S.dailyGoal = +e.target.value; save(); updatePills(); };
    $('#exp').onclick = () => {
      const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'tien-do-hoc-' + today() + '.json'; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    $('#imp').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => { try { S = Object.assign(defaultState(), JSON.parse(rd.result)); save(); toast('✅ Đã nhập tiến độ'); render(); } catch (err) { toast('❌ File không hợp lệ'); } };
      rd.readAsText(f);
    };
    $('#rst').onclick = () => {
      if (confirm('Bạn chắc chắn muốn xoá TOÀN BỘ tiến độ học (cả tiếng Trung và tiếng Nhật)? Không thể hoàn tác.')) {
        const keep = { lang: S.lang, theme: S.theme }; S = Object.assign(defaultState(), keep); save(); toast('Đã xoá tiến độ'); render();
      }
    };
  }

  // ---------- Sự kiện toàn cục ----------
  document.addEventListener('click', e => {
    const s = e.target.closest('[data-speak]');
    if (s) { e.preventDefault(); e.stopPropagation(); speak(s.dataset.speak); }
  }, true);
  document.addEventListener('keydown', e => {
    if (!pageKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if ((tag === 'input' && e.target.id !== 'ans') || tag === 'select' || tag === 'textarea') return;
    pageKey(e);
  });
  $$('#langSwitch button').forEach(b => b.onclick = () => { S.lang = b.dataset.lang; save(); render(); });
  $('#themeBtn').onclick = () => { S.theme = S.theme === 'dark' ? 'light' : 'dark'; save(); render(); };
  $('#menuBtn').onclick = () => { $('#sidebar').classList.add('open'); $('#overlay').classList.add('show'); };
  $('#overlay').onclick = () => { $('#sidebar').classList.remove('open'); $('#overlay').classList.remove('show'); };
  window.addEventListener('hashchange', render);
  render();
})();
