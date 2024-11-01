// Função para carregar traduções do arquivo JSON
async function loadTranslations() {
    const response = await fetch('translations.json');
    const resources = await response.json();
    
    // Inicializando o i18next com as traduções carregadas
    i18next.init({
      lng: 'pt', // idioma padrão
      resources
    }, (err, t) => {
      updateText();
    });
  }
  
  // Função para atualizar o texto na página
  function updateText() {
    document.title = i18next.t('title'); // Atualiza o título da página
    document.querySelector('.logo').innerText = i18next.t('logo');
    document.querySelector('[data-translate="portfolio_title"]').innerText = i18next.t('portfolio_title');
    document.querySelector('[data-translate="portfolio_intro"]').innerText = i18next.t('portfolio_intro');
    document.querySelector('[data-translate="learn_more"]').innerText = i18next.t('learn_more');
    document.querySelector('[data-translate="about_title"]').innerText = i18next.t('about_title');
    document.querySelector('[data-translate="about_description"]').innerText = i18next.t('about_description');
    document.querySelector('[data-translate="projects_title"]').innerText = i18next.t('projects_title');
    document.querySelector('[data-translate="footer_text"]').innerText = i18next.t('footer_text');
  }
  
  // Função para mudar o idioma
  function changeLanguage(lang) {
    i18next.changeLanguage(lang, (err, t) => {
      updateText();
    });
  }
  
  // Chamada para carregar as traduções ao carregar a página
  loadTranslations();
  