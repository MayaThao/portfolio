// VANTA 3D Background
let vantaEffect = null;

window.addEventListener("DOMContentLoaded", () => {
  vantaEffect = VANTA.GLOBE({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xff69b4,
    backgroundColor: 0xfdf6f9,
  });

  initDynamicHeading();
  createFlowerRain();
  initScrollReveal();
  highlightNavOnScroll();
});

// ==========================
// Dynamic Text Animation ✨
function initDynamicHeading() {
  const phrases = [
    "Enjoy the magic! ✨",
    "Code like a dream 💻",
    "Let’s create something cute 🦋",
    "Hello world, I’m Thao My 🌸",
    "Design your imagination 🎨",
  ];

  const heading = document.getElementById("animated-heading");
  if (!heading) return;

  let index = 0;

  function animatePhrase(text) {
    heading.innerHTML = ""; // clear heading

    Array.from(text).forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("letter");
      span.style.animationDelay = `${i * 0.05}s`;
      heading.appendChild(span);
    });
  }

  animatePhrase(phrases[index]);

  setInterval(() => {
    index = (index + 1) % phrases.length;
    animatePhrase(phrases[index]);
  }, 4000);
}

// ==========================
// Flower Petal Rain
function createFlowerRain() {
  const flowerContainer = document.createElement("div");
  flowerContainer.className = "flower-container";
  document.body.appendChild(flowerContainer);

  setInterval(() => {
    const petal = document.createElement("img");
    petal.src = "../assets/effects/flowers.gif";
    petal.className = "flower-petal";
    petal.style.left = `${Math.random() * 100}vw`;
    flowerContainer.appendChild(petal);

    setTimeout(() => flowerContainer.removeChild(petal), 8000);
  }, 500);
}

// ==========================
// Scroll Reveal Animation
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ==========================
// Smooth Anchor Scroll (click nav to section)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight Navbar on Scroll ✨
function highlightNavOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach((el) => el.classList.remove("active"));
          link?.classList.add("active");
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
}

// === About Me: Slide lên từng dòng thay vì typing ===
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.getElementById("typing-text");
  const lines = [
    "💗 Giới thiệu về tôi 💗",
    "Xin chào! Mình là một cô gái hướng nội, yêu thích sự tĩnh lặng",
    "và luôn tìm thấy niềm vui trong việc học hỏi, khám phá những điều mới mẻ mỗi ngày.",
    "Mình hiện đang là sinh viên năm hai chuyên ngành Công nghệ Thông tin",
    "tại Trường Đại học Giao thông Vận tải TP.HCM.",
    "Mặc dù con đường mình chọn đôi khi khiến mình phải đối mặt với áp lực, thử thách,",
    "nhưng chính những điều đó lại giúp mình trưởng thành, mạnh mẽ và kiên định hơn",
    "trên hành trình theo đuổi đam mê.",
    "",
    "Mình đặc biệt yêu thích lập trình, nhất là khi được ngồi hàng giờ",
    "để viết từng dòng code một cách tỉ mỉ, cẩn thận",
    "và nhìn chúng hoạt động trơn tru như một tác phẩm hoàn chỉnh.",
    "Mỗi khi nhìn thấy sản phẩm mình tự tay làm ra –",
    "dù chỉ là một trang web nhỏ hay một ứng dụng đơn giản –",
    "mình đều cảm thấy hạnh phúc và tự hào.",
    "",
    "Ngoài ra, mình rất quan tâm đến lĩnh vực điện toán đám mây (Cloud Computing) và DevOps.",
    "Đối với mình, đây là một hướng đi không chỉ thú vị",
    "mà còn giàu tiềm năng phát triển trong tương lai.",
    "Mình đang từng bước học hỏi và rèn luyện các kỹ năng cần thiết,",
    "với mong muốn trở thành một kỹ sư DevOps chuyên nghiệp,",
    "có thể tạo ra giá trị thực sự cho cộng đồng và tổ chức mình làm việc.",
    "",
    "Cuộc sống của mình có thể rất đơn giản: một bình trà đường mỗi ngày,",
    "vài cuốn sách nhỏ, một chiếc laptop để học tập và sáng tạo.",
    "Mình không giỏi nói chuyện trước đám đông,",
    "nhưng lại rất chân thành khi được trò chuyện một cách gần gũi, nhẹ nhàng.",
    "Mình tin rằng mỗi người đều có thế mạnh riêng,",
    "và giá trị của bản thân không nằm ở việc mình giống người khác,",
    "mà ở việc mình là chính mình.",
    "",
    "Cảm ơn bạn đã đọc đến đây – mình hy vọng qua những dòng này,",
    "bạn sẽ hiểu thêm một chút về mình.",
    "Mong rằng chúng ta sẽ có cơ hội gặp gỡ, học hỏi",
    "và cùng nhau tạo nên những điều tốt đẹp 💻✨",
  ];

  if (!typingText) return;

  lines.forEach((line, index) => {
    const p = document.createElement("p");
    p.textContent = line;
    p.classList.add("animated-line");
    p.style.animationDelay = `${index * 0.2}s`;
    typingText.appendChild(p);
  });
});

