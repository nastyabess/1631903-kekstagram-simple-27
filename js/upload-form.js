/* eslint no-use-before-define: 0 */

import {isEscapeKey} from './utils.js';
import {resetScale} from './img-scale.js';
// import {updateSlider} from './slider.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text'
}, true);

const showModal = () => {
  resetScale();
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
};

const hideModal = () => {
  uploadForm.reset();
  // updateSlider();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
};

const onEscKeydown = (evt) => {if (isEscapeKey(evt)) {
  evt.preventDefault();
  hideModal();
}};

uploadFile.addEventListener('change', () => {
  showModal();
});

closeButton.addEventListener('click', () => {
  hideModal();
});

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
