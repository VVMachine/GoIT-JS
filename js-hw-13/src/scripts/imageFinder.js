import imageApi from './imageApi';

import blueimpTemplate from '../templates/blueimpTemplate.hbs';

import blueimp from 'blueimp-gallery';
import fileSaver from 'file-saver';

const refs = {
  searchForm: document.querySelector('#search-form'),
  blueimpGallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector(`button[data-action="load-more"]`),
  upBtn: document.querySelector('.button-up'),
  galleryModal: document.querySelector('#blueimp-gallery'),
};

refs.loadMoreBtn.hidden = true;

refs.searchForm.addEventListener('submit', searchFormSubmitBtnClick);
refs.loadMoreBtn.addEventListener('click', loadMoreBthClick);
refs.upBtn.addEventListener('click', scrollToStart);

function searchFormSubmitBtnClick(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.query;

  clearGalleryList();
  imageApi.resetPage();
  imageApi.searchQuery = input.value;

  imageApi.fetchArticles().then(data => {
    insertMarkupData(data);
  });
}

function insertMarkupData(items) {
  if (items.length === 0) {
    return;
  }

  const markup = blueimpTemplate(items);
  refs.blueimpGallery.insertAdjacentHTML('beforeend', markup);

  setGalleryItemIndex();

  enablePluginOnImages();

  refs.loadMoreBtn.hidden = false;

  refs.upBtn.style.visibility = 'visible';
}

function onImageClick(e) {
  e.preventDefault();

  const links = refs.blueimpGallery.querySelectorAll('a');

  const imageIndex = e.currentTarget.dataset.index;

  const options = {
    index: imageIndex,
    carousel: true,
    startSlideshow: false,

    onopen: function () {
      const modalGalleryRef = refs.galleryModal;

      modalGalleryRef.classList.add('blueimp-gallery-controls');

      const dwnlBth = modalGalleryRef.querySelector('.download');

      dwnlBth.hidden = false;

      dwnlBth.addEventListener('click', downloadBtnClick);
    },

    onclose: function () {
      const modalGalleryRef = refs.galleryModal;
      modalGalleryRef.classList.remove('blueimp-gallery-controls');

      const dwnlBth = modalGalleryRef.querySelector('.download');

      dwnlBth.removeEventListener('click', downloadBtnClick);
    },

    onslide: function () {
      refs.galleryModal.addEventListener('click', galleryDwnBtnToggler);
    },
  };

  blueimp(links, options);
}

function loadMoreBthClick(e) {
  imageApi.fetchArticles().then(data => {
    insertMarkupData(data);

    smoothScroll(e);
  });
}

function clearGalleryList() {
  refs.blueimpGallery.innerHTML = '';
}

function setGalleryItemIndex() {
  const createdElementsLinks = refs.blueimpGallery.querySelectorAll('a');
  createdElementsLinks.forEach((el, idx) => {
    el.dataset.index = idx;
  });
}

function enablePluginOnImages() {
  const arrayLength = refs.blueimpGallery.querySelectorAll('a').length;

  if (arrayLength === 12) {
    refs.blueimpGallery
      .querySelectorAll('a')
      .forEach(el => el.addEventListener('click', onImageClick));
  } else {
    refs.blueimpGallery
      .querySelectorAll('a')
      .forEach(el => el.addEventListener('click', onImageClick));

    refs.blueimpGallery
      .querySelectorAll('a')
      .forEach(el => el.addEventListener('click', onImageClick));
  }
}

function smoothScroll(e) {
  window.scrollTo({
    top: e.pageY - 15,
    behavior: 'smooth',
  });
}

function scrollToStart(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function galleryDwnBtnToggler(e) {
  if (e.target.classList[0] === 'slide-content') {
    const dwnBtn = refs.galleryModal.querySelector('.download');

    if (dwnBtn.hidden) {
      dwnBtn.hidden = false;
    } else {
      dwnBtn.hidden = true;
    }
  }
}

function downloadBtnClick() {
  const imageLink = refs.galleryModal
    .querySelector('.slides')
    .querySelector('.slide-active')
    .querySelector('img').src;

  fileSaver.saveAs(imageLink, 'image.jpg');
}
