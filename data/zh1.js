window.LANG_DATA = window.LANG_DATA || {};
LANG_DATA.zh = LANG_DATA.zh || { levels: [] };

/* ============================================================
   DỮ LIỆU PHÁT ÂM (PINYIN)
   ============================================================ */
LANG_DATA.zh.pinyin = {
  tones: [
    { n: 1, mark: 'ā', name: 'Thanh 1 (âm bình)', desc: 'Cao và đều (độ cao 5-5). Giữ giọng ở mức cao, kéo đều như ngân một nốt nhạc cao; gần thanh ngang tiếng Việt nhưng cao hơn hẳn.', ex: 'mā 妈 mẹ' },
    { n: 2, mark: 'á', name: 'Thanh 2 (dương bình)', desc: 'Đi lên từ trung bình đến cao (3-5). Gần dấu sắc tiếng Việt nhưng lên từ từ, giống giọng hỏi lại "Hả?".', ex: 'má 麻 cây gai; tê' },
    { n: 3, mark: 'ǎ', name: 'Thanh 3 (thượng thanh)', desc: 'Xuống thấp rồi lên (2-1-4). Gần dấu hỏi tiếng Việt nhưng hạ giọng sâu hơn. Khi nói nhanh thường chỉ đọc nửa đầu (thấp, trầm).', ex: 'mǎ 马 ngựa' },
    { n: 4, mark: 'à', name: 'Thanh 4 (khứ thanh)', desc: 'Rơi mạnh từ cao xuống thấp (5-1), ngắn và dứt khoát như ra lệnh. Lưu ý bắt đầu từ cao, không đọc thành dấu huyền (thấp, đều) của tiếng Việt.', ex: 'mà 骂 mắng' },
    { n: 0, mark: 'a', name: 'Thanh nhẹ (khinh thanh)', desc: 'Không có dấu, đọc ngắn và nhẹ; cao độ phụ thuộc vào âm tiết đứng trước. Hay gặp ở trợ từ và âm tiết thứ hai của từ láy.', ex: 'ma 吗 (trợ từ nghi vấn)' }
  ],
  initials: [
    { p: 'b', ipa: '[p]', tip: 'Như "p" tiếng Việt (trong "pin"), không bật hơi, không rung dây thanh.', ex: 'bā 八' },
    { p: 'p', ipa: '[pʰ]', tip: 'Như b nhưng bật mạnh luồng hơi ra (để tờ giấy trước miệng sẽ thấy giấy rung).', ex: 'pà 怕' },
    { p: 'm', ipa: '[m]', tip: 'Như "m" tiếng Việt.', ex: 'mǎ 马' },
    { p: 'f', ipa: '[f]', tip: 'Như "ph" tiếng Việt: răng trên chạm môi dưới.', ex: 'fàn 饭' },
    { p: 'd', ipa: '[t]', tip: 'Như "t" tiếng Việt, không bật hơi (không đọc thành "đ").', ex: 'dà 大' },
    { p: 't', ipa: '[tʰ]', tip: 'Như "th" tiếng Việt, bật hơi.', ex: 'tā 他' },
    { p: 'n', ipa: '[n]', tip: 'Như "n" tiếng Việt.', ex: 'nǐ 你' },
    { p: 'l', ipa: '[l]', tip: 'Như "l" tiếng Việt; chú ý phân biệt rõ với n.', ex: 'lái 来' },
    { p: 'g', ipa: '[k]', tip: 'Như "c/k" tiếng Việt, không bật hơi (không đọc thành "g").', ex: 'gē 哥' },
    { p: 'k', ipa: '[kʰ]', tip: 'Như "c/k" nhưng bật mạnh hơi; không đọc thành "kh" tiếng Việt.', ex: 'kàn 看' },
    { p: 'h', ipa: '[x]', tip: 'Gần "kh" tiếng Việt (cọ xát ở cuống lưỡi) nhưng nhẹ hơn; không phải "h" tiếng Việt.', ex: 'hǎo 好' },
    { p: 'j', ipa: '[tɕ]', tip: 'Gần "ch" tiếng Việt: mặt lưỡi áp vào ngạc cứng, môi dẹt, không bật hơi. Chỉ đi với i, ü.', ex: 'jiā 家' },
    { p: 'q', ipa: '[tɕʰ]', tip: 'Như j nhưng bật hơi mạnh (gần "ch" + hơi). Chỉ đi với i, ü.', ex: 'qī 七' },
    { p: 'x', ipa: '[ɕ]', tip: 'Gần "x" tiếng Việt nhưng mặt lưỡi nâng lên, môi dẹt như cười. Chỉ đi với i, ü.', ex: 'xiè 谢' },
    { p: 'zh', ipa: '[ʈʂ]', tip: 'Âm uốn lưỡi, gần "tr" tiếng Việt (giọng phân biệt tr/ch), không bật hơi.', ex: 'zhōng 中' },
    { p: 'ch', ipa: '[ʈʂʰ]', tip: 'Như zh (uốn lưỡi) nhưng bật hơi mạnh.', ex: 'chī 吃' },
    { p: 'sh', ipa: '[ʂ]', tip: 'Gần "s" uốn lưỡi tiếng Việt (phân biệt s/x).', ex: 'shū 书' },
    { p: 'r', ipa: '[ʐ]', tip: 'Uốn lưỡi như sh nhưng rung dây thanh; gần "r" tiếng Việt nhưng không rung lưỡi.', ex: 'rén 人' },
    { p: 'z', ipa: '[ts]', tip: 'Đầu lưỡi chạm sau răng trên, đọc "ts" ngắn, không bật hơi.', ex: 'zài 再' },
    { p: 'c', ipa: '[tsʰ]', tip: 'Như z nhưng bật hơi mạnh ("ts" + hơi).', ex: 'cài 菜' },
    { p: 's', ipa: '[s]', tip: 'Như "x" tiếng Việt (đầu lưỡi, không uốn).', ex: 'sān 三' }
  ],
  finals: [
    { p: 'a', tip: 'Như "a" tiếng Việt, mở miệng to.', ex: 'mā 妈' },
    { p: 'o', tip: 'Như "ô" tròn môi, hơi lướt sang "ua" khi đi sau b, p, m, f.', ex: 'pó 婆' },
    { p: 'e', tip: 'Gần "ơ" nhưng lưỡi lùi về sau, giữa "ơ" và "ưa"; không đọc thành "e".', ex: 'è 饿' },
    { p: 'i', tip: 'Như "i" tiếng Việt; khi đứng một mình viết là yi.', ex: 'yī 一' },
    { p: 'u', tip: 'Như "u" tiếng Việt, tròn môi; đứng một mình viết là wu.', ex: 'wǔ 五' },
    { p: 'ü', tip: 'Như "uy" nhưng giữ môi tròn suốt khi đọc "i". Sau j, q, x, y viết thành u (bỏ hai chấm).', ex: 'nǚ 女' },
    { p: 'ai', tip: 'Như "ai" tiếng Việt.', ex: 'ài 爱' },
    { p: 'ei', tip: 'Như "ây" tiếng Việt.', ex: 'lèi 累' },
    { p: 'ao', tip: 'Như "ao" tiếng Việt.', ex: 'hǎo 好' },
    { p: 'ou', tip: 'Như "âu" tiếng Việt.', ex: 'gǒu 狗' },
    { p: 'an', tip: 'Như "an" tiếng Việt.', ex: 'sān 三' },
    { p: 'en', tip: 'Như "ân" tiếng Việt.', ex: 'mén 门' },
    { p: 'ang', tip: 'Như "ang" tiếng Việt.', ex: 'máng 忙' },
    { p: 'eng', tip: 'Như "âng" tiếng Việt.', ex: 'lěng 冷' },
    { p: 'ong', tip: 'Gần "ung" tiếng Việt (không đọc thành "ong").', ex: 'zhōng 中' },
    { p: 'er', tip: 'Đọc "ơ" rồi cong đầu lưỡi lên.', ex: 'èr 二' },
    { p: 'ia', tip: 'Đọc lướt "i-a"; đứng một mình viết là ya.', ex: 'jiā 家' },
    { p: 'ie', tip: 'Như "iê" tiếng Việt; đứng một mình viết là ye.', ex: 'xiè 谢' },
    { p: 'iao', tip: 'Đọc lướt "i-ao" (gần "iêu" nhưng mở miệng to hơn); đứng một mình viết là yao.', ex: 'xiǎo 小' },
    { p: 'iou (iu)', tip: 'Gần "iêu"; khi có thanh mẫu viết gọn là iu, đứng một mình viết là you.', ex: 'liù 六' },
    { p: 'ian', tip: 'Đọc là "iên" (không đọc "i-an"); đứng một mình viết là yan.', ex: 'tiān 天' },
    { p: 'in', tip: 'Như "in" tiếng Việt; đứng một mình viết là yin.', ex: 'xīn 心' },
    { p: 'iang', tip: 'Đọc lướt "i-ang"; đứng một mình viết là yang.', ex: 'liǎng 两' },
    { p: 'ing', tip: 'Như "inh" tiếng Việt; đứng một mình viết là ying.', ex: 'míng 明' },
    { p: 'iong', tip: 'Đọc lướt "i-ung"; đứng một mình viết là yong.', ex: 'xióng 熊' },
    { p: 'ua', tip: 'Như "oa" tiếng Việt; đứng một mình viết là wa.', ex: 'huā 花' },
    { p: 'uo', tip: 'Như "ua/uô" tiếng Việt; đứng một mình viết là wo.', ex: 'duō 多' },
    { p: 'uai', tip: 'Như "oai" tiếng Việt; đứng một mình viết là wai.', ex: 'kuài 快' },
    { p: 'uei (ui)', tip: 'Gần "uây"; khi có thanh mẫu viết gọn là ui, đứng một mình viết là wei.', ex: 'duì 对' },
    { p: 'uan', tip: 'Như "oan" tiếng Việt; đứng một mình viết là wan.', ex: 'huān 欢' },
    { p: 'uen (un)', tip: 'Gần "uân"; khi có thanh mẫu viết gọn là un, đứng một mình viết là wen.', ex: 'chūn 春' },
    { p: 'uang', tip: 'Như "oang" tiếng Việt; đứng một mình viết là wang.', ex: 'huáng 黄' },
    { p: 'ueng', tip: 'Gần "uâng"; chỉ xuất hiện dưới dạng weng.', ex: 'wēng 翁' },
    { p: 'üe', tip: 'Như "uyê" tiếng Việt; sau j, q, x viết là ue, đứng một mình viết là yue.', ex: 'xué 学' },
    { p: 'üan', tip: 'Như "uyên" tiếng Việt; sau j, q, x viết là uan, đứng một mình viết là yuan.', ex: 'yuǎn 远' },
    { p: 'ün', tip: 'Như "uyn" (môi tròn); sau j, q, x viết là un, đứng một mình viết là yun.', ex: 'yún 云' },
    { p: '-i (zi, zhi…)', tip: 'Chữ i sau z, c, s đọc gần "ư"; sau zh, ch, sh, r đọc "ư" uốn lưỡi. Không đọc thành "i".', ex: 'sì 四, shì 是' }
  ],
  rules: [
    { title: 'Biến điệu thanh 3', desc: 'Hai âm tiết thanh 3 đi liền nhau thì âm đầu đọc thành thanh 2. Khi viết pinyin vẫn giữ dấu thanh 3.', ex: 'nǐ hǎo → ní hǎo; hěn hǎo → hén hǎo' },
    { title: 'Nửa thanh 3', desc: 'Thanh 3 đứng trước thanh 1, 2, 4 hoặc thanh nhẹ chỉ đọc nửa đầu: hạ thấp giọng, không vút lên.', ex: 'lǎoshī, hǎochī, wǒmen' },
    { title: 'Biến điệu của 不 (bù)', desc: '不 vốn thanh 4; khi đứng trước một âm tiết thanh 4 thì đọc thành thanh 2 (bú). Sách giáo khoa thường ghi luôn dấu đã biến điệu.', ex: 'bù shì → bú shì; bù qù → bú qù' },
    { title: 'Biến điệu của 一 (yī)', desc: '一 đọc yī khi đứng một mình, khi đếm, khi chỉ số thứ tự; đọc yí trước thanh 4; đọc yì trước thanh 1, 2, 3.', ex: 'yí gè, yí xià; yì tiān, yì nián, yì qǐ; dì yī' },
    { title: 'Quy tắc viết pinyin', desc: 'i, u, ü đứng đầu âm tiết viết thành y, w, yu; ü sau j, q, x, y bỏ hai chấm; iou, uei, uen có thanh mẫu viết gọn iu, ui, un. Dấu thanh đặt trên nguyên âm chính theo thứ tự a > o > e > i/u; với iu, ui thì đặt trên chữ đứng sau.', ex: 'yī, wǔ, yú; jū, xué; liù, duì, chūn' },
    { title: 'Âm uốn lưỡi 儿 (儿化)', desc: 'Thêm 儿 vào cuối âm tiết thì cong lưỡi khi kết thúc âm, pinyin chỉ thêm chữ r. Phổ biến trong giọng Bắc Kinh.', ex: 'yìdiǎnr 一点儿, nǎr 哪儿, wánr 玩儿' }
  ]
};

