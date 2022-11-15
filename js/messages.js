/* eslint-disable no-use-before-define */
import {isEscapeKey} from './utils.js';
import {hideModal} from './upload-form.js';

const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const bodyElement = document.body;

const onOverlayClick = () => {
  hideMessage();
};

const onMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const actionsMessage = () => {
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  bodyElement.style.overflow = 'hidden';
};

const showSuccessMessage = () => {
  const isSuccessMessage = successMessageTemplate.cloneNode(true);
  bodyElement.append(isSuccessMessage);
  actionsMessage();
  hideModal();
};

const showErrorMessage = () => {
  const isErrorMessage = errorMessageTemplate.cloneNode(true);
  bodyElement.append(isErrorMessage);
  actionsMessage();
};

const hideMessage = () => {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
  bodyElement.style.overflow = 'auto';
};

export {showSuccessMessage, showErrorMessage};
