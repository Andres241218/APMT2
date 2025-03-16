document.addEventListener('DOMContentLoaded', () => {
  function displayUserName() {
    // Recupera los datos del usuario desde localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.nombre) {
      const nombreElement = document.getElementById('nombre');
      if (nombreElement) {
        nombreElement.textContent = userData.nombre;
      }
    }
  }

  // Inicializa la función al cargar el DOM
  displayUserName();
});
