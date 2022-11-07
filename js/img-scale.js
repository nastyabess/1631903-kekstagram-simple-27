const smallerScaleButton = document.querySelector('.scale__control--smaller');
const biggerScaleButton = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  inputScale.value = `${value}%`;
  imgUploadPreview.style.transform = `scale(${value / 100})`;
};

const onsmallerScaleButtonClick = () => {
  const currentValue = parseInt(inputScale.value, 10);
  if (currentValue > MIN_SCALE) {
    const newValue = currentValue - STEP_SCALE;
    scaleImage(newValue);
  }
};

const onbiggerScaleButtonClick = () => {
  const currentValue = parseInt(inputScale.value, 10);
  if (currentValue < MAX_SCALE) {
    const newValue = currentValue + STEP_SCALE;
    inputScale.value = `${newValue}%`;
    imgUploadPreview.style.transform = `scale(${newValue / 100})`;
  }
};

smallerScaleButton.addEventListener('click', () => {
  onsmallerScaleButtonClick();
});

biggerScaleButton.addEventListener('click', () => {
  onbiggerScaleButtonClick();
});

const resetScale = () => {
  scaleImage();
};

export {resetScale};

