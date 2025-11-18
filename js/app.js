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

      form.addEventListener("submit", validarCadastro);
    }
  } else {
    main.innerHTML = homeTemplate();
  }
}

document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadPage(e.target.dataset.page);
  });
});

loadPage("home");

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('ativo');
    });
}