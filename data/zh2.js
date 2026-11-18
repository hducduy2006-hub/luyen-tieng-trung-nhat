window.LANG_DATA = window.LANG_DATA || {};
LANG_DATA.zh = LANG_DATA.zh || { levels: [] };

/* ============================================================
   HSK 3: TRUNG CẤP NỀN TẢNG (+300 TỪ MỚI, TỔNG 600 TỪ)
   ============================================================ */
LANG_DATA.zh.levels.push({
  id: 'hsk3',
  name: 'HSK 3',
  title: 'Trung cấp nền tảng',
  duration: '3–4 tháng',
  color: '#eab308',
  description: 'Bước ngoặt lên trung cấp với 600 từ vựng tích lũy: giao tiếp tự tin trong học tập, công việc, du lịch và đời sống hằng ngày. Làm chủ các cấu trúc đặc trưng của tiếng Trung như câu chữ 把, câu bị động 被, bổ ngữ xu hướng, bổ ngữ khả năng và hệ thống câu phức.',
  goals: [
    'Nắm vững từ vựng cốt lõi HSK 3 (tích lũy 600 từ) kèm âm Hán Việt để đoán nghĩa nhanh',
    'Sử dụng thành thạo câu chữ 把, câu bị động 被, bổ ngữ xu hướng và bổ ngữ khả năng',
    'Diễn đạt mạch lạc bằng câu phức điều kiện, tăng tiến và song song (只要…就…, 只有…才…, 不但…而且…)',
    'Đọc hiểu đoạn văn 300–400 chữ hoàn toàn bằng chữ Hán không cần pinyin',
    'Đạt ≥ 240/300 điểm trong đề thi thử HSK 3 (nghe, đọc, viết)'
  ],
  units: [
    { id: 'hsk3-u1', title: 'Tuần 1–2: Đời sống, thói quen & câu chữ 把', desc: 'Sắp xếp đồ đạc, việc nhà và cách xử lý đối tượng bằng câu chữ 把.',
      tasks: [
        'Học 18 từ về đời sống, nhà cửa và thói quen (冰箱, 厨房, 电梯, 空调, 打扫, 洗澡, 习惯, 放)',
        'Nắm vững cấu trúc câu chữ 把 (S + 把 + O + V + thành phần khác) và vị trí phó từ phủ định 不/没',
        'Viết 8 câu miêu tả việc dọn dẹp phòng và sắp xếp đồ đạc dùng câu chữ 把',
        'Làm 20 câu bài tập chuyển đổi câu thường sang câu chữ 把'
      ] },
    { id: 'hsk3-u2', title: 'Tuần 3–4: Công việc, học tập & câu bị động 被', desc: 'Môi trường văn phòng, thi cử và diễn đạt bị động với 被/让/叫.',
      tasks: [
        'Học 18 từ về học tập và công sở (办公室, 办法, 成绩, 复习, 会议, 经理, 同事, 提高, 水平, 作业)',
        'Phân biệt cách dùng câu bị động 被 (có hoặc không có tác nhân) và câu chữ 把',
        'Tập kể lại một sự cố nhỏ ở công ty hoặc lớp học (quên bài, đến muộn, mất đồ)',
        'Nghe 10 đoạn hội thoại HSK 3 chủ đề công việc – trường học và chép chính tả từ khóa'
      ] },
    { id: 'hsk3-u3', title: 'Tuần 5–6: Di chuyển, du lịch & bổ ngữ xu hướng', desc: 'Phương hướng di chuyển, hành lý, khách sạn và bổ ngữ xu hướng đơn/kép.',
      tasks: [
        'Học 16 từ về du lịch và địa điểm (宾馆, 超市, 城市, 地铁, 地图, 附近, 护照, 行李箱, 离开, 经过)',
        'Thành thạo bổ ngữ xu hướng đơn (来/去) và kép (起来, 出来, 进去, 回来, 下去)',
        'Chú ý vị trí tân ngữ chỉ nơi chốn và tân ngữ thường trong câu có bổ ngữ xu hướng kép',
        'Viết đoạn văn 120 chữ kể về một chuyến đi hoặc kế hoạch du lịch cuối tuần'
      ] },
    { id: 'hsk3-u4', title: 'Tuần 7–8: Sức khỏe, thể thao & bổ ngữ khả năng', desc: 'Khám bệnh, rèn luyện thể chất và diễn đạt làm được/không làm được.',
      tasks: [
        'Học 16 từ về sức khỏe, cảm xúc và vận động (发烧, 感冒, 锻炼, 健康, 比赛, 担心, 着急, 舒服, 照顾)',
        'Nắm vững bổ ngữ khả năng V + 得/不 + kết quả/xu hướng (听得懂, 看不见, 买不到, 上不去)',
        'Luyện đối thoại tình huống đi khám bác sĩ và hỏi thăm người ốm',
        'Phân biệt V + 得 + bổ ngữ (khả năng) với V + 得 + Adj (trạng thái)'
      ] },
    { id: 'hsk3-u5', title: 'Tuần 9–10: Diễn đạt xu hướng biến đổi & hành động song song', desc: 'Miêu tả sự thay đổi theo thời gian và hai hành động đồng thời.',
      tasks: [
        'Học 16 từ về thời tiết, văn hóa và tính chất (刮风, 季节, 环境, 历史, 文化, 新闻, 变化, 容易, 清楚, 认真)',
        'Thực hành mẫu câu 越来越… và 越 A 越 B để nói về sự thay đổi của bản thân hoặc thời tiết',
        'Dùng thành thạo 一边…一边… và 不但…而且… khi kể chuyện hoặc nêu nhận xét',
        'Đọc 4 bài đọc ngắn HSK 3 (mỗi bài ~250 chữ) và tóm tắt ý chính bằng 3 câu'
      ] },
    { id: 'hsk3-u6', title: 'Tuần 11–12: Câu phức điều kiện & tổng ôn HSK 3', desc: 'Phân biệt 只要…就… với 只有…才… và luyện đề thi hoàn chỉnh.',
      tasks: [
        'Học 16 từ phó từ, liên từ và động từ trừu tượng (必须, 除了, 根据, 几乎, 机会, 解决, 决定, 如果, 以为, 终于)',
        'Phân biệt rành mạch điều kiện đủ 只要…就… và điều kiện duy nhất 只有…才…',
        'Làm 2 đề thi thử HSK 3 bấm giờ chuẩn (90 phút, phần viết sắp xếp câu và điền chữ Hán)',
        'Rà soát toàn bộ từ vựng HSK 3 sai nhiều bằng thẻ nhớ và viết lại chữ Hán dễ nhầm'
      ] }
  ],
  vocab: [
    // Công việc & Học tập
    { w: '办法', r: 'bànfǎ', hv: 'BIỆN PHÁP', m: 'cách, biện pháp', t: 'Công việc & Học tập', ex: '这个问题一定有解决的办法。', exr: 'Zhège wèntí yídìng yǒu jiějué de bànfǎ.', exm: 'Vấn đề này nhất định có cách giải quyết.' },
    { w: '办公室', r: 'bàngōngshì', hv: 'BIỆN CÔNG THẤT', m: 'văn phòng', t: 'Công việc & Học tập' },
    { w: '参加', r: 'cānjiā', hv: 'THAM GIA', m: 'tham gia', t: 'Công việc & Học tập', ex: '你想参加这次比赛吗？', exr: 'Nǐ xiǎng cānjiā zhè cì bǐsài ma?', exm: 'Bạn có muốn tham gia cuộc thi lần này không?' },
    { w: '成绩', r: 'chéngjì', hv: 'THÀNH TÍCH', m: 'thành tích, điểm số', t: 'Công việc & Học tập', ex: '他这次考试的成绩很好。', exr: 'Tā zhè cì kǎoshì de chéngjì hěn hǎo.', exm: 'Điểm thi lần này của cậu ấy rất cao.' },
    { w: '迟到', r: 'chídào', hv: 'TRÌ ĐÁO', m: 'đến muộn', t: 'Công việc & Học tập' },
    { w: '复习', r: 'fùxí', hv: 'PHỤC TẬP', m: 'ôn tập', t: 'Công việc & Học tập', ex: '下周要考试了，我得好好复习。', exr: 'Xià zhōu yào kǎoshì le, wǒ děi hǎohǎo fùxí.', exm: 'Tuần sau thi rồi, tôi phải ôn tập thật tốt.' },
    { w: '会议', r: 'huìyì', hv: 'HỘI NGHỊ', m: 'cuộc họp, hội nghị', t: 'Công việc & Học tập' },
    { w: '机会', r: 'jīhuì', hv: 'CƠ HỘI', m: 'cơ hội', t: 'Công việc & Học tập', ex: '去北京留学是一个好机会。', exr: 'Qù Běijīng liúxué shì yí gè hǎo jīhuì.', exm: 'Đi Bắc Kinh du học là một cơ hội tốt.' },
    { w: '经理', r: 'jīnglǐ', hv: 'KINH LÝ', m: 'giám đốc, quản lý', t: 'Công việc & Học tập' },
    { w: '练习', r: 'liànxí', hv: 'LUYỆN TẬP', m: 'luyện tập; bài tập', t: 'Công việc & Học tập' },
    { w: '留学', r: 'liúxué', hv: 'LƯU HỌC', m: 'du học', t: 'Công việc & Học tập' },
    { w: '普通话', r: 'pǔtōnghuà', hv: 'PHỔ THÔNG THOẠI', m: 'tiếng phổ thông Trung Quốc', t: 'Công việc & Học tập' },
    { w: '水平', r: 'shuǐpíng', hv: 'THỦY BÌNH', m: 'trình độ', t: 'Công việc & Học tập', ex: '他的汉语水平提高得很快。', exr: 'Tā de Hànyǔ shuǐpíng tígāo de hěn kuài.', exm: 'Trình độ tiếng Trung của anh ấy tiến bộ rất nhanh.' },
    { w: '同事', r: 'tóngshì', hv: 'ĐỒNG SỰ', m: 'đồng nghiệp', t: 'Công việc & Học tập' },
    { w: '图书馆', r: 'túshūguǎn', hv: 'ĐỒ THƯ QUÁN', m: 'thư viện', t: 'Công việc & Học tập' },
    { w: '作业', r: 'zuòyè', hv: 'TÁC NGHIỆP', m: 'bài tập về nhà', t: 'Công việc & Học tập' },
    // Đời sống, Gia đình & Ẩm thực
    { w: '爱好', r: 'àihào', hv: 'ÁI HIẾU', m: 'sở thích', t: 'Đời sống & Sở thích', ex: '我的爱好是看电影和游泳。', exr: 'Wǒ de àihào shì kàn diànyǐng hé yóuyǒng.', exm: 'Sở thích của tôi là xem phim và bơi lội.' },
    { w: '饱', r: 'bǎo', hv: 'BÃO', m: 'no', t: 'Đời sống & Sở thích' },
    { w: '冰箱', r: 'bīngxiāng', hv: 'BĂNG TƯƠNG', m: 'tủ lạnh', t: 'Đời sống & Sở thích' },
    { w: '菜单', r: 'càidān', hv: 'THÁI ĐƠN', m: 'thực đơn', t: 'Đời sống & Sở thích' },
    { w: '超市', r: 'chāoshì', hv: 'SIÊU THỊ', m: 'siêu thị', t: 'Đời sống & Sở thích' },
    { w: '衬衫', r: 'chènshān', hv: 'SẤM SAM', m: 'áo sơ mi', t: 'Đời sống & Sở thích' },
    { w: '厨房', r: 'chúfáng', hv: 'TRÙ PHÒNG', m: 'nhà bếp', t: 'Đời sống & Sở thích' },
    { w: '打扫', r: 'dǎsǎo', hv: 'ĐẢ TẢO', m: 'quét dọn, dọn dẹp', t: 'Đời sống & Sở thích' },
    { w: '电梯', r: 'diàntī', hv: 'ĐIỆN THÊ', m: 'thang máy', t: 'Đời sống & Sở thích' },
    { w: '渴', r: 'kě', hv: 'KHÁT', m: 'khát nước', t: 'Đời sống & Sở thích' },
    { w: '空调', r: 'kōngtiáo', hv: 'KHÔNG ĐIỀU', m: 'máy điều hòa', t: 'Đời sống & Sở thích' },
    { w: '啤酒', r: 'píjiǔ', hv: 'TỲ TỬU', m: 'bia', t: 'Đời sống & Sở thích' },
    { w: '习惯', r: 'xíguàn', hv: 'TẬP QUÁN', m: 'thói quen; quen với', t: 'Đời sống & Sở thích', ex: '我已经习惯这里的生活了。', exr: 'Wǒ yǐjīng xíguàn zhèlǐ de shēnghuó le.', exm: 'Tôi đã quen với cuộc sống ở đây rồi.' },
    { w: '洗澡', r: 'xǐzǎo', hv: 'TẨY TÁO', m: 'tắm rửa', t: 'Đời sống & Sở thích' },
    { w: '兴趣', r: 'xìngqù', hv: 'HỨNG THÚ', m: 'hứng thú, sự yêu thích', t: 'Đời sống & Sở thích', ex: '她对中国历史很有兴趣。', exr: 'Tā duì Zhōngguó lìshǐ hěn yǒu xìngqù.', exm: 'Cô ấy rất có hứng thú với lịch sử Trung Quốc.' },
    // Sức khỏe & Thể thao
    { w: '比赛', r: 'bǐsài', hv: 'TỶ TÁI', m: 'cuộc thi, trận đấu; thi đấu', t: 'Sức khỏe & Thể thao' },
    { w: '锻炼', r: 'duànliàn', hv: 'ĐOẠN LUYỆN', m: 'rèn luyện, tập thể dục', t: 'Sức khỏe & Thể thao', ex: '爷爷每天早上都去公园锻炼。', exr: 'Yéye měitiān zǎoshang dōu qù gōngyuán duànliàn.', exm: 'Ông nội sáng nào cũng ra công viên tập thể dục.' },
    { w: '发烧', r: 'fāshāo', hv: 'PHÁT THIÊU', m: 'bị sốt', t: 'Sức khỏe & Thể thao' },
    { w: '感冒', r: 'gǎnmào', hv: 'CẢM MẠO', m: 'bị cảm cúm', t: 'Sức khỏe & Thể thao' },
    { w: '健康', r: 'jiànkāng', hv: 'KIỆN KHANG', m: 'khỏe mạnh, sức khỏe', t: 'Sức khỏe & Thể thao', ex: '身体健康比什么都重要。', exr: 'Shēntǐ jiànkāng bǐ shénme dōu zhòngyào.', exm: 'Sức khỏe quan trọng hơn bất cứ thứ gì.' },
    { w: '舒服', r: 'shūfu', hv: 'THƯ PHỤC', m: 'thoải mái, dễ chịu', t: 'Sức khỏe & Thể thao' },
    // Du lịch, Địa điểm & Thời tiết
    { w: '宾馆', r: 'bīnguǎn', hv: 'TÂN QUÁN', m: 'khách sạn', t: 'Du lịch & Môi trường' },
    { w: '城市', r: 'chéngshì', hv: 'THÀNH THỊ', m: 'thành phố', t: 'Du lịch & Môi trường' },
    { w: '地铁', r: 'dìtiě', hv: 'ĐỊA THIẾT', m: 'tàu điện ngầm', t: 'Du lịch & Môi trường', ex: '坐地铁去机场非常方便。', exr: 'Zuò dìtiě qù jīchǎng fēicháng fāngbiàn.', exm: 'Đi tàu điện ngầm ra sân bay rất thuận tiện.' },
    { w: '地图', r: 'dìtú', hv: 'ĐỊA ĐỒ', m: 'bản đồ', t: 'Du lịch & Môi trường' },
    { w: '附近', r: 'fùjìn', hv: 'PHỤ CẬN', m: 'vùng lân cận, gần đây', t: 'Du lịch & Môi trường' },
    { w: '刮风', r: 'guāfēng', hv: 'QUÁT PHONG', m: 'có gió, gió thổi', t: 'Du lịch & Môi trường' },
    { w: '国家', r: 'guójiā', hv: 'QUỐC GIA', m: 'đất nước, quốc gia', t: 'Du lịch & Môi trường' },
    { w: '护照', r: 'hùzhào', hv: 'HỘ CHIẾU', m: 'hộ chiếu', t: 'Du lịch & Môi trường', ex: '出国旅游一定要带好护照。', exr: 'Chūguó lǚyóu yídìng yào dàihǎo hùzhào.', exm: 'Đi du lịch nước ngoài nhất định phải mang theo hộ chiếu.' },
    { w: '环境', r: 'huánjìng', hv: 'HOÀN CẢNH', m: 'môi trường', t: 'Du lịch & Môi trường' },
    { w: '季节', r: 'jìjié', hv: 'QUÝ TIẾT', m: 'mùa', t: 'Du lịch & Môi trường' },
    { w: '世界', r: 'shìjiè', hv: 'THẾ GIỚI', m: 'thế giới', t: 'Du lịch & Môi trường' },
    { w: '行李箱', r: 'xínglixiāng', hv: 'HÀNH LÝ TƯƠNG', m: 'vali hành lý', t: 'Du lịch & Môi trường' },
    // Văn hóa, Giao tiếp & Cảm xúc
    { w: '帮忙', r: 'bāngmáng', hv: 'BANG MANG', m: 'giúp đỡ', t: 'Giao tiếp & Cảm xúc' },
    { w: '表演', r: 'biǎoyǎn', hv: 'BIỂU DIỄN', m: 'biểu diễn', t: 'Giao tiếp & Cảm xúc' },
    { w: '别人', r: 'biérén', hv: 'BIỆT NHÂN', m: 'người khác', t: 'Giao tiếp & Cảm xúc' },
    { w: '担心', r: 'dānxīn', hv: 'ĐAM TÂM', m: 'lo lắng', t: 'Giao tiếp & Cảm xúc', ex: '别担心，这件事我能解决。', exr: 'Bié dānxīn, zhè jiàn shì wǒ néng jiějué.', exm: 'Đừng lo lắng, việc này tôi có thể giải quyết được.' },
    { w: '放心', r: 'fàngxīn', hv: 'PHÓNG TÂM', m: 'yên tâm', t: 'Giao tiếp & Cảm xúc' },
    { w: '故事', r: 'gùshi', hv: 'CỐ SỰ', m: 'câu chuyện', t: 'Giao tiếp & Cảm xúc' },
    { w: '关系', r: 'guānxi', hv: 'QUAN HỆ', m: 'mối quan hệ, liên quan', t: 'Giao tiếp & Cảm xúc', ex: '我和邻居的关系很好。', exr: 'Wǒ hé línjū de guānxi hěn hǎo.', exm: 'Mối quan hệ giữa tôi và hàng xóm rất tốt.' },
    { w: '关心', r: 'guānxīn', hv: 'QUAN TÂM', m: 'quan tâm', t: 'Giao tiếp & Cảm xúc' },
    { w: '害怕', r: 'hàipà', hv: 'HẠI PHẠ', m: 'sợ hãi', t: 'Giao tiếp & Cảm xúc' },
    { w: '结婚', r: 'jiéhūn', hv: 'KẾT HÔN', m: 'kết hôn', t: 'Giao tiếp & Cảm xúc' },
    { w: '客人', r: 'kèrén', hv: 'KHÁCH NHÂN', m: 'khách', t: 'Giao tiếp & Cảm xúc' },
    { w: '礼物', r: 'lǐwù', hv: 'LỄ VẬT', m: 'quà tặng', t: 'Giao tiếp & Cảm xúc' },
    { w: '历史', r: 'lìshǐ', hv: 'LỊCH SỬ', m: 'lịch sử', t: 'Giao tiếp & Cảm xúc' },
    { w: '邻居', r: 'línjū', hv: 'LÂN CƯ', m: 'hàng xóm', t: 'Giao tiếp & Cảm xúc' },
    { w: '满意', r: 'mǎnyì', hv: 'MÃN Ý', m: 'hài lòng', t: 'Giao tiếp & Cảm xúc' },
    { w: '生气', r: 'shēngqì', hv: 'SINH KHÍ', m: 'tức giận', t: 'Giao tiếp & Cảm xúc' },
    { w: '文化', r: 'wénhuà', hv: 'VĂN HÓA', m: 'văn hóa', t: 'Giao tiếp & Cảm xúc' },
    { w: '新闻', r: 'xīnwén', hv: 'TÂN VĂN', m: 'tin tức, thời sự', t: 'Giao tiếp & Cảm xúc' },
    { w: '照顾', r: 'zhàogù', hv: 'CHIẾU CỐ', m: 'chăm sóc', t: 'Giao tiếp & Cảm xúc', ex: '谢谢你这几天照顾我妈妈。', exr: 'Xièxie nǐ zhè jǐ tiān zhàogù wǒ māma.', exm: 'Cảm ơn bạn mấy ngày nay đã chăm sóc mẹ tôi.' },
    { w: '着急', r: 'zháojí', hv: 'TRƯỚC CẤP', m: 'sốt ruột, lo lắng', t: 'Giao tiếp & Cảm xúc' },
    // Động từ & Tính từ
    { w: '变化', r: 'biànhuà', hv: 'BIẾN HÓA', m: 'thay đổi, biến hóa', t: 'Động từ & Tính từ' },
    { w: '表示', r: 'biǎoshì', hv: 'BIỂU THỊ', m: 'bày tỏ, biểu thị', t: 'Động từ & Tính từ' },
    { w: '出现', r: 'chūxiàn', hv: 'XUẤT HIỆN', m: 'xuất hiện', t: 'Động từ & Tính từ' },
    { w: '聪明', r: 'cōngming', hv: 'THÔNG MINH', m: 'thông minh', t: 'Động từ & Tính từ' },
    { w: '打算', r: 'dǎsuàn', hv: 'ĐẢ TOÁN', m: 'dự định, kế hoạch', t: 'Động từ & Tính từ', ex: '这个周末你打算做什么？', exr: 'Zhège zhōumò nǐ dǎsuàn zuò shénme?', exm: 'Cuối tuần này bạn dự định làm gì?' },
    { w: '带', r: 'dài', hv: 'ĐỚI', m: 'mang theo; dẫn theo', t: 'Động từ & Tính từ' },
    { w: '发现', r: 'fāxiàn', hv: 'PHÁT HIỆN', m: 'phát hiện ra', t: 'Động từ & Tính từ', ex: '我发现这个城市的环境很好。', exr: 'Wǒ fāxiàn zhège chéngshì de huánjìng hěn hǎo.', exm: 'Tôi phát hiện môi trường của thành phố này rất tốt.' },
    { w: '方便', r: 'fāngbiàn', hv: 'PHƯƠNG TIỆN', m: 'thuận tiện', t: 'Động từ & Tính từ' },
    { w: '放', r: 'fàng', hv: 'PHÓNG', m: 'đặt, để; thả; cho nghỉ', t: 'Động từ & Tính từ' },
    { w: '干净', r: 'gānjìng', hv: 'CAN TỊNH', m: 'sạch sẽ', t: 'Động từ & Tính từ' },
    { w: '敢', r: 'gǎn', hv: 'CẢM', m: 'dám', t: 'Động từ & Tính từ' },
    { w: '换', r: 'huàn', hv: 'HOÁN', m: 'đổi, thay', t: 'Động từ & Tính từ' },
    { w: '记得', r: 'jìde', hv: 'KÝ ĐẮC', m: 'nhớ (chuyện cũ)', t: 'Động từ & Tính từ' },
    { w: '检查', r: 'jiǎnchá', hv: 'KIỂM TRA', m: 'kiểm tra', t: 'Động từ & Tính từ' },
    { w: '简单', r: 'jiǎndān', hv: 'GIẢN ĐƠN', m: 'đơn giản', t: 'Động từ & Tính từ' },
    { w: '讲', r: 'jiǎng', hv: 'GIẢNG', m: 'nói, kể, giảng giải', t: 'Động từ & Tính từ' },
    { w: '结束', r: 'jiéshù', hv: 'KẾT THÚC', m: 'kết thúc', t: 'Động từ & Tính từ' },
    { w: '解决', r: 'jiějué', hv: 'GIẢI QUYẾT', m: 'giải quyết', t: 'Động từ & Tính từ', ex: '只有大家一起努力，才能解决这个问题。', exr: 'Zhǐyǒu dàjiā yìqǐ nǔlì, cái néng jiějué zhège wèntí.', exm: 'Chỉ có mọi người cùng cố gắng mới có thể giải quyết vấn đề này.' },
    { w: '借', r: 'jiè', hv: 'TÁ', m: 'mượn; cho mượn', t: 'Động từ & Tính từ' },
    { w: '经过', r: 'jīngguò', hv: 'KINH QUÁ', m: 'đi qua; trải qua', t: 'Động từ & Tính từ' },
    { w: '决定', r: 'juédìng', hv: 'QUYẾT ĐỊNH', m: 'quyết định', t: 'Động từ & Tính từ', ex: '他决定明年去中国工作。', exr: 'Tā juédìng míngnián qù Zhōngguó gōngzuò.', exm: 'Anh ấy quyết định sang năm đi Trung Quốc làm việc.' },
    { w: '离开', r: 'líkāi', hv: 'LY KHAI', m: 'rời khỏi', t: 'Động từ & Tính từ', ex: '火车五分钟后就要离开车站了。', exr: 'Huǒchē wǔ fēnzhōng hòu jiù yào líkāi chēzhàn le.', exm: 'Tàu hỏa 5 phút nữa sẽ rời ga rồi.' },
    { w: '了解', r: 'liǎojiě', hv: 'LIỄU GIẢI', m: 'hiểu rõ, tìm hiểu', t: 'Động từ & Tính từ', ex: '我很想了解中国的文化。', exr: 'Wǒ hěn xiǎng liǎojiě Zhōngguó de wénhuà.', exm: 'Tôi rất muốn tìm hiểu văn hóa Trung Quốc.' },
    { w: '明白', r: 'míngbai', hv: 'MINH BẠCH', m: 'hiểu rõ', t: 'Động từ & Tính từ' },
    { w: '努力', r: 'nǔlì', hv: 'NỖ LỰC', m: 'nỗ lực, chăm chỉ', t: 'Động từ & Tính từ', ex: '只要努力学习，就一定会进步。', exr: 'Zhǐyào nǔlì xuéxí, jiù yídìng huì jìnbù.', exm: 'Chỉ cần chăm chỉ học tập thì nhất định sẽ tiến bộ.' },
    { w: '清楚', r: 'qīngchu', hv: 'THANH SỞ', m: 'rõ ràng', t: 'Động từ & Tính từ' },
    { w: '认真', r: 'rènzhēn', hv: 'NHẬN CHÂN', m: 'nghiêm túc, chăm chú', t: 'Động từ & Tính từ', ex: '她做事一直非常认真。', exr: 'Tā zuòshì yìzhí fēicháng rènzhēn.', exm: 'Cô ấy làm việc lúc nào cũng vô cùng nghiêm túc.' },
    { w: '容易', r: 'róngyì', hv: 'DUNG DỊ', m: 'dễ dàng', t: 'Động từ & Tính từ' },
    { w: '声音', r: 'shēngyīn', hv: 'THANH ÂM', m: 'âm thanh, giọng nói', t: 'Động từ & Tính từ' },
    { w: '提高', r: 'tígāo', hv: 'ĐỀ CAO', m: 'nâng cao, cải thiện', t: 'Động từ & Tính từ', ex: '多听中文新闻能提高听力。', exr: 'Duō tīng Zhōngwén xīnwén néng tígāo tīnglì.', exm: 'Nghe nhiều tin tức tiếng Trung có thể nâng cao kỹ năng nghe.' },
    { w: '同意', r: 'tóngyì', hv: 'ĐỒNG Ý', m: 'đồng ý', t: 'Động từ & Tính từ' },
    { w: '完成', r: 'wánchéng', hv: 'HOÀN THÀNH', m: 'hoàn thành', t: 'Động từ & Tính từ' },
    { w: '忘记', r: 'wàngjì', hv: 'VONG KÝ', m: 'quên', t: 'Động từ & Tính từ', ex: '我把他的电话号码忘记了。', exr: 'Wǒ bǎ tā de diànhuà hàomǎ wàngjì le.', exm: 'Tôi quên mất số điện thoại của anh ấy rồi.' },
    { w: '相信', r: 'xiāngxìn', hv: 'TƯƠNG TÍN', m: 'tin tưởng', t: 'Động từ & Tính từ' },
    { w: '小心', r: 'xiǎoxīn', hv: 'TIỂU TÂM', m: 'cẩn thận', t: 'Động từ & Tính từ' },
    { w: '需要', r: 'xūyào', hv: 'TU YẾU', m: 'cần, cần thiết', t: 'Động từ & Tính từ' },
    { w: '选择', r: 'xuǎnzé', hv: 'TUYỂN TRẠCH', m: 'lựa chọn', t: 'Động từ & Tính từ', ex: '面对很多选择，他不知道怎么办。', exr: 'Miànduì hěn duō xuǎnzé, tā bù zhīdào zěnme bàn.', exm: 'Đối mặt với nhiều lựa chọn, cậu ấy không biết làm sao.' },
    { w: '要求', r: 'yāoqiú', hv: 'YÊU CẦU', m: 'yêu cầu', t: 'Động từ & Tính từ' },
    { w: '以为', r: 'yǐwéi', hv: 'DĨ VI', m: 'tưởng rằng (nhầm)', t: 'Động từ & Tính từ', ex: '我以为今天是周末呢！', exr: 'Wǒ yǐwéi jīntiān shì zhōumò ne!', exm: 'Tôi cứ tưởng hôm nay là cuối tuần chứ!' },
    { w: '应该', r: 'yīnggāi', hv: 'ƯNG CAI', m: 'nên, phải', t: 'Động từ & Tính từ' },
    { w: '影响', r: 'yǐngxiǎng', hv: 'ẢNH HƯỞNG', m: 'ảnh hưởng', t: 'Động từ & Tính từ', ex: '天气太热影响了大家的心情。', exr: 'Tiānqì tài rè yǐngxiǎng le dàjiā de xīnqíng.', exm: 'Thời tiết nóng quá làm ảnh hưởng tâm trạng mọi người.' },
    { w: '有名', r: 'yǒumíng', hv: 'HỮU DANH', m: 'nổi tiếng', t: 'Động từ & Tính từ' },
    { w: '愿意', r: 'yuànyì', hv: 'NGUYỆN Ý', m: 'bằng lòng, sẵn lòng', t: 'Động từ & Tính từ' },
    { w: '重要', r: 'zhòngyào', hv: 'TRỌNG YẾU', m: 'quan trọng', t: 'Động từ & Tính từ' },
    { w: '主要', r: 'zhǔyào', hv: 'CHỦ YẾU', m: 'chủ yếu', t: 'Động từ & Tính từ' },
    { w: '注意', r: 'zhùyì', hv: 'CHÚ Ý', m: 'chú ý', t: 'Động từ & Tính từ' },
    // Phó từ, Giới từ & Thời gian
    { w: '比较', r: 'bǐjiào', hv: 'TỶ GIẢO', m: 'khá, tương đối; so sánh', t: 'Phó từ & Liên từ', ex: '今天的作业比较简单。', exr: 'Jīntiān de zuòyè bǐjiào jiǎndān.', exm: 'Bài tập hôm nay khá đơn giản.' },
    { w: '必须', r: 'bìxū', hv: 'TẤT TU', m: 'bắt buộc, phải', t: 'Phó từ & Liên từ', ex: '进去以前必须先买票。', exr: 'Jìnqù yǐqián bìxū xiān mǎipiào.', exm: 'Trước khi vào bắt buộc phải mua vé trước.' },
    { w: '才', r: 'cái', hv: 'TÀI', m: 'mới (muộn, ít, điều kiện)', t: 'Phó từ & Liên từ', ex: '他昨晚十一点才回家。', exr: 'Tā zuówǎn shíyī diǎn cái huíjiā.', exm: 'Tối qua tận 11 giờ anh ấy mới về nhà.' },
    { w: '除了', r: 'chúle', hv: 'TRỪ LIỄU', m: 'ngoài… ra', t: 'Phó từ & Liên từ', ex: '除了英语以外，她还会说汉语。', exr: 'Chúle Yīngyǔ yǐwài, tā hái huì shuō Hànyǔ.', exm: 'Ngoài tiếng Anh ra, cô ấy còn biết nói tiếng Trung.' },
    { w: '当然', r: 'dāngrán', hv: 'ĐƯƠNG NHIÊN', m: 'đương nhiên, tất nhiên', t: 'Phó từ & Liên từ' },
    { w: '刚才', r: 'gāngcái', hv: 'CƯƠNG TÀI', m: 'vừa nãy', t: 'Phó từ & Liên từ' },
    { w: '根据', r: 'gēnjù', hv: 'CĂN CỨ', m: 'dựa theo, căn cứ vào', t: 'Phó từ & Liên từ', ex: '根据天气预报，明天要下雨。', exr: 'Gēnjù tiānqì yùbào, míngtiān yào xiàyǔ.', exm: 'Theo dự báo thời tiết, ngày mai trời sẽ mưa.' },
    { w: '更', r: 'gèng', hv: 'CÁNH', m: 'càng, hơn nữa', t: 'Phó từ & Liên từ' },
    { w: '关于', r: 'guānyú', hv: 'QUAN VU', m: 'về (chủ đề…)', t: 'Phó từ & Liên từ' },
    { w: '或者', r: 'huòzhě', hv: 'HOẶC GIẢ', m: 'hoặc là (câu trần thuật)', t: 'Phó từ & Liên từ' },
    { w: '几乎', r: 'jīhū', hv: 'KỶ HỒ', m: 'hầu như, gần như', t: 'Phó từ & Liên từ' },
    { w: '经常', r: 'jīngcháng', hv: 'KINH THƯỜNG', m: 'thường xuyên', t: 'Phó từ & Liên từ' },
    { w: '马上', r: 'mǎshàng', hv: 'MÃ THƯỢNG', m: 'ngay lập tức', t: 'Phó từ & Liên từ', ex: '请等一下，经理马上就来。', exr: 'Qǐng děng yíxià, jīnglǐ mǎshàng jiù lái.', exm: 'Xin đợi một chút, giám đốc đến ngay đây.' },
    { w: '其实', r: 'qíshí', hv: 'KỲ THỰC', m: 'thực ra', t: 'Phó từ & Liên từ', ex: '其实学汉语并没有那么难。', exr: 'Qíshí xué Hànyǔ bìng méiyǒu nàme nán.', exm: 'Thực ra học tiếng Trung không khó đến thế đâu.' },
    { w: '如果', r: 'rúguǒ', hv: 'NHƯ QUẢ', m: 'nếu như', t: 'Phó từ & Liên từ', ex: '如果明天不下雨，我们就去爬山。', exr: 'Rúguǒ míngtiān bú xiàyǔ, wǒmen jiù qù páshān.', exm: 'Nếu ngày mai trời không mưa, chúng ta sẽ đi leo núi.' },
    { w: '特别', r: 'tèbié', hv: 'ĐẶC BIỆT', m: 'đặc biệt; vô cùng', t: 'Phó từ & Liên từ' },
    { w: '突然', r: 'tūrán', hv: 'ĐỘT NHIÊN', m: 'đột nhiên, bỗng nhiên', t: 'Phó từ & Liên từ', ex: '天突然下起大雨来了。', exr: 'Tiān tūrán xià qǐ dàyǔ lái le.', exm: 'Trời đột nhiên đổ mưa to.' },
    { w: '一定', r: 'yídìng', hv: 'NHẤT ĐỊNH', m: 'nhất định, chắc chắn', t: 'Phó từ & Liên từ' },
    { w: '一共', r: 'yígòng', hv: 'NHẤT CỘNG', m: 'tổng cộng', t: 'Phó từ & Liên từ' },
    { w: '终于', r: 'zhōngyú', hv: 'CHUNG VU', m: 'cuối cùng cũng', t: 'Phó từ & Liên từ', ex: '经过半年的努力，他终于通过了考试。', exr: 'Jīngguò bàn nián de nǔlì, tā zhōngyú tōngguò le kǎoshì.', exm: 'Sau nửa năm nỗ lực, cuối cùng cậu ấy cũng đỗ kỳ thi.' },
    { w: '周末', r: 'zhōumò', hv: 'CHU MẠT', m: 'cuối tuần', t: 'Phó từ & Liên từ' },
    { w: '总是', r: 'zǒngshì', hv: 'TỔNG THỊ', m: 'luôn luôn', t: 'Phó từ & Liên từ' },
    { w: '最近', r: 'zuìjìn', hv: 'TỐI CẬN', m: 'gần đây', t: 'Phó từ & Liên từ' }
  ],
  grammar: [
    { title: 'Câu chữ 把 (bǎ)', pattern: 'S + 把 + O (xác định) + V + thành phần khác (了/bổ ngữ/tân ngữ)',
      explain: 'Nhấn mạnh tác động làm thay đổi vị trí hoặc trạng thái của một tân ngữ xác định. Bắt buộc phải có thành phần khác sau động từ (không đứng trơ động từ đơn). Phó từ phủ định (不/没) hoặc động từ năng nguyện (想/要/必须) đặt TRƯỚC 把.',
      examples: [
        { s: '请把空调打开吧，房间里有点儿热。', r: 'Qǐng bǎ kōngtiáo dǎkāi ba, fángjiān lǐ yǒudiǎnr rè.', m: 'Hãy bật điều hòa lên đi, trong phòng hơi nóng.' },
        { s: '我还没把今天的作业做完。', r: 'Wǒ hái méi bǎ jīntiān de zuòyè zuòwán.', m: 'Tôi vẫn chưa làm xong bài tập hôm nay.' }
      ] },
    { title: 'Câu bị động với 被 (bèi)', pattern: 'Chủ thể chịu tác động + 被 (+ Tác nhân) + V + thành phần khác',
      explain: 'Diễn đạt ý bị động ("bị / được…"). Khác với tiếng Anh, có thể lược bỏ tác nhân ngay sau 被 (nhưng vẫn giữ chữ 被). Trong khẩu ngữ thường dùng 让 hoặc 叫 thay 被 nhưng khi đó bắt buộc phải nêu rõ tác nhân.',
      examples: [
        { s: '我的护照被弟弟拿走了。', r: 'Wǒ de hùzhào bèi dìdi názǒu le.', m: 'Hộ chiếu của tôi bị em trai cầm đi mất rồi.' },
        { s: '桌上的蛋糕被吃完了。', r: 'Zhuō shàng de dàngāo bèi chīwán le.', m: 'Bánh ngọt trên bàn đã bị ăn hết rồi.' }
      ] },
    { title: 'Bổ ngữ xu hướng (đơn và kép)', pattern: 'V + 来/去 | V + 上/下/进/出/回/过/起 + 来/去',
      explain: '来 chỉ hướng tiến lại gần người nói, 去 chỉ hướng đi ra xa người nói. Bổ ngữ xu hướng kép (như 出来, 进来, 上去, 起来…) thường đặt tân ngữ chỉ nơi chốn TRƯỚC 来/去 (走进教室来), còn tân ngữ thường có thể đặt trước hoặc sau 来/去.',
      examples: [
        { s: '经理从办公室走出来了。', r: 'Jīnglǐ cóng bàngōngshì zǒu chūlái le.', m: 'Giám đốc từ văn phòng bước ra ngoài rồi.' },
        { s: '请把你的行李箱拿进来吧。', r: 'Qǐng bǎ nǐ de xínglixiāng ná jìnlái ba.', m: 'Xin hãy mang vali của bạn vào trong đi.' }
      ] },
    { title: 'Bổ ngữ khả năng', pattern: 'S + V + 得 / 不 + Bổ ngữ kết quả / xu hướng',
      explain: 'Diễn đạt có khả năng hoặc đủ điều kiện làm được (得) hay không làm được (不) việc gì đó. Hình thức phủ định (V + 不 + bổ ngữ) xuất hiện phổ biến hơn nhiều so với khẳng định.',
      examples: [
        { s: '老师讲得很清楚，我听得懂。', r: 'Lǎoshī jiǎng de hěn qīngchu, wǒ tīngdedǒng.', m: 'Thầy giáo giảng rất rõ ràng, tôi nghe hiểu được.' },
        { s: '字太小了，我看不清楚。', r: 'Zì tài xiǎo le, wǒ kànbuqīngchu.', m: 'Chữ nhỏ quá, tôi nhìn không rõ được.' }
      ] },
    { title: 'Càng ngày càng…: 越来越 (yuèláiyuè)', pattern: 'S + 越来越 + Adj / V tâm lý',
      explain: 'Diễn tả mức độ thay đổi tăng dần theo thời gian ("càng ngày càng…"). Lưu ý KHÔNG thêm 很, 非常 trước tính từ sau 越来越.',
      examples: [
        { s: '城市的地铁越来越方便了。', r: 'Chéngshì de dìtiě yuèláiyuè fāngbiàn le.', m: 'Tàu điện ngầm của thành phố ngày càng thuận tiện rồi.' },
        { s: '我越来越喜欢学普通话了。', r: 'Wǒ yuèláiyuè xǐhuan xué Pǔtōnghuà le.', m: 'Tôi ngày càng thích học tiếng phổ thông rồi.' }
      ] },
    { title: 'Càng A càng B: 越 A 越 B', pattern: '(S +) 越 + V1/Adj1 + 越 + V2/Adj2',
      explain: 'Biểu thị mức độ của B thay đổi tương ứng theo mức độ của A ("càng… càng…"). Nếu hai vế cùng chủ ngữ thì chủ ngữ đứng trước 越 đầu tiên; khác chủ ngữ thì mỗi chủ ngữ đứng trước 越 của vế đó.',
      examples: [
        { s: '风越刮越大，我们快回家吧。', r: 'Fēng yuè guā yuè dà, wǒmen kuài huíjiā ba.', m: 'Gió thổi càng lúc càng to, chúng ta mau về nhà thôi.' },
        { s: '这道菜你越吃越觉得好吃。', r: 'Zhè dào cài nǐ yuè chī yuè juéde hǎochī.', m: 'Món này bạn càng ăn sẽ càng thấy ngon.' }
      ] },
    { title: 'Vừa… vừa…: 一边…一边… (yìbiān…yìbiān…)', pattern: 'S + 一边 + V1，一边 + V2',
      explain: 'Diễn tả hai hành động diễn ra đồng thời cùng một lúc. Khẩu ngữ có thể rút gọn thành 边…边…',
      examples: [
        { s: '她喜欢一边喝咖啡一边看新闻。', r: 'Tā xǐhuan yìbiān hē kāfēi yìbiān kàn xīnwén.', m: 'Cô ấy thích vừa uống cà phê vừa xem tin tức.' },
        { s: '我们一边散步一边聊天吧。', r: 'Wǒmen yìbiān sànbù yìbiān liáotiān ba.', m: 'Chúng ta vừa đi dạo vừa trò chuyện nhé.' }
      ] },
    { title: 'Không những… mà còn…: 不但…而且…', pattern: '不但 + A，而且 + B',
      explain: 'Nối hai vế có quan hệ tăng tiến. Nếu hai vế cùng chủ ngữ thì chủ ngữ đặt TRƯỚC 不但; nếu khác chủ ngữ thì chủ ngữ đặt SAU 不但 và 而且.',
      examples: [
        { s: '这家宾馆不但环境好，而且价格便宜。', r: 'Zhè jiā bīnguǎn búdàn huánjìng hǎo, érqiě jiàgé piányi.', m: 'Khách sạn này không những môi trường đẹp mà giá cả còn rẻ.' },
        { s: '不但我同意你的办法，而且大家也都同意。', r: 'Búdàn wǒ tóngyì nǐ de bànfǎ, érqiě dàjiā yě dōu tóngyì.', m: 'Không chỉ tôi đồng ý cách của bạn mà mọi người cũng đều đồng ý.' }
      ] },
    { title: 'Chỉ cần… thì…: 只要…就… (zhǐyào…jiù…)', pattern: '只要 + Điều kiện đủ，S + 就 + Kết quả',
      explain: 'Nêu điều kiện đủ: chỉ cần thỏa mãn điều kiện đó thì kết quả sẽ xảy ra (có thể còn nhiều cách khác dẫn tới kết quả). Chủ ngữ vế sau luôn đứng trước 就.',
      examples: [
        { s: '只要每天坚持锻炼，身体就会越来越健康。', r: 'Zhǐyào měitiān jiānchí duànliàn, shēntǐ jiù huì yuèláiyuè jiànkāng.', m: 'Chỉ cần mỗi ngày kiên trì tập luyện thì sức khỏe sẽ ngày càng tốt.' },
        { s: '只要有时间，我就去图书馆复习。', r: 'Zhǐyào yǒu shíjiān, wǒ jiù qù túshūguǎn fùxí.', m: 'Chỉ cần có thời gian là tôi đến thư viện ôn bài.' }
      ] },
    { title: 'Chỉ có… mới…: 只有…才… (zhǐyǒu…cái…)', pattern: '只有 + Điều kiện duy nhất，S + 才 + Kết quả',
      explain: 'Nhấn mạnh điều kiện duy nhất/bắt buộc: thiếu điều kiện này thì kết quả không thể đạt được. Khác với 只要…就…, vế sau của 只有 bắt buộc đi với 才 (không dùng 就).',
      examples: [
        { s: '只有认真检查，才不会出错。', r: 'Zhǐyǒu rènzhēn jiǎnchá, cái bú huì chūcuò.', m: 'Chỉ có kiểm tra nghiêm túc thì mới không mắc lỗi.' },
        { s: '只有大家一起努力，我们才能按时完成任务。', r: 'Zhǐyǒu dàjiā yìqǐ nǔlì, wǒmen cái néng ànshí wánchéng rènwu.', m: 'Chỉ có mọi người cùng nỗ lực thì chúng ta mới hoàn thành kịp nhiệm vụ.' }
      ] }
  ]
});

