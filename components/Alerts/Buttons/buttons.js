// Show sticky Button on click (Button component).
const showStickyButton = document.querySelector(".floating-action-btn");
const stickyDisplayBtn = document.querySelector(".sticky-btn-display");
showStickyButton.addEventListener("click", (e) => {
  const classNumbers = [...stickyDisplayBtn.classList];
  if (!classNumbers.includes("show")) {
    stickyDisplayBtn.classList.add("show");
    showStickyButton.classList.add("btn-pressed");
  }
});

stickyDisplayBtn.addEventListener("click", () => {
  stickyDisplayBtn.classList.remove("show");
  showStickyButton.classList.remove("btn-pressed");
});
