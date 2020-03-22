const photo = document.querySelector(".presentation__photo");
const texts = document.querySelectorAll(".presentation__lines");
const pitch = document.querySelector(".spitch__text");

window.addEventListener("scroll", () => {
  let scrollValue = window.pageYOffset;
  photo.style.transform = "rotate(-" + scrollValue / 80 + "deg)";
  texts.forEach((text, index) => {
    if (index % 2 === 0) {
      text.style.transform = `translateX(${scrollValue / 10 - 100}px)`;
    } else {
      text.style.transform = `translateX(${-scrollValue / 10 - 70}px)`;
    }
  });
  pitch.style.transform = `skewX(-${scrollValue / 80}deg)`;
});
