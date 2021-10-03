AOS.init({
    duration: 1000,
});

// Navigation menu 
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.getElementById("menu");

const links = document.querySelectorAll(".mobile-link");

menuIcon.addEventListener("click", () =>
{
    menu.classList.toggle("open");
})

closeIcon.addEventListener("click", () =>
{
    menu.classList.remove("open");
})

links.forEach(link =>
{
    link.addEventListener("click", () =>
    {
        menu.classList.toggle("open");
    });
})

const toggleTheme = document.querySelector("#toggleTheme");
const html = document.querySelector("html");
toggleTheme.addEventListener("change", (e) =>
{
    if (e.target.checked)
    {
        html.setAttribute("theme", "dark");
    }
    else
    {
        html.setAttribute("theme", "light");
    }
});
