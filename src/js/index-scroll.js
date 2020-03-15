let projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  projects.forEach(project => {
    if (window.scrollY + window.innerHeight * 0.75 >= project.offsetTop) {
      project.classList.add("project--reached");
    }
  });
});
