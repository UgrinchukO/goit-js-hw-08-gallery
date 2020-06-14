import Gallery from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const modalContent = document.querySelector(".lightbox__content");
const modalImage = document.querySelector(".lightbox__image");
const btnEsc = document.querySelector(".lightbox__button");

const createMarkUp = (item, idx) => {
  const liRef = document.createElement("li");
  liRef.classList.add("gallery__item");
  const linkRef = document.createElement("a");
  linkRef.classList.add("gallery__link");
  linkRef.href = item.original;
  const imgRef = document.createElement("img");
  imgRef.classList.add("gallery__image");
  imgRef.alt = item.description;
  imgRef.src = item.preview;
  imgRef.dataset.source = item.original;
  imgRef.dataset.index = idx;
  linkRef.appendChild(imgRef);
  liRef.appendChild(linkRef);
  return liRef;
};

// const createGal = (items) => {
//   let idx = 0;
//   const itemsRef = [];
//   items.map((item) => {
//     itemsRef.push(createMarkUp(item, idx));
//     idx += 1;
//     return itemsRef;
//   });
//   gallery.append(...itemsRef);
// };

const createGal = (items) => {
  const itemsRef = items.map((item, idx) => {
    return createMarkUp(item, idx);
  });
  gallery.append(...itemsRef);
  return createGal(Gallery);
};

const onClickHandler = (e) => {
  e.preventDefault();

  if (e.target.nodeName === modalImage) {
    lightbox.classList.add("is-open");
    modalImage.querySelector(".lightbox__image").src = e.target.src;
    modalImage.querySelector(".lightbox__image").alt = e.target.alt;
  }
};

const onCloseHandler = (e) => {
  if (e.target.nodeName === btnEsc) {
    lightbox.classList.remove("is-open");
  }
};

/*call fn*/
gallery.addEventListener("click", onClickHandler);
btnEsc.addEventListener("click", onCloseHandler);

// import galleryItems from './gallery-items.js';

// const gallery = document.querySelector('.js-gallery');
// const lightbox = document.querySelector('.js-lightbox');
// const modalImage = document.querySelector('.lightbox__image');
// const closeBtn = document.querySelector('.lightbox__button');
// const modalContent = document.querySelector('.lightbox__content');

// const createItem = (galleryItem, indexCounter) => {
//   const item = document.createElement('li');
//   item.classList.add('gallery__item');
//   const link = document.createElement('a');
//   link.classList.add('gallery__link');
//   link.href = galleryItem.original;
//   const image = document.createElement('img');
//   image.classList.add('gallery__image');
//   image.alt = galleryItem.description;
//   image.src = galleryItem.preview;
//   image.dataset.source = galleryItem.original;
//   image.dataset.index = indexCounter;
//   link.appendChild(image);
//   item.appendChild(link);
//   return item;
// };

// const createGallery = items => {
//   const itemsRef = [];
//   let indexCounter = 0;
//   items.map(item => {
//     itemsRef.push(createItem(item, indexCounter));
//     indexCounter += 1;
//     return itemsRef;
//   });
//   gallery.append(...itemsRef);
// };
// window.onload = createGallery(galleryItems);

// const openModal = counter => {
//   window.addEventListener('keydown', onCloseEvent);
//   window.addEventListener('keydown', onArrowButtonsClick);
//   lightbox.classList.add('is-open');
//   addSource(galleryItems, counter);
// };

// const closeModal = () => {
//   window.removeEventListener('keydown', onCloseEvent);
//   window.removeEventListener('keydown', onArrowButtonsClick);
//   lightbox.classList.remove('is-open');
//   modalImage.src = '';
//   modalImage.alt = '';
// };

// const addSource = (arr, counter) => {
//   modalImage.src = arr[counter].original;
//   modalImage.alt = arr[counter].description;
// };

// const swapImage = (items, param) => {
//   const filtered = items.filter(item => item.original === modalImage.src);
//   const currentImage = filtered[0];
//   const currentIndex = items.indexOf(currentImage);
//   if (currentIndex + param >= 0 && currentIndex + param < items.length) {
//     addSource(galleryItems, currentIndex + param);
//   }
// };

// const onGalleryClick = event => {
//   event.preventDefault();
//   const itemCounter = Number(event.target.dataset.index);
//   if (event.currentTarget !== event.target) {
//     openModal(itemCounter);
//   }
// };

// const onCloseEvent = event => {
//   if (event.target === closeBtn) {
//     closeModal();
//   }
//   if (event.target === modalContent) {
//     closeModal();
//   }
//   if (event.code === 'Escape') {
//     closeModal();
//   }
// };

// const onArrowButtonsClick = event => {
//   if (event.code === 'ArrowLeft') {
//     swapImage(galleryItems, -1);
//   }
//   if (event.code === 'ArrowRight') {
//     swapImage(galleryItems, 1);
//   }
// };

// gallery.addEventListener('click', onGalleryClick);
// lightbox.addEventListener('click', onCloseEvent);
