import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            >
            </a>
           </div>`;
  })
  .join('');

divRef.insertAdjacentHTML('afterbegin', createGalleryMarkup);

divRef.addEventListener('click', modalWindowOnImageClick);

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`);

function modalWindowOnImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();

  window.addEventListener('keydown', onModalClose);

  function onModalClose(event) {
    if (event.code === 'Escape') {
      instance.close();
      console.log('click click');
      window.removeEventListener('keydown', onModalClose);
    }
  }
}
