document.getElementById('change-language-btn').addEventListener('click', () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'es' ? 'en' : 'es';
  document.documentElement.lang = newLang;
  // Update text content based on the new language
  updateTextContent(newLang);
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
    'header-title': 'Bienvenido de Nuevo Andres!',
    'destino-h2': 'Tu último destino',
    'ultimo-destino': 'Playa',
    'proxima-inspeccion-h2': '¿Cual sera tu proxima aventura?',
    'posibles-destinos-h2': 'Posibles destinos',
    'destino-montana': 'Montaña',
    'destino-playa': 'Playa',
    'destino-nieve': 'Nieve',
    'inicio': 'Inicio',
    'ajustes': 'Ajustes',
    'mi-perfil': 'Mi Perfil',
    'modal-title': '¿Qué país quiere visitar?',
    'label-country': 'Seleccione un país:',
    'btn-enviar': 'Enviar',
    'ajustes-h2': 'Ajustes',
    'change-language-btn': 'Cambiar Idioma'
  },
  en: {
    'header-title': 'Welcome Back Andres!',
    'destino-h2': 'Your last destination',
    'ultimo-destino': 'Beach',
    'proxima-inspeccion-h2': 'What will be your next adventure?',
    'posibles-destinos-h2': 'Possible destinations',
    'destino-montana': 'Mountain',
    'destino-playa': 'Beach',
    'destino-nieve': 'Snow',
    'inicio': 'Home',
    'ajustes': 'Settings',
    'mi-perfil': 'My Profile',
    'modal-title': 'Which country do you want to visit?',
    'label-country': 'Select a country:',
    'btn-enviar': 'Send',
    'ajustes-h2': 'Settings',
    'change-language-btn': 'Change Language'
  }
};
