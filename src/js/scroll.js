let projects = document.querySelectorAll(".project");

for (let i = 0; i < projects.length; i++) {
  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight * 0.75 >= projects[i].offsetTop) {
      projects[i].classList.add("project--reached");
    }
  });
}

const photo = document.querySelector(".presentation__photo");
const texts = document.querySelectorAll(".presentation__lines");
const pitch = document.querySelector(".spitch__text");

window.addEventListener("scroll", () => {
  let scrollValue = window.pageYOffset;
  // photo.style.transform = "rotate(" + scrollValue / 15 + "deg)";
  photo.style.transform = "rotate(" + scrollValue / 50 + "deg)";
  texts.forEach((text, index) => {
    if (index % 2 === 0) {
      text.style.transform = `translateX(${scrollValue / 10 - 100}px)`;
    } else {
      text.style.transform = `translateX(${-scrollValue / 10 - 70}px)`;
    }
  });
  pitch.style.transform = `skewX(-${scrollValue / 50}deg)`;
  // pitch.style.transform = `skewY(${scrollValue / 150}deg)`;
});
