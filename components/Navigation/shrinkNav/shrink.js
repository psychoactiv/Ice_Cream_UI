const head = document.querySelector(".drawer-navbar");
const h1El = document.querySelector(".drawer-heading");
window.onscroll = function () {
  let change = window.scrollY;
  if (change > 3) {
    head.classList.add("active");
    h1El.classList.add("active");
  } else {
    head.classList.remove("active");
    h1El.classList.remove("active");
  }
};
