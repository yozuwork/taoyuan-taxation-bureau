var swiper = new Swiper(".mySwiper", {
  pagination: {
      el: ".swiper-pagination-bullets",
      clickable: true,
      renderBullet: function (index, className) {
          return `
          <span class="${className}"> ${index+1} </span>
          `;
      },
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});