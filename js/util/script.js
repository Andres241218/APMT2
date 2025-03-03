document.addEventListener('DOMContentLoaded', () => {
  const destinoItems = document.querySelectorAll('.destino-item');
  const modal = document.getElementById('modal-form');
  const closeModalBtn = document.getElementById('close-modal');
  const countrySelect = document.getElementById('country-select');
  const countryForm = document.getElementById('country-form');
  const ultimoDestinoEl = document.getElementById('ultimo-destino');
  const destinoH2 = document.getElementById('destino-h2');
  const destinoFondo = document.getElementById('destino-fondo');

  let currentTripType = '';

  const countries = ["México", "Colombia", "España"];

  // Mapeo de imágenes de fondo según el tipo (todo en minúsculas)
  const backgroundImages = {
    "playa": "../img/playa.jpg",
    "montaña": "../img/montana.jpg",
    "nieve": "../img/nieve.jpg"
  };

  // Llenar el select de países
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  // Al hacer clic en una tarjeta, capturamos su tipo y abrimos el modal
  destinoItems.forEach(item => {
    item.addEventListener('click', () => {
      const tripType = item.querySelector('.destino-tipo').textContent.trim();
      currentTripType = tripType;
      modal.style.display = 'block';
      countryForm.reset();
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

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
      switch (key) {
        case 'playa':
          window.location.href = 'checkplaya.html';
          break;
        case 'montaña':
          window.location.href = 'checkmontana.html';
          break;
        case 'nieve':
          window.location.href = 'checknieve.html';
          break;
        default:
          window.location.href = 'checklist.html';
      }
    } else {
      alert('Por favor, seleccione un país.');
    }
  });

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
});
