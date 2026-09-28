document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = [...document.querySelectorAll("main section[id]")];

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || !targetId.startsWith("#")) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${entry.target.id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.15,
    }
  );

  sections.forEach((section) => observer.observe(section));

  const style = document.createElement("style");
  style.textContent = ".nav-links a.active { color: var(--text); font-weight: 700; }";
  document.head.appendChild(style);

  // Generate QR code for project URL
  const qrcodeEl = document.getElementById("qrcode-display");
  if (qrcodeEl) {
    const projectUrl = "https://ZZY26-26-25.github.io/MODEX-Glove/";
    QRCode.toCanvas(qrcodeEl, projectUrl, {
      width: 240,
      margin: 1,
      color: {
        dark: "#141922",
        light: "#ffffff"
      }
    }, function (error) {
      if (error) console.error("QR Code generation error:", error);
    });
  }

  console.info("MODEX-Glove project page initialized.");
});

function downloadProjectQR() {
  const qrcodeEl = document.getElementById("qrcode-display");
  const canvas = qrcodeEl.querySelector("canvas");
  if (!canvas) {
    alert("QR code is still loading. Please try again in a moment.");
    return;
  }
  
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "MODEX-Glove-QR-Code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printProjectQR() {
  const qrcodeEl = document.getElementById("qrcode-display");
  const canvas = qrcodeEl.querySelector("canvas");
  if (!canvas) {
    alert("QR code is still loading. Please try again in a moment.");
    return;
  }
  
  const printWindow = window.open("", "", "width=600,height=700");
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>MODEX-Glove QR Code</title>
      <style>
        body { margin: 0; padding: 40px; background: #f6f8fb; font-family: Arial, sans-serif; }
        .container { text-align: center; background: white; padding: 40px; border-radius: 20px; max-width: 400px; margin: 0 auto; }
        h2 { margin: 0 0 20px; color: #141922; }
        img { width: 300px; height: 300px; margin: 20px 0; }
        p { color: #5d687a; font-size: 14px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>MODEX-Glove</h2>
        <img src="${canvas.toDataURL("image/png")}" alt="QR Code" />
        <p>Scan to visit project page</p>
        <p style="font-family: monospace; font-size: 12px; word-break: break-all;">
          https://ZZY26-26-25.github.io/MODEX-Glove/
        </p>
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
  }, 250);
}
