const doc = document.documentElement;


const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
    const currentTheme = doc.getAttribute("data-theme");
    const newTheme = (currentTheme === "dark") ? "light" : "dark";
    doc.setAttribute("data-theme", newTheme);
});
