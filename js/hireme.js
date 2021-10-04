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

const toggleTheme1 = document.querySelector("#toggleTheme1");
toggleTheme1.addEventListener("change", (e) =>
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

//contact 
const URL = "https://sidpaul-ee691-default-rtdb.firebaseio.com/contacts.json";
const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", e =>
{
    e.preventDefault();

    const fName = document.querySelector("#fName");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    const data = JSON.stringify({
        fullName: fName.value,
        email: email.value,
        message: message.value
    });

    fName.value = "";
    email.value = "";
    message.value = "";

    postData(data);
})

const postData = async (data) =>
{
    try
    {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });

        alert("Thank you for contacting us.");
    }
    catch (err)
    {
        console.log(err)
    }
}