/* ============================================================
   HSK 4: TRUNG CẤP ỨNG DỤNG (+600 TỪ MỚI, TỔNG 1200 TỪ)
   ============================================================ */
LANG_DATA.zh.levels.push({
  id: 'hsk4',
  name: 'HSK 4',
  title: 'Trung cấp ứng dụng',
  duration: '4–5 tháng',
  color: '#22c55e',
  description: 'Mở rộng vốn từ lên 1.200 từ để giao tiếp lưu loát trong công việc, đàm phán cơ bản, bày tỏ quan điểm và phản biện nhẹ nhàng. Tập trung vào các câu phức vô điều kiện, giả định nhượng bộ, phó từ biểu thị thái độ bất ngờ/nhấn mạnh.',
  goals: [
    'Nắm vững từ vựng trọng tâm HSK 4 (tích lũy 1.200 từ) thuộc chủ đề xã hội, kinh tế, công việc và tâm lý',
    'Sử dụng chính xác các cặp liên từ điều kiện mở rộng (不管…都…, 无论…都…, 哪怕…也…, 既然…就…)',
    'Thể hiện sắc thái ngữ khí tự nhiên với 难道, 竟然, 甚至, 千万 và 来不及/赶不上',
    'Đọc hiểu bài báo ngắn, email công việc và đoạn văn 500–600 chữ với tốc độ ổn định',
    'Đạt ≥ 210/300 điểm trong đề thi thử HSK 4 (tự viết đoạn văn ngắn theo tranh/từ cho sẵn)'
  ],
  units: [
    { id: 'hsk4-u1', title: 'Tuần 1–3: Công việc, kế hoạch & trách nhiệm', desc: 'Sắp xếp lịch trình, đi công tác, báo cáo và chịu trách nhiệm.',
      tasks: [
        'Học 16 từ về công sở và quản lý (安排, 按时, 保证, 标准, 出差, 负责, 工资, 管理, 计划, 经验, 能力, 申请, 收入, 应聘, 职业)',
        'Thực hành đặt câu với 既然…就… để đưa ra quyết định hợp lý dựa trên thực tế đã rõ',
        'Viết một đoạn email ngắn (~120 chữ) xin ứng tuyển hoặc báo cáo tiến độ công việc',
        'Luyện phân biệt các cặp động từ dễ nhầm: 负责/承担, 安排/计划, 申请/报名'
      ] },
    { id: 'hsk4-u2', title: 'Tuần 4–6: Giao tiếp, cảm xúc & thuyết phục', desc: 'Xin lỗi, cảm ơn, phê bình khéo và phản ứng trước tình huống bất ngờ.',
      tasks: [
        'Học 16 từ về cảm xúc và giao tiếp (抱歉, 表扬, 吃惊, 打扰, 道歉, 烦恼, 感动, 鼓励, 后悔, 激动, 礼貌, 耐心, 脾气, 误会, 尊重)',
        'Nắm vững sắc thái tu từ của câu hỏi phản vấn 难道…吗 và phó từ bất ngờ 竟然',
        'Đóng vai hội thoại giải quyết hiểu lầm giữa đồng nghiệp hoặc bạn bè',
        'Nghe 10 bài nghe dài phần 3 của HSK 4 và ghi chú luận điểm chính'
      ] },
    { id: 'hsk4-u3', title: 'Tuần 7–9: Quan điểm, điều kiện & đánh đổi', desc: 'Lập luận hai chiều, nhấn mạnh tính bất biến của kết quả.',
      tasks: [
        'Học 15 từ về tư duy và lập luận (本来, 不管, 不过, 不仅, 反对, 否则, 符合, 估计, 关键, 怀疑, 坚持, 接受, 拒绝, 考虑, 无论)',
        'Phân biệt và sử dụng linh hoạt 不管…都… với 无论…都… (kết hợp từ nghi vấn hoặc A 还是 B)',
        'Thực hành cấu trúc 既…又… và 哪怕…也… trong các câu nêu quyết tâm',
        'Viết đoạn văn ngắn 150 chữ bày tỏ quan điểm về một chủ đề (ví dụ: chọn lương cao hay chọn đam mê)'
      ] },
    { id: 'hsk4-u4', title: 'Tuần 10–12: Đời sống hiện đại, xã hội & môi trường', desc: 'Giao thông, mua sắm, tiết kiệm, ô nhiễm và xu hướng xã hội.',
      tasks: [
        'Học 15 từ về đời sống xã hội (安全, 保护, 超过, 打折, 堵车, 发展, 法律, 丰富, 国际, 节约, 经济, 竞争, 流行, 排队, 污染)',
        'Sử dụng 甚至 để tăng tiến ý và 千万 để nhắc nhở/cảnh báo khẩn thiết',
        'Đọc 4 bài đọc hiểu HSK 4 chủ đề môi trường, tiêu dùng và công nghệ',
        'Luyện tập ghép câu và sắp xếp trật tự 3 mệnh đề (bài tập phần 1 kỹ năng viết HSK 4)'
      ] },
    { id: 'hsk4-u5', title: 'Tuần 13–15: Thời gian, cơ hội & khả năng xoay xở', desc: 'Kịp hay không kịp giờ, điều kiện thuận lợi và xử lý tình huống gấp.',
      tasks: [
        'Học 14 từ về thời gian và trạng thái (差不多, 及时, 即使, 减少, 禁止, 来不及, 偶尔, 确认/确实, 仍然, 顺利, 提前, 提醒, 推迟, 压力)',
        'Phân biệt chuẩn xác 来不及 / 来得及 với 赶不上 / 赶得上 trong câu giao thông và công việc',
        'Đặt 10 câu diễn tả sự chậm trễ, dời lịch và cách xử lý kịp thời',
        'Luyện viết 5 câu miêu tả tranh theo bộ đề thi HSK 4'
      ] },
    { id: 'hsk4-u6', title: 'Tuần 16–18: Lập luận nâng cao & tổng ôn HSK 4', desc: 'Tổng hợp liên từ văn viết và giải đề thi HSK 4 hoàn chỉnh.',
      tasks: [
        'Học 14 từ về phân tích và kết luận (答案, 调查, 过程, 基础, 结果, 缺点, 然而, 效果, 优点, 因此, 原因, 证明, 值得, 总结)',
        'Hệ thống hóa toàn bộ các cặp liên từ HSK 3–4 tránh dùng sai sắc thái (既然 vs 因为, 不管 vs 尽管)',
        'Làm 2 đề thi thử HSK 4 đầy đủ (105 phút) và chấm chữa chi tiết phần Viết',
        'Ôn lại các từ Hán Việt dễ nhầm nghĩa (hàm ý khác tiếng Việt như 丰富, 严格, 骄傲, 麻烦)'
      ] }
  ],
  vocab: [
    // Công việc & Học tập
    { w: '安排', r: 'ānpái', hv: 'AN BÀI', m: 'sắp xếp, bố trí', t: 'Công việc & Học tập', ex: '公司已经安排好下周的出差计划了。', exr: 'Gōngsī yǐjīng ānpái hǎo xià zhōu de chūchāi jìhuà le.', exm: 'Công ty đã sắp xếp xong kế hoạch công tác tuần sau rồi.' },
    { w: '报名', r: 'bàomíng', hv: 'BÁO DANH', m: 'đăng ký, ghi danh', t: 'Công việc & Học tập' },
    { w: '毕业', r: 'bìyè', hv: 'TẤT NGHIỆP', m: 'tốt nghiệp', t: 'Công việc & Học tập', ex: '大学毕业以后，她留在上海工作。', exr: 'Dàxué bìyè yǐhòu, tā liú zài Shànghǎi gōngzuò.', exm: 'Sau khi tốt nghiệp đại học, cô ấy ở lại Thượng Hải làm việc.' },
    { w: '标准', r: 'biāozhǔn', hv: 'TIÊU CHUẨN', m: 'tiêu chuẩn, chuẩn mực', t: 'Công việc & Học tập' },
    { w: '出差', r: 'chūchāi', hv: 'XUẤT SAI', m: 'đi công tác', t: 'Công việc & Học tập', ex: '爸爸这个月经常去外地出差。', exr: 'Bàba zhège yuè jīngcháng qù wàidì chūchāi.', exm: 'Tháng này bố thường xuyên đi công tác tỉnh ngoài.' },
    { w: '答案', r: 'dá\'àn', hv: 'ĐÁP ÁN', m: 'đáp án, câu trả lời', t: 'Công việc & Học tập' },
    { w: '调查', r: 'diàochá', hv: 'ĐIỀU TRA', m: 'điều tra, khảo sát', t: 'Công việc & Học tập' },
    { w: '翻译', r: 'fānyì', hv: 'PHIÊN DỊCH', m: 'phiên dịch, dịch thuật', t: 'Công việc & Học tập' },
    { w: '方法', r: 'fāngfǎ', hv: 'PHƯƠNG PHÁP', m: 'phương pháp, cách thức', t: 'Công việc & Học tập' },
    { w: '负责', r: 'fùzé', hv: 'PHỤ TRÁCH', m: 'phụ trách, chịu trách nhiệm', t: 'Công việc & Học tập', ex: '他负责管理公司的所有财务工作。', exr: 'Tā fùzé guǎnlǐ gōngsī de suǒyǒu cáiwù gōngzuò.', exm: 'Anh ấy phụ trách quản lý toàn bộ công việc tài chính của công ty.' },
    { w: '工资', r: 'gōngzī', hv: 'CÔNG TƯ', m: 'tiền lương', t: 'Công việc & Học tập' },
    { w: '管理', r: 'guǎnlǐ', hv: 'QUẢN LÝ', m: 'quản lý', t: 'Công việc & Học tập' },
    { w: '规定', r: 'guīdìng', hv: 'QUY ĐỊNH', m: 'quy định', t: 'Công việc & Học tập' },
    { w: '计划', r: 'jìhuà', hv: 'KẾ HOẠCH', m: 'kế hoạch; lên kế hoạch', t: 'Công việc & Học tập' },
    { w: '技术', r: 'jìshù', hv: 'KỸ THUẬT', m: 'kỹ thuật, công nghệ', t: 'Công việc & Học tập' },
    { w: '经验', r: 'jīngyàn', hv: 'KINH NGHIỆM', m: 'kinh nghiệm', t: 'Công việc & Học tập', ex: '她有五年的教学经验。', exr: 'Tā yǒu wǔ nián de jiàoxué jīngyàn.', exm: 'Cô ấy có năm năm kinh nghiệm giảng dạy.' },
    { w: '竞争', r: 'jìngzhēng', hv: 'CẠNH TRANH', m: 'cạnh tranh', t: 'Công việc & Học tập' },
    { w: '能力', r: 'nénglì', hv: 'NĂNG LỰC', m: 'năng lực, khả năng', t: 'Công việc & Học tập' },
    { w: '申请', r: 'shēnqǐng', hv: 'THÂN THỈNH', m: 'xin, nộp đơn đăng ký', t: 'Công việc & Học tập' },
    { w: '收入', r: 'shōurù', hv: 'THU NHẬP', m: 'thu nhập', t: 'Công việc & Học tập' },
    { w: '压力', r: 'yālì', hv: 'ÁP LỰC', m: 'áp lực', t: 'Công việc & Học tập', ex: '现在年轻人的工作压力比较大。', exr: 'Xiànzài niánqīngrén de gōngzuò yālì bǐjiào dà.', exm: 'Áp lực công việc của người trẻ hiện nay khá lớn.' },
    { w: '研究', r: 'yánjiū', hv: 'NGHIÊN CỨU', m: 'nghiên cứu', t: 'Công việc & Học tập' },
    { w: '应聘', r: 'yìngpìn', hv: 'ỨNG SÍNH', m: 'ứng tuyển', t: 'Công việc & Học tập' },
    { w: '责任', r: 'zérèn', hv: 'TRÁCH NHIỆM', m: 'trách nhiệm', t: 'Công việc & Học tập' },
    { w: '职业', r: 'zhíyè', hv: 'CHỨC NGHIỆP', m: 'nghề nghiệp', t: 'Công việc & Học tập' },
    { w: '专业', r: 'zhuānyè', hv: 'CHUYÊN NGHIỆP', m: 'chuyên ngành; chuyên nghiệp', t: 'Công việc & Học tập' },
    { w: '总结', r: 'zǒngjié', hv: 'TỔNG KẾT', m: 'tổng kết, đúc kết', t: 'Công việc & Học tập' },
    // Đời sống & Xã hội
    { w: '安全', r: 'ānquán', hv: 'AN TOÀN', m: 'an toàn', t: 'Đời sống & Xã hội' },
    { w: '保护', r: 'bǎohù', hv: 'BẢO HỘ', m: 'bảo vệ', t: 'Đời sống & Xã hội' },
    { w: '参观', r: 'cānguān', hv: 'THAM QUAN', m: 'tham quan', t: 'Đời sống & Xã hội' },
    { w: '打折', r: 'dǎzhé', hv: 'ĐẢ CHIẾT', m: 'giảm giá', t: 'Đời sống & Xã hội', ex: '周末这家商场打七折。', exr: 'Zhōumò zhè jiā shāngchǎng dǎ qī zhé.', exm: 'Cuối tuần trung tâm thương mại này giảm giá 30%.' },
    { w: '堵车', r: 'dǔchē', hv: 'ĐỔ XA', m: 'tắc đường', t: 'Đời sống & Xã hội', ex: '路上堵车，我们可能赶不上飞机了。', exr: 'Lùshang dǔchē, wǒmen kěnéng gǎnbushàng fēijī le.', exm: 'Trên đường tắc xe, chúng ta có lẽ không kịp chuyến bay rồi.' },
    { w: '发展', r: 'fāzhǎn', hv: 'PHÁT TRIỂN', m: 'phát triển', t: 'Đời sống & Xã hội', ex: '这几年互联网发展得非常快。', exr: 'Zhè jǐ nián hùliánwǎng fāzhǎn de fēicháng kuài.', exm: 'Mấy năm nay mạng internet phát triển vô cùng nhanh.' },
    { w: '法律', r: 'fǎlǜ', hv: 'PHÁP LUẬT', m: 'pháp luật', t: 'Đời sống & Xã hội' },
    { w: '国际', r: 'guójì', hv: 'QUỐC TẾ', m: 'quốc tế', t: 'Đời sống & Xã hội' },
    { w: '节约', r: 'jiéyuē', hv: 'TIẾT ƯỚC', m: 'tiết kiệm', t: 'Đời sống & Xã hội' },
    { w: '经济', r: 'jīngjì', hv: 'KINH TẾ', m: 'kinh tế', t: 'Đời sống & Xã hội' },
    { w: '流行', r: 'liúxíng', hv: 'LƯU HÀNH', m: 'thịnh hành, phổ biến', t: 'Đời sống & Xã hội' },
    { w: '排队', r: 'páiduì', hv: 'BÀI ĐỘI', m: 'xếp hàng', t: 'Đời sống & Xã hội' },
    { w: '污染', r: 'wūrǎn', hv: 'Ô NHIỄM', m: 'ô nhiễm', t: 'Đời sống & Xã hội' },
    // Giao tiếp, Cảm xúc & Tính cách
    { w: '抱歉', r: 'bàoqiàn', hv: 'BÃO KHIẾM', m: 'xin lỗi, lấy làm tiếc', t: 'Giao tiếp & Cảm xúc' },
    { w: '表扬', r: 'biǎoyáng', hv: 'BIỂU DƯƠNG', m: 'khen ngợi, biểu dương', t: 'Giao tiếp & Cảm xúc' },
    { w: '诚实', r: 'chéngshí', hv: 'THÀNH THỰC', m: 'trung thực, thật thà', t: 'Giao tiếp & Cảm xúc' },
    { w: '吃惊', r: 'chījīng', hv: 'NGẬT KINH', m: 'giật mình, kinh ngạc', t: 'Giao tiếp & Cảm xúc' },
    { w: '粗心', r: 'cūxīn', hv: 'THÔ TÂM', m: 'cẩu thả, bất cẩn', t: 'Giao tiếp & Cảm xúc' },
    { w: '打扰', r: 'dǎrǎo', hv: 'ĐẢ NHIỄU', m: 'làm phiền', t: 'Giao tiếp & Cảm xúc' },
    { w: '道歉', r: 'dàoqiàn', hv: 'ĐẠO KHIẾM', m: 'xin lỗi', t: 'Giao tiếp & Cảm xúc' },
    { w: '烦恼', r: 'fánnǎo', hv: 'PHIỀN NÃO', m: 'phiền muộn, lo âu', t: 'Giao tiếp & Cảm xúc' },
    { w: '感动', r: 'gǎndòng', hv: 'CẢM ĐỘNG', m: 'cảm động', t: 'Giao tiếp & Cảm xúc' },
    { w: '感谢', r: 'gǎnxiè', hv: 'CẢM TẠ', m: 'cảm ơn, biết ơn', t: 'Giao tiếp & Cảm xúc' },
    { w: '鼓励', r: 'gǔlì', hv: 'CỔ LỆ', m: 'khích lệ, động viên', t: 'Giao tiếp & Cảm xúc' },
    { w: '后悔', r: 'hòuhuǐ', hv: 'HẬU HỐI', m: 'hối hận', t: 'Giao tiếp & Cảm xúc', ex: '当时没有好好学习，现在很后悔。', exr: 'Dāngshí méiyǒu hǎohǎo xuéxí, xiànzài hěn hòuhuǐ.', exm: 'Lúc đó không chịu học hành tử tế, giờ thấy rất hối hận.' },
    { w: '积极', r: 'jījí', hv: 'TÍCH CỰC', m: 'tích cực, hăng hái', t: 'Giao tiếp & Cảm xúc', ex: '他工作既认真又积极。', exr: 'Tā gōngzuò jì rènzhēn yòu jījí.', exm: 'Anh ấy làm việc vừa nghiêm túc lại vừa tích cực.' },
    { w: '激动', r: 'jīdòng', hv: 'KÍCH ĐỘNG', m: 'xúc động, phấn khích', t: 'Giao tiếp & Cảm xúc' },
    { w: '交流', r: 'jiāoliú', hv: 'GIAO LƯU', m: 'giao lưu, trao đổi', t: 'Giao tiếp & Cảm xúc' },
    { w: '建议', r: 'jiànyì', hv: 'KIẾN NGHỊ', m: 'góp ý, đề nghị; lời khuyên', t: 'Giao tiếp & Cảm xúc' },
    { w: '骄傲', r: 'jiāo\'ào', hv: 'KIÊU NGẠO', m: 'tự hào; kiêu ngạo', t: 'Giao tiếp & Cảm xúc' },
    { w: '冷静', r: 'lěngjìng', hv: 'LÃNH TĨNH', m: 'bình tĩnh', t: 'Giao tiếp & Cảm xúc' },
    { w: '礼貌', r: 'lǐmào', hv: 'LỄ MẠO', m: 'lễ phép, lịch sự', t: 'Giao tiếp & Cảm xúc' },
    { w: '耐心', r: 'nàixīn', hv: 'NẠI TÂM', m: 'kiên nhẫn', t: 'Giao tiếp & Cảm xúc' },
    { w: '批评', r: 'pīpíng', hv: 'PHÊ BÌNH', m: 'phê bình, chỉ trích', t: 'Giao tiếp & Cảm xúc' },
    { w: '脾气', r: 'píqi', hv: 'TỲ KHÍ', m: 'tính khí, tính tình', t: 'Giao tiếp & Cảm xúc' },
    { w: '误会', r: 'wùhuì', hv: 'NGỘ HỘI', m: 'hiểu lầm', t: 'Giao tiếp & Cảm xúc' },
    { w: '羡慕', r: 'xiànmù', hv: 'TIỆN MỘ', m: 'ngưỡng mộ, ghen tị', t: 'Giao tiếp & Cảm xúc' },
    { w: '信心', r: 'xìnxīn', hv: 'TÍN TÂM', m: 'sự tự tin, lòng tin', t: 'Giao tiếp & Cảm xúc' },
    { w: '性格', r: 'xìnggé', hv: 'TÍNH CÁCH', m: 'tính cách', t: 'Giao tiếp & Cảm xúc' },
    { w: '幽默', r: 'yōumò', hv: 'U MẶC', m: 'hài hước', t: 'Giao tiếp & Cảm xúc' },
    { w: '尊重', r: 'zūnzhòng', hv: 'TÔN TRỌNG', m: 'tôn trọng', t: 'Giao tiếp & Cảm xúc' },
    // Động từ, Khái niệm & Tính từ
    { w: '保证', r: 'bǎozhèng', hv: 'BẢO CHỨNG', m: 'bảo đảm, cam kết', t: 'Động từ & Khái niệm', ex: '我保证明天按时完成任务。', exr: 'Wǒ bǎozhèng míngtiān ànshí wánchéng rènwu.', exm: 'Tôi cam kết ngày mai hoàn thành nhiệm vụ đúng hạn.' },
    { w: '成功', r: 'chénggōng', hv: 'THÀNH CÔNG', m: 'thành công', t: 'Động từ & Khái niệm', ex: '坚持努力是成功的关键。', exr: 'Jiānchí nǔlì shì chénggōng de guānjiàn.', exm: 'Kiên trì nỗ lực là chìa khóa của thành công.' },
    { w: '放弃', r: 'fàngqì', hv: 'PHÓNG KHÍ', m: 'từ bỏ', t: 'Động từ & Khái niệm', ex: '遇到一点儿困难千万不要放弃。', exr: 'Yùdào yìdiǎnr kùnnan qiānwàn búyào fàngqì.', exm: 'Gặp chút khó khăn tuyệt đối đừng từ bỏ.' },
    { w: '丰富', r: 'fēngfù', hv: 'PHONG PHÚ', m: 'phong phú, dồi dào', t: 'Động từ & Khái niệm' },
    { w: '复杂', r: 'fùzá', hv: 'PHỨC TẠP', m: 'phức tạp', t: 'Động từ & Khái niệm' },
    { w: '估计', r: 'gūjì', hv: 'CỔ KẾ', m: 'ước tính, đoán chừng', t: 'Động từ & Khái niệm', ex: '我估计今晚会有大雨。', exr: 'Wǒ gūjì jīnwǎn huì yǒu dàyǔ.', exm: 'Tôi đoán tối nay sẽ có mưa to.' },
    { w: '关键', r: 'guānjiàn', hv: 'QUAN KIỆN', m: 'then chốt, mấu chốt', t: 'Động từ & Khái niệm', ex: '现在最关键的是找到原因。', exr: 'Xiànzài zuì guānjiàn de shì zhǎodào yuányīn.', exm: 'Điều then chốt hiện nay là tìm ra nguyên nhân.' },
    { w: '过程', r: 'guòchéng', hv: 'QUÁ TRÌNH', m: 'quá trình', t: 'Động từ & Khái niệm' },
    { w: '怀疑', r: 'huáiyí', hv: 'HOÀI NGHI', m: 'nghi ngờ', t: 'Động từ & Khái niệm' },
    { w: '坚持', r: 'jiānchí', hv: 'KIÊN TRÌ', m: 'kiên trì', t: 'Động từ & Khái niệm', ex: '哪怕再难，我也要坚持下去。', exr: 'Nǎpà zài nán, wǒ yě yào jiānchí xiàqù.', exm: 'Cho dù khó đến đâu, tôi cũng phải kiên trì tiếp tục.' },
    { w: '拒绝', r: 'jùjué', hv: 'CỰ TUYỆT', m: 'từ chối', t: 'Động từ & Khái niệm' },
    { w: '考虑', r: 'kǎolǜ', hv: 'KHẢO LỰ', m: 'cân nhắc, suy xét', t: 'Động từ & Khái niệm', ex: '这件事我还需要仔细考虑一下。', exr: 'Zhè jiàn shì wǒ hái xūyào zǐxì kǎolǜ yíxià.', exm: 'Việc này tôi vẫn cần cân nhắc kỹ một chút.' },
    { w: '来不及', r: 'láibují', hv: 'LAI BẤT CẬP', m: 'không kịp', t: 'Động từ & Khái niệm', ex: '时间来不及了，我们打车去吧。', exr: 'Shíjiān láibují le, wǒmen dǎchē qù ba.', exm: 'Không kịp giờ nữa rồi, chúng ta bắt taxi đi thôi.' },
    { w: '缺点', r: 'quēdiǎn', hv: 'KHUYẾT ĐIỂM', m: 'nhược điểm, khuyết điểm', t: 'Động từ & Khái niệm' },
    { w: '顺利', r: 'shùnlì', hv: 'THUẬN LỢI', m: 'suôn sẻ, thuận lợi', t: 'Động từ & Khái niệm', ex: '祝你一路顺利！', exr: 'Zhù nǐ yílù shùnlì!', exm: 'Chúc bạn thượng lộ bình an (suôn sẻ)!' },
    { w: '推迟', r: 'tuīchí', hv: 'THÔI TRÌ', m: 'hoãn lại', t: 'Động từ & Khái niệm' },
    { w: '效果', r: 'xiàoguǒ', hv: 'HIỆU QUẢ', m: 'hiệu quả, tác dụng', t: 'Động từ & Khái niệm' },
    { w: '优点', r: 'yōudiǎn', hv: 'ƯU ĐIỂM', m: 'ưu điểm', t: 'Động từ & Khái niệm' },
    { w: '值得', r: 'zhídé', hv: 'TRỊ ĐẮC', m: 'đáng, xứng đáng', t: 'Động từ & Khái niệm', ex: '这本书很值得一看。', exr: 'Zhè běn shū hěn zhídé yí kàn.', exm: 'Cuốn sách này rất đáng đọc.' },
    // Phó từ & Liên từ
    { w: '按时', r: 'ànshí', hv: 'ÁN THỜI', m: 'đúng giờ, đúng hạn', t: 'Phó từ & Liên từ', ex: '请大家按时参加明天的会议。', exr: 'Qǐng dàjiā ànshí cānjiā míngtiān de huìyì.', exm: 'Mời mọi người tham gia cuộc họp ngày mai đúng giờ.' },
    { w: '本来', r: 'běnlái', hv: 'BẢN LAI', m: 'vốn dĩ, ban đầu', t: 'Phó từ & Liên từ', ex: '我本来打算去北京，后来改去杭州了。', exr: 'Wǒ běnlái dǎsuàn qù Běijīng, hòulái gǎi qù Hángzhōu le.', exm: 'Ban đầu tôi định đi Bắc Kinh, sau đó đổi sang đi Hàng Châu rồi.' },
    { w: '不得不', r: 'bùdébù', hv: 'BẤT ĐẮC BẤT', m: 'đành phải, không thể không', t: 'Phó từ & Liên từ', ex: '因为下雨，比赛不得不推迟。', exr: 'Yīnwèi xiàyǔ, bǐsài bùdébù tuīchí.', exm: 'Vì trời mưa nên trận đấu đành phải hoãn lại.' },
    { w: '不管', r: 'bùguǎn', hv: 'BẤT QUẢN', m: 'bất kể, cho dù', t: 'Phó từ & Liên từ', ex: '不管天气怎么样，我每天都跑步。', exr: 'Bùguǎn tiānqì zěnmeyàng, wǒ měitiān dōu pǎobù.', exm: 'Bất kể thời tiết thế nào, ngày nào tôi cũng chạy bộ.' },
    { w: '差不多', r: 'chàbuduō', hv: 'SAI BẤT ĐA', m: 'xấp xỉ, gần như', t: 'Phó từ & Liên từ', ex: '我们俩的汉语水平差不多。', exr: 'Wǒmen liǎ de Hànyǔ shuǐpíng chàbuduō.', exm: 'Trình độ tiếng Trung của hai chúng tôi xấp xỉ nhau.' },
    { w: '否则', r: 'fǒuzé', hv: 'PHỦ TẮC', m: 'nếu không thì', t: 'Phó từ & Liên từ', ex: '快点儿出发吧，否则要迟到了。', exr: 'Kuàidiǎnr chūfā ba, fǒuzé yào chídào le.', exm: 'Mau xuất phát thôi, nếu không thì sắp muộn rồi.' },
    { w: '既然', r: 'jìrán', hv: 'KÝ NHIÊN', m: 'đã… thì…', t: 'Phó từ & Liên từ', ex: '既然你已经决定好了，就勇敢去做吧。', exr: 'Jìrán nǐ yǐjīng juédìng hǎo le, jiù yǒnggǎn qù zuò ba.', exm: 'Đã quyết định xong rồi thì cứ mạnh dạn làm đi.' },
    { w: '竟然', r: 'jìngrán', hv: 'CÁNH NHIÊN', m: 'thế mà lại, bất ngờ là', t: 'Phó từ & Liên từ', ex: '这么难的题他竟然一次就做对了！', exr: 'Zhème nán de tí tā jìngrán yí cì jiù zuòduì le!', exm: 'Bài khó như vậy mà cậu ấy lại làm đúng ngay từ lần đầu!' },
    { w: '难道', r: 'nándào', hv: 'NAN ĐẠO', m: 'lẽ nào (câu hỏi tu từ)', t: 'Phó từ & Liên từ', ex: '难道你不知道今天休息吗？', exr: 'Nándào nǐ bù zhīdào jīntiān xiūxi ma?', exm: 'Lẽ nào bạn không biết hôm nay được nghỉ sao?' },
    { w: '千万', r: 'qiānwàn', hv: 'THIÊN VẠN', m: 'nhất định phải, tuyệt đối', t: 'Phó từ & Liên từ', ex: '明天有考试，今晚千万别睡太晚。', exr: 'Míngtiān yǒu kǎoshì, jīnwǎn qiānwàn bié shuì tài wǎn.', exm: 'Ngày mai có kỳ thi, tối nay tuyệt đối đừng ngủ muộn quá.' },
    { w: '然而', r: 'rán\'ér', hv: 'NHIÊN NHI', m: 'tuy nhiên, thế nhưng', t: 'Phó từ & Liên từ' },
    { w: '甚至', r: 'shènzhì', hv: 'THẬM CHÍ', m: 'thậm chí', t: 'Phó từ & Liên từ', ex: '他忙得甚至连吃饭的时间都没有。', exr: 'Tā máng de shènzhì lián chīfàn de shíjiān dōu méiyǒu.', exm: 'Anh ấy bận đến mức thậm chí ngay cả thời gian ăn cơm cũng không có.' },
    { w: '无论', r: 'wúlùn', hv: 'VÔ LUẬN', m: 'bất luận, dù cho', t: 'Phó từ & Liên từ', ex: '无论遇到什么困难，他都不怕。', exr: 'Wúlùn yùdào shénme kùnnan, tā dōu bú pà.', exm: 'Bất luận gặp phải khó khăn gì, anh ấy cũng không sợ.' },
    { w: '因此', r: 'yīncǐ', hv: 'NHÂN THỬ', m: 'vì vậy, do đó', t: 'Phó từ & Liên từ' }
  ],
  grammar: [
    { title: 'Vô điều kiện với 不管…都… (bùguǎn…dōu…)', pattern: '不管 + Đại từ nghi vấn (什么/怎么/多/谁) hoặc A 还是 B，S + 都/也 + V',
      explain: 'Diễn đạt kết quả không thay đổi bất kể điều kiện ra sao ("bất kể… đều…"). Phổ biến trong cả khẩu ngữ lẫn văn viết; phía sau 不管 không dùng mệnh đề đơn lẻ mà phải có từ nghi vấn hoặc cặp lựa chọn 还是.',
      examples: [
        { s: '不管工作多忙，他每天都坚持锻炼。', r: 'Bùguǎn gōngzuò duō máng, tā měitiān dōu jiānchí duànliàn.', m: 'Bất kể công việc bận đến đâu, ngày nào anh ấy cũng kiên trì tập luyện.' },
        { s: '不管你去还是不去，我都要去。', r: 'Bùguǎn nǐ qù háishi bú qù, wǒ dōu yào qù.', m: 'Dù bạn có đi hay không đi, tôi vẫn phải đi.' }
      ] },
    { title: 'Vô điều kiện trang trọng với 无论…都… (wúlùn…dōu…)', pattern: '无论 + Từ nghi vấn / A 还是 B，S + 都/也 + V',
      explain: 'Cùng nghĩa với 不管…都… nhưng sắc thái trang trọng, văn viết hơn. Thường gặp trong phát biểu, báo chí và bài luận; kết nối tự nhiên với 都 hoặc 也 ở vế sau.',
      examples: [
        { s: '无论天气如何变化，航班都会按时起飞。', r: 'Wúlùn tiānqì rúhé biànhuà, hángbān dōu huì ànshí qǐfēi.', m: 'Bất luận thời tiết thay đổi thế nào, chuyến bay đều sẽ cất cánh đúng giờ.' },
        { s: '无论谁来问，你都要礼貌地回答。', r: 'Wúlùn shéi lái wèn, nǐ dōu yào lǐmào de huídá.', m: 'Bất luận ai đến hỏi, bạn đều phải trả lời lịch sự.' }
      ] },
    { title: 'Song song cùng tồn tại: 既…又… (jì…yòu…)', pattern: 'S + 既 + Adj1/V1 + 又 + Adj2/V2',
      explain: 'Diễn đạt hai tính chất hoặc hai hành động cùng tồn tại song song ("vừa… vừa…"). Lưu ý hai vế thường cùng tích cực hoặc cùng tiêu cực để giữ cân đối ngữ nghĩa.',
      examples: [
        { s: '这门课程既有趣又实用，很受大家欢迎。', r: 'Zhè mén kèchéng jì yǒuqù yòu shíyòng, hěn shòu dàjiā huānyíng.', m: 'Môn học này vừa thú vị vừa thực tế, được mọi người rất yêu thích.' },
        { s: '她既会说汉语，又会用日语交流。', r: 'Tā jì huì shuō Hànyǔ, yòu huì yòng Rìyǔ jiāoliú.', m: 'Cô ấy vừa biết nói tiếng Trung, vừa biết giao tiếp bằng tiếng Nhật.' }
      ] },
    { title: 'Giả định nhượng bộ mạnh: 哪怕…也… (nǎpà…yě…)', pattern: '哪怕 + Giả thiết cực đoan，S + 也 + Kết quả không đổi',
      explain: 'Nhấn mạnh giả thiết ở mức độ cực đoan ("cho dù… cũng…"), thường đứng trước vế nhượng bộ để tôn lên quyết tâm hoặc tính tất yếu của vế sau.',
      examples: [
        { s: '哪怕只有百分之一的希望，我们也不能放弃。', r: 'Nǎpà zhǐyǒu bǎifēnzhī yī de xīwàng, wǒmen yě bù néng fàngqì.', m: 'Cho dù chỉ có 1% hy vọng, chúng ta cũng không thể từ bỏ.' },
        { s: '哪怕外面下大雨，他也要准时赶到学校。', r: 'Nǎpà wàimiàn xià dàyǔ, tā yě yào zhǔnshí gǎndào xuéxiào.', m: 'Cho dù bên ngoài mưa to, cậu ấy cũng phải đến trường đúng giờ.' }
      ] },
    { title: 'Suy luận từ sự thật đã biết: 既然…就… (jìrán…jiù…)', pattern: '既然 + Sự thật đã biết，(那么) S + 就 + Kết luận/Đề xuất',
      explain: 'Khác với 因为…所以… (nêu nguyên nhân mới), 既然…就… dùng khi vế đầu là sự thật cả hai bên ĐỀU ĐÃ BIẾT, từ đó rút ra đề nghị, quyết định hoặc suy luận ở vế sau ("đã… thì…").',
      examples: [
        { s: '既然大家都同意了，那我们就按计划开始吧。', r: 'Jìrán dàjiā dōu tóngyì le, nà wǒmen jiù àn jìhuà kāishǐ ba.', m: 'Đã mọi người đều đồng ý rồi thì chúng ta cứ bắt đầu theo kế hoạch đi.' },
        { s: '既然你不喜欢这份工作，就早点儿考虑换一家公司吧。', r: 'Jìrán nǐ bù xǐhuan zhè fèn gōngzuò, jiù zǎodiǎnr kǎolǜ huàn yì jiā gōngsī ba.', m: 'Đã không thích công việc này thì bạn cân nhắc chuyển công ty sớm đi.' }
      ] },
    { title: 'Nhấn mạnh mức độ tăng tiến: 甚至 (shènzhì)', pattern: '…，甚至 (+ 连 + X + 都/也) + V',
      explain: 'Đưa ra một ví dụ cực đoan hơn để nhấn mạnh ("thậm chí"). Hay đi kèm cấu trúc 连…都/也 để làm nổi bật phần được nhấn mạnh.',
      examples: [
        { s: '他工作太投入了，甚至忘了今天是自己的生日。', r: 'Tā gōngzuò tài tóurù le, shènzhì wàng le jīntiān shì zìjǐ de shēngrì.', m: 'Anh ấy tập trung làm việc quá, thậm chí quên luôn hôm nay là sinh nhật mình.' },
        { s: '这里冬天非常冷，有时候甚至会下雪。', r: 'Zhèlǐ dōngtiān fēicháng lěng, yǒushíhou shènzhì huì xiàxuě.', m: 'Mùa đông ở đây rất lạnh, có lúc thậm chí còn có tuyết rơi.' }
      ] },
    { title: 'Câu hỏi phản vấn: 难道 (nándào)', pattern: '(难道) + S + … + (吗)？',
      explain: 'Dùng trong câu hỏi tu từ để nhấn mạnh sự nghi ngờ hoặc khẳng định ngược lại ("lẽ nào…?"). Câu có 难道 thì câu khẳng định mang hàm ý phủ định, còn câu phủ định mang hàm ý khẳng định.',
      examples: [
        { s: '难道你忘了明天要交报告吗？', r: 'Nándào nǐ wàng le míngtiān yào jiāo bàogào ma?', m: 'Lẽ nào bạn quên ngày mai phải nộp báo cáo rồi sao?' },
        { s: '这么简单的问题，难道连他都不会吗？', r: 'Zhème jiǎndān de wèntí, nándào lián tā dōu bú huì ma?', m: 'Vấn đề đơn giản thế này, lẽ nào ngay cả cậu ấy cũng không biết ư?' }
      ] },
    { title: 'Biểu thị sự bất ngờ: 竟然 (jìngrán)', pattern: 'S + 竟然 + V / Adj',
      explain: 'Phó từ đứng trước động từ/tính từ (hoặc trước chủ ngữ) để diễn tả việc xảy ra trái hẳn dự đoán, ngoài sức tưởng tượng ("thế mà lại / lại có thể").',
      examples: [
        { s: '十年没见，他竟然一点儿都没变。', r: 'Shí nián méi jiàn, tā jìngrán yìdiǎnr dōu méi biàn.', m: 'Mười năm không gặp, anh ấy thế mà chẳng thay đổi chút nào.' },
        { s: '我找了半天的钥匙，竟然就在包里！', r: 'Wǒ zhǎo le bàntiān de yàoshi, jìngrán jiù zài bāo lǐ!', m: 'Chìa khóa tôi tìm mãi, hóa ra lại ở ngay trong túi!' }
      ] },
    { title: 'Khuyên nhủ, dặn dò khẩn thiết: 千万 (qiānwàn)', pattern: '千万 + 要 / 别 / 不要 + V',
      explain: 'Nhấn mạnh lời dặn dò hoặc cảnh báo nghiêm túc ("nhất định phải / tuyệt đối đừng"). Chỉ dùng trong câu cầu khiến/khuyên nhủ, KHÔNG dùng trong câu trần thuật bình thường.',
      examples: [
        { s: '出门前千万别忘了关灯和锁门。', r: 'Chūmén qián qiānwàn bié wàng le guāndēng hé suǒmén.', m: 'Trước khi ra khỏi nhà tuyệt đối đừng quên tắt đèn và khóa cửa.' },
        { s: '开车的时候千万要小心。', r: 'Kāichē de shíhou qiānwàn yào xiǎoxīn.', m: 'Lúc lái xe nhất định phải cẩn thận.' }
      ] },
    { title: 'Kịp và không kịp: 来不及 (láibují) vs 赶不上 (gǎnbushàng)', pattern: '来不及 + V / 来得及 | 赶不上 + Danh từ phương tiện/sự kiện / 赶得上',
      explain: '来不及 nhấn mạnh không đủ thời gian để làm một việc gì đó (có thể đi kèm động từ: 来不及吃早饭). 赶不上 nhấn mạnh không đuổi kịp/lỡ một chuyến xe, chuyến bay, cuộc họp hoặc tiến độ (thường đi với danh từ).',
      examples: [
        { s: '起晚了，来不及吃早饭了，拿个面包走吧。', r: 'Qǐwǎn le, láibují chī zǎofàn le, ná gè miànbāo zǒu ba.', m: 'Dậy muộn rồi, không kịp ăn sáng nữa, cầm cái bánh mì đi thôi.' },
        { s: '再不快点儿，我们就要赶不上最后一班地铁了。', r: 'Zài bú kuàidiǎnr, wǒmen jiù yào gǎnbushàng zuìhòu yì bān dìtiě le.', m: 'Không nhanh lên nữa là chúng ta sắp lỡ chuyến tàu điện ngầm cuối cùng rồi.' }
      ] }
  ]
});

