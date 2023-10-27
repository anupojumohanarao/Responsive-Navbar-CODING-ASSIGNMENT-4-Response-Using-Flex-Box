let hamburgerEl = document.getElementById("hamburger");
let closeEl = document.getElementById("close");
let navLinks = document.getElementById("navLinks");

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("hide");
  navLinks.classList.toggle("navLinks");
  closeEl.classList.toggle("unHide");
});
closeEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("hide");
  closeEl.classList.toggle("unHide");
  navLinks.classList.toggle("navLinks");
});
