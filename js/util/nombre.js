document.addEventListener('DOMContentLoaded', () => {
    const userDataStr = localStorage.getItem('userData');
    const userNameElem = document.getElementById('user-name');
    
    if (userDataStr && userNameElem) {
      try {
        const userData = JSON.parse(userDataStr);
        if (userData.nombre) {
          userNameElem.textContent = userData.nombre;
        }
      } catch (error) {
        console.error('Error al parsear userData:', error);
      }
    }
  });
  