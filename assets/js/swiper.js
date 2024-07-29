// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//       el: ".swiper-pagination-bullets",
//       clickable: true,
//       renderBullet: function (index, className) {
//           return `
//           <span class="${className}"> ${index+1} </span>
//           `;
//       },
//   },
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
// });
const slidesData = [
    'assets/images/s1.png',
    'https://thumb.ac-illust.com/30/306837819e76342840641fd1d53fd2f9_t.jpeg',
    'assets/images/s1.png'
];

const slidesContainer = document.getElementById('slides');
const slideButtonsContainer = document.getElementById('slideButtons');
let currentIndex = 0;

slidesData.forEach((imageSrc, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    
    if (index === 0) {
        slide.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = imageSrc;
    slide.appendChild(img);
    slidesContainer.appendChild(slide);

    const slideButton = document.createElement('button');
    slideButton.classList.add('swiper-button');
    slideButton.textContent = index + 1;
    slideButton.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
    slideButtonsContainer.appendChild(slideButton);
});

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');

    const buttons = document.querySelectorAll('.swiper-button');
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });
    buttons[index + 1].classList.add('active-button'); // +1 to account for the prev button
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
    showSlide(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slidesData.length;
    showSlide(currentIndex);
});

// Initialize the first button as active
document.querySelectorAll('.swiper-button')[1].classList.add('active-button'); // Index 1 for the first slide button