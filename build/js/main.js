'use strict';
(function () {
  var openButton = document.querySelector('.main-nav__toggle--open');
  var mainNav = document.querySelector('.main-nav');
  var closeButton = document.querySelector('.main-nav__toggle--close');

  mainNav.classList.remove('main-nav--show');


  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (mainNav.classList.contains('main-nav--show')) {
      mainNav.classList.remove('main-nav--show');
      removeEventListener('click', evt);
    }
  });

  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    mainNav.classList.add('main-nav--show');
    removeEventListener('click', evt);
  });

})();
