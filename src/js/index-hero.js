let titleEffect = document.querySelector(".hero__title--effect");

document.addEventListener("mousemove", e => {
  titleEffect.style.left = `calc((${e.pageX}px - 50vw) / 60)`;
  titleEffect.style.top = `calc((${e.pageY}px - 50vh) / 60)`;
});
