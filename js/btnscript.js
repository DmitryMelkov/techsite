const btnTechClick = document.querySelector('.main__btn-tech');
const content = document.querySelector('.content');
const btnBack = document.querySelector('.main__btn-back');
const btnLibrClick = document.querySelector('.main__btn-libr');
const btnContainer = document.querySelector('.main__btn-container');
const content_intro = document.querySelector('.content__intro');
const content_libr = document.querySelector('.content__libr');
const library = document.querySelector('.library');

btnTechClick.addEventListener('click', () => {
  content.classList.add('active');
  btnTechClick.classList.add('active');
  btnLibrClick.classList.add('active');
  btnContainer.classList.add('active');
  content_intro.classList.remove('active');
});

btnLibrClick.addEventListener('click', () => {
  btnTechClick.classList.add('active');
  btnLibrClick.classList.add('active');
  btnContainer.classList.add('active');
  content_libr.classList.add('active');
  library.classList.add('active');
})

btnBack.addEventListener('click', () => {
  btnTechClick.classList.remove('active');
  content.classList.remove('active');
  btnLibrClick.classList.remove('active');
  btnContainer.classList.remove('active');
  content_intro.classList.add('active');
  content_libr.classList.remove('active');
})