/* ============================================================
   GIAI ĐOẠN 0: PHÁT ÂM & PINYIN
   ============================================================ */
LANG_DATA.zh.levels.push({
  id: 'pinyin',
  name: 'Giai đoạn 0',
  title: 'Phát âm & Pinyin',
  duration: '2–3 tuần',
  color: '#f59e0b',
  description: 'Nền móng của tiếng Trung: nắm vững 4 thanh điệu và thanh nhẹ, 21 thanh mẫu, các vận mẫu và quy tắc viết pinyin. Đồng thời làm quen với các nét cơ bản, quy tắc bút thuận và những bộ thủ thường gặp để học chữ Hán hiệu quả về sau.',
  goals: [
    'Phân biệt và phát âm đúng 4 thanh điệu + thanh nhẹ, nghe đúng ≥ 90% bài tập phân biệt thanh',
    'Phát âm chuẩn 21 thanh mẫu, đặc biệt các cặp bật hơi/không bật hơi (b–p, d–t, g–k, j–q, z–c, zh–ch)',
    'Đọc và viết đúng pinyin của ~36 vận mẫu, áp dụng quy tắc y/w, ü và vị trí dấu thanh',
    'Áp dụng đúng biến điệu thanh 3, 不 và 一 khi đọc to',
    'Viết đúng 8 nét cơ bản theo quy tắc bút thuận và nhận diện ~20 bộ thủ thông dụng'
  ],
  units: [
    { id: 'pinyin-u1', title: 'Tuần 1: Thanh điệu', desc: 'Làm quen 4 thanh + thanh nhẹ và biến điệu.',
      tasks: [
        'Nghe và nhại lại chuỗi mā – má – mǎ – mà – ma 20 lần mỗi ngày',
        'Vẽ biểu đồ 5 mức cao độ và đánh dấu đường đi của từng thanh',
        'Làm 50 câu nghe chọn thanh điệu đúng cho âm tiết đơn',
        'Luyện 20 tổ hợp hai âm tiết (thanh 1+1 đến 4+4)',
        'Học quy tắc biến điệu thanh 3, 不, 一 và đọc to các ví dụ'
      ] },
    { id: 'pinyin-u2', title: 'Tuần 1–2: Thanh mẫu', desc: '21 phụ âm đầu và các cặp dễ nhầm.',
      tasks: [
        'Học 21 thanh mẫu theo nhóm: môi (b p m f), đầu lưỡi (d t n l), cuống lưỡi (g k h)',
        'Học nhóm mặt lưỡi (j q x), đầu lưỡi trước (z c s), uốn lưỡi (zh ch sh r)',
        'Luyện bật hơi với tờ giấy: b–p, d–t, g–k, j–q, z–c, zh–ch',
        'Ghi âm giọng mình đọc 21 thanh mẫu và so sánh với file chuẩn',
        'Phân biệt z/zh, c/ch, s/sh qua 30 cặp âm tiết'
      ] },
    { id: 'pinyin-u3', title: 'Tuần 2: Vận mẫu & quy tắc viết pinyin', desc: 'Nguyên âm đơn, kép, mũi và cách ghi dấu thanh.',
      tasks: [
        'Học 6 vận mẫu đơn a o e i u ü, chú ý e và ü',
        'Học vận mẫu kép và vận mẫu mũi (-n / -ng), luyện cặp an–ang, en–eng, in–ing',
        'Học các vận mẫu bắt đầu bằng i, u, ü và cách viết y, w, yu',
        'Luyện đặt dấu thanh đúng vị trí cho 40 âm tiết',
        'Đọc to 20 từ cơ bản của giai đoạn này, nghe chép pinyin có dấu'
      ] },
    { id: 'pinyin-u4', title: 'Tuần 3: Nét chữ Hán cơ bản & bộ thủ', desc: 'Nét, quy tắc bút thuận và bộ thủ thông dụng.',
      tasks: [
        'Tập viết 8 nét cơ bản: ngang 横, sổ 竖, phẩy 撇, mác 捺, chấm 点, hất 提, gập 折, móc 钩',
        'Học 7 quy tắc bút thuận: ngang trước sổ sau, phẩy trước mác sau, trên trước dưới sau, trái trước phải sau, ngoài trước trong sau, vào trước đóng sau, giữa trước hai bên sau',
        'Học 20 bộ thủ thường gặp: 亻 口 女 氵 扌 木 日 月 讠 忄 艹 宀 辶 心 土 火 钅 纟 门 饣',
        'Viết mỗi chữ tượng hình trong danh sách từ vựng 10 lần, đúng thứ tự nét',
        'Tự kiểm tra: tra một chữ mới bằng bộ thủ trong từ điển'
      ] }
  ],
  vocab: [
    { w: '妈', r: 'mā', hv: 'MA', m: 'mẹ', t: 'Luyện thanh điệu' },
    { w: '麻', r: 'má', hv: 'MA', m: 'cây gai; tê (tê dại)', t: 'Luyện thanh điệu' },
    { w: '马', r: 'mǎ', hv: 'MÃ', m: 'ngựa', t: 'Luyện thanh điệu' },
    { w: '骂', r: 'mà', hv: 'MẠ', m: 'mắng, chửi', t: 'Luyện thanh điệu' },
    { w: '吗', r: 'ma', hv: 'MA', m: 'trợ từ nghi vấn (… không?)', t: 'Luyện thanh điệu',
      ex: '妈妈骂马吗？', exr: 'Māma mà mǎ ma?', exm: 'Mẹ mắng con ngựa à?' },
    { w: '八', r: 'bā', hv: 'BÁT', m: 'số tám', t: 'Luyện thanh điệu' },
    { w: '人', r: 'rén', hv: 'NHÂN', m: 'người', t: 'Chữ tượng hình' },
    { w: '口', r: 'kǒu', hv: 'KHẨU', m: 'miệng', t: 'Chữ tượng hình' },
    { w: '日', r: 'rì', hv: 'NHẬT', m: 'mặt trời; ngày', t: 'Chữ tượng hình' },
    { w: '月', r: 'yuè', hv: 'NGUYỆT', m: 'mặt trăng; tháng', t: 'Chữ tượng hình' },
    { w: '山', r: 'shān', hv: 'SƠN', m: 'núi', t: 'Chữ tượng hình' },
    { w: '水', r: 'shuǐ', hv: 'THỦY', m: 'nước', t: 'Chữ tượng hình' },
    { w: '火', r: 'huǒ', hv: 'HỎA', m: 'lửa', t: 'Chữ tượng hình' },
    { w: '木', r: 'mù', hv: 'MỘC', m: 'cây, gỗ', t: 'Chữ tượng hình' },
    { w: '手', r: 'shǒu', hv: 'THỦ', m: 'tay', t: 'Bộ thủ cơ bản' },
    { w: '女', r: 'nǚ', hv: 'NỮ', m: 'nữ, con gái', t: 'Bộ thủ cơ bản' },
    { w: '子', r: 'zǐ', hv: 'TỬ', m: 'con, đứa trẻ', t: 'Bộ thủ cơ bản' },
    { w: '大', r: 'dà', hv: 'ĐẠI', m: 'to, lớn', t: 'Chữ chỉ sự' },
    { w: '小', r: 'xiǎo', hv: 'TIỂU', m: 'nhỏ, bé', t: 'Chữ chỉ sự' },
    { w: '中', r: 'zhōng', hv: 'TRUNG', m: 'giữa, ở giữa', t: 'Chữ chỉ sự' },
    { w: '上', r: 'shàng', hv: 'THƯỢNG', m: 'trên', t: 'Chữ chỉ sự' },
    { w: '下', r: 'xià', hv: 'HẠ', m: 'dưới', t: 'Chữ chỉ sự' }
  ],
  grammar: []
});


/* ============================================================
   HSK 1: NHẬP MÔN GIAO TIẾP (150 TỪ CHUẨN)
   ============================================================ */
