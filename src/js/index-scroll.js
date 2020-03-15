const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  let scrollValue = window.pageYOffset;
  projects.forEach(project => {
    // if (window.scrollY + window.innerHeight * 0.75 >= project.offsetTop) {
    //   project.classList.add("project--reached");
    // }
    project.style.transform = `skewX(${-(scrollValue - project.offsetTop) /
      30}deg)`;
  });
});