let lineIndex = 0;
let charIndex = 0;

// === Kỹ năng: Hiện dần từng hoa khi lướt tới ===
function revealSkills() {
  const skills = document.querySelectorAll("#skillsGarden .skill-item");
  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skills.forEach((skill, i) => {
          setTimeout(() => {
            skill.classList.add("visible");
          }, i * 150); // delay theo thứ tự
        });
      }
    });
  }, options);

  const target = document.querySelector("#skillsGarden");
  if (target) observer.observe(target);
}

revealSkills();

// Skill Garden Interaction
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("click", () => {
    const name = item.getAttribute("data-name");
    const detail = item.getAttribute("data-detail");

    document.getElementById("modalTitle").textContent = name;
    document.getElementById("modalDetail").textContent = detail;

    // Phát hiệu ứng âm thanh khi click
    const audio = new Audio("../effects/meow.mp3");
    audio.play();

    document.getElementById("skillModal").style.display = "flex";
  });
});

function closeSkillModal() {
  document.getElementById("skillModal").style.display = "none";
}

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
  scale: 1.05,
});

// ===== PROJECT MODAL CONTROL =====
document.querySelectorAll(".planet").forEach((planet, index) => {
  planet.addEventListener("click", () => {
    const modal = document.querySelector(".project-modal");
    const scroll = modal.querySelector(".floating-scroll");
    const title = scroll.querySelector("#projectTitle");
    const desc = scroll.querySelector("#projectDescription");

    // Cập nhật nội dung theo project được click
    const projectData = [
      {
        title: "Koi Fish Shop",
        desc: `
          <p><strong>Koi Fish Shop</strong> là ứng dụng C# giúp quản lý cửa hàng bán cá Koi. Giao diện thân thiện và dễ sử dụng, hỗ trợ đầy đủ các tính năng cần thiết cho người bán hàng.</p>

          <ul style="text-align:left; margin: 15px 0;">
            <li>📦 Quản lý sản phẩm: loại cá, kích thước, màu, giá bán</li>
            <li>🛒 Quản lý khách hàng & đơn hàng</li>
            <li>🧮 Tính tổng đơn, xử lý giỏ hàng</li>
            <li>📊 Thống kê hàng bán</li>
            <li>🔍 Tìm kiếm, cập nhật, xóa sản phẩm</li>
          </ul>

          <p><strong>Công nghệ sử dụng:</strong></p>
          <ul style="text-align:left; margin: 15px 0;">
            <li>💻 Ngôn ngữ: C#</li>
            <li>🧱 Nền tảng: Windows Forms / ASP.NET MVC</li>
            <li>🗃️ CSDL: SQL Server hoặc Access</li>
            <li>🎛️ UI: DataGridView, ComboBox, Button,...</li>
          </ul>

          <p><strong>Mục tiêu:</strong> Rèn luyện kỹ năng thiết kế giao diện, xử lý dữ liệu và kết nối CSDL bằng C#.</p>
        `
      },
      {
        title: "CherryTree Notes (Kali Linux)",
        desc: `
          <p><strong>CherryTree</strong> là phần mềm ghi chú mã nguồn mở mạnh mẽ, hỗ trợ tổ chức thông tin dưới dạng cây phân cấp.</p>

          <ul style="text-align:left; margin: 15px 0;">
            <li>🌳 Tạo ghi chú dạng cây nhiều cấp</li>
            <li>🖋️ Định dạng văn bản phong phú (rich text)</li>
            <li>📎 Gắn tệp đính kèm, ảnh, mã có syntax highlight</li>
            <li>🔐 Mã hóa ghi chú bằng mật khẩu</li>
            <li>📤 Hỗ trợ xuất/nhập: .ctd, .ctz, .html, .pdf</li>
            <li>🗂️ Tự động backup & phục hồi</li>
          </ul>

          <p><strong>Công nghệ sử dụng:</strong></p>
          <ul style="text-align:left; margin: 15px 0;">
            <li>💻 Hệ điều hành: Kali Linux 2023.4</li>
            <li>📦 Phần mềm: CherryTree (apt / Flatpak)</li>
          </ul>

          <p><strong>Mục tiêu dự án:</strong></p>
          <ul style="text-align:left; margin: 15px 0;">
            <li>🔍 Tìm hiểu công cụ ghi chú mã hóa bảo mật</li>
            <li>⚙️ Thực hành cài đặt & sử dụng trong pentest</li>
            <li>📝 Ghi lại ưu nhược điểm & đánh giá áp dụng</li>
          </ul>
        `
      },
      {
        title: "Portfolio Cá Nhân",
        desc: `
          <p><strong>Portfolio cá nhân</strong> là website tĩnh thể hiện thông tin cá nhân, kỹ năng, dự án và liên hệ.</p>

          <ul style="text-align:left; margin: 15px 0;">
            <li>👩‍💻 <strong>Giới thiệu:</strong> Thông tin bản thân, sở thích, định hướng</li>
            <li>🛠️ <strong>Kỹ năng:</strong> Lập trình, thiết kế, công cụ sử dụng</li>
            <li>🌌 <strong>Dự án:</strong> Các sản phẩm đã thực hiện</li>
            <li>📬 <strong>Liên hệ:</strong> Biểu mẫu gửi thư hoặc mạng xã hội</li>
          </ul>

          <p><strong>Công nghệ sử dụng:</strong></p>
          <ul style="text-align:left; margin: 15px 0;">
            <li>🔤 HTML, CSS: Xây dựng giao diện</li>
            <li>✨ JavaScript: Hiệu ứng & tương tác</li>
            <li>📱 Bootstrap: Đáp ứng đa thiết bị (responsive)</li>
            <li>🌈 Thư viện thêm: AOS, Font Awesome, jQuery...</li>
          </ul>

          <p><strong>Mục tiêu dự án:</strong></p>
          <ul style="text-align:left; margin: 15px 0;">
            <li>🧩 Thực hành xây dựng web tĩnh hoàn chỉnh</li>
            <li>🧭 Rèn kỹ năng chia bố cục, tổ chức nội dung</li>
            <li>🚀 Tạo hồ sơ cá nhân trực tuyến chuyên nghiệp</li>
          </ul>
        `
      },
    ];

    const current = projectData[index] || {
      title: "Dự án chưa cập nhật",
      desc: "<p>Nội dung đang được cập nhật...</p>",
      link: "#",
    };

    title.textContent = current.title;
    desc.innerHTML = current.desc;

    modal.style.display = "flex";
  });
});

