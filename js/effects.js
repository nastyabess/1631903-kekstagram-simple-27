const uploadForm = document.querySelector('.img-upload__form');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },

  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const onFormChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

  imgUploadPreview.classList.add(`effects__preview--${chosenEffect}`);
};

uploadForm.addEventListener('change', onFormChange);

export {chosenEffect, DEFAULT_EFFECT};


