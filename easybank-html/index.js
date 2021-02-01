const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const closeIcon = document.querySelector(".close-nav-icon");
const mobileIcon = document.querySelector(".mobile-nav-icon");
const mobileModal = document.querySelector(".modal-bg");
let activeLink;

for (const links of navLinks) {
  links.addEventListener("click", (e) => setActiveLink(e));
}

function setActiveLink(e) {
  for (const links of navLinks) {
    links.classList.remove("active-link");
  }
  e.target.classList.add('active-link');
}
mobileIcon.addEventListener("click", () => {
  mobileModal.style.display = "block";
  mobileIcon.style.display = "none";
  closeIcon.style.display = "block";
  document.body.style.overflow = "hidden";
});
  closeIcon.addEventListener("click", () => {
  mobileModal.style.display = "none";
  mobileIcon.style.display = "block";
  closeIcon.style.display = "none";
  document.body.style.overflow = "auto";
});
