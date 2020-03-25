const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  let scrollValue = window.pageYOffset;
  projects.forEach(project => {
    project.style.transform = `skewX(${-(scrollValue - project.offsetTop) /
      50}deg)`;
  });
});
