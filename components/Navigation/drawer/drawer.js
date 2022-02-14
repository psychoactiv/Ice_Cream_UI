const bars = document.querySelector(".side-bar-ico");
const close = document.querySelector(".fa-times");
const main = document.querySelector(".drawer-main");
const sidebar = document.querySelector(".drawer-sidebar");
const whole = document.querySelectorAll(".drawer-whole");
const userInfo = document.querySelector(".drawer-user-info");

let windowOpen = false;
bars.addEventListener("click", () => {
  sidebar.style.width = "33%";
  sidebar.style.paddingLeft = "1%";
  userInfo.style.paddingTop = "10px";
  userInfo.style.width = "30%";
  main.style.marginLeft = "33%";
  windowOpen = true;
});
close.addEventListener("click", closeWindowSideBar);

function closeWindowSideBar() {
  sidebar.style.width = "0";
  userInfo.style.width = "0";
  userInfo.style.paddingTop = "0";
  main.style.marginLeft = "0";
  sidebar.style.paddingLeft = "0";
}

whole.forEach((sub) => {
  sub.addEventListener("click", (e) => {
    if (windowOpen && e.target.className !== "fas fa-bars") {
      closeWindowSideBar();
      windowOpen = false;
    }
  });
});
