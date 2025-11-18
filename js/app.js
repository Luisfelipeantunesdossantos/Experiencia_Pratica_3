import { homeTemplate, projetosTemplate, cadastroTemplate } from "./templates.js";
import { validarCadastro } from "./form.js";

const main = document.querySelector("#conteudo");

function loadPage(pagina) {

  const nav = document.querySelector('nav');
  if (nav.classList.contains('ativo')) {
    nav.classList.remove('ativo');
  }

  if (pagina === "projetos") {
    main.innerHTML = projetosTemplate();
  } else if (pagina === "cadastro") {

    main.innerHTML = cadastroTemplate();
    
    const form = document.querySelector("#formCadastro");

    if (form) {
      // 1. ANEXA o evento de submit ao formulário
      form.addEventListener("submit", validarCadastro);
    }
  } else {
    main.innerHTML = homeTemplate();
  }
}

// 2. Adiciona o listener para navegação SPA
document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage(e.target.dataset.page);
  });
});

// 3. Carrega a página inicial ao carregar o script
loadPage("home");

// 4. Lógica para o menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('ativo');
    });
}
// <--- A chave extra foi removida daqui!