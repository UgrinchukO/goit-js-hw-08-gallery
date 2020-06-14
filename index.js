import images from "./gallery-items.js";

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

const createGal = (items) => {
  const itemsRef = items.map((item, idx) => {
    return createMarkUp(item, idx);
  });
  gallery.append(...itemsRef);
};

const onClickHandler = (e) => {
  e.preventDefault();

  if (e.target.nodeName === "IMG") {
    lightbox.classList.add("is-open");
    modalImage.src = e.target.dataset.source;
    modalImage.alt = e.target.alt;
  }
};

const onCloseHandler = (e) => {
    lightbox.classList.remove("is-open");
};
createGal(images);

/*call fn*/
gallery.addEventListener("click", onClickHandler);
btnEsc.addEventListener("click", onCloseHandler);
