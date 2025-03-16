document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const destinoItems = document.querySelectorAll('.destino-item');
  const modal = document.getElementById('modal-form');
  const closeModalBtn = document.getElementById('close-modal');
  const countrySelect = document.getElementById('country-select');
  const countryForm = document.getElementById('country-form');
  const ultimoDestinoEl = document.getElementById('ultimo-destino');
  const destinoH2 = document.getElementById('destino-h2');
  const destinoFondo = document.getElementById('destino-fondo');

  let currentTripType = '';

  // Datos de configuración
  const countries = ["México", "Colombia", "España"];
  const backgroundImages = { 
    "playa": "src/assets/img//playa.jpg",
    "montaña": "src/assets/img//montana.jpg",
    "nieve": "src/assets/img//nieve.jpg"
  };
  const tripTypePages = {
    "playa": "checkplaya.html",
    "montaña": "checkmontana.html",
    "nieve": "checknieve.html",
    "beach": "checkplaya.html",
    "mountain": "checkmontana.html",
    "snow": "checknieve.html"
  };

  // Poblar el select de países
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  // Manejo de selección de destino
  destinoItems.forEach(item => {
    item.addEventListener('click', () => {
      const tripType = item.querySelector('.destino-tipo').textContent.trim();
      currentTripType = tripType;
      modal.style.display = 'block';
      countryForm.reset();
    });
  });

  // Cerrar el modal
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Manejo del formulario de selección de país
  countryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const chosenCountry = countrySelect.value;
    if (chosenCountry) {
      const destinoText = `${currentTripType}: ${chosenCountry}`;
      ultimoDestinoEl.textContent = destinoText;
      destinoH2.textContent = currentTripType;
      localStorage.setItem('ultimoDestino', destinoText);
      localStorage.setItem('tipoDestino', currentTripType);

      const key = currentTripType.toLowerCase();
      if (backgroundImages[key]) {
        destinoFondo.style.backgroundImage = `url('${backgroundImages[key]}')`;
      }

      modal.style.display = 'none';
      const redirectPage = tripTypePages[key] || 'checklist.html';
      window.location.href = redirectPage;
    } else {
      alert('Por favor, seleccione un país.');
    }
  });

  // Cargar datos almacenados
  function loadStoredData() {
    const storedDestino = localStorage.getItem('ultimoDestino');
    const storedTipo = localStorage.getItem('tipoDestino');
    if (storedDestino) {
      ultimoDestinoEl.textContent = storedDestino;
    }
    if (storedTipo) {
      destinoH2.textContent = storedTipo;
      const key = storedTipo.toLowerCase();
      if (backgroundImages[key]) {
        destinoFondo.style.backgroundImage = `url('${backgroundImages[key]}')`;
      }
    }
  }

  // Inicializar datos al cargar la página
  loadStoredData();
});
