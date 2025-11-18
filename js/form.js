export function validarCadastro(event) {
  event.preventDefault();
  const form = event.target;
  let isValido = true;

  const exibirErro = (input, mensagem) => {
    let erro = document.getElementById(`erro-${input.name}`);
    
    if (!erro) {
      erro = document.createElement('span');
      erro.id = `erro-${input.name}`;
      erro.className = 'mensagem-erro';
      input.parentNode.insertBefore(erro, input.nextSibling);
    }
    
    erro.textContent = mensagem;
    input.classList.add('input-erro');
    isValido = false;
  };

  const limparErro = (input) => {
    const erro = document.getElementById(`erro-${input.name}`);
    if (erro) { erro.remove(); }
    input.classList.remove('input-erro');
  };
  
  const nome = form.nome;
  limparErro(nome);
  if (nome.value.trim().length < 3) {
    exibirErro(nome, "O nome deve ter pelo menos 3 caracteres.");
  }

  const email = form.email;
  limparErro(email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!emailRegex.test(email.value.trim())) {
    exibirErro(email, "O e-mail informado não é válido.");
  }
  
  const canal = form.canal;
  limparErro(canal);
  if (canal.value.trim().length === 0) {
      exibirErro(canal, "Campo obrigatório. Informe o Canal e Plataforma.");
  }

  const tipo = form.tipo;
  limparErro(tipo);
  if (tipo.value === "" || tipo.value === "Selecione...") {
      exibirErro(tipo, "Selecione o tipo do modelo (Vtuber ou PNGtuber).");
  }
  
  const modelo = form.modelo; 
  limparErro(modelo);
  if (modelo.value.trim().length < 5) {
      exibirErro(modelo, "Descreva as Características do Modelo (mínimo 5 caracteres).");
  }


  if (isValido) {

    alert("✅ Cadastro enviado com sucesso!"); 
    form.reset();
  }
}

function loadPage(pagina) {
  // ...
  const nav = document.querySelector('nav');
  if (nav.classList.contains('ativo')) { 
    nav.classList.remove('ativo');
  }
  // ...
}