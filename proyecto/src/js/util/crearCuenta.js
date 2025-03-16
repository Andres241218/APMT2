document.addEventListener('DOMContentLoaded', () => {
  // Inicializa la lógica del formulario
  function setupForm() {
    const form = document.getElementById('account-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Captura y procesa los valores del formulario
      const nombre = document.getElementById('nombre').value.trim();
      const apellido = document.getElementById('apellido').value.trim();
      const sexo = form.sexo.value;
      const viajeroFrecuente = form.viajeroFrecuente.value;
      const terminosAceptados = form.terminos.checked;

      const userData = {
        nombre,
        apellido,
        sexo,
        viajeroFrecuente,
        terminosAceptados,
      };

      // Almacena los datos en localStorage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Redirige al usuario
      window.location.href = 'main.html';
    });
  }

  // Inicializa la lógica del modal de términos y condiciones
  function setupTermsModal() {
    const termsLink = document.getElementById('terms-link');
    const termsModal = document.getElementById('terms-modal');
    const closeTerms = document.getElementById('close-terms');

    if (!termsLink || !termsModal || !closeTerms) return;

    termsLink.addEventListener('click', (event) => {
      event.preventDefault();
      termsModal.style.display = 'flex';
    });

    closeTerms.addEventListener('click', () => {
      termsModal.style.display = 'none';
    });

    // Cierra el modal si el usuario hace clic fuera de él
    window.addEventListener('click', (event) => {
      if (event.target === termsModal) {
        termsModal.style.display = 'none';
      }
    });
  }

  // Función principal para inicializar todo
  function init() {
    setupForm();
    setupTermsModal();
  }

  init();
});
