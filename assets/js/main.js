// ======================================
// KAMAR PREMIUM WEBSITE
// main.js
// ======================================

// BURGER MENU

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    burger.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

// ======================================
// DARK / LIGHT MODE
// ======================================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("kamar-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");

  if (themeToggle) {
    themeToggle.innerHTML = "☀";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    if (isLight) {
      localStorage.setItem("kamar-theme", "light");

      themeToggle.innerHTML = "☀";
    } else {
      localStorage.setItem("kamar-theme", "dark");

      themeToggle.innerHTML = "◐";
    }
  });
}

// ======================================
// CURSOR GLOW
// ======================================

const glow = document.querySelector(".cursor-glow");

if (glow) {
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

// ======================================
// SCROLL REVEAL
// ======================================

const revealElements = document.querySelectorAll(
  ".story, .stat, .feature-box, .cta-box, .section-title",
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },

  {
    threshold: 0.15,
  },
);

revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// ======================================
// PREMIUM PARALLAX
// ======================================

const belt = document.querySelector(".belt-image");

if (belt) {
  window.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    belt.style.transform = `
rotate(-12deg)
translate(${x}px, ${y}px)
`;
  });
}

// ======================================
// FLOATING CARDS
// ======================================

const cards = document.querySelectorAll(".floating-card");

window.addEventListener("mousemove", (e) => {
  cards.forEach((card, index) => {
    const speed = (index + 1) * 0.01;

    const moveX = (window.innerWidth / 2 - e.clientX) * speed;

    const moveY = (window.innerHeight / 2 - e.clientY) * speed;

    card.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// ======================================
// HEADER SCROLL EFFECT
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(11,11,11,.92)";

    header.style.borderBottom = "1px solid rgba(212,175,55,.15)";
  } else {
    header.style.background = "rgba(11,11,11,.60)";

    header.style.borderBottom = "1px solid rgba(255,255,255,.08)";
  }
});

// ======================================
// BUTTON RIPPLE
// ======================================

document.querySelectorAll(".btn-primary").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-4px) scale(1.02)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });
});

// ======================================
// NUMBER COUNTER
// ======================================

const counters = document.querySelectorAll(".stat h3");

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const text = counter.innerText;

      const target = parseInt(text.replace(/\D/g, ""));

      let current = 0;

      const increment = target / 80;

      const updateCounter = () => {
        if (current < target) {
          current += increment;

          counter.innerText = Math.floor(current) + "+";

          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCounter();

      countObserver.unobserve(counter);
    });
  },

  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  countObserver.observe(counter);
});

// ======================================
// SMOOTH APPEAR
// ======================================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ======================================
// END
// ======================================

console.log(
  "%cKAMAR Luxury Website Loaded",
  "color:#D4AF37;font-size:16px;font-weight:bold;",
);
