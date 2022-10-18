import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';
import {DESCRIPTION_PHOTO, SIMILAR_PHOTO_COUNT} from './setup.js';

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const createPosts = () => Array.from({length: SIMILAR_PHOTO_COUNT}, (_, index) => createPost(index + 1));

export {createPosts};
