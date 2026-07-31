import "../css/style.css";
import Swiper from "swiper";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

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

// efeito de ondas na pagina de inicio principal

const heroSwiper = new Swiper(".hero-swiper", {
  modules: [Navigation, Autoplay, EffectFade],
  loop: true,
  effect: "fade", // Transição suave de fade entre os slides
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

// onde
// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // ... sua lógica de menu mobile existente ...

  // Inicialização do Swiper (mantida) ...

  // Efeito de Scroll no Header
  const header = document.getElementById("main-header");
  // Seleciona todos os links do menu para alterar a cor no scroll
  const navLinks = header.querySelectorAll(".nav-link");
  // Seletor para o logo (pode ser útil se tiver versões diferentes de logo)
  const logo = header.querySelector("img");

  window.addEventListener("scroll", () => {
    // Define a altura a partir da qual o header muda (ex: 50px)
    const scrollThreshold = 50;

    if (window.scrollY > scrollThreshold) {
      // ESTADO DESCEU SCROLL: Header Branco com Sombra e Borda
      header.classList.remove("bg-transparent", "shadow-none");
      header.classList.add(
        "bg-white/95",
        "backdrop-blur-md",
        "shadow-sm",
        "border-b",
        "border-gray-100",
      );

      // Altera a cor dos links do menu para cinza escuro
      navLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-gray-700");
      });

      // (Opcional) Trocar para uma versão colorida do logo se necessário
      // logo.src = '/assets/images/logo2_color.png';
    } else {
      // ESTADO INICIAL (Topo da página): Header Transparente com Texto Branco
      header.classList.add("bg-transparent", "shadow-none");
      header.classList.remove(
        "bg-white/95",
        "backdrop-blur-md",
        "shadow-sm",
        "border-b",
        "border-gray-100",
      );

      // Retorna a cor dos links do menu para branco
      navLinks.forEach((link) => {
        link.classList.remove("text-gray-700");
        link.classList.add("text-white");
      });

      // (Opcional) Retornar para o logo branco inicial
      // logo.src = '/assets/images/logo2.png';
    }
  });
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  const navLinks = header.querySelectorAll(".nav-link");
  const menuBtn = document.getElementById("menu-btn");

  if (window.scrollY > 50) {
    // Quando desce a tela -> Fundo branco sólido com sombra
    header.classList.remove("bg-transparent");
    header.classList.add(
      "bg-white/95",
      "backdrop-blur-md",
      "shadow-sm",
      "border-b",
      "border-gray-100",
    );

    navLinks.forEach((link) => {
      link.classList.remove("text-white");
      link.classList.add("text-gray-700");
    });
    if (menuBtn) {
      menuBtn.classList.remove("text-white");
      menuBtn.classList.add("text-gray-700");
    }
  } else {
    // No topo da tela -> Transparente e texto branco sobre a imagem
    header.classList.add("bg-transparent");
    header.classList.remove(
      "bg-white/95",
      "backdrop-blur-md",
      "shadow-sm",
      "border-b",
      "border-gray-100",
    );

    navLinks.forEach((link) => {
      link.classList.remove("text-gray-700");
      link.classList.add("text-white");
    });
    if (menuBtn) {
      menuBtn.classList.remove("text-gray-700");
      menuBtn.classList.add("text-white");
    }
  }
});
