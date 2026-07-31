import "../css/style.css";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;

    if (isOpen) {
      // Exibe e anima
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu.classList.remove("opacity-0", "-translate-y-4");
        mobileMenu.classList.add("opacity-100", "translate-y-0");
      }, 10);

      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
    } else {
      // Esconde com transição
      mobileMenu.classList.remove("opacity-100", "translate-y-0");
      mobileMenu.classList.add("opacity-0", "-translate-y-4");

      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);

      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  }

  menuBtn.addEventListener("click", toggleMenu);

  // Fecha o menu ao clicar em qualquer item
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen) toggleMenu();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const allNavLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Função para aplicar a cor laranja no link ativo
  function setActiveLink(targetId) {
    allNavLinks.forEach((link) => {
      const href = link.getAttribute("href");

      if (href === `#${targetId}`) {
        // Estilo Ativo (Laranja)
        link.classList.add("text-vibe-orange", "font-bold");
        link.classList.remove("text-gray-700", "font-semibold");
      } else {
        // Estilo Padrão (Cinza)
        link.classList.remove("text-vibe-orange", "font-bold");
        link.classList.add("text-gray-700", "font-semibold");
      }
    });
  }

  // 1. Destaque imediato ao clicar
  allNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").replace("#", "");
      setActiveLink(targetId);
    });
  });

  // 2. Destaque automático ao rolar a página (Scroll Spy)
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Ajusta o gatilho para a área visível da tela
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});
