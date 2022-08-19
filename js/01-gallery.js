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

function modalWindowOnImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const srclImgEl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${srclImgEl}" width="800" height="600">
`);

  instance.show();

  divRef.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
