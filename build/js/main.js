'use strict';
(function () {
  var openButton = document.querySelector('.main-nav__toggle--open');
  var mainNav = document.querySelector('.main-nav');
  var closeButton = document.querySelector('.main-nav__toggle--close');
  var header = document.querySelector('.page-header');

  if (header) {
    header.classList.remove('page-header--nojs');
    mainNav.classList.remove('main-nav--show');

    var closeButtonClickHandler = function (evt) {
      if (mainNav.classList.contains('main-nav--show')) {
        evt.preventDefault();
        mainNav.classList.remove('main-nav--show');
      }
      closeButton.removeEventListener('click', closeButtonClickHandler);
    };
    closeButton.addEventListener('click', closeButtonClickHandler);

    var openButtonClickHandler = function (evt) {
      if (!mainNav.classList.contains('main-nav--show')) {
        evt.preventDefault();
        mainNav.classList.add('main-nav--show');
      }
      openButton.removeEventListener('click', openButtonClickHandler);
    };
    openButton.addEventListener('click', openButtonClickHandler);
  }

})();
