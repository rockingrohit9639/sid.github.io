AOS.init({
    duration: 1000,
});

// Navigation menu 
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () =>
{
    menu.classList.toggle("open");
})

closeIcon.addEventListener("click", () =>
{
    menu.classList.remove("open");
})