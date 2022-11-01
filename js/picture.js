import {createPosts} from './data.js';

const similarPostsTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const initializePosts = () => {
  const similarPosts = createPosts();

  const similarListFragment = document.createDocumentFragment();

  similarPosts.forEach(({url, comments, likes}) => {
    const postElement = similarPostsTemplate.cloneNode(true);
    postElement.querySelector('.picture__img').src = url;
    postElement.querySelector('.picture__comments').textContent = comments;
    postElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.append(postElement);
  });

  document.querySelector('.pictures').append(similarListFragment);
};

export {initializePosts};
