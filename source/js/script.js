'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });
var openButton = document.querySelector('.main-nav__toggle--open');
var mainNav = document.querySelector('.main-main');
var closeButton = document.querySelector('.main-nav__toggle--close');

mainNav.classList.remove('main-nav__menu');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  mainNav.classList.remove('main-nav');
});

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  mainNav.classList.remove('main-nav__menu');
  mainNav.classList.add('main-nav');
});
