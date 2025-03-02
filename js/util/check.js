document.addEventListener('DOMContentLoaded', () => {
    const finishBtn = document.getElementById('finish-btn');
    const finishModal = document.getElementById('finish-modal');
    const closeFinishModal = document.getElementById('close-finish-modal');
    const confirmFinish = document.getElementById('confirm-finish');
  
    if(finishBtn) {
      finishBtn.addEventListener('click', () => {
        finishModal.style.display = 'block';
      });
    }
    
    if(closeFinishModal) {
      closeFinishModal.addEventListener('click', () => {
        finishModal.style.display = 'none';
      });
    }
    
    if(confirmFinish) {
      confirmFinish.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }
  });
  