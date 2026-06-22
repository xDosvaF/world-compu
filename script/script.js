document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".site-nav__toggle");
    const navLinks = document.querySelector(".site-nav__links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("is-open");
            const isOpen = navLinks.classList.contains("is-open");
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    }

    const btnContacto = document.querySelector("#btn-contacto");
    if (btnContacto) {
        btnContacto.addEventListener("click", () => {
            window.location.href = "contacto.html";
        });
    }
});
