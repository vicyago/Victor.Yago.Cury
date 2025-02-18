// script.js
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".hamburguer-button");
    const hamburguerMenu = document.getElementById("hamburguer-menu");
    const toggleThemeButton = document.getElementById("toggleThemeButton");
    const toggleLanguageButton = document.getElementById(
        "toggleLanguageButton"
    );

    // Translations -  Expanded to include button text
    const translations = {
        pt: {
            home: "Início",
            about: "Sobre",
            projects: "Projetos",
            contact: "Contato",
            welcome: "Bem-vindo ao Meu Portfólio",
            "home-description":
                "Explore meus projetos e experimentos em web design.",
            "about-me": "Sobre Mim",
            "about-description":
                "Sou designer e desenvolvedor web com paixão por criar websites bonitos e funcionais.",
            "my-projects": "Meus Projetos",
            "projects-description":
                "Aqui estão alguns dos meus projetos recentes:",
            "contact-me": "Contato",
            "contact-description":
                "Para entrar em contato, por favor, envie um e-mail para:",
            "theme-toggle-light": "Modo Claro",
            "theme-toggle-dark": "Modo Escuro",
            "language-toggle-pt": "English",
        },
        en: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            welcome: "Welcome to My Portfolio",
            "home-description":
                "Explore my projects and experiments in web design.",
            "about-me": "About Me",
            "about-description":
                "I am a web designer and developer with a passion for creating beautiful and functional websites.",
            "my-projects": "My Projects",
            "projects-description": "Here are some of my recent projects:",
            "contact-me": "Contact Me",
            "contact-description":
                "If you'd like to get in touch, please reach out via email at:",
            "theme-toggle-light": "Light Mode",
            "theme-toggle-dark": "Dark Mode",
            "language-toggle-en": "Português",
        },
    };

    let currentLanguage = localStorage.getItem("language") || "pt"; // Default to Portuguese

    // Function to translate text
    function translateText() {
        const elementsToTranslate =
            document.querySelectorAll("[data-translate]");
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-translate");
            element.textContent = translations[currentLanguage][key];
        });

        // Update button text
        if (currentLanguage === "pt") {
            toggleThemeButton.textContent = document.body.classList.contains(
                "dark-mode"
            )
                ? translations.pt["theme-toggle-light"]
                : translations.pt["theme-toggle-dark"];
            toggleLanguageButton.textContent =
                translations.pt["language-toggle-pt"];
        } else {
            // Assuming 'en'
            toggleThemeButton.textContent = document.body.classList.contains(
                "dark-mode"
            )
                ? translations.en["theme-toggle-light"]
                : translations.en["theme-toggle-dark"];
            toggleLanguageButton.textContent =
                translations.en["language-toggle-en"];
        }
    }

    // Function to toggle language
    function toggleLanguage() {
        currentLanguage = currentLanguage === "pt" ? "en" : "pt";
        localStorage.setItem("language", currentLanguage);
        translateText();
    }

    // Function to toggle the theme
    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-mode") ? "dark-mode" : ""
        ); // save current theme
        translateText(); // Update button text
    }

    // Event listeners for hamburger menu
    hamburgerButton.addEventListener("click", () => {
        const expanded =
            hamburgerButton.getAttribute("aria-expanded") === "true" || false;
        hamburgerButton.setAttribute("aria-expanded", !expanded);
        hamburguerMenu.classList.toggle("active");
    });

    // Event listeners for theme and language buttons
    toggleThemeButton.addEventListener("click", toggleTheme);
    toggleLanguageButton.addEventListener("click", toggleLanguage);

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
        document.body.classList.add("dark-mode");
    }

    // Initial Translation
    translateText();
});
