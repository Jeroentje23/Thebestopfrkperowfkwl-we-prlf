const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const unlockBtn = document.getElementById("unlockBtn");

unlockBtn.addEventListener("click", () => {
  screen1.classList.remove("active");
  screen2.classList.add("active");
});