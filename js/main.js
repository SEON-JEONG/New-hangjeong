
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true, 
    
    //오토플레이
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });





  
  
  /*
  헤더 행정안전부 부분 스크롤 내리면 위로 반 올라가게 하기!
  
  */