/* ============================================================
   HSK 5: CAO CẤP ĐỌC BÁO & CÔNG VIỆC (+1300 TỪ MỚI, TỔNG 2500 TỪ)
   ============================================================ */
LANG_DATA.zh.levels.push({
  id: 'hsk5',
  name: 'HSK 5',
  title: 'Cao cấp đọc báo & công việc',
  duration: '5–6 tháng',
  color: '#06b6d4',
  description: 'Bước vào trình độ tiếng Trung cao cấp với 2.500 từ vựng: đọc hiểu báo chí, phân tích số liệu, thuyết trình công việc và tranh luận các chủ đề kinh tế – xã hội. Nắm vững các cấu trúc so sánh lựa chọn, nhượng bộ nâng cao và liên kết văn viết.',
  goals: [
    'Làm chủ vốn từ HSK 5 (tích lũy 2.500 từ), đặc biệt hệ thống từ Hán Việt hai âm tiết dùng trong báo chí và văn phòng',
    'Diễn đạt sự lựa chọn, đánh đổi và sắc thái tinh tế với 与其…不如…, 宁可…也不…, 何况, 未免',
    'Biểu đạt cảm xúc và mạch lập luận sắc bén bằng 不禁, 恨不得, 从而, 以免',
    'Đọc hiểu bài báo 800–1.000 chữ về kinh tế, công nghệ, văn hóa mà không cần tra từ điển quá nhiều',
    'Viết được bài nghị luận ngắn hoặc tóm tắt/kể chuyện 80–100 chữ chuẩn văn phong trong đề thi HSK 5'
  ],
  units: [
    { id: 'hsk5-u1', title: 'Tuần 1–3: Truyền thông, báo chí & văn phong tin tức', desc: 'Từ vựng báo chí, phân tích hiện tượng xã hội và đọc hiểu tin thời sự.',
      tasks: [
        'Học 12 từ về báo chí và phân tích (报道, 背景, 编辑, 采访, 概念, 观察, 规律, 趋势, 现象, 预测)',
        'Đọc 3 bản tin ngắn trên báo mạng tiếng Trung và gạch chân các cặp động từ – tân ngữ cố định (collocations)',
        'Tóm tắt nội dung một bài báo dài 500 chữ thành đoạn văn 100 chữ',
        'Luyện đọc lướt (skimming) tìm ý chính và thái độ tác giả trong phần Đọc 3 HSK 5'
      ] },
    { id: 'hsk5-u2', title: 'Tuần 4–6: Quản trị công việc, đàm phán & chiến lược', desc: 'Trao đổi chuyên môn, đánh giá phương án, chế độ đãi ngộ và hiệu suất.',
      tasks: [
        'Học 12 từ về doanh nghiệp và công việc (报告, 采取, 承担, 措施, 担任, 待遇, 方案, 规模, 行业, 效率, 制度, 资源)',
        'Thực hành cặp cấu trúc cân nhắc – lựa chọn 与其…不如… và quyết tâm 宁可…也不…',
        'Viết một bản đề xuất phương án (~150 chữ) có dùng 从而 và 以免 để nêu giải pháp',
        'Phân biệt các cặp từ đồng nghĩa HSK 5: 采取/采用, 承担/担任, 制定/规定'
      ] },
    { id: 'hsk5-u3', title: 'Tuần 7–9: Tư duy phản biện & lập luận tăng tiến', desc: 'Phân tích nguyên nhân – hệ quả, thừa nhận hay phủ nhận một quan điểm.',
      tasks: [
        'Học 12 từ lập luận và tư duy (把握, 必然, 避免, 承认, 导致, 分析, 否认, 忽视, 缺乏, 确定, 因素, 原则)',
        'Nắm vững cấu trúc tăng tiến 何况 và đánh giá nhẹ nhàng mang tính phê bình 未免',
        'Thảo luận/viết đoạn văn phản biện một quan điểm xã hội (ví dụ: làm việc từ xa vs tại văn phòng)',
        'Làm 20 câu bài tập điền từ vào chỗ trống (phần Đọc 1 HSK 5)'
      ] },
    { id: 'hsk5-u4', title: 'Tuần 10–12: Giao tiếp sâu, tâm lý & cảm xúc tinh tế', desc: 'Diễn đạt xúc động bất giác, mong muốn mãnh liệt và sự đồng cảm.',
      tasks: [
        'Học 12 từ về giao tiếp và cảm xúc (彼此, 表达, 表现, 充满, 独立, 沟通, 观念, 缓解, 依靠, 珍惜)',
        'Dùng chuẩn sắc thái của 不禁 (bất giác, không kìm được) và 恨不得 (nóng lòng chỉ muốn ngay)',
        'Nghe 10 đoạn độc thoại/phỏng vấn HSK 5 và ghi chú cách người bản xứ chuyển ý',
        'Viết đoạn văn 100 chữ dùng 5 từ gợi ý cho sẵn (dạng bài Viết câu 99 HSK 5)'
      ] },
    { id: 'hsk5-u5', title: 'Tuần 13–15: Văn hóa, đổi mới & phát triển bền vững', desc: 'Truyền thống và hiện đại, tiếp thu, cải thiện và phát huy ưu thế.',
      tasks: [
        'Học 10 từ về phát triển và đổi mới (传统, 促进, 达到, 发挥, 改善, 构成, 价值, 实现, 吸收, 优势)',
        'Luyện kết hợp động từ – tân ngữ nâng cao (发挥优势, 改善条件, 促进交流, 实现目标)',
        'Đọc 4 bài viết về văn hóa – công nghệ và trả lời câu hỏi suy luận',
        'Luyện viết đoạn văn miêu tả bức tranh (dạng bài Viết câu 100 HSK 5)'
      ] },
    { id: 'hsk5-u6', title: 'Tuần 16–18: Tổng hợp ngữ pháp & giải đề HSK 5', desc: 'Hệ thống hóa ngữ pháp văn viết và tối ưu tốc độ đọc hiểu.',
      tasks: [
        'Học 10 từ còn lại về kết nối và đánh giá (参考, 曾经, 产生, 充分, 协调, 需求, 掌握, 针对, 制定, 综合)',
        'Ôn tập 8 cấu trúc trọng tâm HSK 5, đối chiếu sắc thái văn nói và văn viết',
        'Làm 2 đề thi thử HSK 5 trọn vẹn theo thời gian chuẩn (125 phút)',
        'Thống kê lỗi sai ở phần Nghe và Đọc để cải thiện chiến lược làm bài'
      ] }
  ],
  vocab: [
    // Báo chí, Kinh tế & Công việc
    { w: '报道', r: 'bàodào', hv: 'BÁO ĐẠO', m: 'đưa tin; bản tin', t: 'Báo chí & Công việc', ex: '多家媒体报道了这次国际会议。', exr: 'Duō jiā méitǐ bàodào le zhè cì guójì huìyì.', exm: 'Nhiều cơ quan truyền thông đã đưa tin về hội nghị quốc tế lần này.' },
    { w: '报告', r: 'bàogào', hv: 'BÁO CÁO', m: 'báo cáo; bản báo cáo', t: 'Báo chí & Công việc' },
    { w: '背景', r: 'bèijǐng', hv: 'BỐI CẢNH', m: 'bối cảnh, xuất thân', t: 'Báo chí & Công việc' },
    { w: '编辑', r: 'biānjí', hv: 'BIÊN TẬP', m: 'biên tập; biên tập viên', t: 'Báo chí & Công việc' },
    { w: '采访', r: 'cǎifǎng', hv: 'THÁI PHỎNG', m: 'phỏng vấn, thu thập tin', t: 'Báo chí & Công việc' },
    { w: '采取', r: 'cǎiqǔ', hv: 'THẢI THỦ', m: 'áp dụng (biện pháp), thực thi', t: 'Báo chí & Công việc', ex: '政府采取了一系列措施来保护环境。', exr: 'Zhèngfǔ cǎiqǔ le yí xìliè cuòshī lái bǎohù huánjìng.', exm: 'Chính phủ đã áp dụng một loạt biện pháp để bảo vệ môi trường.' },
    { w: '参考', r: 'cānkǎo', hv: 'THAM KHẢO', m: 'tham khảo', t: 'Báo chí & Công việc' },
    { w: '承担', r: 'chéngdān', hv: 'THỪA ĐẢM', m: 'gánh vác, đảm nhận (trách nhiệm)', t: 'Báo chí & Công việc' },
    { w: '措施', r: 'cuòshī', hv: 'THỐ THI', m: 'biện pháp', t: 'Báo chí & Công việc' },
    { w: '担任', r: 'dānrèn', hv: 'ĐẢM NHẬN', m: 'đảm nhiệm (chức vụ)', t: 'Báo chí & Công việc' },
    { w: '待遇', r: 'dàiyù', hv: 'ĐÃI NGỘ', m: 'chế độ đãi ngộ', t: 'Báo chí & Công việc' },
    { w: '方案', r: 'fāng\'àn', hv: 'PHƯƠNG ÁN', m: 'phương án, kế hoạch chi tiết', t: 'Báo chí & Công việc', ex: '我们需要制定一个更可行的方案。', exr: 'Wǒmen xūyào zhìdìng yí gè gèng kěxíng de fāng\'àn.', exm: 'Chúng ta cần xây dựng một phương án khả thi hơn.' },
    { w: '规模', r: 'guīmó', hv: 'QUY MÔ', m: 'quy mô', t: 'Báo chí & Công việc' },
    { w: '行业', r: 'hángyè', hv: 'HÀNG NGHIỆP', m: 'ngành nghề, lĩnh vực', t: 'Báo chí & Công việc' },
    { w: '趋势', r: 'qūshì', hv: 'XU THẾ', m: 'xu thế, xu hướng', t: 'Báo chí & Công việc', ex: '绿色消费正在成为一种新趋势。', exr: 'Lǜsè xiāofèi zhèngzài chéngwéi yì zhǒng xīn qūshì.', exm: 'Tiêu dùng xanh đang trở thành một xu hướng mới.' },
    { w: '效率', r: 'xiàolǜ', hv: 'HIỆU SUẤT', m: 'hiệu suất, hiệu quả làm việc', t: 'Báo chí & Công việc', ex: '合理安排时间能大大提高工作效率。', exr: 'Hélǐ ānpái shíjiān néng dàdà tígāo gōngzuò xiàolǜ.', exm: 'Sắp xếp thời gian hợp lý có thể nâng cao đáng kể hiệu suất công việc.' },
    { w: '协调', r: 'xiétiáo', hv: 'HIỆP ĐIỀU', m: 'điều phối, phối hợp hài hòa', t: 'Báo chí & Công việc' },
    { w: '需求', r: 'xūqiú', hv: 'NHU CẦU', m: 'nhu cầu', t: 'Báo chí & Công việc' },
    { w: '制定', r: 'zhìdìng', hv: 'CHẾ ĐỊNH', m: 'xây dựng, ban hành', t: 'Báo chí & Công việc' },
    { w: '制度', r: 'zhìdù', hv: 'CHẾ ĐỘ', m: 'chế độ, hệ thống quy định', t: 'Báo chí & Công việc' },
    { w: '资源', r: 'zīyuán', hv: 'TƯ NGUYÊN', m: 'tài nguyên, nguồn lực', t: 'Báo chí & Công việc' },
    // Tư duy, Lập luận & Khái niệm
    { w: '把握', r: 'bǎwò', hv: 'BẢ ÁC', m: 'nắm chắc; sự chắc chắn', t: 'Tư duy & Lập luận', ex: '我对这次面试非常有把握。', exr: 'Wǒ duì zhè cì miànshì fēicháng yǒu bǎwò.', exm: 'Tôi rất tự tin nắm chắc phần thắng ở buổi phỏng vấn lần này.' },
    { w: '必然', r: 'bìrán', hv: 'TẤT NHIÊN', m: 'tất yếu, tất nhiên', t: 'Tư duy & Lập luận' },
    { w: '避免', r: 'bìmiǎn', hv: 'TỴ MIỄN', m: 'tránh, phòng tránh', t: 'Tư duy & Lập luận', ex: '仔细检查可以避免不必要的错误。', exr: 'Zǐxì jiǎnchá kěyǐ bìmiǎn bú bìyào de cuòwù.', exm: 'Kiểm tra kỹ có thể tránh được những sai sót không đáng có.' },
    { w: '承认', r: 'chéngrèn', hv: 'THỪA NHẬN', m: 'thừa nhận, công nhận', t: 'Tư duy & Lập luận' },
    { w: '导致', r: 'dǎozhì', hv: 'ĐẠO TRÍ', m: 'dẫn đến (hệ quả)', t: 'Tư duy & Lập luận', ex: '长期熬夜会导致注意力下降。', exr: 'Chángqī áoyè huì dǎozhì zhùyìlì xiàjiàng.', exm: 'Thức khuya kéo dài sẽ dẫn đến suy giảm khả năng tập trung.' },
    { w: '分析', r: 'fēnxī', hv: 'PHÂN TÍCH', m: 'phân tích', t: 'Tư duy & Lập luận' },
    { w: '否认', r: 'fǒurèn', hv: 'PHỦ NHẬN', m: 'phủ nhận', t: 'Tư duy & Lập luận' },
    { w: '概念', r: 'gàiniàn', hv: 'KHÁI NIỆM', m: 'khái niệm', t: 'Tư duy & Lập luận' },
    { w: '观察', r: 'guānchá', hv: 'QUAN SÁT', m: 'quan sát', t: 'Tư duy & Lập luận' },
    { w: '观念', r: 'guānniàn', hv: 'QUAN NIỆM', m: 'quan niệm, tư duy', t: 'Tư duy & Lập luận' },
    { w: '规律', r: 'guīlǜ', hv: 'QUY LUẬT', m: 'quy luật', t: 'Tư duy & Lập luận' },
    { w: '忽视', r: 'hūshì', hv: 'HỐT THỊ', m: 'xem nhẹ, lơ là', t: 'Tư duy & Lập luận', ex: '我们不能忽视细节问题。', exr: 'Wǒmen bù néng hūshì xìjié wèntí.', exm: 'Chúng ta không thể xem nhẹ các vấn đề chi tiết.' },
    { w: '缺乏', r: 'quēfá', hv: 'KHUYẾT PHẠP', m: 'thiếu hụt, thiếu thốn', t: 'Tư duy & Lập luận' },
    { w: '确定', r: 'quèdìng', hv: 'XÁC ĐỊNH', m: 'xác định, ấn định chắc chắn', t: 'Tư duy & Lập luận' },
    { w: '现象', r: 'xiànxiàng', hv: 'HIỆN TƯỢNG', m: 'hiện tượng', t: 'Tư duy & Lập luận' },
    { w: '因素', r: 'yīnsù', hv: 'NHÂN TỐ', m: 'nhân tố, yếu tố', t: 'Tư duy & Lập luận' },
    { w: '预测', r: 'yùcè', hv: 'DỰ TRẮC', m: 'dự báo, dự đoán', t: 'Tư duy & Lập luận' },
    { w: '原则', r: 'yuánzé', hv: 'NGUYÊN TẮC', m: 'nguyên tắc', t: 'Tư duy & Lập luận' },
    { w: '掌握', r: 'zhǎngwò', hv: 'CHƯỞNG ÁC', m: 'nắm vững, làm chủ', t: 'Tư duy & Lập luận', ex: '他已经掌握了这门技术。', exr: 'Tā yǐjīng zhǎngwò le zhè mén jìshù.', exm: 'Anh ấy đã nắm vững kỹ thuật này rồi.' },
    { w: '综合', r: 'zōnghé', hv: 'TỔNG HỢP', m: 'tổng hợp', t: 'Tư duy & Lập luận' },
    // Hành động, Phát triển & Giao tiếp
    { w: '彼此', r: 'bǐcǐ', hv: 'BỈ THỬ', m: 'lẫn nhau, đôi bên', t: 'Giao tiếp & Phát triển' },
    { w: '表达', r: 'biǎodá', hv: 'BIỂU ĐẠT', m: 'diễn đạt, bày tỏ', t: 'Giao tiếp & Phát triển' },
    { w: '表现', r: 'biǎoxiàn', hv: 'BIỂU HIỆN', m: 'thể hiện, biểu hiện', t: 'Giao tiếp & Phát triển' },
    { w: '产生', r: 'chǎnshēng', hv: 'SẢN SINH', m: 'nảy sinh, tạo ra', t: 'Giao tiếp & Phát triển' },
    { w: '充分', r: 'chōngfèn', hv: 'SUNG PHẬN', m: 'đầy đủ, tận dụng tối đa', t: 'Giao tiếp & Phát triển' },
    { w: '充满', r: 'chōngmǎn', hv: 'SUNG MÃN', m: 'tràn đầy', t: 'Giao tiếp & Phát triển' },
    { w: '传统', r: 'chuántǒng', hv: 'TRUYỀN THỐNG', m: 'truyền thống', t: 'Giao tiếp & Phát triển' },
    { w: '促进', r: 'cùjìn', hv: 'XÚC TIẾN', m: 'thúc đẩy', t: 'Giao tiếp & Phát triển', ex: '加强沟通能够促进彼此的理解。', exr: 'Jiāqiáng gōutōng nénggòu cùjìn bǐcǐ de lǐjiě.', exm: 'Tăng cường giao tiếp có thể thúc đẩy sự thấu hiểu lẫn nhau.' },
    { w: '达到', r: 'dádào', hv: 'ĐẠT ĐÁO', m: 'đạt tới, đạt được', t: 'Giao tiếp & Phát triển' },
    { w: '独立', r: 'dúlì', hv: 'ĐỘC LẬP', m: 'độc lập', t: 'Giao tiếp & Phát triển' },
    { w: '发挥', r: 'fāhuī', hv: 'PHÁT HUY', m: 'phát huy', t: 'Giao tiếp & Phát triển', ex: '在团队中要充分发挥每个人的优势。', exr: 'Zài tuánduì zhōng yào chōngfèn fāhuī měi gè rén de yōushì.', exm: 'Trong tập thể cần phát huy tối đa lợi thế của mỗi người.' },
    { w: '改善', r: 'gǎishàn', hv: 'CẢI THIỆN', m: 'cải thiện', t: 'Giao tiếp & Phát triển' },
    { w: '沟通', r: 'gōutōng', hv: 'CÂU THÔNG', m: 'giao tiếp, trao đổi thông tin', t: 'Giao tiếp & Phát triển' },
    { w: '构成', r: 'gòuchéng', hv: 'CẤU THÀNH', m: 'cấu thành, tạo nên', t: 'Giao tiếp & Phát triển' },
    { w: '缓解', r: 'huǎnjiě', hv: 'HOÃN GIẢI', m: 'xoa dịu, giảm bớt (áp lực)', t: 'Giao tiếp & Phát triển', ex: '听音乐有助于缓解工作压力。', exr: 'Tīng yīnyuè yǒuzhùyú huǎnjiě gōngzuò yālì.', exm: 'Nghe nhạc giúp giảm bớt áp lực công việc.' },
    { w: '价值', r: 'jiàzhí', hv: 'GIÁ TRỊ', m: 'giá trị', t: 'Giao tiếp & Phát triển' },
    { w: '面对', r: 'miànduì', hv: 'DIỆN ĐỐI', m: 'đối mặt', t: 'Giao tiếp & Phát triển' },
    { w: '实现', r: 'shíxiàn', hv: 'THỰC HIỆN', m: 'thực hiện, hiện thực hóa', t: 'Giao tiếp & Phát triển' },
    { w: '吸收', r: 'xīshōu', hv: 'HẤP THU', m: 'tiếp thu, hấp thụ', t: 'Giao tiếp & Phát triển' },
    { w: '依靠', r: 'yīkào', hv: 'Y KHÁO', m: 'dựa vào, nương tựa', t: 'Giao tiếp & Phát triển' },
    { w: '优势', r: 'yōushì', hv: 'ƯU THẾ', m: 'ưu thế, lợi thế', t: 'Giao tiếp & Phát triển' },
    { w: '珍惜', r: 'zhēnxī', hv: 'TRÂN TÍCH', m: 'trân trọng, giữ gìn', t: 'Giao tiếp & Phát triển' },
    { w: '针对', r: 'zhēnduì', hv: 'CHÂM ĐỐI', m: 'nhằm vào, nhắm đến', t: 'Giao tiếp & Phát triển' },
    // Phó từ, Liên từ văn viết
    { w: '不禁', r: 'bùjīn', hv: 'BẤT CẤM', m: 'không kìm được, bất giác', t: 'Ngữ pháp & Liên từ', ex: '听到这个消息，他不禁笑了起来。', exr: 'Tīngdào zhège xiāoxi, tā bùjīn xiào le qǐlái.', exm: 'Nghe được tin này, anh ấy bất giác bật cười.' },
    { w: '曾经', r: 'céngjīng', hv: 'TẰNG KINH', m: 'đã từng', t: 'Ngữ pháp & Liên từ' },
    { w: '从而', r: 'cóng\'ér', hv: 'TÙNG NHI', m: 'từ đó, nhờ vậy mà', t: 'Ngữ pháp & Liên từ', ex: '他改进了学习方法，从而提高了成绩。', exr: 'Tā gǎijìn le xuéxí fāngfǎ, cóng\'ér tígāo le chéngjì.', exm: 'Cậu ấy cải tiến phương pháp học, nhờ đó mà nâng cao được điểm số.' },
    { w: '何况', r: 'hékuàng', hv: 'HÀ HUỐNG', m: 'huống hồ, huống chi', t: 'Ngữ pháp & Liên từ', ex: '大人都走不动了，何况孩子呢？', exr: 'Dàrén dōu zǒubudòng le, hékuàng háizi ne?', exm: 'Người lớn còn đi không nổi nữa là trẻ con.' },
    { w: '恨不得', r: 'hènbude', hv: 'HẬN BẤT ĐẮC', m: 'hận không thể, chỉ muốn ngay', t: 'Ngữ pháp & Liên từ', ex: '他恨不得马上飞到北京去。', exr: 'Tā hènbude mǎshàng fēidào Běijīng qù.', exm: 'Anh ấy chỉ muốn bay ngay tới Bắc Kinh lập tức.' },
    { w: '宁可', r: 'nìngkě', hv: 'NINH KHẢ', m: 'thà… (chứ không…)', t: 'Ngữ pháp & Liên từ', ex: '他宁可自己辛苦一点儿，也不愿麻烦别人。', exr: 'Tā nìngkě zìjǐ xīnkǔ yìdiǎnr, yě búyuàn máfan biérén.', exm: 'Anh ấy thà tự mình vất vả một chút chứ không muốn làm phiền người khác.' },
    { w: '未免', r: 'wèimiǎn', hv: 'VỊ MIỄN', m: 'khó tránh khỏi, có phần hơi', t: 'Ngữ pháp & Liên từ', ex: '只看表面就下结论，未免太草率了。', exr: 'Zhǐ kàn biǎomiàn jiù xià jiélùn, wèimiǎn tài cǎoshuài le.', exm: 'Chỉ nhìn bề ngoài mà đã kết luận thì có phần hơi vội vàng.' },
    { w: '以免', r: 'yǐmiǎn', hv: 'DĨ MIỄN', m: 'để tránh, kẻo', t: 'Ngữ pháp & Liên từ', ex: '请提前备份文件，以免丢失重要数据。', exr: 'Qǐng tíqián bèifèn wénjiàn, yǐmiǎn diūshī zhòngyào shùjù.', exm: 'Xin hãy sao lưu tệp trước để tránh làm mất dữ liệu quan trọng.' },
    { w: '与其', r: 'yǔqí', hv: 'DỮ KỲ', m: 'thay vì, thà rằng…', t: 'Ngữ pháp & Liên từ', ex: '与其空想，不如立刻行动起来。', exr: 'Yǔqí kōngxiǎng, bùrú lìkè xíngdòng qǐlái.', exm: 'Thay vì ngồi mơ mộng, chi bằng bắt tay hành động ngay.' }
  ],
  grammar: [
    { title: 'So sánh lựa chọn: 与其…不如… (yǔqí…bùrú…)', pattern: '与其 + Lựa chọn A (không ưu tiên)，不如 + Lựa chọn B (nên chọn)',
      explain: 'Cân nhắc hai phương án và khuyên/chọn phương án B vì thấy B hợp lý hơn A ("thay vì A, chi bằng B"). Vế sau có thể dùng 不如 hoặc 还不如.',
      examples: [
        { s: '与其每天抱怨工作累，不如想办法提高效率。', r: 'Yǔqí měitiān bàoyuàn gōngzuò lèi, bùrú xiǎng bànfǎ tígāo xiàolǜ.', m: 'Thay vì ngày nào cũng than công việc mệt, chi bằng nghĩ cách nâng cao hiệu suất.' },
        { s: '周末与其在家无聊地刷手机，不如去图书馆看书。', r: 'Zhōumò yǔqí zài jiā wúliáo de shuā shǒujī, bùrú qù túshūguǎn kànshū.', m: 'Cuối tuần thay vì ở nhà lướt điện thoại chán ngắt, chi bằng ra thư viện đọc sách.' }
      ] },
    { title: 'Quyết tâm chọn thiệt thòi: 宁可…也不… (nìngkě…yě bù…)', pattern: 'S + 宁可 + Chịu phần thiệt A，也 + 不 / 不愿 + Làm B',
      explain: 'Khác với 与其…不如… (so sánh khách quan), 宁可…也不… thể hiện ý chí chủ quan dứt khoát: thà chấp nhận điều bất lợi A chứ nhất quyết không làm điều B.',
      examples: [
        { s: '他宁可少赚一点儿钱，也不愿放弃自己的原则。', r: 'Tā nìngkě shǎo zhuàn yìdiǎnr qián, yě búyuàn fàngqì zìjǐ de yuánzé.', m: 'Anh ấy thà kiếm ít tiền đi một chút chứ không chịu từ bỏ nguyên tắc của bản thân.' },
        { s: '我宁可步行去公司，也不想在路上堵车。', r: 'Wǒ nìngkě bùxíng qù gōngsī, yě bù xiǎng zài lùshang dǔchē.', m: 'Tôi thà đi bộ tới công ty chứ không muốn kẹt xe trên đường.' }
      ] },
    { title: 'Tăng tiến suy luận: 何况 (hékuàng)', pattern: 'Vế 1 (điều đã rõ ràng)，何况 + Vế 2 (mức độ hơn nữa) (+ 呢)？',
      explain: 'Dùng để suy rộng từ việc nhỏ/dễ sang việc lớn/khó hơn ("huống hồ, huống chi"). Có thể đứng đầu vế sau, thường kết thúc bằng câu trần thuật nhấn mạnh hoặc câu hỏi tu từ với 呢.',
      examples: [
        { s: '专业人士都觉得这个问题很复杂，何况我们这些新手呢？', r: 'Zhuānyè rénshì dōu juéde zhège wèntí hěn fùzá, hékuàng wǒmen zhèxiē xīnshǒu ne?', m: 'Người trong nghề còn thấy vấn đề này phức tạp, huống chi những người mới như chúng ta.' },
        { s: '平时工作就已经够忙了，更何况年底还要出差。', r: 'Píngshí gōngzuò jiù yǐjīng gòu máng le, gèng hékuàng niándǐ hái yào chūchāi.', m: 'Bình thường công việc đã đủ bận rồi, huống hồ cuối năm còn phải đi công tác.' }
      ] },
    { title: 'Nhận xét nhẹ nhàng, uyển chuyển: 未免 (wèimiǎn)', pattern: 'S + 未免 + (太/有点儿) + Adj',
      explain: 'Diễn đạt sự đánh giá mang tính phê bình nhẹ, không tán thành một mức độ quá đáng nào đó ("khó tránh khỏi hơi…, có phần hơi…"). Rất hay đi kèm 太 hoặc 有点儿.',
      examples: [
        { s: '仅仅因为一次失败就放弃，未免太可惜了。', r: 'Jǐnjǐn yīnwèi yí cì shībài jiù fàngqì, wèimiǎn tài kěxī le.', m: 'Chỉ vì một lần thất bại mà đã từ bỏ thì có phần đáng tiếc quá.' },
        { s: '要求一个刚学中文的人读懂报纸，未免有点儿难了。', r: 'Yāoqiú yí gè gāng xué Zhōngwén de rén dúdǒng bàozhǐ, wèimiǎn yǒudiǎnr nán le.', m: 'Yêu cầu một người mới học tiếng Trung đọc hiểu báo chí thì hơi khó quá rồi.' }
      ] },
    { title: 'Cảm xúc tự nhiên không kìm được: 不禁 (bùjīn)', pattern: 'S + 不禁 + V / 笑起来 / 流下眼泪 / 感叹',
      explain: 'Phó từ văn viết biểu thị cảm xúc tự nhiên bộc lộ ra ngoài trước một cảnh tượng hoặc tin tức ("bất giác, không kìm lòng được"). Không dùng cho hành động cố ý hoặc phủ định.',
      examples: [
        { s: '看到家乡的变化，他不禁感叹时间过得真快。', r: 'Kàndào jiāxiāng de biànhuà, tā bùjīn gǎntàn shíjiān guò de zhēn kuài.', m: 'Nhìn thấy sự thay đổi của quê hương, ông ấy bất giác cảm thán thời gian trôi thật nhanh.' },
        { s: '读完这封信，妈妈不禁流下了眼泪。', r: 'Dúwán zhè fēng xìn, māma bùjīn liúxià le yǎnlèi.', m: 'Đọc xong lá thư này, mẹ không kìm được mà rơi nước mắt.' }
      ] },
    { title: 'Mong muốn tột độ: 恨不得 (hènbude)', pattern: 'S + 恨不得 + V / 马上 + V',
      explain: 'Diễn tả tâm trạng sốt ruột, khao khát mãnh liệt đến mức muốn thực hiện ngay lập tức điều gì đó dù thực tế khó hoặc chưa làm được ("hận không thể, chỉ muốn ngay").',
      examples: [
        { s: '离开家半年了，我恨不得立刻飞回父母身边。', r: 'Líkāi jiā bàn nián le, wǒ hènbude lìkè fēihuí fùmǔ shēnbiān.', m: 'Xa nhà nửa năm rồi, tôi chỉ muốn bay ngay về bên bố mẹ.' },
        { s: '离考试只有三天，他恨不得一天有四十八个小时。', r: 'Lí kǎoshì zhǐyǒu sān tiān, tā hènbude yì tiān yǒu sìshíbā gè xiǎoshí.', m: 'Còn ba ngày nữa là thi, cậu ấy ước gì một ngày có 48 tiếng.' }
      ] },
    { title: 'Kết quả tất yếu nối tiếp: 从而 (cóng\'ér)', pattern: 'Nguyên nhân/Phương pháp，从而 + Kết quả/Mục đích đạt được',
      explain: 'Liên từ văn viết dùng giữa hai vế cùng chủ ngữ hoặc vế sau là kết quả tốt, tiến triển logic sinh ra từ hành động/điều kiện ở vế trước ("từ đó, nhờ đó mà").',
      examples: [
        { s: '公司优化了工作流程，从而降低了不少成本。', r: 'Gōngsī yōuhuà le gōngzuò liúchéng, cóng\'ér jiàngdī le bùshǎo chéngběn.', m: 'Công ty đã tối ưu quy trình làm việc, từ đó giảm được đáng kể chi phí.' },
        { s: '多阅读能扩大词汇量，从而提升写作水平。', r: 'Duō yuèdú néng kuòdà cíhuìliàng, cóng\'ér tíshēng xiězuò shuǐpíng.', m: 'Đọc nhiều giúp mở rộng vốn từ, từ đó nâng cao trình độ viết.' }
      ] },
    { title: 'Mục đích phòng tránh: 以免 (yǐmiǎn)', pattern: 'Hành động cần làm，以免 + Hậu quả xấu muốn tránh',
      explain: 'Liên từ đứng đầu vế sau để nêu rõ mục đích làm vế trước là nhằm tránh một tình huống bất lợi ("để tránh, kẻo"). Giữa vế 1 và 以免 thường có dấu phẩy.',
      examples: [
        { s: '出门前再检查一遍证件，以免耽误登机。', r: 'Chūmén qián zài jiǎnchá yí biàn zhèngjiàn, yǐmiǎn dānwu dēngjī.', m: 'Trước khi ra ngoài hãy kiểm tra lại giấy tờ một lần nữa, kẻo lỡ giờ lên máy bay.' },
        { s: '讨论时要充分沟通，以免彼此产生误会。', r: 'Tǎolùn shí yào chōngfèn gōutōng, yǐmiǎn bǐcǐ chǎnshēng wùhuì.', m: 'Khi thảo luận cần trao đổi đầy đủ để tránh đôi bên nảy sinh hiểu lầm.' }
      ] }
  ]
});

