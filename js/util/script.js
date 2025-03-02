// js/util/script.js

// Objeto que relaciona cada país con sus sitios (por ejemplo, playas)
const countrySites = {
    "México": ["Playa del Carmen", "Cancún", "Tulum"],
    "Colombia": ["Cartagena", "Santa Marta"],
    "España": ["Barcelona", "Ibiza"]
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const destinoItems = document.querySelectorAll('.destino-item');
    const modal = document.getElementById('modal-form');
    const closeModalBtn = document.getElementById('close-modal');
    const countrySelect = document.getElementById('country-select');
    const siteSelect = document.getElementById('site-select');
    const siteContainer = document.getElementById('site-container');
    const countryForm = document.getElementById('country-form');
    const ultimoDestinoEl = document.getElementById('ultimo-destino');
    
    // Variable para almacenar el tipo de viaje seleccionado (Playa, Montaña o Nieve)
    let currentTripType = '';
  
    // 1. Llenar el select de países
    for (const country in countrySites) {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    }
  
    // 2. Abrir el modal al hacer clic en cualquier destino y capturar su tipo
    destinoItems.forEach(item => {
      item.addEventListener('click', () => {
        // Capturamos el tipo de viaje (texto dentro del elemento .destino-tipo)
        const tripType = item.querySelector('.destino-tipo').textContent.trim();
        currentTripType = tripType;
        
        modal.style.display = 'block';
        countryForm.reset();
        siteContainer.style.display = 'none';
        siteSelect.innerHTML = '';
      });
    });
  
    // 3. Cerrar el modal al hacer clic en la "X"
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // 4. Al seleccionar un país, se llena el select de sitios y se muestra el contenedor
    countrySelect.addEventListener('change', () => {
      const selectedCountry = countrySelect.value;
      siteSelect.innerHTML = '';
      
      if (selectedCountry && countrySites[selectedCountry]) {
        countrySites[selectedCountry].forEach(site => {
          const option = document.createElement('option');
          option.value = site;
          option.textContent = site;
          siteSelect.appendChild(option);
        });
        siteContainer.style.display = 'block';
      } else {
        siteContainer.style.display = 'none';
      }
    });
  
    // 5. Al enviar el formulario se actualiza "Último destino" y se redirige al checklist correspondiente
    countryForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const chosenCountry = countrySelect.value;
      const chosenSite = siteSelect.value;
  
      if (chosenCountry && chosenSite) {
        ultimoDestinoEl.textContent = `${chosenSite}, ${chosenCountry}`;
        modal.style.display = 'none';
        
        // Redirigir según el tipo de viaje
        switch (currentTripType.toLowerCase()) {
          case 'playa':
            window.location.href = 'checkplaya.html';
            break;
          case 'montaña':
            window.location.href = 'checkmontana.html';
            break;
          case 'nieve':
            window.location.href = 'checkmieve.html';
            break;
          default:
            window.location.href = 'checklist.html';
        }
      } else {
        alert('Por favor, seleccione un país y un sitio.');
      }
    });
  });
  