document.addEventListener('DOMContentLoaded', () => {
  function setUserName() {
    const userDataStr = localStorage.getItem('userData');
    const userNameElem = document.getElementById('nombre');

    if (userDataStr && userNameElem) {
      try {
        // Intenta parsear el JSON de userData
        const userData = JSON.parse(userDataStr);

        // Verifica que la propiedad nombre exista antes de asignarla
        if (userData.nombre) {
          userNameElem.textContent = userData.nombre;
        } else {
          console.warn('El objeto userData no contiene la propiedad "nombre".');
        }
      } catch (error) {
        console.error('Error al parsear userData:', error);
      }
    } else if (!userNameElem) {
      console.warn('Elemento con ID "nombre" no encontrado en el DOM.');
    }
  }

  // Inicializa la función para establecer el nombre de usuario
  setUserName();
});