/* ============================================================
   HSK 6: THÀNH THẠO & THÀNH NGỮ (成语) (5000+ TỪ)
   ============================================================ */
LANG_DATA.zh.levels.push({
  id: 'hsk6',
  name: 'HSK 6',
  title: 'Thành thạo & thành ngữ (成语)',
  duration: '6–8 tháng',
  color: '#6366f1',
  description: 'Đỉnh cao hệ thống HSK với hơn 5.000 từ vựng, làm chủ văn phong trang trọng, bài luận chuyên sâu và kho tàng thành ngữ 4 chữ (成语). Phân tích tinh tế sắc thái ngữ nghĩa, cấu trúc văn viết cô đọng và rèn luyện kỹ năng tóm tắt văn bản dài.',
  goals: [
    'Nắm vững từ vựng văn viết HSK 6 và ít nhất 30 thành ngữ (成语) xuất hiện dày đặc trong báo chí, thi cử',
    'Sử dụng chuẩn xác các hư từ và liên từ văn viết bậc cao (尚且…何况…, 固然…但…, 鉴于, 以致, 归根到底)',
    'Phân biệt tinh tế sắc thái tích cực/tiêu cực (như 以致 vs 从而, 动辄, 莫非, 无疑) khi đọc hiểu và viết luận',
    'Đọc lướt 1.000 chữ trong 10 phút để tóm tắt chính xác cốt truyện/luận điểm thành 400 chữ (phần Viết HSK 6)',
    'Đạt ≥ 200/300 điểm trong đề thi thử HSK 6 và giao tiếp tự nhiên trong môi trường học thuật/doanh nghiệp'
  ],
  units: [
    { id: 'hsk6-u1', title: 'Tuần 1–4: Văn phong chính luận, nghị quyết & kết nối logic', desc: 'Các động từ học thuật và liên từ căn cứ – hệ quả trong văn bản trang trọng.',
      tasks: [
        'Học 10 từ văn viết trang trọng (倡导, 赋予, 贯彻, 衡量, 凸显, 彰显, 致力于, 鉴于, 以致, 归根到底)',
        'Phân biệt cặp nhân quả 以致 (hệ quả xấu/ngoài ý muốn) với 从而 (hệ quả tích cực/logic)',
        'Đọc 3 bài bình luận thời sự và đánh dấu cách tác giả mở đoạn bằng 鉴于 và chốt ý bằng 归根到底',
        'Viết một đoạn phân tích ngắn 180 chữ về chủ đề giáo dục hoặc kinh tế số dùng 4 từ văn viết mới học'
      ] },
    { id: 'hsk6-u2', title: 'Tuần 5–8: Lập luận nhượng bộ, phản vấn & cường điệu', desc: 'Cấu trúc 尚且…何况…, 固然…但…, 无疑, 莫非 và 动辄.',
      tasks: [
        'Học 10 từ sắc thái lập luận (固然, 尚且, 无疑, 莫非, 动辄, 势必, 亟待, 屡次, 堪称, 匮乏)',
        'Thành thạo mẫu câu hai chiều 固然…但… (thừa nhận điểm hợp lý trước khi phản biện)',
        'Đặt 8 câu sử dụng 尚且…何况… và 动辄 để miêu tả thói quen tiêu dùng hoặc vấn đề xã hội',
        'Làm 20 câu bài tập tìm lỗi sai ngữ pháp (phần Đọc 1 HSK 6 — nhận diện câu thiếu chủ ngữ, lặp nghĩa)'
      ] },
    { id: 'hsk6-u3', title: 'Tuần 9–12: Thành ngữ học tập, kiên trì & làm việc (成语 I)', desc: 'Thành ngữ về nỗ lực, cầu tiến, phương pháp và tâm huyết.',
      tasks: [
        'Học 10 thành ngữ về học tập và thái độ làm việc (半途而废, 专心致志, 循序渐进, 实事求是, 精益求精, 坚持不懈, 毫不犹豫, 津津有味, 迎刃而解, 潜移默化)',
        'Tra cứu điển tích ngắn và nắm rõ từ loại/vị trí ngữ pháp của từng thành ngữ trong câu (làm vị ngữ, trạng ngữ hay định ngữ)',
        'Viết đoạn văn 150 chữ kể về quá trình học ngoại ngữ lồng ghép tự nhiên 4 thành ngữ',
        'Làm bài tập chọn thành ngữ đúng ngữ cảnh (phần Đọc 2 HSK 6)'
      ] },
    { id: 'hsk6-u4', title: 'Tuần 13–16: Thành ngữ ngụ ngôn & tư duy phản biện (成语 II)', desc: 'Thành ngữ phê phán sai lầm nhận thức và bài học xử thế.',
      tasks: [
        'Học 10 thành ngữ ngụ ngôn và đối nhân xử thế (画蛇添足, 井底之蛙, 自相矛盾, 刻舟求剑, 掩耳盗铃, 拔苗助长, 雪中送炭, 锦上添花, 一举两得, 举足轻重)',
        'Phân biệt cặp thành ngữ tương phản sắc thái: 雪中送炭 vs 锦上添花; 画蛇添足 vs 精益求精',
        'Kể lại tóm tắt câu chuyện gốc của 4 thành ngữ ngụ ngôn (自相矛盾, 刻舟求剑, 掩耳盗铃, 拔苗助长)',
        'Luyện tập câu ghép điền 4 chỗ trống liên tiếp (phần Đọc 2 HSK 6)'
      ] },
    { id: 'hsk6-u5', title: 'Tuần 17–20: Thành ngữ cảm xúc & từ vựng mô tả tinh tế', desc: 'Diễn đạt trạng thái tâm lý, sự hiển nhiên và ví dụ minh họa.',
      tasks: [
        'Học 10 từ và thành ngữ biểu cảm/trạng thái (莫名其妙, 显而易见, 不可思议, 情不自禁, 迫不及待, 兴高采烈, 理所当然, 异口同声, 譬如, 诸如)',
        'Học các động từ văn viết bổ trợ cấu trúc (遏制, 兼顾, 弥补, 妥善, 蕴含, 倘若)',
        'Luyện đọc nhanh văn bản dài 1.000 chữ (phần Viết HSK 6: đọc 10 phút, thu giấy đề, tóm tắt trong 35 phút)',
        'Rèn kỹ thuật ghi nhớ nhân vật – sự kiện – kết quả khi đọc bài tóm tắt không được chép lại đề'
      ] },
    { id: 'hsk6-u6', title: 'Tuần 21–24: Luyện đề tổng hợp & hoàn thiện phản xạ HSK 6', desc: 'Giải đề trọn vẹn, tinh chỉnh lỗi dùng từ gần nghĩa và tốc độ đọc.',
      tasks: [
        'Rà soát toàn bộ 56 từ vựng & thành ngữ HSK 6, phân loại theo sắc thái褒义 (khen) – 贬义 (chê) – 中性 (trung tính)',
        'Làm 2 đề thi thử HSK 6 đầy đủ (140 phút) gồm Nghe – Đọc 4 phần – Viết tóm tắt 400 chữ',
        'Phân tích các lỗi hay mất điểm ở Đọc 1 (tìm câu sai) và Đọc 2 (chọn từ gần nghĩa)',
        'Thực hành thuyết trình hoặc viết luận 300 chữ bằng văn phong HSK 6 về một vấn đề thời sự tự chọn'
      ] }
  ],
  vocab: [
    // Từ vựng văn viết & chính luận HSK 6
    { w: '倡导', r: 'chàngdǎo', hv: 'XƯỚNG ĐẠO', m: 'đề xướng, khởi xướng', t: 'Văn viết & Học thuật', ex: '社会各界积极倡导低碳生活。', exr: 'Shèhuì gèjiè jījí chàngdǎo dītàn shēnghuó.', exm: 'Các tầng lớp xã hội tích cực đề xướng lối sống ít phát thải carbon.' },
    { w: '动辄', r: 'dòngzhé', hv: 'ĐỘNG TRIẾP', m: 'động một tí là, hở ra là', t: 'Văn viết & Học thuật', ex: '有些商品动辄上万元，普通人很难承担。', exr: 'Yǒuxiē shāngpǐn dòngzhé shàng wàn yuán, pǔtōngrén hěn nán chéngdān.', exm: 'Một số hàng hóa hở ra là lên tới hàng vạn tệ, người bình thường khó kham nổi.' },
    { w: '遏制', r: 'èzhì', hv: 'ÁT CHẾ', m: 'kiềm chế, ngăn chặn', t: 'Văn viết & Học thuật' },
    { w: '赋予', r: 'fùyǔ', hv: 'PHÚ DỮ', m: 'trao cho, ban cho (trọng trách/ý nghĩa)', t: 'Văn viết & Học thuật' },
    { w: '固然', r: 'gùrán', hv: 'CỐ NHIÊN', m: 'tuy đúng là…, cố nhiên', t: 'Văn viết & Học thuật', ex: '经验固然重要，但创新精神同样不可或缺。', exr: 'Jīngyàn gùrán zhòngyào, dàn chuàngxīn jīngshén tóngyàng bùkěhuòquē.', exm: 'Kinh nghiệm cố nhiên là quan trọng, nhưng tinh thần đổi mới cũng không thể thiếu.' },
    { w: '贯彻', r: 'guànchè', hv: 'QUÁN TRIỆT', m: 'quán triệt, thực hiện triệt để', t: 'Văn viết & Học thuật' },
    { w: '归根到底', r: 'guīgēndàodǐ', hv: 'QUY CĂN ĐÁO ĐỂ', m: 'suy cho cùng, rút cuộc thì', t: 'Văn viết & Học thuật', ex: '企业之间的竞争，归根到底是人才的竞争。', exr: 'Qǐyè zhījiān de jìngzhēng, guīgēndàodǐ shì réncái de jìngzhēng.', exm: 'Cạnh tranh giữa các doanh nghiệp suy cho cùng là cạnh tranh về nhân tài.' },
    { w: '衡量', r: 'héngliáng', hv: 'HÀNH LƯỢNG', m: 'đo lường, cân nhắc đánh giá', t: 'Văn viết & Học thuật' },
    { w: '亟待', r: 'jídài', hv: 'CỨC ĐÃI', m: 'đang rất cần, cấp bách cần', t: 'Văn viết & Học thuật' },
    { w: '兼顾', r: 'jiāngù', hv: 'KIÊM CỐ', m: 'tính đến cả hai mặt, kiêm cả hai', t: 'Văn viết & Học thuật' },
    { w: '鉴于', r: 'jiànyú', hv: 'GIÁM VU', m: 'xét thấy, căn cứ vào', t: 'Văn viết & Học thuật', ex: '鉴于目前交通拥堵严重，市政府决定扩建地铁。', exr: 'Jiànyú mùqián jiāotōng yōngdǔ yánzhòng, shì zhèngfǔ juédìng kuòjiàn dìtiě.', exm: 'Xét thấy tình trạng ùn tắc giao thông hiện nay nghiêm trọng, chính quyền thành phố quyết định mở rộng tàu điện ngầm.' },
    { w: '堪称', r: 'kānchēng', hv: 'KHAM XƯNG', m: 'xứng đáng được gọi là', t: 'Văn viết & Học thuật' },
    { w: '匮乏', r: 'kuìfá', hv: 'QUỸ PHẠP', m: 'khan hiếm, thiếu thốn trầm trọng', t: 'Văn viết & Học thuật' },
    { w: '屡次', r: 'lǚcì', hv: 'LŨ THỨ', m: 'nhiều lần, hết lần này đến lần khác', t: 'Văn viết & Học thuật' },
    { w: '弥补', r: 'míbǔ', hv: 'DI BỔ', m: 'bù đắp, khắc phục', t: 'Văn viết & Học thuật', ex: '勤奋往往能够弥补天赋的不足。', exr: 'Qínfèn wǎngwǎng nénggòu míbǔ tiānfù de bùzú.', exm: 'Sự cần cù thường có thể bù đắp cho sự thiếu hụt về thiên phú.' },
    { w: '莫非', r: 'mòfēi', hv: 'MẠC PHI', m: 'chẳng lẽ, hay là', t: 'Văn viết & Học thuật', ex: '他到现在还没出现，莫非路上出什么事了？', exr: 'Tā dào xiànzài hái méi chūxiàn, mòfēi lùshang chū shénme shì le?', exm: 'Giờ này anh ấy vẫn chưa xuất hiện, chẳng lẽ trên đường xảy ra chuyện gì rồi sao?' },
    { w: '譬如', r: 'pìrú', hv: 'THÍ NHƯ', m: 'ví dụ như, chẳng hạn như', t: 'Văn viết & Học thuật' },
    { w: '尚且', r: 'shàngqiě', hv: 'THƯỢNG THẢ', m: 'còn huống gì, ngay cả… còn…', t: 'Văn viết & Học thuật', ex: '成年人尚且难以承受，何况未成年的孩子？', exr: 'Chéngniánrén shàngqiě nányǐ chéngshòu, hékuàng wèichéngnián de háizi?', exm: 'Người trưởng thành còn khó mà chịu đựng nổi, huống hồ trẻ vị thành niên?' },
    { w: '势必', r: 'shìbì', hv: 'THẾ TẤT', m: 'tất yếu sẽ, chắc chắn sẽ', t: 'Văn viết & Học thuật' },
    { w: '倘若', r: 'tǎngruò', hv: 'THẢNG NHƯỢC', m: 'giả sử, nhỡ như', t: 'Văn viết & Học thuật' },
    { w: '凸显', r: 'tūxiǎn', hv: 'ĐỘT HIỂN', m: 'nổi bật lên, bộc lộ rõ', t: 'Văn viết & Học thuật' },
    { w: '妥善', r: 'tuǒshàn', hv: 'THỎA THIỆN', m: 'ổn thỏa, chu đáo', t: 'Văn viết & Học thuật' },
    { w: '无疑', r: 'wúyí', hv: 'VÔ NGHI', m: 'không nghi ngờ gì nữa, chắc chắn là', t: 'Văn viết & Học thuật', ex: '这无疑是一次极其宝贵的经历。', exr: 'Zhè wúyí shì yí cì jíqí bǎoguì de jīnglì.', exm: 'Đây không nghi ngờ gì là một trải nghiệm vô cùng quý báu.' },
    { w: '以致', r: 'yǐzhì', hv: 'DĨ TRÍ', m: 'dẫn đến, đến nỗi (kết quả xấu)', t: 'Văn viết & Học thuật', ex: '他长期缺乏锻炼，以致身体抵抗力越来越差。', exr: 'Tā chángqī quēfá duànliàn, yǐzhì shēntǐ dǐkànglì yuèláiyuè chà.', exm: 'Anh ấy lâu ngày thiếu vận động, đến nỗi sức đề kháng cơ thể ngày càng kém.' },
    { w: '蕴含', r: 'yùnhán', hv: 'UẨN HÀM', m: 'ẩn chứa, hàm chứa', t: 'Văn viết & Học thuật' },
    { w: '彰显', r: 'zhāngxiǎn', hv: 'CHƯƠNG HIỂN', m: 'làm nổi bật, thể hiện rõ nét', t: 'Văn viết & Học thuật' },
    { w: '致力于', r: 'zhìlìyú', hv: 'TRÍ LỰC VU', m: 'dốc sức vào, cống hiến cho', t: 'Văn viết & Học thuật' },
    { w: '诸如', r: 'zhūrú', hv: 'CHƯ NHƯ', m: 'những thứ như, chẳng hạn như', t: 'Văn viết & Học thuật' },
    // Thành ngữ (成语) phổ biến HSK 6
    { w: '拔苗助长', r: 'bámiáozhùzhǎng', hv: 'BẠT MIÊU TRỢ TRƯỞNG', m: 'nhổ mạ giúp lớn (nóng vội hỏng việc)', t: 'Thành ngữ (成语)' },
    { w: '半途而废', r: 'bàntú\'érfèi', hv: 'BÁN ĐỒ NHI PHẾ', m: 'bỏ dở giữa chừng', t: 'Thành ngữ (成语)', ex: '学习外语最忌讳半途而废。', exr: 'Xuéxí wàiyǔ zuì jìhuì bàntú\'érfèi.', exm: 'Học ngoại ngữ tối kỵ nhất là bỏ dở giữa chừng.' },
    { w: '不可思议', r: 'bùkěsīyì', hv: 'BẤT KHẢ TƯ NGHỊ', m: 'không thể tưởng tượng nổi', t: 'Thành ngữ (成语)' },
    { w: '毫不犹豫', r: 'háobùyóuyù', hv: 'HÀO BẤT DO DỰ', m: 'không chút do dự', t: 'Thành ngữ (成语)' },
    { w: '画蛇添足', r: 'huàshétiānzú', hv: 'HỌA XÀ THIÊM TÚC', m: 'vẽ rắn thêm chân (làm việc thừa thãi)', t: 'Thành ngữ (成语)', ex: '文章已经写得很完整了，再加这一段反而画蛇添足。', exr: 'Wénzhāng yǐjīng xiě de hěn wánzhěng le, zài jiā zhè yí duàn fǎn\'ér huàshétiānzú.', exm: 'Bài viết đã rất trọn vẹn rồi, thêm đoạn này vào ngược lại thành vẽ rắn thêm chân.' },
    { w: '坚持不懈', r: 'jiānchíbúxiè', hv: 'KIÊN TRÌ BẤT GIẢI', m: 'kiên trì không mệt mỏi', t: 'Thành ngữ (成语)' },
    { w: '锦上添花', r: 'jǐnshàngtiānhuā', hv: 'CẨM THƯỢNG THIÊM HOA', m: 'dệt hoa trên gấm (tốt càng thêm tốt)', t: 'Thành ngữ (成语)' },
    { w: '津津有味', r: 'jīnjīnyǒuwèi', hv: 'TÂN TÂN HỮU VỊ', m: 'say sưa, thích thú (đọc, nghe, ăn)', t: 'Thành ngữ (成语)' },
    { w: '精益求精', r: 'jīngyìqiújīng', hv: 'TINH ÍCH CẦU TINH', m: 'đã tốt lại càng muốn hoàn mỹ hơn', t: 'Thành ngữ (成语)', ex: '他对每一个产品细节都精益求精。', exr: 'Tā duì měi yí gè chǎnpǐn xìjié dōu jīngyìqiújīng.', exm: 'Anh ấy luôn cầu toàn, trau chuốt tỉ mỉ từng chi tiết sản phẩm.' },
    { w: '井底之蛙', r: 'jǐngdǐzhīwā', hv: 'TỈNH ĐỂ CHI OA', m: 'ếch ngồi đáy giếng (tầm nhìn hạn hẹp)', t: 'Thành ngữ (成语)' },
    { w: '举足轻重', r: 'jǔzúqīngzhòng', hv: 'CỬ TÚC KHINH TRỌNG', m: 'có vai trò quan trọng, trọng lượng lớn', t: 'Thành ngữ (成语)' },
    { w: '刻舟求剑', r: 'kèzhōuqiújiàn', hv: 'KHẮC CHU CẦU KIẾM', m: 'khắc thuyền tìm kiếm (bảo thủ, cứng nhắc)', t: 'Thành ngữ (成语)' },
    { w: '理所当然', r: 'lǐsuǒdāngrán', hv: 'LÝ SỞ ĐƯƠNG NHIÊN', m: 'lẽ đương nhiên, hiển nhiên', t: 'Thành ngữ (成语)' },
    { w: '莫名其妙', r: 'mòmíngqímiào', hv: 'MẠC DANH KỲ DIỆU', m: 'kỳ quặc khó hiểu, không rõ nguyên do', t: 'Thành ngữ (成语)' },
    { w: '迫不及待', r: 'pòbùjídài', hv: 'BÁCH BẤT CẬP ĐÃI', m: 'nóng lòng không thể chờ đợi', t: 'Thành ngữ (成语)' },
    { w: '潜移默化', r: 'qiányímòhuà', hv: 'TIỀM DI MẶC HÓA', m: 'mưa dầm thấm lâu, tác động âm thầm', t: 'Thành ngữ (成语)', ex: '家庭环境对孩子的性格有着潜移默化的影响。', exr: 'Jiātíng huánjìng duì háizi de xìnggé yǒuzhe qiányímòhuà de yǐngxiǎng.', exm: 'Môi trường gia đình có ảnh hưởng âm thầm mà sâu sắc đến tính cách trẻ nhỏ.' },
    { w: '情不自禁', r: 'qíngbúzìjīn', hv: 'TÌNH BẤT TỰ CẤM', m: 'không kìm nén được cảm xúc', t: 'Thành ngữ (成语)' },
    { w: '实事求是', r: 'shíshìqiúshì', hv: 'THỰC SỰ CẦU THỊ', m: 'tôn trọng sự thật khách quan', t: 'Thành ngữ (成语)' },
    { w: '显而易见', r: 'xiǎn\'éryìjiàn', hv: 'HIỂN NHI DỊ KIẾN', m: 'rõ ràng dễ thấy', t: 'Thành ngữ (成语)' },
    { w: '兴高采烈', r: 'xìnggāocǎiliè', hv: 'HỨNG CAO THẢI LIỆT', m: 'hớn hở, vui mừng phấn khởi', t: 'Thành ngữ (成语)' },
    { w: '雪中送炭', r: 'xuězhōngsòngtàn', hv: 'TUYẾT TRUNG TỐNG THÁN', m: 'giúp đỡ kịp thời lúc người khác khốn khó', t: 'Thành ngữ (成语)', ex: '在他最困难的时候，朋友的帮助真是雪中送炭。', exr: 'Zài tā zuì kùnnan de shíhou, péngyou de bāngzhù zhēn shì xuězhōngsòngtàn.', exm: 'Vào lúc anh ấy khó khăn nhất, sự giúp đỡ của bạn bè thật sự như đưa than ngày tuyết.' },
    { w: '循序渐进', r: 'xúnxùjiànjìn', hv: 'TUẦN TỰ TIỆM TIẾN', m: 'theo đúng trình tự, tiến bộ từng bước', t: 'Thành ngữ (成语)', ex: '掌握一门语言需要循序渐进，急不得。', exr: 'Zhǎngwò yì mén yǔyán xūyào xúnxùjiànjìn, jíbudé.', exm: 'Làm chủ một ngôn ngữ cần từng bước theo trình tự, không thể nóng vội.' },
    { w: '掩耳盗铃', r: 'yǎn\'ěrdàolíng', hv: 'YỂM NHĨ ĐẠO LINH', m: 'bịt tai trộm chuông (tự dối mình)', t: 'Thành ngữ (成语)' },
    { w: '一举两得', r: 'yìjǔliǎngdé', hv: 'NHẤT CỬ LƯỠNG ĐẮC', m: 'một công đôi việc', t: 'Thành ngữ (成语)', ex: '骑自行车上班既省钱又锻炼身体，一举两得。', exr: 'Qí zìxíngchē shàngbān jì shěngqián yòu duànliàn shēntǐ, yìjǔliǎngdé.', exm: 'Đạp xe đi làm vừa tiết kiệm tiền vừa rèn luyện sức khỏe, thật là một công đôi việc.' },
    { w: '异口同声', r: 'yìkǒutóngshēng', hv: 'DỊ KHẨU ĐỒNG THANH', m: 'đồng thanh nhất trí', t: 'Thành ngữ (成语)' },
    { w: '迎刃而解', r: 'yíngrèn\'érjiě', hv: 'NGHÊNH NHẬN NHI GIẢI', m: 'vấn đề được giải quyết dễ dàng', t: 'Thành ngữ (成语)', ex: '只要抓住关键，所有难题都会迎刃而解。', exr: 'Zhǐyào zhuāzhù guānjiàn, suǒyǒu nántí dōu huì yíngrèn\'érjiě.', exm: 'Chỉ cần nắm được điểm mấu chốt, mọi bài toán khó đều sẽ được giải quyết dễ dàng.' },
    { w: '专心致志', r: 'zhuānxīnzhìzhì', hv: 'CHUYÊN TÂM TRÍ CHÍ', m: 'chuyên tâm dồn hết trí lực', t: 'Thành ngữ (成语)' },
    { w: '自相矛盾', r: 'zìxiāngmáodùn', hv: 'TỰ TƯƠNG MÂU THUẪN', m: 'tự mâu thuẫn với chính mình', t: 'Thành ngữ (成语)' }
  ],
  grammar: [
    { title: 'Nhấn mạnh đối chiếu tăng tiến: 尚且…何况… (shàngqiě…hékuàng…)', pattern: 'A + 尚且 + Vế 1，何况 + B (+ 呢)？',
      explain: 'Cấu trúc văn viết cổ điển dùng để nhấn mạnh tính hiển nhiên của B bằng cách lấy A (vốn có điều kiện thuận lợi hơn hoặc mức độ nhẹ hơn) làm mốc ("A mà còn…, huống chi B"). Thường kết hợp câu hỏi tu từ 呢.',
      examples: [
        { s: '有经验的老员工尚且不敢掉以轻心，何况刚入职的新人呢？', r: 'Yǒu jīngyàn de lǎo yuángōng shàngqiě bù gǎn diàoyǐqīngxīn, hékuàng gāng rùzhí de xīnrén ne?', m: 'Nhân viên lâu năm có kinh nghiệm còn chẳng dám chủ quan, huống chi người mới vào làm?' },
        { s: '父母尚且如此支持你，何况我们这些朋友呢？', r: 'Fùmǔ shàngqiě rúcǐ zhīchí nǐ, hékuàng wǒmen zhèxiē péngyou ne?', m: 'Bố mẹ còn ủng hộ bạn như thế, huống chi bạn bè như chúng tôi?' }
      ] },
    { title: 'Thừa nhận trước, chuyển ngoặt sau: 固然…但… (gùrán…dàn…)', pattern: 'A + 固然 + Nhận định đúng，但 / 可是 + Trọng tâm phản biện',
      explain: 'Thừa nhận sự thật hoặc mặt hợp lý ở vế đầu ("tuy đúng là… / cố nhiên là…"), rồi chuyển sang luận điểm quan trọng hơn ở vế sau. Mang sắc thái lập luận khách quan, thuyết phục hơn 虽然…但是….',
      examples: [
        { s: '高学历固然重要，但实际解决问题的能力更为关键。', r: 'Gāo xuélì gùrán zhòngyào, dàn shíjì jiějué wèntí de nénglì gèng wéi guānjiàn.', m: 'Bằng cấp cao cố nhiên quan trọng, nhưng năng lực giải quyết vấn đề thực tế mới là then chốt hơn.' },
        { s: '这个方法固然省时，但成本未免太高了。', r: 'Zhège fāngfǎ gùrán shěngshí, dàn chéngběn wèimiǎn tài gāo le.', m: 'Phương pháp này tuy đúng là tiết kiệm thời gian, nhưng chi phí có phần cao quá.' }
      ] },
    { title: 'Khẳng định chắc chắn: 无疑 (wúyí)', pattern: 'Chủ ngữ + 无疑 + 是 / V | …，这无疑…',
      explain: 'Phó từ văn viết mang nghĩa "không còn nghi ngờ gì nữa, chắc chắn là". Có thể đứng trước động từ (无疑是…) hoặc đứng đầu mệnh đề sau để nhấn mạnh kết luận.',
      examples: [
        { s: '人工智能的发展无疑正在深刻改变各个行业。', r: 'Réngōng zhìnéng de fāzhǎn wúyí zhèngzài shēnkè gǎibiàn gègè hángyè.', m: 'Sự phát triển của trí tuệ nhân tạo chắc chắn đang làm thay đổi sâu sắc mọi ngành nghề.' },
        { s: '及时止损，这无疑是最理智的选择。', r: 'Jíshí zhǐsǔn, zhè wúyí shì zuì lǐzhì de xuǎnzé.', m: 'Cắt lỗ kịp thời, đây không nghi ngờ gì là lựa chọn lý trí nhất.' }
      ] },
    { title: 'Suy đoán nghi vấn văn viết: 莫非 (mòfēi)', pattern: '莫非 + Mệnh đề suy đoán (+ 吗 / 不成)？',
      explain: 'Tương đương 难道 nhưng mang sắc thái phỏng đoán, ngờ vực nhiều hơn ("chẳng lẽ…, hay là…"). Thường đi cùng ngữ khí từ cuối câu như 吗 hoặc 不成.',
      examples: [
        { s: '会议室的灯还亮着，莫非他们还在加班吗？', r: 'Huìyìshì de dēng hái liàngzhe, mòfēi tāmen hái zài jiābān ma?', m: 'Đèn phòng họp vẫn sáng, chẳng lẽ họ vẫn đang tăng ca sao?' },
        { s: '他平时一向准时，今天这么晚没来，莫非临时有急事不成？', r: 'Tā píngshí yíxiàng zhǔnshí, jīntiān zhème wǎn méi lái, mòfēi línshí yǒu jíshì bùchéng?', m: 'Bình thường anh ấy luôn đúng giờ, hôm nay muộn thế chưa tới, hay là đột xuất có việc gấp?' }
      ] },
    { title: 'Tần suất cao mang sắc thái chê trách: 动辄 (dòngzhé)', pattern: 'S + 动辄 + Hành động thái quá / Con số lớn',
      explain: 'Phó từ văn viết biểu thị việc gì đó xảy ra quá dễ dàng, quá thường xuyên hoặc quy mô lớn một cách đáng phàn nàn ("động một tí là, hở ra là"). Luôn đi kèm con số lớn hoặc hành động tiêu cực/cực đoan.',
      examples: [
        { s: '做事情不能动辄发脾气，要学会冷静沟通。', r: 'Zuò shìqíng bù néng dòngzhé fā píqi, yào xuéhuì lěngjìng gōutōng.', m: 'Làm việc không thể hở chút là nổi nóng, phải học cách trao đổi bình tĩnh.' },
        { s: '一线城市的房价动辄上千万，令人望而却步。', r: 'Yīxiàn chéngshì de fángjià dòngzhé shàng qiānwàn, lìngrén wàng\'érquèbù.', m: 'Giá nhà ở các thành phố lớn hở ra là hàng chục triệu tệ, khiến người ta chùn bước.' }
      ] },
    { title: 'Nêu căn cứ để ra quyết định: 鉴于 (jiànyú)', pattern: '鉴于 + Thực tế / Bối cảnh khách quan，S + Quyết định / Biện pháp',
      explain: 'Giới từ trang trọng đứng đầu câu để chỉ ra nguyên nhân, bối cảnh hoặc tình hình thực tế làm cơ sở cho quyết định ở vế sau ("xét thấy…, căn cứ vào việc…"). Rất phổ biến trong thông báo, công văn và báo chí.',
      examples: [
        { s: '鉴于近期天气变化剧烈，学校决定推迟运动会。', r: 'Jiànyú jìnqī tiānqì biànhuà jùliè, xuéxiào juédìng tuīchí yùndònghuì.', m: 'Xét thấy thời tiết gần đây biến đổi thất thường, nhà trường quyết định hoãn đại hội thể thao.' },
        { s: '鉴于你在项目中的突出表现，公司决定为你加薪。', r: 'Jiànyú nǐ zài xiàngmù zhōng de tūchū biǎoxiàn, gōngsī juédìng wèi nǐ jiāxīn.', m: 'Xét thấy sự thể hiện xuất sắc của bạn trong dự án, công ty quyết định tăng lương cho bạn.' }
      ] },
    { title: 'Hệ quả bất lợi ngoài ý muốn: 以致 (yǐzhì)', pattern: 'Nguyên nhân，以致 (+ 于) + Hậu quả xấu',
      explain: 'Liên từ văn viết nối nguyên nhân với kết quả tiêu cực hoặc không mong muốn ("dẫn đến, đến nỗi mà"). Lưu ý phân biệt với 从而 (dẫn tới kết quả tích cực hoặc trung tính).',
      examples: [
        { s: '他做事过于马虎，以致于在关键环节出了错。', r: 'Tā zuòshì guòyú mǎhu, yǐzhìyú zài guānjiàn huánjié chū le cuò.', m: 'Anh ấy làm việc quá cẩu thả, đến nỗi mắc lỗi ngay ở khâu then chốt.' },
        { s: '由于双方缺乏有效沟通，以致合作最终破裂。', r: 'Yóuyú shuāngfāng quēfá yǒuxiào gōutōng, yǐzhì hézuò zuìzhōng pòliè.', m: 'Do hai bên thiếu giao tiếp hiệu quả, dẫn đến sự hợp tác cuối cùng tan vỡ.' }
      ] },
    { title: 'Đúc kết bản chất vấn đề: 归根到底 (guīgēndàodǐ)', pattern: 'Hiện tượng / Luận điểm，归根到底 + (是/在于) + Bản chất cốt lõi',
      explain: 'Cụm từ cố định dùng ở phần kết luận để quy nạp mọi nguyên nhân phức tạp về bản chất sâu xa nhất ("suy cho cùng, rút cuộc thì"). Thường đi sau bởi 是 hoặc 在于.',
      examples: [
        { s: '许多社会矛盾，归根到底是发展不平衡造成的。', r: 'Xǔduō shèhuì máodùn, guīgēndàodǐ shì fāzhǎn bù pínghéng zàochéng de.', m: 'Nhiều mâu thuẫn xã hội suy cho cùng là do sự phát triển mất cân bằng gây ra.' },
        { s: '语言学习能否成功，归根到底在于你是否每天坚持练习。', r: 'Yǔyán xuéxí néngfǒu chénggōng, guīgēndàodǐ zàiyú nǐ shìfǒu měitiān jiānchí liànxí.', m: 'Việc học ngôn ngữ có thành công hay không, suy cho cùng nằm ở việc bạn có kiên trì luyện tập mỗi ngày hay không.' }
      ] }
  ]
});