LANG_DATA.zh.levels.push({
  id: 'hsk1',
  name: 'HSK 1',
  title: 'Nhập môn giao tiếp',
  duration: '6–8 tuần',
  color: '#ef4444',
  description: 'Làm chủ 150 từ vựng và các mẫu câu cốt lõi nhất của tiếng Trung hiện đại. Sau giai đoạn này bạn có thể chào hỏi, giới thiệu bản thân, hỏi giờ giấc, ngày tháng, mua sắm, gọi món và nói về gia đình, trường lớp.',
  goals: [
    'Thuộc và viết được ~150 từ vựng HSK 1 chuẩn kèm âm Hán Việt',
    'Giao tiếp các chủ đề cơ bản: chào hỏi, tên tuổi, quốc tịch, gia đình, thời gian, thời tiết, mua bán',
    'Nắm vững 10 cấu trúc ngữ pháp nền tảng (是, 吗/呢, の/的, 在, 有, 想/会/能, 了...)',
    'Nghe hiểu các câu hội thoại ngắn tốc độ chậm – vừa (100–120 âm tiết/phút)',
    'Đạt ≥ 180/200 điểm trong đề thi thử HSK 1'
  ],
  units: [
    { id: 'hsk1-u1', title: 'Tuần 1–2: Đại từ, chào hỏi & giới thiệu', desc: 'Đại từ nhân xưng, câu chào hỏi, giới thiệu tên và quốc tịch.',
      tasks: [
        'Học 25 từ vựng về đại từ (我, 你, 他, 她, 我们…) và lời chào cơ bản (你好, 谢谢, 不客气, 再见…)',
        'Nắm vững cấu trúc khẳng định/phủ định với 是 và câu hỏi 吗, 什么, 谁, 哪',
        'Tập tự giới thiệu bản thân trong 5 câu (tên, quốc tịch, nghề nghiệp) và ghi âm lại',
        'Luyện viết chữ Hán: 我, 你, 好, 是, 人, 中, 国'
      ] },
    { id: 'hsk1-u2', title: 'Tuần 3: Gia đình, con số & lượng từ', desc: 'Các thành viên gia đình, đếm số 1–100, lượng từ 个, 口, 本, 岁.',
      tasks: [
        'Học 25 từ vựng về gia đình (爸爸, 妈妈, 儿子, 女儿) và số đếm 零 → 百',
        'Nắm vững cấu trúc sở hữu với 的, động từ 有/没有 và câu hỏi 几 / 多少',
        'Viết đoạn văn ngắn 5–6 câu giới thiệu gia đình mình (mấy người, tuổi, nghề nghiệp)',
        'Làm bài trắc nghiệm 30 câu về số đếm và lượng từ'
      ] },
    { id: 'hsk1-u3', title: 'Tuần 4: Thời gian, ngày tháng & lịch trình', desc: 'Thứ, ngày, tháng, năm, giờ phút và kế hoạch hằng ngày.',
      tasks: [
        'Học 25 từ chỉ thời gian (今天, 明天, 昨天, 年, 月, 日, 星期, 点, 分, 现在, 时候)',
        'Nắm vững trật tự thời gian trong tiếng Trung (từ lớn đến nhỏ: Năm → Tháng → Ngày → Thứ → Buổi → Giờ)',
        'Tập hỏi và trả lời về ngày sinh nhật, giờ giấc sinh hoạt hằng ngày',
        'Nghe 10 câu thông báo giờ giấc và ghi lại chính xác'
      ] },
    { id: 'hsk1-u4', title: 'Tuần 5: Ăn uống, mua sắm & tiền tệ', desc: 'Đồ ăn, thức uống, hoa quả, hỏi giá và gọi món.',
      tasks: [
        'Học 25 từ về đồ ăn thức uống (水, 茶, 米饭, 菜, 水果, 苹果, 杯子, 钱, 块, 买, 吃, 喝)',
        'Học động từ năng nguyện 想 (muốn) và câu hỏi 多少钱',
        'Đóng vai hội thoại gọi món ở quán ăn và hỏi giá khi đi mua hoa quả',
        'Ôn toàn bộ flashcard HSK 1 từ tuần 1 đến tuần 5'
      ] },
    { id: 'hsk1-u5', title: 'Tuần 6: Địa điểm, đi lại & hoạt động', desc: 'Trường học, bệnh viện, cửa hàng, phương tiện và vị trí.',
      tasks: [
        'Học 25 từ về địa điểm, phương tiện và động từ (学校, 医院, 商店, 饭店, 家, 北京, 飞机, 出租车, 去, 来, 回, 在, 坐, 开)',
        'Nắm vững cách dùng 在 (ở đâu / đang làm gì) và cấu trúc 在 + địa điểm + V',
        'Đặt 10 câu mô tả việc đi lại và hoạt động trong ngày',
        'Luyện viết chữ Hán các từ chỉ địa điểm và phương hướng (上, 下, 前, 后, 里)'
      ] },
    { id: 'hsk1-u6', title: 'Tuần 7–8: Thời tiết, sở thích & tổng ôn HSK 1', desc: 'Tính từ, thời tiết, động từ 会/能 và thi thử HSK 1.',
      tasks: [
        'Học 25 từ còn lại về thời tiết, tính từ và giao tiếp (天气, 冷, 热, 下雨, 高兴, 漂亮, 好, 大, 小, 多, 少, 会, 能, 喜欢, 爱)',
        'Nắm vững cấu trúc 太…了, 很 + Adj, động từ 会 / 能 và trợ từ 了',
        'Ôn tập toàn bộ 150 từ HSK 1 trên Flashcard SRS đạt tối thiểu 85% hộp ≥ 2',
        'Làm 2 đề thi thử HSK 1 (Nghe 20 câu + Đọc 20 câu) trong 40 phút'
      ] }
  ],
  vocab: [
    // Đại từ & chỉ định
    { w: '我', r: 'wǒ', hv: 'NGÃ', m: 'tôi, mình', t: 'Đại từ', ex: '我是越南人。', exr: 'Wǒ shì Yuènánrén.', exm: 'Tôi là người Việt Nam.' },
    { w: '你', r: 'nǐ', hv: 'NHĨ', m: 'bạn, anh, chị', t: 'Đại từ' },
    { w: '他', r: 'tā', hv: 'THA', m: 'anh ấy, ông ấy', t: 'Đại từ' },
    { w: '她', r: 'tā', hv: 'THA', m: 'cô ấy, bà ấy', t: 'Đại từ' },
    { w: '我们', r: 'wǒmen', hv: 'NGÃ MÔN', m: 'chúng tôi, chúng ta', t: 'Đại từ' },
    { w: '这', r: 'zhè', hv: 'GIÁ', m: 'này, đây', t: 'Đại từ', ex: '这是我的书。', exr: 'Zhè shì wǒ de shū.', exm: 'Đây là sách của tôi.' },
    { w: '那', r: 'nà', hv: 'NA', m: 'kia, đó', t: 'Đại từ' },
    { w: '哪', r: 'nǎ', hv: 'NẢ', m: 'nào', t: 'Đại từ', ex: '你是哪国人？', exr: 'Nǐ shì nǎ guó rén?', exm: 'Bạn là người nước nào?' },
    { w: '哪儿', r: 'nǎr', hv: 'NẢ NHI', m: 'ở đâu', t: 'Đại từ' },
    { w: '谁', r: 'shéi', hv: 'THÙY', m: 'ai', t: 'Đại từ', ex: '他是谁？', exr: 'Tā shì shéi?', exm: 'Anh ấy là ai?' },
    { w: '什么', r: 'shénme', hv: 'THẬP MA', m: 'cái gì, gì', t: 'Đại từ', ex: '你叫什么名字？', exr: 'Nǐ jiào shénme míngzi?', exm: 'Bạn tên là gì?' },
    { w: '多少', r: 'duōshao', hv: 'ĐA THIỂU', m: 'bao nhiêu', t: 'Đại từ' },
    { w: '几', r: 'jǐ', hv: 'KỶ', m: 'mấy (thường < 10)', t: 'Đại từ', ex: '你有几个苹果？', exr: 'Nǐ yǒu jǐ gè píngguǒ?', exm: 'Bạn có mấy quả táo?' },
    { w: '怎么', r: 'zěnme', hv: 'CHẨM MA', m: 'thế nào, làm sao', t: 'Đại từ', ex: '这个字怎么读？', exr: 'Zhège zì zěnme dú?', exm: 'Chữ này đọc thế nào?' },
    { w: '怎么样', r: 'zěnmeyàng', hv: 'CHẨM MA DẠNG', m: 'như thế nào, ra sao', t: 'Đại từ' },
    // Chào hỏi & giao tiếp
    { w: '你好', r: 'nǐ hǎo', hv: 'NHĨ HẢO', m: 'xin chào', t: 'Giao tiếp', ex: '你好，很高兴认识你。', exr: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ.', exm: 'Xin chào, rất vui được quen biết bạn.' },
    { w: '谢谢', r: 'xièxie', hv: 'TẠ TẠ', m: 'cảm ơn', t: 'Giao tiếp' },
    { w: '不客气', r: 'bú kèqi', hv: 'BẤT KHÁCH KHÍ', m: 'đừng khách sáo, không có gì', t: 'Giao tiếp' },
    { w: '对不起', r: 'duìbuqǐ', hv: 'ĐỐI BẤT KHỞI', m: 'xin lỗi', t: 'Giao tiếp' },
    { w: '没关系', r: 'méi guānxi', hv: 'MỘT QUAN HỆ', m: 'không sao đâu', t: 'Giao tiếp' },
    { w: '再见', r: 'zàijiàn', hv: 'TÁI KIẾN', m: 'tạm biệt', t: 'Giao tiếp' },
    { w: '请', r: 'qǐng', hv: 'THỈNH', m: 'mời, xin vui lòng', t: 'Giao tiếp', ex: '请坐，请喝茶。', exr: 'Qǐng zuò, qǐng hē chá.', exm: 'Mời ngồi, mời uống trà.' },
    { w: '喂', r: 'wéi', hv: 'ỦY', m: 'a-lô (nghe điện thoại)', t: 'Giao tiếp' },
    // Số đếm & lượng từ
    { w: '零', r: 'líng', hv: 'LINH', m: 'số không (0)', t: 'Số & Lượng' },
    { w: '一', r: 'yī', hv: 'NHẤT', m: 'số một (1)', t: 'Số & Lượng' },
    { w: '二', r: 'èr', hv: 'NHỊ', m: 'số hai (2)', t: 'Số & Lượng' },
    { w: '三', r: 'sān', hv: 'TAM', m: 'số ba (3)', t: 'Số & Lượng' },
    { w: '四', r: 'sì', hv: 'TỨ', m: 'số bốn (4)', t: 'Số & Lượng' },
    { w: '五', r: 'wǔ', hv: 'NGŨ', m: 'số năm (5)', t: 'Số & Lượng' },
    { w: '六', r: 'liù', hv: 'LỤC', m: 'số sáu (6)', t: 'Số & Lượng' },
    { w: '七', r: 'qī', hv: 'THẤT', m: 'số bảy (7)', t: 'Số & Lượng' },
    { w: '八', r: 'bā', hv: 'BÁT', m: 'số tám (8)', t: 'Số & Lượng' },
    { w: '九', r: 'jiǔ', hv: 'CỬU', m: 'số chín (9)', t: 'Số & Lượng' },
    { w: '十', r: 'shí', hv: 'THẬP', m: 'số mười (10)', t: 'Số & Lượng' },
    { w: '个', r: 'gè', hv: 'CÁ', m: 'cái, chiếc, người (lượng từ chung)', t: 'Số & Lượng' },
    { w: '岁', r: 'suì', hv: 'TUẾ', m: 'tuổi', t: 'Số & Lượng', ex: '我今年二十岁。', exr: 'Wǒ jīnnián èrshí suì.', exm: 'Năm nay tôi 20 tuổi.' },
    { w: '本', r: 'běn', hv: 'BẢN', m: 'quyển, cuốn (sách)', t: 'Số & Lượng' },
    { w: '些', r: 'xiē', hv: 'TA', m: 'một vài, những', t: 'Số & Lượng' },
    { w: '块', r: 'kuài', hv: 'KHỐI', m: 'đồng (tệ), miếng', t: 'Số & Lượng', ex: '这本书三十块钱。', exr: 'Zhè běn shū sānshí kuài qián.', exm: 'Quyển sách này 30 tệ.' },
    { w: '一点儿', r: 'yìdiǎnr', hv: 'NHẤT ĐIỂM NHI', m: 'một chút, một ít', t: 'Số & Lượng' },
    // Con người & gia đình
    { w: '家', r: 'jiā', hv: 'GIA', m: 'nhà, gia đình', t: 'Gia đình & Người', ex: '我家有四口人。', exr: 'Wǒ jiā yǒu sì kǒu rén.', exm: 'Nhà tôi có 4 người.' },
    { w: '爸爸', r: 'bàba', hv: 'BA BA', m: 'bố, ba', t: 'Gia đình & Người' },
    { w: '妈妈', r: 'māma', hv: 'MA MA', m: 'mẹ, má', t: 'Gia đình & Người' },
    { w: '儿子', r: 'érzi', hv: 'NHI TỬ', m: 'con trai', t: 'Gia đình & Người' },
    { w: '女儿', r: 'nǚ\'ér', hv: 'NỮ NHI', m: 'con gái', t: 'Gia đình & Người' },
    { w: '人', r: 'rén', hv: 'NHÂN', m: 'người', t: 'Gia đình & Người' },
    { w: '名字', r: 'míngzi', hv: 'DANH TỰ', m: 'tên', t: 'Gia đình & Người' },
    { w: '先生', r: 'xiānsheng', hv: 'TIÊN SINH', m: 'ông, ngài, chồng', t: 'Gia đình & Người' },
    { w: '小姐', r: 'xiǎojiě', hv: 'TIỂU TỶ', m: 'cô, tiểu thư', t: 'Gia đình & Người' },
    { w: '朋友', r: 'péngyou', hv: 'BẰNG HỮU', m: 'bạn bè', t: 'Gia đình & Người', ex: '他是我的好朋友。', exr: 'Tā shì wǒ de hǎo péngyou.', exm: 'Anh ấy là bạn thân của tôi.' },
    { w: '老师', r: 'lǎoshī', hv: 'LÃO SƯ', m: 'giáo viên, thầy/cô giáo', t: 'Gia đình & Người' },
    { w: '学生', r: 'xuésheng', hv: 'HỌC SINH', m: 'học sinh, sinh viên', t: 'Gia đình & Người' },
    { w: '同学', r: 'tóngxué', hv: 'ĐỒNG HỌC', m: 'bạn học, bạn cùng lớp', t: 'Gia đình & Người' },
    { w: '医生', r: 'yīshēng', hv: 'Y SINH', m: 'bác sĩ', t: 'Gia đình & Người' },
    // Thời gian
    { w: '今天', r: 'jīntiān', hv: 'KIM THIÊN', m: 'hôm nay', t: 'Thời gian', ex: '今天星期几？', exr: 'Jīntiān xīngqī jǐ?', exm: 'Hôm nay là thứ mấy?' },
    { w: '明天', r: 'míngtiān', hv: 'MINH THIÊN', m: 'ngày mai', t: 'Thời gian' },
    { w: '昨天', r: 'zuótiān', hv: 'TẠC THIÊN', m: 'hôm qua', t: 'Thời gian' },
    { w: '上午', r: 'shàngwǔ', hv: 'THƯỢNG NGỌ', m: 'buổi sáng', t: 'Thời gian' },
    { w: '中午', r: 'zhōngwǔ', hv: 'TRUNG NGỌ', m: 'buổi trưa', t: 'Thời gian' },
    { w: '下午', r: 'xiàwǔ', hv: 'HẠ NGỌ', m: 'buổi chiều', t: 'Thời gian' },
    { w: '年', r: 'nián', hv: 'NIÊN', m: 'năm', t: 'Thời gian' },
    { w: '月', r: 'yuè', hv: 'NGUYỆT', m: 'tháng; mặt trăng', t: 'Thời gian' },
    { w: '日', r: 'rì', hv: 'NHẬT', m: 'ngày; mặt trời', t: 'Thời gian' },
    { w: '星期', r: 'xīngqī', hv: 'TINH KỲ', m: 'tuần, thứ', t: 'Thời gian' },
    { w: '点', r: 'diǎn', hv: 'ĐIỂM', m: 'giờ (đồng hồ)', t: 'Thời gian', ex: '现在几点了？', exr: 'Xiànzài jǐ diǎn le?', exm: 'Bây giờ là mấy giờ rồi?' },
    { w: '分钟', r: 'fēnzhōng', hv: 'PHÂN CHUNG', m: 'phút', t: 'Thời gian' },
    { w: '现在', r: 'xiànzài', hv: 'HIỆN TẠI', m: 'bây giờ, hiện tại', t: 'Thời gian' },
    { w: '时候', r: 'shíhou', hv: 'THỜI HẬU', m: 'lúc, khi', t: 'Thời gian' },
    // Ăn uống & Đồ vật
    { w: '水', r: 'shuǐ', hv: 'THỦY', m: 'nước', t: 'Ăn uống & Đồ vật' },
    { w: '茶', r: 'chá', hv: 'TRÀ', m: 'trà', t: 'Ăn uống & Đồ vật' },
    { w: '米饭', r: 'mǐfàn', hv: 'MỄ PHẠN', m: 'cơm', t: 'Ăn uống & Đồ vật' },
    { w: '菜', r: 'cài', hv: 'THÁI', m: 'món ăn, rau', t: 'Ăn uống & Đồ vật', ex: '中国菜很好吃。', exr: 'Zhōngguó cài hěn hǎochī.', exm: 'Món ăn Trung Quốc rất ngon.' },
    { w: '水果', r: 'shuǐguǒ', hv: 'THỦY QUẢ', m: 'hoa quả, trái cây', t: 'Ăn uống & Đồ vật' },
    { w: '苹果', r: 'píngguǒ', hv: 'BÌNH QUẢ', m: 'quả táo', t: 'Ăn uống & Đồ vật' },
    { w: '杯子', r: 'bēizi', hv: 'BÔI TỬ', m: 'cốc, ly', t: 'Ăn uống & Đồ vật' },
    { w: '钱', r: 'qián', hv: 'TIỀN', m: 'tiền', t: 'Ăn uống & Đồ vật' },
    { w: '书', r: 'shū', hv: 'THƯ', m: 'sách', t: 'Ăn uống & Đồ vật' },
    { w: '汉语', r: 'Hànyǔ', hv: 'HÁN NGỮ', m: 'tiếng Hán, tiếng Trung', t: 'Ăn uống & Đồ vật', ex: '我学习汉语。', exr: 'Wǒ xuéxí Hànyǔ.', exm: 'Tôi học tiếng Trung.' },
    { w: '字', r: 'zì', hv: 'TỰ', m: 'chữ', t: 'Ăn uống & Đồ vật' },
    { w: '桌子', r: 'zhuōzi', hv: 'TRÁC TỬ', m: 'cái bàn', t: 'Ăn uống & Đồ vật' },
    { w: '椅子', r: 'yǐzi', hv: 'Ỷ TỬ', m: 'cái ghế', t: 'Ăn uống & Đồ vật' },
    { w: '电视', r: 'diànshì', hv: 'ĐIỆN THỊ', m: 'ti vi', t: 'Ăn uống & Đồ vật' },
    { w: '电脑', r: 'diànnǎo', hv: 'ĐIỆN NÃO', m: 'máy tính', t: 'Ăn uống & Đồ vật' },
    { w: '电影', r: 'diànyǐng', hv: 'ĐIỆN ẢNH', m: 'phim điện ảnh', t: 'Ăn uống & Đồ vật', ex: '我们去看电影吧。', exr: 'Wǒmen qù kàn diànyǐng ba.', exm: 'Chúng mình đi xem phim đi.' },
    { w: '飞机', r: 'fēijī', hv: 'PHI CƠ', m: 'máy bay', t: 'Ăn uống & Đồ vật' },
    { w: '出租车', r: 'chūzūchē', hv: 'XUẤT TÔ XA', m: 'xe taxi', t: 'Ăn uống & Đồ vật' },
    { w: '猫', r: 'māo', hv: 'MIÊU', m: 'con mèo', t: 'Ăn uống & Đồ vật' },
    { w: '狗', r: 'gǒu', hv: 'CẨU', m: 'con chó', t: 'Ăn uống & Đồ vật' },
    { w: '东西', r: 'dōngxi', hv: 'ĐÔNG TÂY', m: 'đồ đạc, thứ', t: 'Ăn uống & Đồ vật', ex: '我去商店买东西。', exr: 'Wǒ qù shāngdiàn mǎi dōngxi.', exm: 'Tôi đi cửa hàng mua đồ.' },
    { w: '衣服', r: 'yīfu', hv: 'Y PHỤC', m: 'quần áo', t: 'Ăn uống & Đồ vật' },
    // Địa điểm & Phương hướng
    { w: '中国', r: 'Zhōngguó', hv: 'TRUNG QUỐC', m: 'Trung Quốc', t: 'Địa điểm' },
    { w: '北京', r: 'Běijīng', hv: 'BẮC KINH', m: 'Bắc Kinh', t: 'Địa điểm' },
    { w: '学校', r: 'xuéxiào', hv: 'HỌC HIỆU', m: 'trường học', t: 'Địa điểm' },
    { w: '饭店', r: 'fàndiàn', hv: 'PHẠN ĐIẾM', m: 'nhà hàng, khách sạn', t: 'Địa điểm' },
    { w: '商店', r: 'shāngdiàn', hv: 'THƯƠNG ĐIẾM', m: 'cửa hàng', t: 'Địa điểm' },
    { w: '医院', r: 'yīyuàn', hv: 'Y VIỆN', m: 'bệnh viện', t: 'Địa điểm' },
    { w: '火车站', r: 'huǒchēzhàn', hv: 'HỎA XA TRẠM', m: 'ga tàu hỏa', t: 'Địa điểm' },
    { w: '上', r: 'shàng', hv: 'THƯỢNG', m: 'trên; lên; đi (học/làm)', t: 'Địa điểm' },
    { w: '下', r: 'xià', hv: 'HẠ', m: 'dưới; xuống; tan (học/làm)', t: 'Địa điểm' },
    { w: '前面', r: 'qiánmiàn', hv: 'TIỀN DIỆN', m: 'phía trước', t: 'Địa điểm' },
    { w: '后面', r: 'hòumiàn', hv: 'HẬU DIỆN', m: 'phía sau', t: 'Địa điểm' },
    { w: '里', r: 'lǐ', hv: 'LÝ', m: 'bên trong', t: 'Địa điểm' },
    // Động từ
    { w: '是', r: 'shì', hv: 'THỊ', m: 'là', t: 'Động từ' },
    { w: '有', r: 'yǒu', hv: 'HỮU', m: 'có', t: 'Động từ', ex: '我有一本汉语书。', exr: 'Wǒ yǒu yì běn Hànyǔ shū.', exm: 'Tôi có một quyển sách tiếng Trung.' },
    { w: '在', r: 'zài', hv: 'TẠI', m: 'ở; đang', t: 'Động từ', ex: '他在家看电视。', exr: 'Tā zài jiā kàn diànshì.', exm: 'Anh ấy ở nhà xem tivi.' },
    { w: '看', r: 'kàn', hv: 'KHÁN', m: 'nhìn, xem, đọc', t: 'Động từ' },
    { w: '看见', r: 'kànjiàn', hv: 'KHÁN KIẾN', m: 'nhìn thấy', t: 'Động từ' },
    { w: '听', r: 'tīng', hv: 'THÍNH', m: 'nghe', t: 'Động từ' },
    { w: '说话', r: 'shuōhuà', hv: 'THUYẾT THOẠI', m: 'nói chuyện', t: 'Động từ' },
    { w: '读', r: 'dú', hv: 'ĐỘC', m: 'đọc (thành tiếng)', t: 'Động từ' },
    { w: '写', r: 'xiě', hv: 'TẢ', m: 'viết', t: 'Động từ' },
    { w: '吃', r: 'chī', hv: 'NGẬT', m: 'ăn', t: 'Động từ' },
    { w: '喝', r: 'hē', hv: 'HÁT', m: 'uống', t: 'Động từ' },
    { w: '睡觉', r: 'shuìjiào', hv: 'THỤY GIÁC', m: 'ngủ', t: 'Động từ' },
    { w: '打电话', r: 'dǎ diànhuà', hv: 'ĐẢ ĐIỆN THOẠI', m: 'gọi điện thoại', t: 'Động từ' },
    { w: '做', r: 'zuò', hv: 'TỐ', m: 'làm, nấu', t: 'Động từ', ex: '妈妈做的菜很好吃。', exr: 'Māma zuò de cài hěn hǎochī.', exm: 'Món mẹ nấu rất ngon.' },
    { w: '买', r: 'mǎi', hv: 'MÃI', m: 'mua', t: 'Động từ' },
    { w: '开', r: 'kāi', hv: 'KHAI', m: 'mở; lái (xe)', t: 'Động từ' },
    { w: '坐', r: 'zuò', hv: 'TỌA', m: 'ngồi; đi bằng (tàu/xe)', t: 'Động từ' },
    { w: '住', r: 'zhù', hv: 'TRÚ', m: 'sống, ở', t: 'Động từ' },
    { w: '学习', r: 'xuéxí', hv: 'HỌC TẬP', m: 'học tập', t: 'Động từ' },
    { w: '工作', r: 'gōngzuò', hv: 'CÔNG TÁC', m: 'làm việc; công việc', t: 'Động từ' },
    { w: '下雨', r: 'xiàyǔ', hv: 'HẠ VŨ', m: 'mưa', t: 'Động từ' },
    { w: '来', r: 'lái', hv: 'LAI', m: 'đến', t: 'Động từ' },
    { w: '去', r: 'qù', hv: 'KHỨ', m: 'đi', t: 'Động từ' },
    { w: '回', r: 'huí', hv: 'HỒI', m: 'về, trở về', t: 'Động từ', ex: '我下午五点回家。', exr: 'Wǒ xiàwǔ wǔ diǎn huí jiā.', exm: 'Chiều 5 giờ tôi về nhà.' },
    { w: '爱', r: 'ài', hv: 'ÁI', m: 'yêu, thích', t: 'Động từ' },
    { w: '喜欢', r: 'xǐhuan', hv: 'HỈ HOAN', m: 'thích', t: 'Động từ', ex: '我喜欢喝茶。', exr: 'Wǒ xǐhuan hē chá.', exm: 'Tôi thích uống trà.' },
    { w: '想', r: 'xiǎng', hv: 'TƯỞNG', m: 'muốn; nghĩ; nhớ', t: 'Động từ', ex: '我想买这本书。', exr: 'Wǒ xiǎng mǎi zhè běn shū.', exm: 'Tôi muốn mua quyển sách này.' },
    { w: '认识', r: 'rènshi', hv: 'NHẬN THỨC', m: 'quen biết', t: 'Động từ' },
    { w: '会', r: 'huì', hv: 'HỘI', m: 'biết (kỹ năng); sẽ', t: 'Động từ', ex: '我会说汉语。', exr: 'Wǒ huì shuō Hànyǔ.', exm: 'Tôi biết nói tiếng Trung.' },
    { w: '能', r: 'néng', hv: 'NĂNG', m: 'có thể', t: 'Động từ' },
    { w: '叫', r: 'jiào', hv: 'KIẾU', m: 'gọi là, tên là', t: 'Động từ' },
    // Tính từ, Phó từ & Trợ từ
    { w: '好', r: 'hǎo', hv: 'HẢO', m: 'tốt, khỏe, ngon', t: 'Tính từ & Phó từ' },
    { w: '大', r: 'dà', hv: 'ĐẠI', m: 'to, lớn', t: 'Tính từ & Phó từ' },
    { w: '小', r: 'xiǎo', hv: 'TIỂU', m: 'nhỏ, bé', t: 'Tính từ & Phó từ' },
    { w: '多', r: 'duō', hv: 'ĐA', m: 'nhiều', t: 'Tính từ & Phó từ' },
    { w: '少', r: 'shǎo', hv: 'THIỂU', m: 'ít', t: 'Tính từ & Phó từ' },
    { w: '冷', r: 'lěng', hv: 'LÃNH', m: 'lạnh', t: 'Tính từ & Phó từ' },
    { w: '热', r: 'rè', hv: 'NHIỆT', m: 'nóng', t: 'Tính từ & Phó từ' },
    { w: '高兴', r: 'gāoxìng', hv: 'CAO HỨNG', m: 'vui vẻ', t: 'Tính từ & Phó từ' },
    { w: '漂亮', r: 'piàoliang', hv: 'PHIÊU LƯỢNG', m: 'đẹp, xinh đẹp', t: 'Tính từ & Phó từ' },
    { w: '天气', r: 'tiānqì', hv: 'THIÊN KHÍ', m: 'thời tiết', t: 'Tính từ & Phó từ', ex: '今天天气很好。', exr: 'Jīntiān tiānqì hěn hǎo.', exm: 'Thời tiết hôm nay rất đẹp.' },
    { w: '不', r: 'bù', hv: 'BẤT', m: 'không (phủ định)', t: 'Tính từ & Phó từ' },
    { w: '没', r: 'méi', hv: 'MỘT', m: 'không có; chưa', t: 'Tính từ & Phó từ' },
    { w: '很', r: 'hěn', hv: 'NGẬN', m: 'rất', t: 'Tính từ & Phó từ' },
    { w: '太', r: 'tài', hv: 'THÁI', m: 'quá, lắm', t: 'Tính từ & Phó từ' },
    { w: '都', r: 'dōu', hv: 'ĐÔ', m: 'đều', t: 'Tính từ & Phó từ', ex: '我们都是学生。', exr: 'Wǒmen dōu shì xuésheng.', exm: 'Chúng tôi đều là học sinh.' },
    { w: '和', r: 'hé', hv: 'HÒA', m: 'và, với', t: 'Tính từ & Phó từ' },
    { w: '的', r: 'de', hv: 'ĐÍCH', m: 'của (trợ từ định ngữ)', t: 'Tính từ & Phó từ' },
    { w: '了', r: 'le', hv: 'LIỄU', m: 'rồi, đã (trợ từ)', t: 'Tính từ & Phó từ' },
    { w: '吗', r: 'ma', hv: 'MA', m: 'không? (trợ từ nghi vấn)', t: 'Tính từ & Phó từ' },
    { w: '呢', r: 'ne', hv: 'NI', m: 'thế còn…? / đang…', t: 'Tính từ & Phó từ' }
  ],
  grammar: [
    { title: 'Câu khẳng định và phủ định với 是 (shì)', pattern: 'A + 是 / 不是 + B',
      explain: 'Dùng 是 để nối chủ ngữ với danh từ ("là"). Phủ định dùng 不是 (bú shì). Lưu ý: KHÔNG dùng 是 trước tính từ (không nói 我是好, phải nói 我很好).',
      examples: [
        { s: '我是学生。', r: 'Wǒ shì xuésheng.', m: 'Tôi là học sinh.' },
        { s: '他不是老师，他是医生。', r: 'Tā bú shì lǎoshī, tā shì yīshēng.', m: 'Anh ấy không phải giáo viên, anh ấy là bác sĩ.' }
      ] },
    { title: 'Câu hỏi是非 với trợ từ 吗 (ma) và 呢 (ne)', pattern: 'Câu trần thuật + 吗？ / Danh từ + 呢？',
      explain: 'Thêm 吗 vào cuối câu trần thuật để tạo câu hỏi Có/Không. Dùng 呢 sau danh từ/đại từ để hỏi ngược lại "Còn… thì sao?".',
      examples: [
        { s: '你是中国人吗？', r: 'Nǐ shì Zhōngguórén ma?', m: 'Bạn là người Trung Quốc phải không?' },
        { s: '我很好，你呢？', r: 'Wǒ hěn hǎo, nǐ ne?', m: 'Tôi rất khỏe, còn bạn thì sao?' }
      ] },
    { title: 'Trợ từ kết cấu 的 (de) chỉ sở hữu và định ngữ', pattern: 'Định ngữ (Người/Tính từ) + 的 + Danh từ trung tâm',
      explain: 'Trong tiếng Trung, từ bổ nghĩa luôn đứng TRƯỚC danh từ chính, nối bằng 的 (ngược với tiếng Việt). Với quan hệ thân thuộc hoặc tập thể có thể lược 的 (我妈妈, 我们学校).',
      examples: [
        { s: '这是我的汉语书。', r: 'Zhè shì wǒ de Hànyǔ shū.', m: 'Đây là sách tiếng Trung của tôi.' },
        { s: '我妈妈的朋友很漂亮。', r: 'Wǒ māma de péngyou hěn piàoliang.', m: 'Bạn của mẹ tôi rất xinh đẹp.' }
      ] },
    { title: 'Động từ 有 (yǒu) và phủ định 没有 (méiyǒu)', pattern: 'A + 有 / 没有 + B',
      explain: '有 nghĩa là "có" (sở hữu hoặc tồn tại). Phủ định của 有 BẮT BUỘC là 没有 (tuyệt đối không dùng 不有).',
      examples: [
        { s: '我有两个好朋友。', r: 'Wǒ yǒu liǎng gè hǎo péngyou.', m: 'Tôi có hai người bạn tốt.' },
        { s: '我今天没有钱。', r: 'Wǒ jīntiān méiyǒu qián.', m: 'Hôm nay tôi không có tiền.' }
      ] },
    { title: 'Số từ + Lượng từ + Danh từ', pattern: 'Số từ / 这 / 那 / 几 + Lượng từ + Danh từ',
      explain: 'Giữa số từ (hoặc 这, 那, 哪, 几) và danh từ bắt buộc phải có lượng từ phù hợp (个, 本, 口, 杯, 块…). Khi đếm 2 với lượng từ, dùng 两 (liǎng) chứ không dùng 二.',
      examples: [
        { s: '我想买三本书和两个杯子。', r: 'Wǒ xiǎng mǎi sān běn shū hé liǎng gè bēizi.', m: 'Tôi muốn mua 3 quyển sách và 2 cái cốc.' },
        { s: '那个人是谁？', r: 'Nàge rén shì shéi?', m: 'Người kia là ai?' }
      ] },
    { title: 'Cách dùng 在 (zài): động từ chỉ vị trí và giới từ', pattern: 'S + 在 + Địa điểm (+ V + O)',
      explain: 'Khi đứng một mình, 在 là động từ "ở tại". Khi đứng trước động từ khác, "在 + địa điểm" làm trạng ngữ chỉ nơi diễn ra hành động và phải đặt TRƯỚC động từ.',
      examples: [
        { s: '爸爸在医院。', r: 'Bàba zài yīyuàn.', m: 'Bố ở bệnh viện.' },
        { s: '我在学校学习汉语。', r: 'Wǒ zài xuéxiào xuéxí Hànyǔ.', m: 'Tôi học tiếng Trung ở trường.' }
      ] },
    { title: 'Câu vị ngữ tính từ với 很 (hěn) và 太…了 (tài…le)', pattern: 'S + 很 + Adj / 太 + Adj + 了',
      explain: 'Câu khẳng định có vị ngữ là tính từ thường thêm 很 phía trước (trong nhiều trường hợp 很 chỉ làm câu cân đối, không nhấn mạnh "rất"). Dùng 太 + Adj + 了 để cảm thán "quá… rồi!".',
      examples: [
        { s: '今天天气很冷。', r: 'Jīntiān tiānqì hěn lěng.', m: 'Hôm nay thời tiết lạnh.' },
        { s: '这件衣服太漂亮了！', r: 'Zhè jiàn yīfu tài piàoliang le!', m: 'Bộ quần áo này đẹp quá!' }
      ] },
    { title: 'Động từ năng nguyện 会 (huì), 能 (néng), 想 (xiǎng)', pattern: 'S + 会 / 能 / 想 + V + O',
      explain: '想: muốn làm gì. 会: biết làm gì (do học mà có) hoặc "sẽ" (dự đoán). 能: có khả năng hoặc điều kiện/sự cho phép để làm gì.',
      examples: [
        { s: '我会做中国菜。', r: 'Wǒ huì zuò Zhōngguó cài.', m: 'Tôi biết nấu món Trung Quốc.' },
        { s: '明天我不能去学校。', r: 'Míngtiān wǒ bù néng qù xuéxiào.', m: 'Ngày mai tôi không thể đến trường.' }
      ] },
    { title: 'Câu liên động với 去 (qù) / 来 (lái)', pattern: 'S + 去 / 来 (+ Địa điểm) + V + O',
      explain: 'Hai động từ nối tiếp nhau theo trình tự thời gian hoặc mục đích: đi/đến đâu để làm gì.',
      examples: [
        { s: '下午我去商店买水果。', r: 'Xiàwǔ wǒ qù shāngdiàn mǎi shuǐguǒ.', m: 'Buổi chiều tôi đi cửa hàng mua hoa quả.' },
        { s: '他来我家吃饭。', r: 'Tā lái wǒ jiā chīfàn.', m: 'Anh ấy đến nhà tôi ăn cơm.' }
      ] },
    { title: 'Trợ từ ngữ khí 了 (le) biểu thị sự thay đổi hoặc hoàn thành', pattern: 'S + V + O + 了',
      explain: 'Đặt 了 ở cuối câu để biểu thị sự việc đã xảy ra hoặc có trạng thái mới xuất hiện ("rồi"). Phủ định quá khứ dùng 没(有) + V và bỏ 了.',
      examples: [
        { s: '下雨了，我们回家吧。', r: 'Xiàyǔ le, wǒmen huí jiā ba.', m: 'Trời mưa rồi, chúng ta về nhà thôi.' },
        { s: '昨天我没看电影。', r: 'Zuótiān wǒ méi kàn diànyǐng.', m: 'Hôm qua tôi đã không xem phim.' }
      ] }
  ]
});

/* ============================================================
   HSK 2: SƠ CẤP VỮNG VÀNG (+150 TỪ MỚI, TỔNG 300 TỪ)
   ============================================================ */
LANG_DATA.zh.levels.push({
  id: 'hsk2',
  name: 'HSK 2',
  title: 'Sơ cấp giao tiếp',
  duration: '8–10 tuần',
  color: '#f97316',
  description: 'Mở rộng vốn từ lên 300 từ và các cấu trúc giao tiếp linh hoạt: so sánh, bổ ngữ kết quả, bổ ngữ trình độ, kinh nghiệm với 过, hành động đang tiếp diễn và câu cầu khiến/đề nghị.',
  goals: [
    'Nắm vững ~120–150 từ mới HSK 2 (tích lũy 300 từ), đọc viết thành thạo',
    'Diễn đạt trôi chảy về sức khỏe, thể thao, du lịch, hỏi đường, công việc, sở thích và so sánh',
    'Sử dụng đúng 10 cấu trúc ngữ pháp trọng tâm HSK 2 (比, 过, 着, 正在, 得, 因为…所以, 虽然…但是…)',
    'Đọc hiểu các đoạn hội thoại và mẩu tin ngắn 150–200 chữ không cần pinyin',
    'Đạt ≥ 180/200 điểm trong đề thi thử HSK 2'
  ],
  units: [
    { id: 'hsk2-u1', title: 'Tuần 1–2: Sinh hoạt hằng ngày, thể thao & sức khỏe', desc: 'Thói quen mỗi ngày, vận động, khám bệnh và nghỉ ngơi.',
      tasks: [
        'Học 25 từ về sinh hoạt, thể thao và sức khỏe (起床, 跑步, 游泳, 打篮球, 踢足球, 生病, 吃药, 身体, 休息, 累, 忙)',
        'Nắm vững cấu trúc thời lượng và câu hỏi 多长时间 / 什么时候',
        'Viết đoạn văn 80 chữ kể về lịch sinh hoạt một ngày của bạn',
        'Nghe 10 đoạn hội thoại ngắn về chủ đề sức khỏe và thể thao'
      ] },
    { id: 'hsk2-u2', title: 'Tuần 3–4: Mua sắm, màu sắc, quần áo & so sánh', desc: 'Miêu tả đồ vật, màu sắc, giá cả và câu so sánh 比.',
      tasks: [
        'Học 25 từ về màu sắc, trang phục và tính từ (颜色, 红, 白, 黑, 件, 穿, 洗, 贵, 便宜, 新, 旧, 长, 短, 高)',
        'Thành thạo cấu trúc so sánh A 比 B + Adj (+ 一点儿 / 得多) và A 没有 B + Adj',
        'Đặt 10 câu so sánh thời tiết, giá cả, chiều cao giữa hai người/vật',
        'Làm bài trắc nghiệm 30 câu từ vựng chủ đề mua sắm – màu sắc'
      ] },
    { id: 'hsk2-u3', title: 'Tuần 5: Hỏi đường, phương tiện & khoảng cách', desc: 'Phương hướng, khoảng cách, phương tiện đi lại.',
      tasks: [
        'Học 20 từ về giao thông và vị trí (公共汽车, 船, 路, 机场, 教室, 房间, 左边, 右边, 旁边, 外, 远, 近, 走, 到, 离)',
        'Nắm vững cấu trúc khoảng cách A 离 B 很近/远 và从 A 到 B',
        'Tập chỉ đường từ nhà đến trường/công ty bằng tiếng Trung',
        'Luyện viết chữ Hán các từ chỉ vị trí và giao thông'
      ] },
    { id: 'hsk2-u4', title: 'Tuần 6: Kinh nghiệm (过), đang diễn ra (正在/着) & bổ ngữ kết quả', desc: 'Kể về trải nghiệm, hành động đang tiếp diễn và kết quả.',
      tasks: [
        'Học 20 từ động từ & bổ ngữ (完, 懂, 到, 找, 告诉, 问, 回答, 准备, 开始, 帮助, 介绍, 等, 让, 给, 送)',
        'Phân biệt rõ V + 过 (đã từng), V + 了 (đã hoàn thành) và 正在 + V + 着 (đang)',
        'Viết 8 câu kể về những nơi bạn đã từng đi và món ăn đã từng thử',
        'Làm 20 câu bài tập điền bổ ngữ kết quả (看完, 听懂, 找到, 买到)'
      ] },
    { id: 'hsk2-u5', title: 'Tuần 7: Bổ ngữ trạng thái (得) & liên từ logic', desc: 'Đánh giá mức độ hành động và nối câu nguyên nhân – chuyển折.',
      tasks: [
        'Học 20 từ về liên từ, phó từ và cảm xúc (因为, 所以, 虽然, 但是, 就, 才, 还, 再, 又, 真, 非常, 最, 快乐, 笑, 哭)',
        'Nắm vững cấu trúc V + 得 + Adj (nói nhanh, viết đẹp, nấu ngon)',
        'Viết 6 câu ghép dùng 因为…所以… và 虽然…但是…',
        'Ôn toàn bộ flashcard HSK 2'
      ] },
    { id: 'hsk2-u6', title: 'Tuần 8–10: Tổng ôn 300 từ & thi thử HSK 2', desc: 'Hệ thống hóa từ vựng, ngữ pháp và luyện đề chuẩn.',
      tasks: [
        'Học các từ còn lại về gia đình, công việc, lễ tết (哥哥, 姐姐, 弟弟, 妹妹, 丈夫, 妻子, 孩子, 服务员, 公司, 生日, 旅游, 考试, 题, 课, 报纸, 牛奶, 鸡蛋, 羊肉, 鱼, 咖啡)',
        'Ôn tập 10 cấu trúc ngữ pháp HSK 2 và làm 40 câu trắc nghiệm tổng hợp',
        'Làm 2 đề thi thử HSK 2 (Nghe 35 câu + Đọc 25 câu) trong 55 phút',
        'Đánh dấu hoàn thành lộ trình HSK 2 khi đạt ≥ 85% điểm'
      ] }
  ],
  vocab: [
    // Gia đình & Con người
    { w: '哥哥', r: 'gēge', hv: 'CA CA', m: 'anh trai', t: 'Gia đình & Người' },
    { w: '姐姐', r: 'jiějie', hv: 'TỶ TỶ', m: 'chị gái', t: 'Gia đình & Người' },
    { w: '弟弟', r: 'dìdi', hv: 'ĐỆ ĐỆ', m: 'em trai', t: 'Gia đình & Người' },
    { w: '妹妹', r: 'mèimei', hv: 'MUỘI MUỘI', m: 'em gái', t: 'Gia đình & Người' },
    { w: '丈夫', r: 'zhàngfu', hv: 'TRƯỢNG PHU', m: 'chồng', t: 'Gia đình & Người' },
    { w: '妻子', r: 'qīzi', hv: 'THÊ TỬ', m: 'vợ', t: 'Gia đình & Người' },
    { w: '孩子', r: 'háizi', hv: 'HÀI TỬ', m: 'con cái, trẻ con', t: 'Gia đình & Người' },
    { w: '男人', r: 'nánrén', hv: 'NAM NHÂN', m: 'đàn ông', t: 'Gia đình & Người' },
    { w: '女人', r: 'nǚrén', hv: 'NỮ NHÂN', m: 'phụ nữ', t: 'Gia đình & Người' },
    { w: '服务员', r: 'fúwùyuán', hv: 'PHỤC VỤ VIÊN', m: 'nhân viên phục vụ', t: 'Gia đình & Người' },
    { w: '大家', r: 'dàjiā', hv: 'ĐẠI GIA', m: 'mọi người', t: 'Gia đình & Người', ex: '大家好！', exr: 'Dàjiā hǎo!', exm: 'Chào mọi người!' },
    { w: '您', r: 'nín', hv: 'NẪM', m: 'ngài, ông/bà (kính칭 của 你)', t: 'Gia đình & Người' },
    { w: '它', r: 'tā', hv: 'THA', m: 'nó (đồ vật, con vật)', t: 'Gia đình & Người' },
    { w: '每', r: 'měi', hv: 'MỖI', m: 'mỗi', t: 'Gia đình & Người', ex: '我每天都学习汉语。', exr: 'Wǒ měitiān dōu xuéxí Hànyǔ.', exm: 'Mỗi ngày tôi đều học tiếng Trung.' },
    // Thời gian & Số lượng
    { w: '早上', r: 'zǎoshang', hv: 'TẢO THƯỢNG', m: 'buổi sáng sớm', t: 'Thời gian & Số' },
    { w: '晚上', r: 'wǎnshang', hv: 'VÃN THƯỢNG', m: 'buổi tối', t: 'Thời gian & Số' },
    { w: '去年', r: 'qùnián', hv: 'KHỨ NIÊN', m: 'năm ngoái', t: 'Thời gian & Số' },
    { w: '小时', r: 'xiǎoshí', hv: 'TIỂU THỜI', m: 'tiếng đồng hồ, giờ', t: 'Thời gian & Số' },
    { w: '时间', r: 'shíjiān', hv: 'THỜI GIAN', m: 'thời gian', t: 'Thời gian & Số', ex: '我今天没有时间。', exr: 'Wǒ jīntiān méiyǒu shíjiān.', exm: 'Hôm nay tôi không có thời gian.' },
    { w: '生日', r: 'shēngrì', hv: 'SINH NHẬT', m: 'sinh nhật', t: 'Thời gian & Số', ex: '祝你生日快乐！', exr: 'Zhù nǐ shēngrì kuàilè!', exm: 'Chúc bạn sinh nhật vui vẻ!' },
    { w: '百', r: 'bǎi', hv: 'BÁCH', m: 'trăm (100)', t: 'Thời gian & Số' },
    { w: '千', r: 'qiān', hv: 'THIÊN', m: 'nghìn (1.000)', t: 'Thời gian & Số' },
    { w: '第一', r: 'dì-yī', hv: 'ĐỆ NHẤT', m: 'thứ nhất, đầu tiên', t: 'Thời gian & Số' },
    { w: '次', r: 'cì', hv: 'THỨ', m: 'lần', t: 'Thời gian & Số', ex: '我去过一次北京。', exr: 'Wǒ qùguo yí cì Běijīng.', exm: 'Tôi đã từng đi Bắc Kinh một lần.' },
    { w: '件', r: 'jiàn', hv: 'KIỆN', m: 'chiếc, bộ (quần áo), việc', t: 'Thời gian & Số' },
    { w: '张', r: 'zhāng', hv: 'TRƯƠNG', m: 'tờ, tấm, chiếc (vé, bàn)', t: 'Thời gian & Số' },
    { w: '两', r: 'liǎng', hv: 'LƯỠNG', m: 'hai (đi với lượng từ)', t: 'Thời gian & Số' },
    // Ăn uống, Đồ vật & Đời sống
    { w: '牛奶', r: 'niúnǎi', hv: 'NGƯU NÃI', m: 'sữa bò', t: 'Đời sống & Đồ vật' },
    { w: '鸡蛋', r: 'jīdàn', hv: 'KÊ ĐẢN', m: 'trứng gà', t: 'Đời sống & Đồ vật' },
    { w: '西瓜', r: 'xīguā', hv: 'TÂY QUA', m: 'dưa hấu', t: 'Đời sống & Đồ vật' },
    { w: '咖啡', r: 'kāfēi', hv: 'CA PHÊ', m: 'cà phê', t: 'Đời sống & Đồ vật' },
    { w: '羊肉', r: 'yángròu', hv: 'DƯƠNG NHỤC', m: 'thịt dê/cừu', t: 'Đời sống & Đồ vật' },
    { w: '鱼', r: 'yú', hv: 'NGƯ', m: 'cá', t: 'Đời sống & Đồ vật' },
    { w: '面条', r: 'miàntiáo', hv: 'DIỆN ĐIỀU', m: 'mì sợi', t: 'Đời sống & Đồ vật' },
    { w: '药', r: 'yào', hv: 'DƯỢC', m: 'thuốc', t: 'Đời sống & Đồ vật' },
    { w: '身体', r: 'shēntǐ', hv: 'THÂN THỂ', m: 'cơ thể, sức khỏe', t: 'Đời sống & Đồ vật' },
    { w: '眼睛', r: 'yǎnjing', hv: 'NHÃN TINH', m: 'đôi mắt', t: 'Đời sống & Đồ vật' },
    { w: '手机', r: 'shǒujī', hv: 'THỦ CƠ', m: 'điện thoại di động', t: 'Đời sống & Đồ vật' },
    { w: '手表', r: 'shǒubiǎo', hv: 'THỦ BIỂU', m: 'đồng hồ đeo tay', t: 'Đời sống & Đồ vật' },
    { w: '报纸', r: 'bàozhǐ', hv: 'BÁO CHỈ', m: 'báo giấy', t: 'Đời sống & Đồ vật' },
    { w: '门', r: 'mén', hv: 'MÔN', m: 'cửa', t: 'Đời sống & Đồ vật' },
    { w: '票', r: 'piào', hv: 'PHIẾU', m: 'vé', t: 'Đời sống & Đồ vật' },
    { w: '课', r: 'kè', hv: 'KHÓA', m: 'bài học, tiết học', t: 'Đời sống & Đồ vật' },
    { w: '题', r: 'tí', hv: 'ĐỀ', m: 'câu hỏi, đề bài', t: 'Đời sống & Đồ vật' },
    { w: '问题', r: 'wèntí', hv: 'VẤN ĐỀ', m: 'vấn đề, câu hỏi', t: 'Đời sống & Đồ vật' },
    { w: '考试', r: 'kǎoshì', hv: 'KHẢO THÍ', m: 'kỳ thi, thi cử', t: 'Đời sống & Đồ vật' },
    { w: '意思', r: 'yìsi', hv: 'Ý TỨ', m: 'ý nghĩa', t: 'Đời sống & Đồ vật', ex: '这个词是什么意思？', exr: 'Zhège cí shì shénme yìsi?', exm: 'Từ này có nghĩa là gì?' },
    { w: '颜色', r: 'yánsè', hv: 'NHAN SẮC', m: 'màu sắc', t: 'Đời sống & Đồ vật' },
    { w: '事情', r: 'shìqing', hv: 'SỰ TÌNH', m: 'sự việc, công việc', t: 'Đời sống & Đồ vật' },
    // Địa điểm & Giao thông
    { w: '公司', r: 'gōngsī', hv: 'CÔNG TY', m: 'công ty', t: 'Địa điểm & Đi lại' },
    { w: '机场', r: 'jīchǎng', hv: 'CƠ TRƯỜNG', m: 'sân bay', t: 'Địa điểm & Đi lại' },
    { w: '教室', r: 'jiàoshì', hv: 'GIÁO THẤT', m: 'phòng học, lớp học', t: 'Địa điểm & Đi lại' },
    { w: '房间', r: 'fángjiān', hv: 'PHÒNG GIAN', m: 'căn phòng', t: 'Địa điểm & Đi lại' },
    { w: '路', r: 'lù', hv: 'LỘ', m: 'con đường', t: 'Địa điểm & Đi lại' },
    { w: '公共汽车', r: 'gōnggòng qìchē', hv: 'CÔNG CỘNG KHÍ XA', m: 'xe buýt', t: 'Địa điểm & Đi lại' },
    { w: '自行车', r: 'zìxíngchē', hv: 'TỰ HÀNH XA', m: 'xe đạp', t: 'Địa điểm & Đi lại' },
    { w: '船', r: 'chuán', hv: 'THUYỀN', m: 'tàu thủy, thuyền', t: 'Địa điểm & Đi lại' },
    { w: '左边', r: 'zuǒbian', hv: 'TẢ BIÊN', m: 'bên trái', t: 'Địa điểm & Đi lại' },
    { w: '右边', r: 'yòubian', hv: 'HỮU BIÊN', m: 'bên phải', t: 'Địa điểm & Đi lại' },
    { w: '旁边', r: 'pángbiān', hv: 'BÀNG BIÊN', m: 'bên cạnh', t: 'Địa điểm & Đi lại' },
    { w: '外', r: 'wài', hv: 'NGOẠI', m: 'bên ngoài', t: 'Địa điểm & Đi lại' },
    // Động từ
    { w: '起床', r: 'qǐchuáng', hv: 'KHỞI SÀNG', m: 'thức dậy', t: 'Động từ', ex: '我每天六点起床。', exr: 'Wǒ měitiān liù diǎn qǐchuáng.', exm: 'Mỗi ngày tôi thức dậy lúc 6 giờ.' },
    { w: '跑步', r: 'pǎobù', hv: 'BẢO BỘ', m: 'chạy bộ', t: 'Động từ' },
    { w: '走路', r: 'zǒulù', hv: 'TẨU LỘ', m: 'đi bộ', t: 'Động từ' },
    { w: '游泳', r: 'yóuyǒng', hv: 'DU VỊNH', m: 'bơi lội', t: 'Động từ' },
    { w: '打篮球', r: 'dǎ lánqiú', hv: 'ĐẢ LAM CẦU', m: 'chơi bóng rổ', t: 'Động từ' },
    { w: '踢足球', r: 'tī zúqiú', hv: 'THÍCH TÚC CẦU', m: 'đá bóng', t: 'Động từ' },
    { w: '跳舞', r: 'tiàowǔ', hv: 'KHIÊU VŨ', m: 'nhảy múa, khiêu vũ', t: 'Động từ' },
    { w: '唱歌', r: 'chànggē', hv: 'XƯỚNG CA', m: 'ca hát', t: 'Động từ' },
    { w: '旅游', r: 'lǚyóu', hv: 'LỮ DU', m: 'du lịch', t: 'Động từ', ex: '我想去中国旅游。', exr: 'Wǒ xiǎng qù Zhōngguó lǚyóu.', exm: 'Tôi muốn đi Trung Quốc du lịch.' },
    { w: '上班', r: 'shàngbān', hv: 'THƯỢNG BAN', m: 'đi làm', t: 'Động từ' },
    { w: '生病', r: 'shēngbìng', hv: 'SINH BỆNH', m: 'bị ốm, đổ bệnh', t: 'Động từ' },
    { w: '休息', r: 'xiūxi', hv: 'HƯU TỨC', m: 'nghỉ ngơi', t: 'Động từ' },
    { w: '穿', r: 'chuān', hv: 'XUYÊN', m: 'mặc (quần áo), đi (giày)', t: 'Động từ' },
    { w: '洗', r: 'xǐ', hv: 'TẨY', m: 'giặt, rửa', t: 'Động từ' },
    { w: '给', r: 'gěi', hv: 'CẤP', m: 'cho, đưa cho', t: 'Động từ', ex: '妈妈给我买了一件衣服。', exr: 'Māma gěi wǒ mǎile yí jiàn yīfu.', exm: 'Mẹ mua cho tôi một bộ quần áo.' },
    { w: '送', r: 'sòng', hv: 'TỐNG', m: 'tặng; tiễn; giao', t: 'Động từ' },
    { w: '找', r: 'zhǎo', hv: 'TRẢO', m: 'tìm; thối tiền', t: 'Động từ' },
    { w: '懂', r: 'dǒng', hv: 'ĐỔNG', m: 'hiểu', t: 'Động từ', ex: '你听懂了吗？', exr: 'Nǐ tīngdǒng le ma?', exm: 'Bạn nghe hiểu chưa?' },
    { w: '完', r: 'wán', hv: 'HOÀN', m: 'xong, hết', t: 'Động từ' },
    { w: '到', r: 'dào', hv: 'ĐÁO', m: 'đến, tới', t: 'Động từ' },
    { w: '笑', r: 'xiào', hv: 'TIẾU', m: 'cười', t: 'Động từ' },
    { w: '哭', r: 'kū', hv: 'KHỐC', m: 'khóc', t: 'Động từ' },
    { w: '告诉', r: 'gàosu', hv: 'CÁO TỐ', m: 'nói cho biết, bảo', t: 'Động từ' },
    { w: '问', r: 'wèn', hv: 'VẤN', m: 'hỏi', t: 'Động từ' },
    { w: '回答', r: 'huídá', hv: 'HỒI ĐÁP', m: 'trả lời', t: 'Động từ' },
    { w: '准备', r: 'zhǔnbèi', hv: 'CHUẨN BỊ', m: 'chuẩn bị', t: 'Động từ' },
    { w: '开始', r: 'kāishǐ', hv: 'KHAI THỦY', m: 'bắt đầu', t: 'Động từ' },
    { w: '介绍', r: 'jièshào', hv: 'GIỚI THIỆU', m: 'giới thiệu', t: 'Động từ' },
    { w: '帮助', r: 'bāngzhù', hv: 'BANG TRỢ', m: 'giúp đỡ', t: 'Động từ', ex: '谢谢你的帮助。', exr: 'Xièxie nǐ de bāngzhù.', exm: 'Cảm ơn sự giúp đỡ của bạn.' },
    { w: '等', r: 'děng', hv: 'ĐẲNG', m: 'đợi, chờ', t: 'Động từ' },
    { w: '让', r: 'ràng', hv: 'NHƯỢNG', m: 'bảo, để, nhường', t: 'Động từ' },
    { w: '知道', r: 'zhīdào', hv: 'TRI ĐẠO', m: 'biết', t: 'Động từ', ex: '我不知道他的名字。', exr: 'Wǒ bù zhīdào tā de míngzi.', exm: 'Tôi không biết tên anh ấy.' },
    { w: '希望', r: 'xīwàng', hv: 'HY VỌNG', m: 'hy vọng, mong', t: 'Động từ' },
    { w: '觉得', r: 'juéde', hv: 'GIÁC ĐẮC', m: 'cảm thấy, cho rằng', t: 'Động từ' },
    { w: '可以', r: 'kěyǐ', hv: 'KHẢ DĨ', m: 'có thể (được phép)', t: 'Động từ' },
    { w: '要', r: 'yào', hv: 'YẾU', m: 'muốn, cần, sắp', t: 'Động từ' },
    { w: '卖', r: 'mài', hv: 'MẠI', m: 'bán', t: 'Động từ' },
    { w: '进', r: 'jìn', hv: 'TIẾN', m: 'vào', t: 'Động từ' },
    { w: '出', r: 'chū', hv: 'XUẤT', m: 'ra', t: 'Động từ' },
    // Tính từ
    { w: '高', r: 'gāo', hv: 'CAO', m: 'cao', t: 'Tính từ' },
    { w: '长', r: 'cháng', hv: 'TRƯỜNG', m: 'dài', t: 'Tính từ' },
    { w: '新', r: 'xīn', hv: 'TÂN', m: 'mới', t: 'Tính từ' },
    { w: '贵', r: 'guì', hv: 'QUÝ', m: 'đắt', t: 'Tính từ', ex: '这个手机太贵了。', exr: 'Zhège shǒujī tài guì le.', exm: 'Chiếc điện thoại này đắt quá.' },
    { w: '便宜', r: 'piányi', hv: 'TIỆN NGHI', m: 'rẻ', t: 'Tính từ' },
    { w: '忙', r: 'máng', hv: 'MANG', m: 'bận rộn', t: 'Tính từ' },
    { w: '累', r: 'lèi', hv: 'LỤY', m: 'mệt', t: 'Tính từ' },
    { w: '快', r: 'kuài', hv: 'KHOÁI', m: 'nhanh; sắp', t: 'Tính từ' },
    { w: '慢', r: 'màn', hv: 'MẠN', m: 'chậm', t: 'Tính từ' },
    { w: '远', r: 'yuǎn', hv: 'VIỄN', m: 'xa', t: 'Tính từ' },
    { w: '近', r: 'jìn', hv: 'CẬN', m: 'gần', t: 'Tính từ', ex: '学校离我家很近。', exr: 'Xuéxiào lí wǒ jiā hěn jìn.', exm: 'Trường học cách nhà tôi rất gần.' },
    { w: '好吃', r: 'hǎochī', hv: 'HẢO NGẬT', m: 'ngon (đồ ăn)', t: 'Tính từ' },
    { w: '快乐', r: 'kuàilè', hv: 'KHOÁI LẠC', m: 'vui vẻ, hạnh phúc', t: 'Tính từ' },
    { w: '对', r: 'duì', hv: 'ĐỐI', m: 'đúng; đối với', t: 'Tính từ' },
    { w: '错', r: 'cuò', hv: 'THÁC', m: 'sai', t: 'Tính từ' },
    { w: '红', r: 'hóng', hv: 'HỒNG', m: 'màu đỏ', t: 'Tính từ' },
    { w: '白', r: 'bái', hv: 'BẠCH', m: 'màu trắng', t: 'Tính từ' },
    { w: '黑', r: 'hēi', hv: 'HẮC', m: 'màu đen', t: 'Tính từ' },
    { w: '晴', r: 'qíng', hv: 'TÌNH', m: 'nắng, quang đãng', t: 'Tính từ' },
    { w: '阴', r: 'yīn', hv: 'ÂM', m: 'âm u, nhiều mây', t: 'Tính từ' },
    // Phó từ, Giới từ, Liên từ, Trợ từ
    { w: '非常', r: 'fēicháng', hv: 'PHI THƯỜNG', m: 'vô cùng, rất', t: 'Phó từ & Liên từ' },
    { w: '最', r: 'zuì', hv: 'TỐI', m: 'nhất', t: 'Phó từ & Liên từ', ex: '我最喜欢踢足球。', exr: 'Wǒ zuì xǐhuan tī zúqiú.', exm: 'Tôi thích đá bóng nhất.' },
    { w: '真', r: 'zhēn', hv: 'CHÂN', m: 'thật là', t: 'Phó từ & Liên từ' },
    { w: '正在', r: 'zhèngzài', hv: 'CHÍNH TẠI', m: 'đang', t: 'Phó từ & Liên từ' },
    { w: '已经', r: 'yǐjīng', hv: 'DĨ KINH', m: 'đã… rồi', t: 'Phó từ & Liên từ' },
    { w: '一起', r: 'yìqǐ', hv: 'NHẤT KHỞI', m: 'cùng nhau', t: 'Phó từ & Liên từ' },
    { w: '再', r: 'zài', hv: 'TÁI', m: 'lại (chưa xảy ra), thêm', t: 'Phó từ & Liên từ' },
    { w: '还', r: 'hái', hv: 'HOÀN', m: 'vẫn, còn', t: 'Phó từ & Liên từ' },
    { w: '就', r: 'jiù', hv: 'TỰU', m: 'thì, ngay, đã (sớm)', t: 'Phó từ & Liên từ' },
    { w: '别', r: 'bié', hv: 'BIỆT', m: 'đừng', t: 'Phó từ & Liên từ', ex: '别说话，老师来了。', exr: 'Bié shuōhuà, lǎoshī lái le.', exm: 'Đừng nói chuyện, thầy giáo đến rồi.' },
    { w: '比', r: 'bǐ', hv: 'TỶ', m: 'so với (hơn)', t: 'Phó từ & Liên từ' },
    { w: '离', r: 'lí', hv: 'LY', m: 'cách (khoảng cách)', t: 'Phó từ & Liên từ' },
    { w: '从', r: 'cóng', hv: 'TÙNG', m: 'từ', t: 'Phó từ & Liên từ' },
    { w: '往', r: 'wǎng', hv: 'VÃNG', m: 'hướng về phía', t: 'Phó từ & Liên từ' },
    { w: '因为', r: 'yīnwèi', hv: 'NHÂN VỊ', m: 'bởi vì', t: 'Phó từ & Liên từ' },
    { w: '所以', r: 'suǒyǐ', hv: 'SỞ DĨ', m: 'cho nên', t: 'Phó từ & Liên từ' },
    { w: '虽然', r: 'suīrán', hv: 'TUY NHIÊN', m: 'tuy rằng', t: 'Phó từ & Liên từ' },
    { w: '但是', r: 'dànshì', hv: 'ĐÃN THỊ', m: 'nhưng mà', t: 'Phó từ & Liên từ' },
    { w: '得', r: 'de', hv: 'ĐẮC', m: 'trợ từ bổ ngữ trạng thái', t: 'Phó từ & Liên từ' },
    { w: '着', r: 'zhe', hv: 'TRƯỚC', m: 'đang (trợ từ duy trì trạng thái)', t: 'Phó từ & Liên từ' },
    { w: '过', r: 'guo', hv: 'QUÁ', m: 'đã từng (trợ từ động thái)', t: 'Phó từ & Liên từ' },
    { w: '吧', r: 'ba', hv: 'BA', m: 'nhé, đi, chứ (trợ từ cuối câu)', t: 'Phó từ & Liên từ' }
  ],
  grammar: [
    { title: 'Câu so sánh hơn với 比 (bǐ) và kém với 没有 (méiyǒu)', pattern: 'A + 比 + B + Adj (+ 一点儿 / 得多) | A + 没有 + B + Adj',
      explain: 'Dùng 比 để so sánh A hơn B. Lưu ý: KHÔNG dùng 很, 非常, 真 trước tính từ trong câu chữ 比; muốn nói "hơn nhiều/hơn một chút" thì đặt 得多 hoặc 一点儿 SAU tính từ.',
      examples: [
        { s: '今天比昨天冷得多。', r: 'Jīntiān bǐ zuótiān lěng de duō.', m: 'Hôm nay lạnh hơn hôm qua nhiều.' },
        { s: '坐公共汽车没有坐飞机快。', r: 'Zuò gōnggòng qìchē méiyǒu zuò fēijī kuài.', m: 'Đi xe buýt không nhanh bằng đi máy bay.' }
      ] },
    { title: 'Trợ từ động thái 过 (guo) chỉ trải nghiệm trong quá khứ', pattern: 'S + V + 过 + O / S + 没(有) + V + 过 + O',
      explain: 'Đặt 过 ngay sau động từ để diễn tả một việc "đã từng" xảy ra trong quá khứ (nhấn mạnh kinh nghiệm). Phủ định dùng 没(有) + V + 过.',
      examples: [
        { s: '我去过两次北京。', r: 'Wǒ qùguo liǎng cì Běijīng.', m: 'Tôi đã từng đi Bắc Kinh hai lần.' },
        { s: '你吃过中国菜吗？', r: 'Nǐ chīguo Zhōngguó cài ma?', m: 'Bạn đã từng ăn món Trung Quốc chưa?' }
      ] },
    { title: 'Hành động đang diễn ra với 正在 (zhèngzài) và 着 (zhe)', pattern: 'S + 正在 / 在 + V + (着) + O (+ 呢)',
      explain: '正在 + V nhấn mạnh hành động đang tiến hành tại thời điểm nói. V + 着 nhấn mạnh trạng thái đang duy trì (穿, 拿, 开, 关, 坐, 站).',
      examples: [
        { s: '弟弟正在打篮球呢。', r: 'Dìdi zhèngzài dǎ lánqiú ne.', m: 'Em trai đang chơi bóng rổ.' },
        { s: '门开着，请进吧。', r: 'Mén kāizhe, qǐng jìn ba.', m: 'Cửa đang mở, mời vào.' }
      ] },
    { title: 'Bổ ngữ trạng thái với 得 (de)', pattern: 'S + (V + O) + V + 得 + (很/非常) + Adj',
      explain: 'Đánh giá hành động diễn ra như thế nào (nhanh, chậm, tốt, giỏi…). Nếu động từ có tân ngữ thì phải lặp lại động từ (hoặc đưa tân ngữ lên trước).',
      examples: [
        { s: '他汉语说得非常好。', r: 'Tā Hànyǔ shuō de fēicháng hǎo.', m: 'Anh ấy nói tiếng Trung rất tốt.' },
        { s: '姐姐今天起得很早。', r: 'Jiějie jīntiān qǐ de hěn zǎo.', m: 'Hôm nay chị gái dậy rất sớm.' }
      ] },
    { title: 'Bổ ngữ kết quả: 完, 懂, 到, 见, 好', pattern: 'S + V + (完/懂/到/见/好) + O',
      explain: 'Đặt động từ/tính từ làm bổ ngữ ngay sau động từ chính để nói rõ kết quả: 做完 (làm xong), 听懂 (nghe hiểu), 找到 (tìm thấy), 看见 (nhìn thấy), 准备好 (chuẩn bị xong).',
      examples: [
        { s: '我已经做完今天的题了。', r: 'Wǒ yǐjīng zuòwán jīntiān de tí le.', m: 'Tôi đã làm xong bài tập hôm nay rồi.' },
        { s: '你的手机找到了吗？', r: 'Nǐ de shǒujī zhǎodào le ma?', m: 'Điện thoại của bạn đã tìm thấy chưa?' }
      ] },
    { title: 'Khoảng cách và lộ trình: 离 (lí) và 从…到… (cóng…dào…)', pattern: 'A + 离 + B + 很近/很远 | 从 + A + 到 + B',
      explain: '离 dùng để chỉ khoảng cách giữa hai địa điểm (A cách B). 从…到… chỉ điểm bắt đầu và kết thúc của không gian hoặc thời gian (từ A đến B).',
      examples: [
        { s: '我家离公司不远，走路十分钟就到了。', r: 'Wǒ jiā lí gōngsī bù yuǎn, zǒulù shí fēnzhōng jiù dào le.', m: 'Nhà tôi cách công ty không xa, đi bộ 10 phút là tới.' },
        { s: '从早上八点到十二点我都在上课。', r: 'Cóng zǎoshang bā diǎn dào shí\'èr diǎn wǒ dōu zài shàngkè.', m: 'Từ 8 giờ sáng đến 12 giờ trưa tôi đều đang học.' }
      ] },
    { title: 'Cặp liên từ nguyên nhân – kết quả: 因为…所以…', pattern: '因为 + Nguyên nhân，所以 + Kết quả',
      explain: 'Diễn đạt quan hệ nhân quả "Bởi vì… cho nên…". Có thể dùng cả cặp hoặc chỉ dùng một trong hai vế.',
      examples: [
        { s: '因为今天下雨，所以我没去跑步。', r: 'Yīnwèi jīntiān xiàyǔ, suǒyǐ wǒ méi qù pǎobù.', m: 'Bởi vì hôm nay trời mưa nên tôi không đi chạy bộ.' },
        { s: '因为他生病了，所以去医院看医生。', r: 'Yīnwèi tā shēngbìng le, suǒyǐ qù yīyuàn kàn yīshēng.', m: 'Vì anh ấy bị ốm nên đi bệnh viện khám bác sĩ.' }
      ] },
    { title: 'Cặp liên từ nhượng bộ – chuyển ngoặt: 虽然…但是…', pattern: '虽然 + Vế nhượng bộ，但是 + Vế chính',
      explain: 'Diễn đạt "Tuy… nhưng…". Lưu ý trong tiếng Trung khi đã có 虽然 ở vế đầu thì vế sau phải có 但是 (hoặc 可是), tương tự tiếng Việt.',
      examples: [
        { s: '虽然这件衣服很贵，但是我很喜欢。', r: 'Suīrán zhè jiàn yīfu hěn guì, dànshì wǒ hěn xǐhuan.', m: 'Tuy bộ quần áo này rất đắt nhưng tôi rất thích.' },
        { s: '虽然工作很忙，但是他每天都运动。', r: 'Suīrán gōngzuò hěn máng, dànshì tā měitiān dōu yùndòng.', m: 'Tuy công việc rất bận nhưng ngày nào anh ấy cũng tập thể thao.' }
      ] },
    { title: 'Câu cầu khiến, khuyên nhủ với 别 (bié) và 吧 (ba)', pattern: '别 / 不要 + V + (了) | Câu đề nghị + 吧',
      explain: '别 + V (+ 了) dùng để khuyên can "đừng làm… nữa". Trợ từ 吧 đặt cuối câu dùng để rủ rê, đề nghị nhẹ nhàng hoặc hỏi xác nhận.',
      examples: [
        { s: '很晚了，别看电视了，快睡觉吧。', r: 'Hěn wǎn le, bié kàn diànshì le, kuài shuìjiào ba.', m: 'Muộn lắm rồi, đừng xem tivi nữa, mau đi ngủ thôi.' },
        { s: '我们一起去喝咖啡吧！', r: 'Wǒmen yìqǐ qù hē kāfēi ba!', m: 'Chúng mình cùng đi uống cà phê nhé!' }
      ] },
    { title: 'Sắp xảy ra trong tương lai gần: 要…了 / 快要…了', pattern: 'S + (快)要 + V / Adj + 了',
      explain: 'Diễn tả sự việc sắp sửa xảy ra. Lưu ý: nếu trong câu có trạng ngữ thời gian cụ thể (như 明天, 下个月) thì chỉ dùng 要…了, không dùng 快要…了.',
      examples: [
        { s: '天阴了，快要下雨了。', r: 'Tiān yīn le, kuàiyào xiàyǔ le.', m: 'Trời âm u rồi, sắp mưa rồi.' },
        { s: '下个月姐姐要结婚了。', r: 'Xià gè yuè jiějie yào jiéhūn le.', m: 'Tháng sau chị gái sắp kết hôn rồi.' }
      ] }
  ]
});
