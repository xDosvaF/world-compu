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

    const formContacto = document.querySelector("#form-contacto");
    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.querySelector("#nombre").value.trim();
            const email = document.querySelector("#email").value.trim();
            const telefono = document.querySelector("#telefono").value.trim();
            const mensaje = document.querySelector("#mensaje").value.trim();

            let texto = `Hola, soy ${nombre}.`;
            if (telefono) texto += ` Mi teléfono es ${telefono}.`;
            if (email) texto += ` Mi correo es ${email}.`;
            texto += ` ${mensaje}`;

            const numeroWhatsapp = "50251921221";
            const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;

            window.open(url, "_blank");
        });
    }
});
