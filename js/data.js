import {getRandomArrayElement, getRandomPositiveInteger} from './utils.js';
import {DESCRIPTION_PHOTO, SIMILAR_PHOTO_COUNT} from './mock.js';

const createPost = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const createPosts = () => Array.from({length: SIMILAR_PHOTO_COUNT}, (_, index) => createPost(index));

export {createPosts};
