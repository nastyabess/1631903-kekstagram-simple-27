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

const checkStringLength = (string, length) => string.length <= length;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const similarPost = Array.from({length: SIMILAR_PHOTO_COUNT}, (_, index) => createPost(index + 1));

checkStringLength(1, 140);
