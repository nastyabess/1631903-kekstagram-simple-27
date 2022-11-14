import {showAlert} from './utils.js';

const getData = (onSuccess) => {

  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Произошла ошибка. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
