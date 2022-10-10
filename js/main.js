const ID_PHOTO = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];
const URL_PHOTO = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];
const DESCRIPTION_PHOTO = [
  'Лучшее фото',
  'Самое лучшее фото',
  'Просто фото',
  'Не самое удачное фото',
  'Самое неудачное фото',
  'Удачное фото',
  'Самое удачное фото',
  'Лучшее фото',
  'Самое лучшее фото',
  'Просто фото',
  'Не самое удачное фото',
  'Самое неудачное фото',
  'Удачное фото',
  'Самое удачное фото',
  'Лучшее фото',
  'Самое лучшее фото',
  'Просто фото',
  'Не самое удачное фото',
  'Самое неудачное фото',
  'Удачное фото',
  'Самое удачное фото',
  'Самое неудачное фото',
  'Удачное фото',
  'Самое удачное фото',
  'Просто фото',
];

const SIMILAR_PHOTO_COUNT = 25;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// const getRandomArrayElement = (elements) => {
//   const index = getRandomPositiveInteger(1, 25);
//   return (elements.includes(index)) ? getRandomArrayElement() : elements.push(index), (index < elements.length - 1);
// };

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPOST = () => ({
  id: getRandomArrayElement(ID_PHOTO),
  url: `photos/${ getRandomArrayElement(URL_PHOTO) }.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const similarPOST = Array.from({length: SIMILAR_PHOTO_COUNT}, createPOST);

similarPOST();
