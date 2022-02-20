// Dismiss.
const dismissButton = document.querySelector(".close-text-overlay");
const dismissCard = document.querySelector(".dismiss-card");
dismissButton.addEventListener("click", () => {
  dismissCard.style.display = "none";
  setTimeout(() => (dismissCard.style.display = "flex"), 4000);
});
