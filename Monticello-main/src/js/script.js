const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.nav-opener');

burgerBtn.addEventListener('click', ()=> {
  header.classList.toggle('active');
});
  