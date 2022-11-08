// import {chosenEffect, DEFAULT_EFFECT} from './effects.js';
// const sliderElement = document.querySelector('.effect-level__slider');
// const valueElement = document.querySelector('.effect-level__value');

// const isDefault = () => chosenEffect === DEFAULT_EFFECT;

// noUiSlider.create(sliderElement, {
//   range: {
//     min: 0,
//     max: 100,
//   },
//   start: chosenEffect.max,
//   connect: 'lower',
//   format: {
//     to: function (value) {
//       if (Number.isInteger(value)) {
//         return value.toFixed(0);
//       }
//       return value.toFixed(1);
//     },
//     from: function (value) {
//       return parseFloat(value);
//     },
//   },
// });

// const updateSlider = () => {
//   sliderElement.classList.remove('hidden');
//   sliderElement.noUiSlider.updateOptions({
//     range: {
//       min: chosenEffect.min,
//       max: chosenEffect.max,
//     },
//     step: chosenEffect.step,
//     start: chosenEffect.max,
//   });

//   if (isDefault) {
//     sliderElement.classList.add('hidden');
//   }
// };

// sliderElement.noUiSlider.on('update', () => {
//   valueElement.value = sliderElement.noUiSlider.get();
// });

// export {updateSlider};
