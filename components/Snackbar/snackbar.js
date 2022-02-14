//simple snackbar.
const snack = document.querySelector(".snack");
const display = document.querySelector(".display-btn");

//snackbar with a button.
const snackRes = document.querySelector(".snack-res");
const snackBarWithBtn = document.querySelector(".display-snack-btn");

//leading snackbar.
const leading = document.querySelector(".leading");
const displayLeading = document.querySelector(".leading-snackbar");

//Stacked snackbar.
const stackedSnackbar = document.querySelector(".stacked-snackbar");
const stacked = document.querySelector(".stacked");

//Baseline snackbar.
const baseline = document.querySelector(".baseline");
const baselineSnackbar = document.querySelector(".baseline-snackbar");

//Undo buttons.
const snackBtn = document.querySelector(".all-Snackbar");

//Adding event listners to the button
display.addEventListener("click", () => {
  decide(snack);
});
snackBarWithBtn.addEventListener("click", () => {
  decide(snackRes);
});
leading.addEventListener("click", () => {
  decide(displayLeading);
});
stacked.addEventListener("click", () => {
  decide(stackedSnackbar);
});
baseline.addEventListener("click", () => {
  decide(baselineSnackbar);
});

//Displaying snackbar function
let checkpoint = 1;
const decide = function (name, btnOnSnack) {
  if (checkpoint === 1) {
    checkpoint = 0;
    name.classList.replace("hidden-snackbar", "show-snackbar");
    setTimeout(
      () => name.classList.replace("show-snackbar", "hidden-snackbar"),
      4000
    );
    setTimeout(() => (checkpoint = 1), 4000);
  } else {
    setTimeout(() => decide(name, btnOnSnack), 4000);
  }
};

//Transitioning colors.
snackBtn.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("undo-snackbar") ||
    e.target.classList.contains("cancel-snackbar")
  ) {
    e.target.classList.add("change-previous-color");
    console.log(snackBtn);
    setTimeout(() => {
      exitNow(e);
    }, 300);
    setTimeout(() => colorChange(e), 250);
  }
});

//changing color of the button/icon
function colorChange(e) {
  e.target.classList.replace("change-previous-color", "new-color-snack-btn");
  setTimeout(() => e.target.classList.remove("new-color-snack-btn"), 500);
}

//Stop displaying the snackbar as soon as button/icon on the snackbar is clicked.
function exitNow(e) {
  let allclass = e.target.parentElement.classList;
  allclass.replace("show-snackbar", "hidden-snackbar");
  checkpoint = 1;
}
