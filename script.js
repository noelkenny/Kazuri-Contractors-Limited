// PORTFOLIO LIGHTBOX
const lightboxModal = document.createElement('div');
lightboxModal.classList.add('lightbox-modal');
document.body.appendChild(lightboxModal);

document.querySelectorAll('.lightbox img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxModal.innerHTML = `<img src="${img.src}">`;
    lightboxModal.style.display = 'flex';
  });
});

lightboxModal.addEventListener('click', () => {
  lightboxModal.style.display = 'none';
});