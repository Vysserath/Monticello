const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      
      1200: {
        slidesPerView:3,
      },
      1024: {
        slidesPerView:2,
      },
      769:{
        slidesPerView:2
      },
      768: {
        slidesPerView:1,
      },
      320: {
        slidesPerView:1,
      }
    }
});


const header = document.querySelector('.header');
const burgerBtn = document.querySelector('.nav-opener');

burgerBtn.addEventListener('click', ()=> {
  header.classList.toggle('active');
});
  



