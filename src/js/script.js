setTimeout(() => {
  let intro = document.querySelector(".container");
  let content = document.querySelector(".main");
  let cursor = document.querySelector(".cursor");
  cursor.classList.remove("cursor--visible");
  intro.classList.add("container--visible");
  content.classList.add("main--visible");
}, 5000);
