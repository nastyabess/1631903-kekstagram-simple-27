const scaleButton = document.querySelector('.img-upload__scale');
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

scaleButton.addEventListener('click', (evt) => {
  const currentValue = parseInt(inputScale.value, 10);
  const onSmallerScaleButtonClick = evt.target.classList.contains('scale__control--smaller');
  const onBiggerScaleButtonClick = evt.target.classList.contains('scale__control--bigger');
  if (onSmallerScaleButtonClick && currentValue > MIN_SCALE) {
    const newValue = currentValue - STEP_SCALE;
    scaleImage(newValue);
  }
  if (onBiggerScaleButtonClick && currentValue < MAX_SCALE) {
    const newValue = currentValue + STEP_SCALE;
    scaleImage(newValue);
  }
});

const resetScale = () => {
  scaleImage();
};

export {resetScale};

