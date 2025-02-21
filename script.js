document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleThemeButton");
    const toggleLanguageButton = document.getElementById(
        "toggleLanguageButton"
    );

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
                "Eu sou um designer e desenvolvedor web com paixão por criar websites bonitos e funcionais.",
            "my-projects": "Meus Projetos",
            "projects-description":
                "Aqui estão alguns dos meus projetos recentes:",
            "contact-me": "Contato",
            "contact-description":
                "Para entrar em contato, por favor, envie um e-mail para:",
            "theme-toggle-light": "⚪ Claro",
            "theme-toggle-dark": "⚫ Escuro",
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
            "theme-toggle-light": "⚪ Light",
            "theme-toggle-dark": "⚫ Dark",
            "language-toggle-en": "🇧🇷 Português",
        },
    };

    let currentLanguage = localStorage.getItem("language") || "pt";

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

        updateToggleButtonText();
    }

    function updateToggleButtonText() {
        if (currentLanguage === "pt") {
            toggleThemeButton.textContent = document.body.classList.contains(
                "dark-mode"
            )
                ? translations.pt["theme-toggle-light"]
                : translations.pt["theme-toggle-dark"];
            toggleLanguageButton.textContent =
                translations.pt["language-toggle-pt"];
        } else {
            toggleThemeButton.textContent = document.body.classList.contains(
                "dark-mode"
            )
                ? translations.en["theme-toggle-light"]
                : translations.en["theme-toggle-dark"];
            toggleLanguageButton.textContent =
                translations.en["language-toggle-en"];
        }
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === "pt" ? "en" : "pt";
        localStorage.setItem("language", currentLanguage);
        translateText();
    }

    translateText();

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        document.body.classList.add(storedTheme);
    } else {
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
        translateText();
    }

    toggleThemeButton.addEventListener("click", toggleTheme);
    toggleLanguageButton.addEventListener("click", toggleLanguage);

    // Mouse movement effect on background overlay
    document.addEventListener("mousemove", (e) => {
        const overlay = document.querySelector(".background-overlay");

        const x = e.clientX / window.innerWidth; // Normalized X position (0 to 1)
        const y = e.clientY / window.innerHeight; // Normalized Y position (0 to 1)

        // Create a slight parallax effect
        const xOffset = (x - 0.5) * 20; // Horizontal offset
        const yOffset = (y - 0.5) * 20; // Vertical offset
        overlay.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(1.05)`; // Move and scale

        // Optionally adjust opacity based on mouse movement too (mild)
        const opacity = 0.2 + Math.abs(x - 0.5) * 0.1;
        overlay.style.opacity = opacity; // Set the new opacity
    });
});
