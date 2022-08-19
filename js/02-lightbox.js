import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulRef = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
  })
  .join('');

ulRef.insertAdjacentHTML('afterbegin', createGalleryMarkup);

let lightboxGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: '250ms',
});
