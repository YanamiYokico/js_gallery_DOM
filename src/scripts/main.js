'use strict';

const largeImg = document.getElementById('largeImg');

document.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  const newSrc = link.href;
  const newAlt = link.title;

  largeImg.src = newSrc;
  largeImg.alt = newAlt;
});
