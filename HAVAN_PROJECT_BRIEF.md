# HAVAN — Hồ sơ bàn giao dự án

*Cập nhật: 03/11/2026. Tài liệu làm việc để đưa vào repository GitHub và tiếp tục phát triển với Codex.*

## 1. Tóm tắt

HAVAN là website tiếng Anh về vận động nhẹ và các lựa chọn tập luyện tại nhà, hướng ban đầu tới người làm việc bàn giấy. Website cung cấp bài hướng dẫn hữu ích, giúp người đọc chọn cách bắt đầu và tìm hiểu các chương trình tập phù hợp. Một số trang giới thiệu sản phẩm có thể gắn liên kết affiliate khi đã có tài khoản, đường dẫn hợp lệ và công khai quan hệ hoa hồng.

- **Domain đã mua:** `havan.fit`. Chưa kết nối với website.
- **Thị trường nội dung:** khách hàng nước ngoài đọc tiếng Anh; thị trường cụ thể, kênh traffic và ngân sách chưa chốt.
- **Trạng thái:** mockup web tĩnh đã hoàn thành và triển khai ở chế độ xem riêng; chưa phải website kinh doanh đang hoạt động.
- **Mockup:** https://havan-movement-preview.ha-hoangthi.chatgpt.site/ (có thể yêu cầu đăng nhập ChatGPT của chủ sở hữu).
- **Sản phẩm thử nghiệm:** Hyperbolic Stretching — The FlexTense Method. Chưa mua hoặc trải nghiệm khóa học.

## 2. Khách hàng và vấn đề

Nhóm ban đầu là người ngồi làm việc lâu, muốn vận động hoặc giãn cơ tại nhà nhưng lịch bận, khó tham gia lớp cố định và thấy quá nhiều video để lựa chọn. Họ muốn một điểm bắt đầu rõ ràng, nội dung dễ theo dõi và khả năng tự sắp xếp thời gian. Trước khi mua chương trình, họ cần biết định dạng, nội dung, mức độ phù hợp, giá cuối cùng và điều khoản hoàn tiền.

Không mặc định rằng mọi người ngồi văn phòng đều có cùng vấn đề sức khỏe; không hứa điều trị đau, chỉnh tư thế hay bảo đảm kết quả.

## 3. Định vị và giọng điệu

- **Lời hứa biên tập:** giúp người đọc tìm một điểm bắt đầu dễ hiểu, cân nhắc các lựa chọn tập tại nhà và tự quyết định.
- **Giọng điệu:** bình tĩnh, gần gũi, cụ thể, không thúc ép; hình ảnh ấm, sáng, giản dị.
- **Thông điệp chủ đạo của mockup:** “Make a little room for movement.”
- **Nguyên tắc copywriting:** tình huống quen thuộc → vướng mắc cụ thể → lựa chọn đáng tìm hiểu → lời mời hành động. Có thể diễn đạt hấp dẫn, nhưng thông tin sản phẩm và trải nghiệm cá nhân phải đúng sự thật.
- **Giá trị riêng:** hướng dẫn lựa chọn, câu hỏi trước khi mua, so sánh định dạng, giải thích giới hạn của thông tin đã biết; về sau bổ sung trải nghiệm tự kiểm chứng khi thực sự dùng sản phẩm.

## 4. Hành trình nội dung và liên kết

Không đưa mọi video về trang chủ. Trang đích nên giải quyết đúng điều video vừa nêu:

| Nội dung video | Trang đích HAVAN | Bước tiếp theo |
| --- | --- | --- |
| Nghỉ vận động ngắn giữa giờ làm | Bài hướng dẫn tương ứng | Tìm hiểu cách bắt đầu tại nhà |
| Bị ngợp vì quá nhiều video miễn phí | Bài so sánh video miễn phí và chương trình có cấu trúc | Xem checklist rồi cân nhắc sản phẩm |
| Đang tìm hiểu một chương trình cụ thể | Trang tổng quan/đánh giá chương trình đó | Sang website nhà cung cấp nếu phù hợp |
| Giới thiệu thương hiệu HAVAN | Trang chủ | Chọn bài hướng dẫn hoặc chương trình |

Các video thực hành do HAVAN tự tạo **không được giới thiệu như bài học nằm trong khóa Hyperbolic Stretching** nếu chưa xác minh. Nếu video có giới thiệu sản phẩm và nhận hoa hồng, cần thông báo mối quan hệ affiliate rõ ràng trong video/phần mô tả và trên trang liên quan.

## 5. Mockup hiện có

Mã tĩnh của bản mockup hiện nằm tại `/workspace/sites/havan-mockup/dist/` trong môi trường làm việc Codex đã tạo. Đây **chưa phải repository GitHub của chủ dự án**; cần đưa bản mã được bàn giao sang repository do chủ dự án quản lý. Thư mục `/workspace/sites/havan-mockup` còn có cấu hình của dịch vụ xem thử; khi xuất bản độc lập, chỉ cần kiểm tra và mang theo các file web phù hợp, tránh đưa cấu hình nội bộ/credential vào repo công khai.

