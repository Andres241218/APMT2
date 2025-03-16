document.addEventListener('DOMContentLoaded', () => {
  // Cambia el color de todos los encabezados <h2> a negro
  function styleHeadings() {
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
      heading.style.color = 'black';
    });
  }

  // Manejo del modal para finalizar
  function setupFinishModal() {
    const finishBtn = document.getElementById('finish-btn');
    const finishModal = document.getElementById('finish-modal');
    const closeFinishModal = document.getElementById('close-finish-modal');
    const confirmFinish = document.getElementById('confirm-finish');

    if (finishBtn && finishModal) {
      finishBtn.addEventListener('click', () => {
        finishModal.style.display = 'block';
      });
    }

    if (closeFinishModal && finishModal) {
      closeFinishModal.addEventListener('click', () => {
        finishModal.style.display = 'none';
      });
    }

    if (confirmFinish) {
      confirmFinish.addEventListener('click', () => {
        window.location.href = 'main.html';
      });
    }
  }

  // Actualiza la barra de progreso según los checkboxes seleccionados
  function setupChecklistProgress() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    const progressBar = document.getElementById('progress-bar');

    if (!progressBar || checkboxes.length === 0) return;

    function updateProgress() {
      const total = checkboxes.length;
      const checked = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
      const percentage = (checked / total) * 100;
      progressBar.style.width = `${percentage}%`;
    }

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateProgress);
    });

    // Inicializa el progreso al cargar
    updateProgress();
  }

  // Inicialización
  function init() {
    styleHeadings();
    setupFinishModal();
    setupChecklistProgress();
  }

  init();
});
