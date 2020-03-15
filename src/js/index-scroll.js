let projects = document.querySelectorAll(".project");

for (let i = 0; i < projects.length; i++) {
  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight * 0.75 >= projects[i].offsetTop) {
      projects[i].classList.add("project--reached");
    }
  });
}
