document.addEventListener('DOMContentLoaded', () => {
  const languageToggle = document.getElementById('language-toggle');
  let currentLanguage = 'es';

  const translations = {
    es: {
      headerTitle: "Bienvenido de Nuevo Andres!",
      destinoH2: "Ultimo destino",
      ultimoDestino: "Playa",
      proximaInspeccion: "Próxima Inspección",
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
      headerTitle: "Welcome back, Andres!",
      destinoH2: "Last destination",
      ultimoDestino: "Beach",
      proximaInspeccion: "Next inspection",
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
    const headerTitle = document.getElementById('header-title');
    if (headerTitle) headerTitle.textContent = t.headerTitle;

    const destinoH2 = document.getElementById('destino-h2');
    if (destinoH2) {
      const storedTipo = localStorage.getItem('tipoDestino');
      if (!storedTipo) {
        destinoH2.textContent = t.destinoH2;
      }
    }

    const ultimoDestinoEl = document.getElementById('ultimo-destino');
    if (ultimoDestinoEl && !localStorage.getItem('ultimoDestino')) {
      ultimoDestinoEl.textContent = t.ultimoDestino;
    }

    const proximaInspeccionH2 = document.getElementById('proxima-inspeccion-h2');
    if (proximaInspeccionH2) proximaInspeccionH2.textContent = t.proximaInspeccion;

    const btnAgregaDestino = document.getElementById('btn-agrega-destino');
    if (btnAgregaDestino) btnAgregaDestino.textContent = t.btnAgregaDestino;

    const btnEliminaDestino = document.getElementById('btn-elimina-destino');
    if (btnEliminaDestino) btnEliminaDestino.textContent = t.btnEliminaDestino;

    const posiblesDestinosH2 = document.getElementById('posibles-destinos-h2');
    if (posiblesDestinosH2) posiblesDestinosH2.textContent = t.posiblesDestinosH2;

    const destinoTipos = document.querySelectorAll('.destino-tipo');
    destinoTipos.forEach(tipo => {
      const text = tipo.textContent.trim().toLowerCase();
      if (text === 'montaña' || text === 'mountain') {
        tipo.textContent = t.destinoMontana;
      } else if (text === 'playa' || text === 'beach') {
        tipo.textContent = t.destinoPlaya;
      } else if (text === 'nieve' || text === 'snow') {
        tipo.textContent = t.destinoNieve;
      }
    });

    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.textContent = t.modalTitle;

    const labelCountry = document.getElementById('label-country');
    if (labelCountry) labelCountry.textContent = t.labelCountry;

    const btnEnviar = document.getElementById('btn-enviar');
    if (btnEnviar) btnEnviar.textContent = t.btnEnviar;

    const navLinks = document.querySelectorAll('.nav-bar a span');
    if (navLinks.length >= 3) {
      navLinks[0].textContent = t.footerInicio;
      navLinks[1].textContent = t.footerAjustes;
      navLinks[2].textContent = t.footerPerfil;
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
      updateLanguage();
      languageToggle.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
      document.documentElement.lang = currentLanguage;
    });
  }
  updateLanguage();
});
