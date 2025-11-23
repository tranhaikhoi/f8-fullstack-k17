const track = document.querySelector(".track");
const slide = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const active = document.querySelector(".active");

// SLIDE HIỆN TẠI
let currentSlide = 0;

const transformSlide = () => {
  if (currentSlide === slide.length - 1) {
    currentSlide = 0;
    let width = slide[0].offsetWidth;
    track.style.transform = `translateX(0px)`;

    //CHƯA XỬ LÝ ĐƯỢC NAVIGATION
    // active.classList.remove("active");
    // document
    //   .querySelector(".circle-item" +currentSlide)
    //   .classList.add("active");
  } else {
    currentSlide++;
    let width = slide[0].offsetWidth;
    track.style.transform = `translateX(${width * -1 * currentSlide}px)`;
    // active.classList.remove("active");
    // document
    //   .querySelector(".circle-item" + currentSlide)
    //   .classList.add("active");
  }
};

// ẤN NEXT
btnNext.addEventListener("click", () => {
  transformSlide();
});

//ẤN PREV
btnPrev.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = slide.length - 1;
    let width = slide[0].offsetWidth;
    track.style.transform = `translateX(${width * -1 * currentSlide}px)`;
  } else {
    currentSlide--;
    let width = slide[0].offsetWidth;
    track.style.transform = `translateX(${width * -1 * currentSlide}px)`;
  }
});

//SLIDE TỰ ĐỘNG CHUYỂN
setInterval(transformSlide, 4000);
