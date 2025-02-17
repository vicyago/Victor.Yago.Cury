document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleThemeButton");
    const toggleLanguageButton = document.getElementById(
        "toggleLanguageButton"
    );

    // Translation Dictionary
    const translations = {
        pt: {
            home: "Início",
            about: "Sobre",
            projects: "Projetos",
            contact: "Contato",
            welcome: "Bem-vindo ao Meu Portfólio",
            "home-description":
                "Explore meus projetos e experimentos em design web.",
            "about-me": "Sobre Mim",
            "about-description":
                "Sou designer e desenvolvedor web com paixão por criar websites bonitos e funcionais.",
            "my-projects": "Meus Projetos",
            "projects-description":
                "Aqui estão alguns dos meus projetos recentes:",
            "contact-me": "Contato",
            "contact-description":
                "Para entrar em contato, por favor, envie um e-mail para:",
            "theme-toggle-light": "Mudar para o Modo Claro",
            "theme-toggle-dark": "Mudar para o Modo Escuro",
            "language-toggle-pt": "🇺🇸 English",
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
            "theme-toggle-light": "Switch to Light Mode",
            "theme-toggle-dark": "Switch to Dark Mode",
            "language-toggle-en": "🇧🇷 Português",
        },
    };

    let currentLanguage = localStorage.getItem("language") || "pt"; // Default language to Portuguese

    // Function to translate the text
    function translateText() {
        const elementsToTranslate =
            document.querySelectorAll("[data-translate]");
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-translate");
            if (
                translations[currentLanguage] &&
                translations[currentLanguage][key]
            ) {
                element.textContent = translations[currentLanguage][key];
            }
        });

        // Update theme toggle button text
        if (currentLanguage === "pt") {
            if (document.body.classList.contains("dark-mode")) {
                toggleThemeButton.textContent =
                    translations.pt["theme-toggle-light"];
            } else {
                toggleThemeButton.textContent =
                    translations.pt["theme-toggle-dark"];
            }
            toggleLanguageButton.textContent =
                translations.pt["language-toggle-pt"];
        } else {
            // when currentLanguage is 'en'
            if (document.body.classList.contains("dark-mode")) {
                toggleThemeButton.textContent =
                    translations.en["theme-toggle-light"];
            } else {
                toggleThemeButton.textContent =
                    translations.en["theme-toggle-dark"];
            }
            toggleLanguageButton.textContent =
                translations.en["language-toggle-en"];
        }
    }

    // Function to toggle the language
    function toggleLanguage() {
        currentLanguage = currentLanguage === "pt" ? "en" : "pt"; // Toggle between Portuguese and English
        localStorage.setItem("language", currentLanguage); // Save language preference
        translateText();
    }

    // Initial translation on page load
    translateText();

    // Theme toggle functionality
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        document.body.classList.add(storedTheme);
    } else if (
        !document.body.classList.contains("dark-mode") &&
        !document.body.classList.contains("light-mode")
    ) {
        document.body.classList.add("dark-mode");
    }

    function toggleTheme() {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
        } else {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        }
        translateText(); // Update button text after toggling
    }

    // Event Listeners
    toggleThemeButton.addEventListener("click", toggleTheme);
    toggleLanguageButton.addEventListener("click", toggleLanguage);

    // Initial button text setup
    translateText();
});
