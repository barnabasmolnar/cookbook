const menuToggle = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#close-menu");
const navDrawer = document.querySelector("#nav-drawer");
const filterToggle = document.querySelector("#filter-toggle");
const filters = document.querySelector("#filter-container");

menuToggle.addEventListener("click", () => {
    navDrawer.classList.toggle("translateX-320px");
});

menuClose.addEventListener("click", () => {
    navDrawer.classList.add("translateX-320px");
});

filterToggle.addEventListener("click", () => {
    filters.classList.toggle("hidden");
});