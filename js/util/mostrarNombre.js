document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.nombre) {
      document.getElementById('nombre').textContent = userData.nombre;
    }
  });
  