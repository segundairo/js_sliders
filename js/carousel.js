let val;

// constants declaration
const btnLeft = document.querySelector('.btn-left'),
   btnRight = document.querySelector('.btn-right'),
   track = document.querySelector('.slide__list'),
   navDots = document.querySelector('.slide__nav');

const slides = Array.from(track.children);
const dots = Array.from(navDots.children);

// variable declarations
let currentSlide;
let targetSlide;
let targetIndex;
let targetDot;
let currentDot;

let slideSize = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
 slide.style.left = slideSize * index + 'px'; 
}

// set size position on the track
slides.forEach(setSlidePosition);
    



// move slides on track;
const moveSlide = (current, target) => {   
   current.classList.remove('current-slide');
   target.classList.add('current-slide');
   track.style.transform = `translateX(-${target.style.left})`
}

const moveDot = (target) => {
   let navBtn = dots[target];
   currentDot.classList.remove('current-dot');
   navBtn.classList.add('current-dot');
   
   if (target === 0) {
      btnLeft.classList.add('hide');
      btnRight.classList.remove('hide');
   } else if (target === slides.length - 1) {
      btnLeft.classList.remove('hide');
      btnRight.classList.add('hide');
   } else {
      btnLeft.classList.remove ('hide');
      btnRight.classList.remove('hide');
   }
}

btnRight.addEventListener('click', () => {
   currentSlide = document.querySelector('.current-slide');
   targetSlide = currentSlide.nextElementSibling;
   targetIndex = slides.findIndex((slide) => slide === targetSlide);
   currentDot = document.querySelector('.current-dot');
   targetDot = currentDot.nextElementSibling;
   moveSlide(currentSlide, targetSlide);
   moveDot(targetIndex)
   track.style.transition = 'all .8s ease-out';
});

btnLeft.addEventListener('click', () => {
   currentSlide = document.querySelector('.current-slide');
   targetSlide = currentSlide.previousElementSibling;
   targetIndex = slides.findIndex((slide) => slide === targetSlide);
   currentDot = document.querySelector('.current-dot');
   targetDot = currentDot.previousElementSibling;
   moveSlide(currentSlide, targetSlide);
   moveDot(targetIndex);
   track.style.transition = 'all .8s ease-out';
});

navDots.addEventListener('click', (e) => {
   
   if (!e.target.classList.contains('slide__dot')) return;
   targetIndex = dots.findIndex((dot) => dot === e.target);
   currentSlide = document.querySelector('.current-slide');
   currentDot = document.querySelector('.current-dot');
   targetSlide = slides[targetIndex];
   
      
   moveSlide(currentSlide, targetSlide);
   moveDot(targetIndex);
   track.style.transition = 'all .8s ease-out';

});

window.addEventListener("resize", () => {
   slideSize = slides[0].getBoundingClientRect().width;
   slides.forEach(setSlidePosition);
    currentSlide = document.querySelector('.current-slide');
    moveSlide(currentSlide, currentSlide);
    track.style.transition = 'none';
 });