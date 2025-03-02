document.addEventListener('DOMContentLoaded', () => {
    const destinoItems = document.querySelectorAll('.destino-item');
    const modal = document.getElementById('modal-form');
    const closeModalBtn = document.getElementById('close-modal');
    const countrySelect = document.getElementById('country-select');
    const siteSelect = document.getElementById('site-select');
    const siteContainer = document.getElementById('site-container');
    const countryForm = document.getElementById('country-form');
    const ultimoDestinoEl = document.getElementById('ultimo-destino');
  
    // Variable para almacenar el tipo de viaje seleccionado ("Playa", "Montaña" o "Nieve")
    let currentTripType = '';
  
    // Objeto con países y sus sitios clasificados por tipo
    const countrySites = {
      "México": {
        "Playa": ["Playa del Carmen", "Cancún", "Tulum"],
        "Montaña": ["Pico de Orizaba", "Sierra de Juárez"],
        "Nieve": ["Nevado de Toluca"]
      },
      "Colombia": {
        "Playa": ["Cartagena", "Santa Marta"],
        "Montaña": ["Nevado del Ruiz"],
        "Nieve": []
      },
      "España": {
        "Playa": ["Barcelona", "Ibiza"],
        "Montaña": ["Picos de Europa", "Sierra Nevada"],
        "Nieve": []
      }
    };
  
    // Llenar el select de países (sin filtrar sitios, ya que la categoría se filtra luego)
    for (const country in countrySites) {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    }
  
    // Al hacer clic en un destino, se captura su tipo y se abre el modal
    destinoItems.forEach(item => {
      item.addEventListener('click', () => {
        const tripType = item.querySelector('.destino-tipo').textContent.trim();
        currentTripType = tripType; // "Playa", "Montaña" o "Nieve"
        modal.style.display = 'block';
        countryForm.reset();
        siteContainer.style.display = 'none';
        siteSelect.innerHTML = '';
      });
    });
  
    // Cerrar el modal
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Al seleccionar un país, llenar el select de sitios filtrando por currentTripType
    countrySelect.addEventListener('change', () => {
      const selectedCountry = countrySelect.value;
      siteSelect.innerHTML = '';
      if (selectedCountry && countrySites[selectedCountry] && countrySites[selectedCountry][currentTripType]) {
        const sitesForType = countrySites[selectedCountry][currentTripType];
        if (sitesForType.length > 0) {
          sitesForType.forEach(site => {
            const option = document.createElement('option');
            option.value = site;
            option.textContent = site;
            siteSelect.appendChild(option);
          });
          siteContainer.style.display = 'block';
        } else {
          // Si no hay sitios para ese tipo, ocultar el select
          siteContainer.style.display = 'none';
        }
      } else {
        siteContainer.style.display = 'none';
      }
    });
  
    // Enviar el formulario
    countryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const chosenCountry = countrySelect.value;
      const chosenSite = siteSelect.value;
      if (chosenCountry && chosenSite) {
        const destinoText = `${chosenSite}, ${chosenCountry}`;
        ultimoDestinoEl.textContent = destinoText;
        localStorage.setItem('ultimoDestino', destinoText);
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
  
    // Al cargar la página, si ya existe información guardada, actualizar "último destino"
    const storedDestino = localStorage.getItem('ultimoDestino');
    if (storedDestino) {
      ultimoDestinoEl.textContent = storedDestino;
    }
  });
  