# 🚀 Vibe Opinião — Landing Page Institucional & Pesquisa de Mercado

<div align="center">

![Vibe Opinião Banner]([assets/images/hero-bg.jpg](https://github.com/kelvynkhrystian/site-institucional/blob/main/assets/images/logo2.png?raw=true))

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com)

</div>

---

## 📌 Sobre o Projeto

O **Vibe Opinião** é uma landing page institucional moderna projetada para uma empresa especializada em coleta presencial de _insights_ e pesquisas de mercado em tempo real.

O projeto foi desenvolvido do zero, traduzindo com precisão os requisitos e o design system definidos no **Figma** para um código limpo, performático, acessível e totalmente responsivo.

> **Objetivo Técnico:** Demonstrar o domínio de fundamentos essenciais do ecossistema Web (HTML5 semântico, CSS3 moderno, JavaScript Vanilla ES6+ e arquitetura BEM), focando em alta pontuação de **Lighthouse**, **SEO imbatível** e **carregamento instantâneo**.

---

## 💻 Tecnologias & Ferramentas Utilizadas

### Core Frontend

- **HTML5 Semântico:** Uso rigoroso de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para otimização de acessibilidade (screen readers) e SEO.
- **CSS3 Moderno:**
  - **Layouts:** Flexbox para alinhamento responsivo.
  - **Design Tokens:** Variáveis CSS (`:root`) para padronizar cores, tipografia e espaçamentos.
  - **Reset Customizado:** Normalização cross-browser sem dependências de frameworks pesados.
  - **CSS Transitions & Animations:** Feedback visual fluido ao interagir com botões e menus.
- **JavaScript (ES6+ Vanilla):**
  - Manipulação dinâmica do DOM.
  - Smooth Scrolling suave para navegação por âncoras.
  - Menu Mobile interativo (Hamburguer).
  - Validação de formulário e interações no lado do cliente sem _page refresh_.

### UI/UX & Design System

- **Figma:** Prototipagem de alta fidelidade e extração de tokens de design.
- **Google Fonts (Mulish):** Tipografia institucional importada e otimizada.
- **SVG Icons:** Ícones vetoriais embutidos para reduzir requisições HTTP e garantir nitidez em telas Retina.

---

## 🏗️ Arquitetura e Organização do Projeto

A estrutura de arquivos foi planejada seguindo boas práticas de separação de responsabilidades (Separation of Concerns):

```text
vibe-opiniao/
├── assets/
│   ├── images/          # Imagens otimizadas (WebP/JPG)
│   └── icons/           # Ícones em SVG
├── css/
│   ├── reset.css        # CSS Reset moderno e normalização
│   └── style.css        # Estilização das seções e componentes
├── js/
│   └── main.js          # Lógica do menu, formulários e animações
├── index.html           # Documento principal estruturado
├── README.md            # Documentação técnica do repositório
```