```text
dist/
├── index.html       # Trang chủ, điểm bắt đầu, journal, sản phẩm nổi bật
├── program.html     # Trang tổng quan Hyperbolic Stretching
├── styles.css       # Giao diện desktop và responsive
├── app.js           # Menu, bài viết dạng dialog, nút so sánh AIDA/PAS
└── assets/
    └── hero.webp    # Ảnh minh họa tạo bằng AI
```

- Trang chủ có ba điểm bắt đầu, ba bài hướng dẫn mở bằng hộp thoại, phần sản phẩm nổi bật, giới thiệu cách chọn và nội dung disclosure/privacy của bản xem thử.
- Trang sản phẩm có hai hướng copy **AIDA/PAS** để người chủ xem và chọn; nút chuyển chỉ thay phần mở đầu, không phải hai landing page hoàn toàn độc lập.
- Ảnh là minh họa bằng AI, không phải ảnh khóa học, học viên hay giảng viên thật.
- CTA hiện dẫn tới trang nhà cung cấp bằng **link thường**, chưa có mã affiliate.
- Chưa có form, newsletter, dữ liệu khách hàng, analytics, pixel, thanh toán hay backend.
- Bản xem riêng đã được kiểm tra thao tác chính trên desktop; cần kiểm tra lại trên điện thoại thật trước khi công bố.
- Nội dung hiện còn nhãn “Design preview” và lời chú thích dành riêng cho mockup; phải rà soát khi chuyển sang bản công khai.

## 6. Sản phẩm thử nghiệm và ranh giới xác minh

**Nhà cung cấp:** https://hyperbolicstretching.com/fullpower/

Trang bán của nhà cung cấp quảng bá chương trình video giãn cơ tại nhà, gồm các routine khoảng 8 phút, nội dung từ mức bắt đầu đến nâng cao và nhiều nhóm cơ/động tác. Đây là **thông tin do nhà cung cấp quảng bá**, chưa phải kết quả kiểm tra độc lập của HAVAN. Giá, ưu đãi, bonus, điều khoản và hoàn tiền có thể thay đổi; trước khi công bố cần xem lại trang bán và bước thanh toán tại thời điểm đó. Trên trang bán từng có cách diễn đạt không thống nhất về khoảng thời gian hoàn tiền, vì vậy không tự ghi một cam kết chính xác khi chưa xác nhận được điều khoản áp dụng.

Chưa xác minh: chất lượng hướng dẫn bên trong, thứ tự bài học phù hợp người mới, ngôn ngữ/phụ đề, khả năng điều chỉnh theo cá nhân, mức độ phù hợp riêng cho người ngồi văn phòng, hiệu quả sức khỏe, tài liệu affiliate được phép sử dụng. Không viết review ngôi thứ nhất, lời chứng thực hoặc kết quả cá nhân khi chưa dùng khóa học.

**Cần làm trước khi bật affiliate:** tạo/kiểm tra tài khoản ClickBank, xem điều kiện quảng bá của nhà cung cấp, lấy đúng link affiliate và tài sản được phép dùng, thử đường dẫn, cập nhật nội dung theo thông tin bán hàng hiện hành, đặt disclosure rõ gần lời giới thiệu và liên kết. Không sao chép ảnh/video/logo của nhà cung cấp nếu chưa có quyền sử dụng.

## 7. Hosting và domain

HAVAN là HTML/CSS/JS tĩnh. Kế hoạch đề xuất là **GitHub giữ source, Cloudflare Pages xuất bản, `havan.fit` làm domain chính**. GitHub Pages có thể phục vụ web tĩnh và custom domain về kỹ thuật, nhưng GitHub nêu rõ Pages không dành cho website chủ yếu vận hành kinh doanh hoặc thúc đẩy giao dịch thương mại; do đó không chọn làm nơi host chính của dự án affiliate.

Tài liệu chính thức:

- GitHub Pages limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Cloudflare Pages GitHub integration: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
- Cloudflare Pages custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/

**Các bước triển khai:**

1. Tạo repository GitHub thuộc tài khoản của chủ dự án. Sao chép source web tĩnh, thêm README và tài liệu này; rà soát không có credential trước khi public.
2. Chọn cấu trúc xuất bản nhất quán (ví dụ đặt nội dung trong `dist/` và khai báo output directory là `dist` trên Cloudflare Pages). Với bản tĩnh hiện tại không cần build command.
3. Kết nối repo với Cloudflare Pages; thử URL Pages mặc định, kiểm tra các trang và link nội bộ.
4. Thêm `havan.fit` trong mục Custom domains. Để gắn domain gốc ở Cloudflare Pages, thường cần thêm domain vào Cloudflare và chuyển nameserver tại nơi mua domain theo chỉ dẫn hiển thị trong tài khoản; kiểm tra bản ghi đang dùng cho email/dịch vụ khác trước khi chuyển.
5. Thiết lập `www.havan.fit` và chuyển hướng về một hostname chính; chờ DNS/HTTPS hoạt động rồi kiểm tra trên desktop và mobile.
6. Chỉ đưa công khai chiến dịch sau khi rà soát nội dung, link, disclosure, privacy, tài sản hình ảnh và đo lường.

