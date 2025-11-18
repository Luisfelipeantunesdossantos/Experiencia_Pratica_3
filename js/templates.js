export function homeTemplate() {
  return `
    <h2>Quem Somos</h2>
    <p>Somos uma organização que procura ajudar Vtubers e PNGTubers menores a crescerem, sem fins lucrativos, promovendo colaboração e visibilidade.</p>
    
    <section>
        <h2>Missão, Visão e Valores</h2>
        <ul>
            <li><strong>Missão:</strong> Promover a união entre criadores digitais independentes.</li>
            <li><strong>Visão:</strong> Tornar-se referência de apoio e colaboração no meio digital.</li>
            <li><strong>Valores:</strong> Respeito, criatividade e solidariedade.</li>
        </ul>
    </section>

    <section>
        <h2>Nossa História</h2>
        <p>Alvorada Digital surgiu em 2025 com o propósito de apoiar criadores virtuais, conectando talentos e fortalecendo comunidades do meio Vtuber e PNGTuber.</p>
    </section>

    <figure>
        <img src="imagens/os-talentos.jpg" alt="Os talentos">
        <figcaption>Comunidade de Vtubers e PNGtubers com seus modelos.</figcaption>
    </figure>

    <section>
        <h3>Se estiver com alguma dúvida, fale conosco</h3>
        <address>
            <p>E-mail: alvoradadigital@gmail.com</p>
            <p>Telefone (11) 98838-7412</p>
        </address>
    </section>
  `;
}

export function projetosTemplate() {
  return `
    <h2>Nossos Projetos</h2>
    <p>Conheça as iniciativas voltadas a apoiar e promover nossos talentos.</p>
    <img src="imagens/ambos-se-ajudando.jpg" alt="Nossos talentos">
  `;
}

export function cadastroTemplate() {
  return `
    <h2>Cadastro</h2>
    <form id="formCadastro">
        <fieldset> <legend> Informações do seu Vtuber/Pngtuber</legend>

            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">E-mail:</label>
            <input type="text" id="email" name="email" required>

            <label for="canal">Canal e Plataforma:</label>
            <input type="text" id="canal" name="canal" placeholder="Ex: Youtube, Twitch, Kick, Tiktok..." required>

            <label for="tipo">Tipo do modelo:</label>
            <select name="tipo" id="tipo" required>
                <option value="">Selecione...</option>
                <option value="vtuber">Vtuber</option>
                <option value="pngtuber">PNGtuber</option>
            </select>

            <label for="modelo">Características do Modelo:</label>
            <input type="text" id="modelo" name="modelo" placeholder="Ex: Raposa Vtuber, Modelo 3D, Modelo 2D, PNGTuber" required>
            
            <button type="submit">Enviar Cadastro</button>
        </fieldset> </form>
  `;
}