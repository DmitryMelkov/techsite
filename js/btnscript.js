const btnTechClick = document.querySelector('.header__btn-tech');
const headerContainer = document.querySelector('.header__container');
const content = document.querySelector('.content');
const btnTechback = document.querySelector('.content-back');

btnTechClick.addEventListener('click', () => {
  headerContainer.classList.add('active');
  content.classList.add('active');
});

btnTechback.addEventListener('click', () => {
  headerContainer.classList.remove('active');
  content.classList.remove('active');
});

const btnLibrClick = document.querySelector('.header__btn-libr');
const libr = document.querySelector('.library');
const btnLibrback = document.querySelector('.libr-back');

btnLibrClick.addEventListener('click', () => {
  headerContainer.classList.add('active');
  libr.classList.add('active');
});

btnLibrback.addEventListener('click', () => {
  headerContainer.classList.remove('active');
  libr.classList.remove('active');
});
