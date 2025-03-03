document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('account-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

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
      terminosAceptados
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    window.location.href = 'index.html';
  });

  // Modal de Términos y Condiciones
  const termsLink = document.getElementById('terms-link');
  const termsModal = document.getElementById('terms-modal');
  const closeTerms = document.getElementById('close-terms');

  termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    termsModal.style.display = 'flex';
  });

  closeTerms.addEventListener('click', () => {
    termsModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === termsModal) {
      termsModal.style.display = 'none';
    }
  });
});
