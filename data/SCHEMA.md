# Data schema (dùng chung cho mọi file data/*.js)

Mỗi file data là JavaScript thuần (không module, không import), chạy trong trình duyệt theo thứ tự thẻ <script>.
Mở đầu MỖI file bằng đúng đoạn sau (thay `zh` bằng `ja` cho tiếng Nhật):

```js
window.LANG_DATA = window.LANG_DATA || {};
LANG_DATA.zh = LANG_DATA.zh || { levels: [] };
```

Sau đó push từng cấp độ (level) theo đúng thứ tự lộ trình:

```js
LANG_DATA.zh.levels.push({
  id: 'hsk1',                 // duy nhất, chữ thường, không dấu cách
  name: 'HSK 1',              // tên ngắn
  title: 'Nhập môn',          // tiêu đề tiếng Việt
  duration: '6–8 tuần',       // thời lượng gợi ý (học ~1 giờ/ngày)
  color: '#ef4444',           // màu hex đại diện
  description: 'Mô tả 2–3 câu bằng tiếng Việt về giai đoạn này.',
  goals: ['Mục tiêu đầu ra 1', '...'],             // 4–6 mục tiêu cụ thể, đo lường được
  units: [                                          // 4–8 đơn vị học theo tuần
    { id: 'hsk1-u1', title: 'Tuần 1–2: Chào hỏi & giới thiệu', desc: 'Mô tả ngắn',
      tasks: ['Việc cần làm cụ thể 1', 'Việc 2', 'Việc 3'] }   // 3–6 việc/đơn vị, có thể tick hoàn thành
  ],
  vocab: [
    // TIẾNG TRUNG: w = chữ Hán giản thể, r = pinyin có dấu thanh, hv = âm Hán Việt (viết hoa), m = nghĩa tiếng Việt, t = chủ đề
    { w: '你好', r: 'nǐ hǎo', hv: 'NHĨ HẢO', m: 'xin chào', t: 'Chào hỏi',
      ex: '你好，我叫小明。', exr: 'Nǐ hǎo, wǒ jiào Xiǎomíng.', exm: 'Xin chào, tôi tên là Tiểu Minh.' }
    // TIẾNG NHẬT: w = cách viết thông dụng (kanji/kana), r = cách đọc bằng hiragana/katakana, ro = romaji, m = nghĩa tiếng Việt, t = chủ đề
    // { w: '学生', r: 'がくせい', ro: 'gakusei', m: 'học sinh, sinh viên', t: 'Trường học',
    //   ex: '私は学生です。', exr: 'わたしはがくせいです。', exm: 'Tôi là sinh viên.' }
    // ex/exr/exm là tuỳ chọn nhưng nên có cho ~40% số từ.
  ],
  grammar: [
    { title: 'Câu khẳng định với 是', pattern: 'A + 是 + B',
      explain: 'Giải thích ngắn gọn bằng tiếng Việt (1–3 câu), có lưu ý lỗi hay gặp.',
      examples: [ { s: '我是学生。', r: 'Wǒ shì xuésheng.', m: 'Tôi là học sinh.' } ] }  // 2–3 ví dụ
  ],
  // CHỈ TIẾNG NHẬT (tuỳ chọn cho các level N5–N1):
  kanji: [
    { k: '日', on: 'ニチ・ジツ', kun: 'ひ・-び・-か', hv: 'NHẬT', m: 'mặt trời, ngày', ex: '日本（にほん）: Nhật Bản' }
  ]
});
```

## Dữ liệu phát âm (chỉ có ở level giai đoạn 0)

Tiếng Trung — gắn vào `LANG_DATA.zh.pinyin = {...}`:
```js
LANG_DATA.zh.pinyin = {
  tones: [ { n: 1, mark: 'ā', name: 'Thanh 1 (âm bình)', desc: 'Cao và đều, giống...', ex: 'mā 妈 mẹ' } , ... 4 thanh + thanh nhẹ (n: 0) ],
  initials: [ { p: 'b', ipa: '[p]', tip: 'Như "p" tiếng Việt nhưng không bật hơi', ex: 'bā 八' }, ... đủ 21 thanh mẫu ],
  finals:   [ { p: 'a', tip: '...', ex: 'mā 妈' }, ... các vận mẫu chính (~36) ],
  rules:    [ { title: 'Biến điệu thanh 3', desc: '...', ex: 'nǐ hǎo → ní hǎo' }, ... 4–6 quy tắc ]
};
```

Tiếng Nhật — gắn vào `LANG_DATA.ja.kana = {...}`:
```js
LANG_DATA.ja.kana = {
  hiragana: {
    basic:   [ [ {k:'あ',r:'a'},{k:'い',r:'i'},{k:'う',r:'u'},{k:'え',r:'e'},{k:'お',r:'o'} ], ... ],  // mỗi hàng 5 ô, ô trống dùng null (vd hàng ya: [ya,null,yu,null,yo]); hàng cuối: [{k:'ん',r:'n'},null,null,null,null]
    dakuten: [ ...hàng ga, za, da, ba, pa (5 ô) ],
    youon:   [ [ {k:'きゃ',r:'kya'},{k:'きゅ',r:'kyu'},{k:'きょ',r:'kyo'} ], ... ]   // mỗi hàng 3 ô
  },
  katakana: { basic: [...], dakuten: [...], youon: [...] }   // cùng cấu trúc
};
```

## Yêu cầu chất lượng
- Chính xác tuyệt đối: pinyin đúng dấu thanh, chữ giản thể, cách đọc kana đúng, Hán Việt đúng. Nếu không chắc chắn về một từ → bỏ từ đó, đừng đoán.
- Không trùng từ trong cùng một level. Nghĩa tiếng Việt ngắn gọn, tự nhiên.
- Chỉ dùng nháy đơn '...' cho chuỗi JS; nếu chuỗi chứa nháy đơn thì escape \'.
- File phải chạy được: kiểm tra cú pháp bằng `python` (ví dụ dùng một script đơn giản đếm ngoặc) hoặc tốt nhất là cẩn thận dấu phẩy/ngoặc.
