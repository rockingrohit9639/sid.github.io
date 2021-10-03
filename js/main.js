AOS.init({
  duration: 1000,
});

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