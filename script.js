const hamburgerIcon = document.querySelector(".hamburgerIcon");
const menulist = document.querySelector(".menu-list-items > ul");
const menuListItems = document.querySelectorAll(".menu-list-items li");

hamburgerIcon.addEventListener("click", () => {
  menulist.classList.toggle("active");
});

menuListItems.forEach((el) => {
  el.addEventListener("click", () => {
    menulist.classList.toggle("active");
  });
});
