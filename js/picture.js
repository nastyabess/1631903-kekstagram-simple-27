import {createPosts} from './data.js';

const similarPostsTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPosts = createPosts();

const similarListFragment = document.createDocumentFragment();

similarPosts.forEach(({url, comments, likes}) => {
  const postElement = similarPostsTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').scr = url;
  postElement.querySelector('.picture__comments').textContent = comments;
  postElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(postElement);
});

similarPostsTemplate.appendChild(similarListFragment);

