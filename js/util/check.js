document.addEventListener('DOMContentLoaded', () => {
  // Asegurar que todos los elementos h2 en el DOM tengan color negro
  const headings = document.querySelectorAll('h2');
  headings.forEach(heading => {
    heading.style.color = 'black';
  });

  // Manejo del modal de finalización
  const finishBtn = document.getElementById('finish-btn');
  const finishModal = document.getElementById('finish-modal');
  const closeFinishModal = document.getElementById('close-finish-modal');
  const confirmFinish = document.getElementById('confirm-finish');

  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      finishModal.style.display = 'block';
    });
  }

  if (closeFinishModal) {
    closeFinishModal.addEventListener('click', () => {
      finishModal.style.display = 'none';
    });
  }

  if (confirmFinish) {
    confirmFinish.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Funcionalidad de la barra de progreso
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
  const progressBar = document.getElementById('progress-bar');

  function updateProgress() {
    const total = checkboxes.length;
    let checked = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checked++;
      }
    });
    const percentage = (checked / total) * 100;
    progressBar.style.width = percentage + '%';
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
  });

  updateProgress();
});
