// Função para carregar projetos do arquivo JSON
async function carregarProjetos() {
  try {
    // Faz a requisição do arquivo JSON
    const response = await fetch("projetos.json");
    if (!response.ok) {
      throw new Error("Erro ao carregar projetos");
    }
    const projetos = await response.json(); // Aguarda o JSON da resposta
    renderizarProjetos(projetos);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

// Função para renderizar os projetos na página
function renderizarProjetos(projetos) {
  const projetosContainer = document.getElementById("projects-list");
  projetosContainer.innerHTML = ""; // Limpa o conteúdo anterior

  projetos.forEach((projeto, indice) => {
    const projetoDiv = document.createElement("div");
    projetoDiv.classList.add("project-card");
    projetoDiv.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.titulo}" />
        <div class="project-card-content">
          <h4>${projeto.titulo}</h4>
          <p>${projeto.descricao}</p>
          <a href="https://github.com/seu-usuario" class="github-btn" target="_blank">
  <span class="btn-text">Visite meu GitHub</span>
  <i class="btn-icon fab fa-github"></i> <!-- Usando Font Awesome para ícone -->
</a>

          <a href="${projeto.link}" target="_blank" class="projeto-btn">
            <span class="btn-text">Explorar Projeto</span>
            <span class="btn-icon">➡️</span>
          </a>
        </div>
      `;

    projetosContainer.appendChild(projetoDiv);

    // Animação de fade-in
    setTimeout(() => {
      projetoDiv.classList.add("fade-in");
    }, indice * 200); // Desvanecer os cartões com um pequeno atraso
  });
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", carregarProjetos);

// Rolagem suave e exibição de detalhes ao clicar em "Saiba Mais"
document.querySelectorAll(".saiba-mais").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar o comportamento padrão do link
    const targetId = this.getAttribute("href"); // Pega o href do botão
    const targetSection = document.querySelector(targetId); // Seleciona a seção de destino

    // Fazendo a rolagem suave
    targetSection.scrollIntoView({
      behavior: "smooth", // Rolagem suave
      block: "start", // Iniciar na parte superior da seção
    });

    // Adiciona a classe "visible" para exibir a seção de detalhes
    targetSection.classList.add("visible");
  });
});
