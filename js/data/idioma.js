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
      footerPerfil: "Mi Perfil"
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
      footerPerfil: "Profile"
    }
  };

  function updateLanguage() {
    const t = translations[currentLanguage];
    localStorage.setItem('currentLanguage', currentLanguage);

    // Header Title
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    const nombreUsuario = userData.nombre || "Usuario";
    const headerTitle = document.getElementById('header-title');
    if (headerTitle) headerTitle.textContent = t.headerTitle + nombreUsuario;

    // Destino H2
    const destinoH2 = document.getElementById('destino-h2');
    if (destinoH2) destinoH2.textContent = t.destinoH2;

    // Último Destino
    const ultimoDestinoEl = document.getElementById('ultimo-destino');
    if (ultimoDestinoEl) {
      const storedTipo = localStorage.getItem('tipoDestino') || "";
      const translatedTipo = storedTipo.toLowerCase() === "montaña" ? t.destinoMontana :
                             storedTipo.toLowerCase() === "playa" ? t.destinoPlaya :
                             storedTipo.toLowerCase() === "nieve" ? t.destinoNieve : storedTipo;
      ultimoDestinoEl.textContent = translatedTipo || t.ultimoDestino;
    }

    // Otros elementos
    const translationsMap = {
      'proxima-inspeccion-h2': t.proximaInspeccion,
      'btn-agrega-destino': t.btnAgregaDestino,
      'btn-elimina-destino': t.btnEliminaDestino,
      'posibles-destinos-h2': t.posiblesDestinosH2,
      'modal-title': t.modalTitle,
      'label-country': t.labelCountry,
      'btn-enviar': t.btnEnviar
    };

    Object.keys(translationsMap).forEach(id => {
      const element = document.getElementById(id);
      if (element) element.textContent = translationsMap[id];
    });

    // Footer Navigation
    const navLinks = document.querySelectorAll('.nav-bar a span');
    if (navLinks.length >= 3) {
      navLinks[0].textContent = t.footerInicio;
      navLinks[1].textContent = t.footerAjustes;
      navLinks[2].textContent = t.footerPerfil;
    }

    // Language Toggle Button
    if (languageToggle) {
      languageToggle.textContent = currentLanguage === 'es' ? 'ENGLISH' : 'ESPAÑOL';
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
      updateLanguage();
      document.documentElement.lang = currentLanguage;
    });
  }

  updateLanguage();
});
