// Função para alternar a visibilidade da seção de administração
function toggleAdmin() {
    const adminSection = document.getElementById("admin");
    if (adminSection.style.display === "none") {
        adminSection.style.display = "block";
    } else {
        adminSection.style.display = "none";
    }
}

// Função para alterar o idioma e traduzir o conteúdo
function changeLanguage(lang) {
    const translations = {
        title: {
            en: "Portfolio",
            pt: "Portfólio"
        },
        intro: {
            en: "Experience in development, design, and SEO.",
            pt: "Experiência em desenvolvimento, design e SEO."
        },
        about_title: {
            en: "About Me",
            pt: "Sobre Mim"
        },
        about_description: {
            en: "I am Vinicius Mota, a developer with experience in design, programming, and SEO.",
            pt: "Sou Vinicius Mota, desenvolvedor com experiência em design, programação e SEO."
        }
    };

    // Atualiza o texto com base no idioma selecionado
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[key][lang];
    });
}

// Função para pré-visualizar a imagem carregada
function previewImage(event) {
    const file = event.target.files[0];
    const imagePreview = document.getElementById('image-preview');

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Corrige a sintaxe da string template com crases
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 100%; height: auto;">`;
        };

        reader.readAsDataURL(file);
    }
}

// Função para adicionar um projeto na lista
function addProject(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    // Coleta os dados do projeto
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    const imageSrc = document.getElementById('image-preview').querySelector('img')?.src;

    // Verifica se todos os campos estão preenchidos
    if (!title || !description || !imageSrc) {
        alert('Por favor, preencha todos os campos e adicione uma imagem.');
        return;
    }

    // Cria um novo elemento para o projeto
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item'; // Adiciona a classe para estilo

    // Adiciona conteúdo ao novo projeto usando template literals
    projectItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <img src="${imageSrc}" alt="${title}" style="max-width: 100%; height: auto;">
    `;

    // Adiciona o novo projeto à lista de projetos
    document.getElementById('projects-list').appendChild(projectItem);

    // Limpa os campos do formulário após adicionar
    document.getElementById('project-form').reset();
    document.getElementById('image-preview').innerHTML = ''; // Limpa a pré-visualização da imagem
}
