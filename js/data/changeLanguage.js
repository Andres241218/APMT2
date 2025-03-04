document.getElementById('language-toggle').addEventListener('click', () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'es' ? 'en' : 'es';
  document.documentElement.lang = newLang;
  // Update text content based on the new language
  updateTextContent(newLang);
  // Update button text
  document.getElementById('language-toggle').textContent = newLang === 'es' ? 'ESPAÑOL' : 'ENGLISH';
});

function updateTextContent(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = translations[lang][key];
  });
}

const translations = {
  es: {
    'ajustes-title': 'Ajustes',
    'ajustes-h2': 'Ajustes',
    'idioma-label': 'Idioma',
    'modo-claro-label': 'Modo claro',
    'inicio': 'Inicio',
    'ajustes': 'Ajustes',
    'mi-perfil': 'Mi Perfil',
    'change-language-btn': 'ESPAÑOL'
  },
  en: {
    'ajustes-title': 'Settings',
    'ajustes-h2': 'Settings',
    'idioma-label': 'Language',
    'modo-claro-label': 'Light mode',
    'inicio': 'Home',
    'ajustes': 'Settings',
    'mi-perfil': 'My Profile',
    'change-language-btn': 'ENGLISH'
  }
};
