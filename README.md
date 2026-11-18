# 🇨🇳🇯🇵 Lộ Trình Hán – Nhật | Website Luyện Tập Tiếng Trung & Tiếng Nhật

Ứng dụng web học và luyện tập **Tiếng Trung (Pinyin & HSK 1 → HSK 6)** và **Tiếng Nhật (Hiragana/Katakana & JLPT N5 → N1)** với lộ trình học theo từng tuần rõ ràng, hệ thống lặp lại ngắt quãng (SRS – Leitner 7 hộp), trắc nghiệm đa dạng, bảng ngữ pháp, Hán tự kèm âm Hán Việt, bảng luyện viết chữ và phát âm giọng bản xứ.

---

## ✨ Tính năng nổi bật

1. **🗺️ Lộ trình học chi tiết từ con số 0 đến HSK 6 / JLPT N1**
   - **Tiếng Trung (7 giai đoạn):** Giai đoạn 0 (Phát âm & Pinyin, nét cơ bản, bộ thủ) → HSK 1 → HSK 2 → HSK 3 → HSK 4 → HSK 5 → HSK 6 (kèm thành ngữ 成语).
   - **Tiếng Nhật (6 giai đoạn):** Giai đoạn 0 (Bảng chữ cái Hiragana & Katakana) → JLPT N5 → N4 → N3 → N2 → N1.
   - Mỗi giai đoạn chia thành các tuần học với **nhiệm vụ cụ thể có thể đánh dấu hoàn thành (✔)** và thanh tiến độ tự động cập nhật.

2. **🔤 Bảng Phát âm Pinyin & Bảng chữ cái Kana tương tác**
   - **Tiếng Trung:** 4 thanh điệu + thanh nhẹ, 21 thanh mẫu (kèm IPA & mẹo bật hơi), 37 vận mẫu, 6 quy tắc biến điệu & **phòng luyện nghe phân biệt thanh điệu**.
   - **Tiếng Nhật:** Bảng Hiragana & Katakana đầy đủ (Gojūon cơ bản, âm đục/bán đục Dakuten/Handakuten, âm ghép Yōon), mẹo phát âm trường âm/âm ngắt & **trắc nghiệm nhận diện mặt chữ Kana**.

3. **📚 Kho từ vựng phong phú kèm âm Hán Việt & câu ví dụ**
   - Tìm kiếm tức thì theo chữ Hán/Kana, Pinyin/Romaji (có hoặc không dấu), âm Hán Việt hoặc nghĩa tiếng Việt.
   - Lọc theo cấp độ và chủ đề, bấm 🔊 để nghe phát âm từng từ và từng câu ví dụ (Web Speech API `zh-CN` / `ja-JP`).

4. **🃏 Flashcard thông minh (Spaced Repetition – SRS 7 hộp Leitner)**
   - Tự động lên lịch ôn tập theo 7 mức (ngay lập tức, 1, 2, 4, 7, 15, 30 ngày).
   - Hỗ trợ đảo chiều thẻ (`Từ → Nghĩa` hoặc `Nghĩa → Từ`) và phím tắt bàn phím (`Space` lật thẻ, `1–4` chấm mức độ nhớ, `S` nghe phát âm).

5. **🎯 Trắc nghiệm 6 chế độ**
   - `Từ → Nghĩa`, `Nghĩa → Từ`, `Chọn cách đọc (Pinyin/Kana)`, `Nghe chọn từ`, `Gõ cách đọc (Pinyin/Romaji/Hiragana)`, và `Kiểm tra Kanji (Hán Việt & nghĩa)`.
   - Những câu trả lời sai được tự động đưa vào danh sách Flashcard cần ôn ngay.

6. **📝 Ngữ pháp & 🈶 Kanji theo cấp độ**
   - Giải thích rõ ràng bằng tiếng Việt, công thức đóng khung, lưu ý lỗi thường gặp và câu ví dụ có phát âm.
   - Bảng Kanji N5–N1 kèm **âm Hán Việt**, âm On, âm Kun và từ ghép mẫu.

7. **✍️ Bảng luyện viết chữ Hán / Kana / Kanji (Canvas)**
   - Khung tập viết chữ có đường gióng chữ thập, nét chữ mẫu mờ để tô theo, hoặc chế độ **Ẩn mẫu** để tự nhớ mặt chữ và viết lại.

8. **📊 Thống kê, Chuỗi ngày học (Streak), Giao diện Sáng/Tối & Sao lưu JSON**
   - Lưu toàn bộ tiến độ ngay trên trình duyệt (`localStorage`), hỗ trợ xuất/nhập file `.json` để sao lưu hoặc chuyển thiết bị.

---

## 🚀 Cách chạy trên máy

Không cần cài đặt thư viện hay build tool:

```bash
# Cách 1: Mở trực tiếp file index.html bằng trình duyệt (Chrome / Edge / Safari / Firefox)

# Cách 2: Chạy qua local server với Python
python -m http.server 8080
# Sau đó truy cập http://localhost:8080
```

## 📁 Cấu trúc thư mục

```text
luyen-tieng-trung-nhat/
├── index.html        # Giao diện chính của ứng dụng
├── css/
│   └── style.css     # Thiết kế responsive, hỗ trợ Dark Mode & theme Trung/Nhật
├── js/
│   └── app.js        # Logic điều hướng, SRS, Quiz, TTS, Canvas luyện viết, Thống kê
└── data/
    ├── SCHEMA.md     # Tài liệu cấu trúc dữ liệu để dễ dàng mở rộng từ vựng
    ├── zh1.js        # Dữ liệu Tiếng Trung: Pinyin, Giai đoạn 0, HSK 1, HSK 2
    ├── zh2.js        # Dữ liệu Tiếng Trung: HSK 3, HSK 4, HSK 5, HSK 6
    ├── ja1.js        # Dữ liệu Tiếng Nhật: Bảng Kana, Giai đoạn 0, JLPT N5, N4
    └── ja2.js        # Dữ liệu Tiếng Nhật: JLPT N3, N2, N1
```
