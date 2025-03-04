document.addEventListener("DOMContentLoaded", function () {
    const idiomaBtn = document.getElementById("language-toggle");
    const themeToggle = document.getElementById("theme-toggle");

    let idiomaActual = localStorage.getItem("idioma") || "es";
    aplicarIdioma(idiomaActual);


    let temaActual = localStorage.getItem("tema") || "oscuro";
    aplicarTema(temaActual);

    if (idiomaBtn && themeToggle) {
        idiomaBtn.addEventListener("click", function () {
            idiomaActual = idiomaActual === "es" ? "en" : "es";
            localStorage.setItem("idioma", idiomaActual);
            aplicarIdioma(idiomaActual);
        });

        themeToggle.addEventListener("change", function () {
            temaActual = themeToggle.checked ? "claro" : "oscuro";
            localStorage.setItem("tema", temaActual);
            aplicarTema(temaActual);
        });
    }

    function aplicarIdioma(idioma) {
        document.documentElement.lang = idioma;

        if (idiomaBtn) {
            idiomaBtn.textContent = idioma === "es" ? "ENGLISH" : "ESPAÑOL;
        }

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.getAttribute("data-i18n");
            element.textContent = idioma === "es" ? i18n_es[key] : i18n_en[key];
        });
    }
    function aplicarTema(tema) {
        const footer = document.querySelector("footer");
        const destinoTipo = document.querySelectorAll(".destino-tipo");
        const destinoH2 = document.querySelector("#destino-h2");
        const ultimoDestino = document.querySelector("#ultimo-destino");
    
        if (tema === "oscuro") {
            document.body.style.backgroundColor = "#0f0f1f";
            document.body.style.color = "#ffffff";
    
            if (themeToggle) themeToggle.checked = false;
    
            document.querySelectorAll("*:not(footer *)").forEach(function (element) {
                element.style.color = "#ffffff";
            });
    
            destinoTipo.forEach(function (element) {
                element.style.color = "#ffffff";
            });
    
            if (destinoH2) {
                destinoH2.style.color = "#ffffff";
            }
    
            if (ultimoDestino) {
                ultimoDestino.style.color = "#ffffff";
            }
    
            if (footer) {
                footer.style.backgroundColor = "#f8f8f8";
                footer.style.color = "#000000";
            }
        } else {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
    
            if (themeToggle) themeToggle.checked = true;
    
            document.querySelectorAll("*:not(footer *)").forEach(function (element) {
                element.style.color = "#000000";
            });
    
            destinoTipo.forEach(function (element) {
                element.style.color = "#ffffff";
            });
    
            if (destinoH2) {
                destinoH2.style.color = "#ffffff";
            }
    
            if (ultimoDestino) {
                ultimoDestino.style.color = "#ffffff";
            }
    
            if (footer) {
                footer.style.backgroundColor = "#f8f8f8";
                footer.style.color = "#000000";
            }
        }
    }
    
    
});

const i18n_es = {
    "header-title": "Bienvenido de Nuevo Andres!",
    "destino-h2": "Tu último destino",
    "ultimo-destino": "Playa",
    "proxima-inspeccion-h2": "¿Cual sera tu proxima aventura?",
    "posibles-destinos-h2": "Posibles destinos",
    "modal-title": "¿Qué país quiere visitar?",
    "label-country": "Seleccione un país:",
    "btn-enviar": "Enviar",
    "destino-montana": "Montaña",
    "destino-playa": "Playa",
    "destino-nieve": "Nieve"
};

const i18n_en = {
    "header-title": "Welcome Back Andres!",
    "destino-h2": "Your Last Destination",
    "ultimo-destino": "Beach",
    "proxima-inspeccion-h2": "What will be your next adventure?",
    "posibles-destinos-h2": "Possible Destinations",
    "modal-title": "Which country do you want to visit?",
    "label-country": "Select a country:",
    "btn-enviar": "Send",
    "destino-montana": "Mountain",
    "destino-playa": "Beach",
    "destino-nieve": "Snow"
};