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

    // Actualizar header title (incluye nombre de usuario si está guardado)
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    const nombreUsuario = userData.nombre || "Usuario";
    const headerTitle = document.getElementById('header-title');
    if (headerTitle) {
      headerTitle.textContent = t.headerTitle + nombreUsuario;
    }

    // Actualizar destino-h2 usando stored 'tipoDestino' o el valor por defecto
    const destinoH2 = document.getElementById('destino-h2');
    const storedTipo = localStorage.getItem('tipoDestino');
    if (destinoH2) {
      if (storedTipo) {
        const lower = storedTipo.toLowerCase();
        if (lower === 'montaña' || lower === 'mountain') {
          destinoH2.textContent = t.destinoMontana;
        } else if (lower === 'playa' || lower === 'beach') {
          destinoH2.textContent = t.destinoPlaya;
        } else if (lower === 'nieve' || lower === 'snow') {
          destinoH2.textContent = t.destinoNieve;
        } else {
          destinoH2.textContent = storedTipo;
        }
      } else {
        destinoH2.textContent = t.destinoH2;
      }
    }

    // Actualizar último destino: si hay stored, separar la parte del país y combinarla con la traducción del tipo
    const ultimoDestinoEl = document.getElementById('ultimo-destino');
    const storedDestino = localStorage.getItem('ultimoDestino'); // Formato: "Tipo: País"
    if (ultimoDestinoEl) {
      if (storedDestino && storedTipo) {
        const parts = storedDestino.split(':');
        const countryPart = parts.length > 1 ? parts[1].trim() : "";
        let translatedTipo;
        const lower = storedTipo.toLowerCase();
        if (lower === 'montaña' || lower === 'mountain') {
          translatedTipo = t.destinoMontana;
        } else if (lower === 'playa' || lower === 'beach') {
          translatedTipo = t.destinoPlaya;
        } else if (lower === 'nieve' || lower === 'snow') {
          translatedTipo = t.destinoNieve;
        } else {
          translatedTipo = storedTipo;
        }
        const newDestino = countryPart ? `${translatedTipo}: ${countryPart}` : translatedTipo;
        ultimoDestinoEl.textContent = newDestino;
        localStorage.setItem('ultimoDestino', newDestino);
      } else {
        ultimoDestinoEl.textContent = t.ultimoDestino;
      }
    }

    // Actualizar otros elementos usando un mapeo
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

    // Actualizar los textos de los elementos de la navegación inferior
    const navLinks = document.querySelectorAll('.nav-bar a span');
    if (navLinks.length >= 3) {
      navLinks[0].textContent = t.footerInicio;
      navLinks[1].textContent = t.footerAjustes;
      navLinks[2].textContent = t.footerPerfil;
    }

    // Actualizar los textos de los elementos con data-i18n (por ejemplo, en posibles destinos)
    const destinoTipos = document.querySelectorAll('.destino-tipo');
    destinoTipos.forEach(tipo => {
      const key = tipo.getAttribute('data-i18n');
      if (key && t[key]) {
        tipo.textContent = t[key];
      } else {
        // Fallback por si no existe data-i18n
        const text = tipo.textContent.trim().toLowerCase();
        if (text === 'montaña' || text === 'mountain') {
          tipo.textContent = t.destinoMontana;
        } else if (text === 'playa' || text === 'beach') {
          tipo.textContent = t.destinoPlaya;
        } else if (text === 'nieve' || text === 'snow') {
          tipo.textContent = t.destinoNieve;
        }
      }
    });

    // Actualizar el botón de idioma
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
