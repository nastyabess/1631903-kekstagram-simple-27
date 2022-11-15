import {initializePosts} from './picture.js';
import './img-scale.js';
import './effects.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './upload-form.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';

getData((photo) => {
  initializePosts(photo);
});

setUserFormSubmit(showSuccessMessage, showErrorMessage);