**Chưa thực hiện:** tạo repo trong GitHub cá nhân của chủ dự án, kết nối Cloudflare, thay đổi nameserver/DNS, trỏ `havan.fit`, bật affiliate. Không suy ra những việc đó đã xong từ mockup riêng.

## 8. Nội dung và đo lường giai đoạn thử

Khởi đầu hẹp với một nhóm khách hàng, một sản phẩm và vài chủ đề video/bài viết. Ví dụ:

- Video: “A 1-minute movement break between meetings” → bài thực hành/giải thích ngắn do HAVAN biên soạn.
- Video: “Too many stretching videos? How to choose a starting point” → bài so sánh các lựa chọn.
- Video: “What to check before buying a home stretching program” → checklist → trang tổng quan sản phẩm.

Theo dõi tối thiểu theo nguồn video/bài viết: lượt vào trang, lượt sang trang sản phẩm, lượt nhấp ra nhà cung cấp; khi có affiliate thì thêm số đơn/hoa hồng thực nhận và chi phí quảng bá. Các tỉ lệ/hứa hẹn doanh thu trước đây chỉ là ví dụ tính toán, không phải dữ liệu của HAVAN. Nếu thêm analytics, pixel hoặc form cần cập nhật trang thông tin quyền riêng tư theo công cụ và dữ liệu thực tế.

## 9. Danh sách việc ưu tiên cho Codex

1. **Bàn giao source:** chuẩn hóa cấu trúc repository và README chạy local/triển khai Cloudflare Pages; giữ nguyên nội dung và giao diện đã duyệt trừ những chỗ được yêu cầu sửa.
2. **Kiểm tra giao diện:** mobile, tốc độ tải ảnh, accessibility cơ bản, link nội bộ, menu, dialog, FAQ, lỗi console và link ngoài.
3. **Chuyển từ mockup sang bản công khai:** gỡ nhãn preview; bổ sung các bài viết thành URL riêng nếu cần chia sẻ trực tiếp từ video (hiện bài journal ở dialog, không có URL riêng); hoàn thiện About, disclosure và privacy theo cách triển khai thật.
4. **Chọn một hướng landing:** chốt AIDA hoặc PAS theo phản hồi người chủ; viết lại trang sản phẩm cho độc giả quốc tế với thông tin được kiểm chứng, nội dung hữu ích độc lập và CTA rõ.
5. **Triển khai hạ tầng:** sau khi có quyền truy cập phù hợp, kết nối repository, Cloudflare Pages và `havan.fit`; kiểm tra DNS, SSL, redirect và URL cuối.
6. **Sau khi có affiliate hợp lệ:** thêm link, disclosure và đo click; kiểm tra trên thiết bị thật. Không tự bật affiliate hay thay link khi chưa có link đúng từ chủ dự án.

## 10. Quy ước làm việc với Codex

- Nội dung tiếng Anh dành cho người đọc quốc tế; trao đổi và báo cáo tiến độ với chủ dự án bằng tiếng Việt.
- Ưu tiên nội dung và thông điệp trước khi thay đổi thiết kế lớn.
- Sản phẩm sức khỏe/vận động: phân biệt lời quảng bá của nhà cung cấp, điều đã tự kiểm tra và điều chưa biết. Không tự nhận đã trải nghiệm khóa học, không hứa chữa đau hoặc kết quả được bảo đảm.
- Không dùng media của vendor nếu chưa có phép; không đưa token, mật khẩu, key hoặc thông tin cá nhân vào repo.
- Mỗi thay đổi cần nêu: đã sửa gì, cách kiểm tra, giới hạn còn lại. Kiểm tra trang trên điện thoại trước khi xuất bản.
- Domain đã mua là `havan.fit`; không mặc định `havan.yoga` đã mua hoặc sẽ dùng.

## 11. Đầu vào còn cần từ chủ dự án

- Tài khoản GitHub/repository đích; nhà đăng ký domain và quyền quản lý DNS; tài khoản Cloudflare (khi triển khai).
- Phản hồi về mockup: màu sắc, bố cục, nội dung, hướng AIDA/PAS muốn giữ.
- Tài khoản/link affiliate chính thức, điều kiện chương trình, quyền dùng hình ảnh/video.
- Quyết định cách sản xuất video: tự xuất hiện, quay mẫu thực hành, hoạt họa, lồng tiếng; năng lực chuyên môn/kiểm duyệt động tác nếu đăng video hướng dẫn tập.
- Công cụ đo lường, ngân sách thử nghiệm và thị trường/kênh đầu tiên.

---

**Ghi chú trạng thái:** Tài liệu này ghi lại quyết định và tình trạng tại 03/11/2026, không thay thế việc kiểm tra lại giá, chính sách sản phẩm, điều khoản nền tảng hoặc cấu hình DNS ở thời điểm triển khai.
