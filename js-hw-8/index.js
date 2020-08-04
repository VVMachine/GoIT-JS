import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const overlayWindowRef = document.querySelector(".js-lightbox");
const overlayImageRef = overlayWindowRef.querySelector("img");
const closeButtonRef = overlayWindowRef.querySelector(
  'button[data-action="close-lightbox"]'
);
const overlayContentRef = overlayWindowRef.querySelector(".lightbox__content");

galleryRef.addEventListener("click", openOverlay);

let indexCounter = 0;
let overlayImageIndex;

function createGallery(galleryData) {
  const { preview, original, description } = galleryData;

  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = preview;
  galleryImage.alt = description;
  galleryImage.dataset.source = original;
  galleryImage.dataset.index = indexCounter;

  indexCounter += 1;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

const createdGallery = galleryItems.map((el) => createGallery(el));

galleryRef.append(...createdGallery);

function openOverlay(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const overlayImageSource = e.target.dataset.source;
  const overlayImageAlt = e.target.alt;

  changeOverlayData(overlayImageSource, overlayImageAlt);

  overlayWindowRef.classList.add("is-open");

  overlayImageIndex = +e.target.dataset.index;

  overlayContentRef.addEventListener("click", closeOverlayByEmpty);
  document.addEventListener("keydown", keyboardEvents);
  overlayContentRef.addEventListener("click", imageClickNext);
  closeButtonRef.addEventListener("click", closeOverlayByButton);
}

function changeOverlayData(imageSource, alt) {
  overlayImageRef.src = imageSource;
  overlayImageRef.alt = alt;
}

function closeOverlay() {
  overlayWindowRef.classList.remove("is-open");
  clearOverlayData();
  overlayContentRef.removeEventListener("click", closeOverlayByEmpty);
  document.removeEventListener("keydown", keyboardEvents);
  overlayContentRef.removeEventListener("click", imageClickNext);
  closeButtonRef.removeEventListener("click", closeOverlayByButton);
}

function clearOverlayData() {
  overlayImageRef.src = "";
  overlayImageRef.alt = "";
}

function closeOverlayByButton(e) {
  if (e.target != e.currentTarget) {
    return;
  }

  closeOverlay();
}

function closeOverlayByEmpty(e) {
  if (e.target != e.currentTarget) {
    return;
  }
  closeOverlay();
}

function keyboardEvents(pressedKey) {
  if (!overlayWindowRef.classList.contains("is-open")) {
    return;
  }

  if (pressedKey.keyCode === 27) {
    closeOverlay();
    return;
  }

  if (pressedKey.keyCode === 37) {
    prevImageByButton(overlayImageIndex, galleryItems);
    return;
  }
  if (pressedKey.keyCode === 39) {
    nextImageByButton(overlayImageIndex, galleryItems);
    return;
  }
}

function nextImageByButton(currentIndex, array) {
  if (currentIndex + 1 > array.length - 1) {
    overlayImageRef.src = array[0].original;
    overlayImageRef.alt = array[0].description;
    overlayImageIndex = 0;
    return;
  }
  overlayImageRef.src = array[currentIndex + 1].original;
  overlayImageRef.alt = array[currentIndex + 1].description;
  overlayImageIndex = currentIndex + 1;
}

function prevImageByButton(currentIndex, array) {
  if (currentIndex - 1 < 0) {
    overlayImageIndex = array.length - 1;
    overlayImageRef.src = array[array.length - 1].original;
    overlayImageRef.alt = array[array.length - 1].description;
    overlayImageIndex = array.length - 1;

    return;
  }
  overlayImageRef.src = array[currentIndex - 1].original;
  overlayImageRef.alt = array[currentIndex - 1].description;
  overlayImageIndex = currentIndex - 1;
}

function imageClickNext(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  nextImageByButton(overlayImageIndex, galleryItems);
}
