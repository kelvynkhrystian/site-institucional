import "../css/style.css";
import Swiper from "swiper";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. ELEMENTOS DO DOM
  // ==========================================
  const header = document.getElementById("main-header");
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  // Links do Desktop vs Mobile
  const desktopLinks = header
    ? header.querySelectorAll("nav.hidden.md\\:flex .nav-link")
    : [];
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
  const sections = document.querySelectorAll("section[id]");

  let isMenuOpen = false;

  // Global para guardar a seção ativa no ScrollSpy
  let activeSectionId = "";

  // ==========================================
  // 2. SWIPER SLIDER (HERO)
  // ==========================================
  const heroSwiper = new Swiper(".hero-swiper", {
    modules: [Navigation, Autoplay, EffectFade],
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });

  // ==========================================
  // 3. MENU MOBILE (TOGGLE)
  // ==========================================
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      mobileMenu?.classList.remove("hidden");
      setTimeout(() => {
        mobileMenu?.classList.remove("opacity-0", "-translate-y-4");
        mobileMenu?.classList.add("opacity-100", "translate-y-0");
      }, 10);

      iconOpen?.classList.add("hidden");
      iconClose?.classList.remove("hidden");
    } else {
      mobileMenu?.classList.remove("opacity-100", "translate-y-0");
      mobileMenu?.classList.add("opacity-0", "-translate-y-4");

      setTimeout(() => {
        mobileMenu?.classList.add("hidden");
      }, 300);

      iconOpen?.classList.remove("hidden");
      iconClose?.classList.add("hidden");
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  // Fecha o menu mobile ao clicar em qualquer item
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // ==========================================
  // 4. SCROLLSPY (DESTAQUE DO MENU CONFORME ROLA A TELA)
  // ==========================================
  function setActiveLink(targetId) {
    if (!targetId) return;
    activeSectionId = targetId;

    const isScrolled = window.scrollY > 50;

    // 1. Atualiza os links do DESKTOP
    desktopLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isCurrent = href === `#${targetId}`;

      if (isCurrent) {
        link.classList.add("text-vibe-orange", "font-bold");
        link.classList.remove("text-white", "text-gray-700");
      } else {
        link.classList.remove("text-vibe-orange", "font-bold");
        link.classList.add(isScrolled ? "text-gray-700" : "text-white");
      }
    });

    // 2. Atualiza os links do MOBILE
    mobileLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isCurrent = href === `#${targetId}`;

      if (isCurrent) {
        link.classList.add("text-vibe-orange", "font-bold");
        link.classList.remove("text-gray-800", "text-gray-700");
      } else {
        link.classList.remove("text-vibe-orange", "font-bold");
        link.classList.add("text-gray-800");
      }
    });
  }

  // Evento de clique para destaque imediato (Desktop + Mobile)
  [...desktopLinks, ...mobileLinks].forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        setActiveLink(href.replace("#", ""));
      }
    });
  });

  // IntersectionObserver para detectar a seção visível
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
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

  // ==========================================
  // 5. EFEITO DE SCROLL NO HEADER
  // ==========================================
  function handleHeaderScroll() {
    if (!header) return;

    const scrollThreshold = 50;
    const isScrolled = window.scrollY > scrollThreshold;

    if (isScrolled) {
      // Estado: Rolou a página (Header Branco)
      header.classList.remove("bg-transparent", "shadow-none");
      header.classList.add(
        "bg-white/95",
        "backdrop-blur-md",
        "shadow-sm",
        "border-b",
        "border-gray-100",
      );

      // Troca os links não-ativos para cinza escuro
      desktopLinks.forEach((link) => {
        if (!link.classList.contains("text-vibe-orange")) {
          link.classList.remove("text-white");
          link.classList.add("text-gray-700");
        }
      });

      // Ícone do Menu Mobile fica escuro
      if (menuBtn) {
        menuBtn.classList.remove("text-white");
        menuBtn.classList.add("text-gray-700");
      }
    } else {
      // Estado: Topo da página (Header Transparente)
      header.classList.add("bg-transparent", "shadow-none");
      header.classList.remove(
        "bg-white/95",
        "backdrop-blur-md",
        "shadow-sm",
        "border-b",
        "border-gray-100",
      );

      // Troca os links não-ativos para branco
      desktopLinks.forEach((link) => {
        if (!link.classList.contains("text-vibe-orange")) {
          link.classList.remove("text-gray-700");
          link.classList.add("text-white");
        }
      });

      // Ícone do Menu Mobile fica branco
      if (menuBtn) {
        menuBtn.classList.remove("text-gray-700");
        menuBtn.classList.add("text-white");
      }
    }
  }

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll(); // Roda na carga inicial
});
