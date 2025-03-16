document.addEventListener('DOMContentLoaded', () => {
  const languageToggle = document.getElementById('language-toggle');
  let currentLanguage = localStorage.getItem('currentLanguage') || 'es';

  const translations = {
    es: {
      headerTitle: "Bienvenido de Nuevo ",
      destinoH2: "Tu último destino",
      ultimoDestino: "Playa",
      proximaInspeccion: "¿Cuál es tu próxima aventura?",
      btnAgregaDestino: "Agrega un destino",
      btnEliminaDestino: "Elimina un destino",
      posiblesDestinosH2: "Posibles destinos",
      destinoMontana: "Montaña",
      destinoPlaya: "Playa",
      destinoNieve: "Nieve",
      modalTitle: "¿Qué país quiere visitar?",
      labelCountry: "Seleccione un país:",
      btnEnviar: "Enviar",
      footerInicio: "Inicio",
      footerAjustes: "Ajustes",
      footerPerfil: "Mi Perfil",
    },
    en: {
      headerTitle: "Welcome back ",
      destinoH2: "Last destination",
      ultimoDestino: "Beach",
      proximaInspeccion: "What is your next adventure?",
      btnAgregaDestino: "Add a destination",
      btnEliminaDestino: "Remove a destination",
      posiblesDestinosH2: "Possible destinations",
      destinoMontana: "Mountain",
      destinoPlaya: "Beach",
      destinoNieve: "Snow",
      modalTitle: "Which country do you want to visit?",
      labelCountry: "Select a country:",
      btnEnviar: "Submit",
      footerInicio: "Home",
      footerAjustes: "Settings",
      footerPerfil: "Profile",
    },
  };

  /**
   * Actualiza el idioma en la página.
   */
  function updateLanguage() {
    const t = translations[currentLanguage];
    localStorage.setItem('currentLanguage', currentLanguage);

    // Actualiza el título del encabezado con el nombre del usuario
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    const nombreUsuario = userData.nombre || "Usuario";
    const headerTitle = document.getElementById('header-title');
    if (headerTitle) headerTitle.textContent = t.headerTitle + nombreUsuario;

    // Actualiza el texto de "Último destino"
    const destinoH2 = document.getElementById('destino-h2');
    const storedTipo = localStorage.getItem('tipoDestino');
    if (destinoH2) {
      destinoH2.textContent = translateTipo(storedTipo, t) || t.destinoH2;
    }

    // Actualiza la sección de último destino
    const ultimoDestinoEl = document.getElementById('ultimo-destino');
    const storedDestino = localStorage.getItem('ultimoDestino');
    if (ultimoDestinoEl) {
      ultimoDestinoEl.textContent =
        getTranslatedDestino(storedDestino, storedTipo, t) || t.ultimoDestino;
    }

    // Actualiza elementos traducibles con IDs específicos
    updateTextContent({
      'proxima-inspeccion-h2': t.proximaInspeccion,
      'btn-agrega-destino': t.btnAgregaDestino,
      'btn-elimina-destino': t.btnEliminaDestino,
      'posibles-destinos-h2': t.posiblesDestinosH2,
      'modal-title': t.modalTitle,
      'label-country': t.labelCountry,
      'btn-enviar': t.btnEnviar,
    });

    // Actualiza los enlaces de navegación en el pie de página
    updateFooterLinks(t);

    // Actualiza elementos dinámicos con la clase "destino-tipo"
    updateDestinoTipos(t);

    // Actualiza el texto del botón de idioma
    if (languageToggle) {
      languageToggle.textContent = currentLanguage === 'es' ? 'ENGLISH' : 'ESPAÑOL';
    }
  }

  /**
   * Traduce el tipo de destino (montaña, playa, nieve) según el idioma actual.
   */
  function translateTipo(tipo, t) {
    const lower = tipo ? tipo.toLowerCase() : null;
    if (lower === 'montaña' || lower === 'mountain') return t.destinoMontana;
    if (lower === 'playa' || lower === 'beach') return t.destinoPlaya;
    if (lower === 'nieve' || lower === 'snow') return t.destinoNieve;
    return tipo;
  }

  /**
   * Traduce y formatea el último destino.
   */
  function getTranslatedDestino(destino, tipo, t) {
    if (!destino || !tipo) return null;
    const parts = destino.split(':');
    const countryPart = parts.length > 1 ? parts[1].trim() : "";
    const translatedTipo = translateTipo(tipo, t);
    return countryPart ? `${translatedTipo}: ${countryPart}` : translatedTipo;
  }

  /**
   * Actualiza los contenidos de texto de elementos con IDs específicos.
   */
  function updateTextContent(translationsMap) {
    Object.keys(translationsMap).forEach(id => {
      const element = document.getElementById(id);
      if (element) element.textContent = translationsMap[id];
    });
  }

  /**
   * Actualiza los enlaces del pie de página.
   */
  function updateFooterLinks(t) {
    const navLinks = document.querySelectorAll('.nav-bar a span');
    if (navLinks.length >= 3) {
      navLinks[0].textContent = t.footerInicio;
      navLinks[1].textContent = t.footerAjustes;
      navLinks[2].textContent = t.footerPerfil;
    }
  }

  /**
   * Actualiza el texto de los elementos con clase "destino-tipo".
   */
  function updateDestinoTipos(t) {
    const destinoTipos = document.querySelectorAll('.destino-tipo');
    destinoTipos.forEach(tipo => {
      const key = tipo.getAttribute('data-i18n');
      tipo.textContent = key ? t[key] : translateTipo(tipo.textContent.trim(), t);
    });
  }

  // Configuración del evento de cambio de idioma
  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
      updateLanguage();
      document.documentElement.lang = currentLanguage;
    });
  }

  // Inicializa la página con el idioma guardado
  updateLanguage();
});
