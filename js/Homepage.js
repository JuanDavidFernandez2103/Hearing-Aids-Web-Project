const wheelWrapper = document.getElementById("dot-selector");
const wheel = document.getElementById("wheel");
const dots = wheel.querySelectorAll(".color-dot");
const productImge = document.getElementById("product-image");

const image = [
    "/assets/img/Barracuda-Red.png",
    "/assets/img/Barracuda-White.png",
    "/assets/img/Barracuda-Black.png"
];

let currentIndex = 0;
let isScrolling = false;
let isHovered = false; 

function centerDot(index) {
  const wrapperHeight = wheelWrapper.clientHeight;
  const dot = dots[index];
  const dotOffsetTop = dot.offsetTop + dot.clientHeight / 2;
  const offset = dotOffsetTop - wrapperHeight / 2;
  wheel.style.transform = `translateY(-${offset}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

  productImge.src = image[index];
}


function scrollUp() {
  if (currentIndex > 0) {
    currentIndex--;
    centerDot(currentIndex);
  }
}

function scrollDown() {
  if (currentIndex < dots.length - 1) {
    currentIndex++;
    centerDot(currentIndex);
  }
}

wheelWrapper.addEventListener("mouseenter", () => {
  isHovered = true;
});

wheelWrapper.addEventListener("mouseleave", () => {
  isHovered = false;
});
document.addEventListener("wheel", (e) => {
  if (!isHovered) return; 

  e.preventDefault();
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0) scrollDown();
  else scrollUp();

  setTimeout(() => isScrolling = false, 400);
}, { passive: false });

centerDot(currentIndex);
