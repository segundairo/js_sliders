// select dom elements
const track = document.querySelector(".slide__list");
const slides = Array.from(track.children);
const btnRight = document.querySelector(".slide__button-right");
const btnLeft = document.querySelector(".slide__button-left");
const nav = document.querySelector(".slide__nav");
const navBtns = Array.from(nav.children);

// reloads page after window resizing is completed
var resizeId;

// window.addEventListener("resize", () => {
//   clearTimeout(resizeId);
//   resizeId = setTimeout(() => {
//     slides.forEach(setSlideSize);
//   }, 500);
// });

// get slide width
var slideSize = slides[0].getBoundingClientRect().width;

const setSlideSize = (slide, index) => {
  slide.style.left = slideSize * index + "px";
  console.log(slide.style.left);
};
// set slide position
slides.forEach(setSlideSize);

window.addEventListener("resize", () => {
  slideSize = slides[0].getBoundingClientRect().width;
  slides.forEach(setSlideSize);
   currentSlide = document.querySelector('.current-slide');
   moveSlide(currentSlide, currentSlide);
   track.style.transition = 'none';
});

const moveSlide = (current, target) => {
  track.style.transform = `translateX(-${target.style.left})`;
  current.classList.remove("current-slide");
  target.classList.add("current-slide");
};

const moveDot = (current, target) => {
  current.classList.remove("current-dot");
   target.classList.add("current-dot");
   track.style.transition = 'all .6s ease-in';
};

const displayArrows = (targetIndex) => {
  if (targetIndex === 0) {
    btnLeft.classList.add("hide");
    btnRight.classList.remove("hide");
  } else if (targetIndex === slides.length - 1) {
    btnLeft.classList.remove("hide");
    btnRight.classList.add("hide");
  } else {
    btnLeft.classList.remove("hide");
    btnRight.classList.remove("hide");
  }
};

// move slide to the right
btnRight.addEventListener("click", (e) => {
  const currentSlide = document.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = document.querySelector(".current-dot");
  const targetDot = currentDot.nextElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === nextSlide);
  moveSlide(currentSlide, nextSlide);
  moveDot(currentDot, targetDot);
   displayArrows(targetIndex);
   track.style.transition = 'all .6s ease-in';
});

btnLeft.addEventListener("click", (e) => {
  const currentSlide = document.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = document.querySelector(".current-dot");
  const targetIndex = slides.findIndex((slide) => slide === prevSlide);
  const targetDot = currentDot.previousElementSibling;
  moveSlide(currentSlide, prevSlide);
  moveDot(currentDot, targetDot);
   displayArrows(targetIndex);
   track.style.transition = 'all .6s ease-in';
});

nav.addEventListener("click", (e) => {
  if (!e.target.classList.contains("slide__indicator")) return;
  const targetDot = e.target.closest("button");
  currentSlide = track.querySelector(".current-slide");
  currentDot = nav.querySelector(".current-dot");
  targetIndex = navBtns.findIndex((dot) => dot === targetDot);
  targetSlide = slides[targetIndex];

  moveSlide(currentSlide, targetSlide);
  moveDot(currentDot, targetDot);
   displayArrows(targetIndex);
   track.style.transition = 'all .6s ease-in';
});