// ===== CLOSE PROJECT MODAL =====
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  const scrollBox = modal.querySelector(".floating-scroll");

  scrollBox.classList.add("closing");

  setTimeout(() => {
    modal.style.display = "none";
    scrollBox.classList.remove("closing");
  }, 600);
}

// === Que kẹo bay quanh hộp thư ===
const candyLinks = document.querySelectorAll('.candy-link');
const mailbox = document.querySelector('.space-mailbox');

let angleOffset = 0;

function animateCandyOrbit() {
  if (!mailbox || candyLinks.length === 0) return;

  const centerX = mailbox.offsetWidth / 2;
  const centerY = mailbox.offsetHeight / 2 + 30;
  const radius = 120;

  candyLinks.forEach((link, index) => {
    const angle = (angleOffset + index * (360 / candyLinks.length)) * Math.PI / 180;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    link.style.position = 'absolute';
    link.style.left = `${x}px`;
    link.style.top = `${y}px`;
  });

  angleOffset += 0.5;
  requestAnimationFrame(animateCandyOrbit);
}

animateCandyOrbit();


// === Hộp thư nghiêng nhẹ khi hover ===
if (mailbox) {
  mailbox.addEventListener('mouseenter', () => {
    mailbox.style.transition = 'transform 0.2s ease';
    mailbox.style.transform = 'rotate(2deg)';
  });

  mailbox.addEventListener('mouseleave', () => {
    mailbox.style.transform = 'rotate(0deg)';
  });
}
