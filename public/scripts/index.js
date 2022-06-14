const height = window.innerHeight;
const width = window.innerWidth;

const carouselContainer = document.querySelector(".carousel-track");
const imageWrapper = Array.from(carouselContainer.children);
const nextButton = document.querySelector(".button__next");
const prevButton = document.querySelector(".button__prev");
const imageWidth = 600;
const carouselNav = document.querySelector(".carousel-nav");
const dots = Array.from(carouselNav.children);
function setImagePosition(image, index) {
  image.style.left = imageWidth * index + "px";
}

imageWrapper.forEach((image, index) => {
  setImagePosition(image, index);
});

nextButton.addEventListener("click", (e) => {
  const currentImage = document.querySelector(".current-wrapper");
  const nextImage = currentImage.nextElementSibling;
  const prevDot = document.querySelector(".current-dot");
  const currentDot = prevDot.nextElementSibling;
  if (!nextImage) {
    for (i = 0; i < imageWrapper.length - 1; i++) {
      imageWrapper.forEach((image) => {
        slide(image, "prev");
      });
      imageWrapper[0].classList.add("current-wrapper");
    }
  } else {
    imageWrapper.forEach((image) => {
      slide(image, "next");
    });
  }
  currentImage.classList.remove("current-wrapper");
  nextImage.classList.add("current-wrapper");
});

function slide(image, dirn) {
  if (dirn == "prev") {
    sign = 1;
  } else {
    sign = -1;
  }
  let totalChange = 0;
  var transistionImage = setInterval(() => {
    const change = 10;
    totalChange += change;
    let currentPos = parseInt(image.style.left);
    let prevPos = currentPos + Math.sign(sign) * change;
    image.style.left = prevPos + "px";
    if (totalChange >= 600) {
      clearInterval(transistionImage);
    }
  }, 10);
}

prevButton.addEventListener("click", (e) => {
  const currentImage = document.querySelector(".current-wrapper");
  const nextImage = currentImage.previousElementSibling;
  if (!nextImage) {
    for (i = 0; i < 2; i++) {
      imageWrapper.forEach((image) => {
        slide(image, "next");
      });
      imageWrapper[2].classList.add("current-wrapper");
    }
  } else {
    imageWrapper.forEach((image) => {
      slide(image, "prev");
    });
  }
  currentImage.classList.remove("current-wrapper");
  nextImage.classList.add("current-wrapper");
});
