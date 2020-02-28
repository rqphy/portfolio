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
