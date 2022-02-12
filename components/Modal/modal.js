const closeModal = document.querySelectorAll(".btn-battery");
const openModal = document.querySelector(".open-modal");
const modal = document.querySelector(".battery-main");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.forEach((react) => {
  react.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
