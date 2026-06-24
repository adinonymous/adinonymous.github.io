// Art Gallery Lightbox
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('art-lightbox');
  const lightboxContent = lightbox ? lightbox.querySelector('.art-lightbox-content') : null;
  const closeBtn = lightbox ? lightbox.querySelector('.art-lightbox-close') : null;
  
  if (!lightbox || !lightboxContent) return;
  
  // Open lightbox
  document.querySelectorAll('.art-gallery-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const ext = href.split('.').pop().toLowerCase();
      
      if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) {
        lightboxContent.innerHTML = `<img src="${href}" alt="Artwork">`;
      } else if (['mp4', 'mov', 'webm', 'mkv'].includes(ext)) {
        lightboxContent.innerHTML = `<video controls autoplay style="max-width:100%;max-height:90vh;"><source src="${href}" type="video/mp4"></video>`;
      }
      
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxContent.innerHTML = '';
    document.body.style.overflow = '';
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }
  
  // Close on background click
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
});
