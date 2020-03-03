//intro

setTimeout(() => {
  let intro = document.querySelector(".container");
  let content = document.querySelector(".main");
  cursor.classList.remove("cursor--visible");
  intro.classList.add("container--visible");
  content.classList.add("main--visible");
}, 4000);

//cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

let projects = document.querySelectorAll(".project");

for (let i = 0; i < projects.length; i++) {
  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight * 0.75 >= projects[i].offsetTop) {
      projects[i].classList.add("project--reached");
    }
  });
}
