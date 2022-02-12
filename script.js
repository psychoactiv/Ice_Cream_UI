// Sidebar submenu display code.
const sideBtn = document.querySelectorAll(".side-btn");
sideBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let iconClass = false;
    [...e.target.classList].forEach((item) => {
      if (item === "fa-caret-up") {
        iconClass = true;
      }
    });
    if (iconClass) {
      e.target.classList.toggle("flip");
      e.target.parentElement.nextElementSibling.classList.toggle("show");
      e.target.parentElement.classList.toggle("show");
    }
    for (let i = 0; i < e.target.childNodes.length; i++) {
      if (e.target.childNodes[i].classList) {
        for (let j = 0; j < e.target.childNodes[i].classList.length; j++) {
          if (e.target.childNodes[i].classList[j] === "fa-caret-up") {
            e.target.childNodes[i].classList.toggle("flip");
            const sibling = [...e.target.nextElementSibling.classList];
            console.log(e.target.nextElementSibling.classList);
            sibling.forEach((item) => {
              if (item === "collapse") {
                e.target.nextElementSibling.classList.toggle("show");
                e.target.classList.toggle("show");
              }
            });
          }
        }
      }
    }
  });
});

// Landing page
const openpage = document.querySelector(".enter-app");
const landingPage = document.querySelector(".landing-page");
openpage.addEventListener("click", () => {
  landingPage.classList.add("hide-landing-page");
});
