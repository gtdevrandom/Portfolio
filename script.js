// Navigation dynamique
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        // Active le lien sélectionné
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Affiche la section correspondante
        const section = link.dataset.section;
        sections.forEach(sec => sec.classList.remove("active"));
        document.getElementById(section).classList.add("active");

        // Sauvegarde la section active
        localStorage.setItem("activeSection", section);
    });
});

// Thème clair / sombre avec localStorage
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

// Données dynamiques
const sitesData = [
    {
        title: "PhiloHub",
        desc: "Site web regroupant les fiches de révision de philosophie",
        img: "https://raw.githubusercontent.com/gtdevrandom/screenshot/refs/heads/main/Screenshot%202025-12-11%20at%2018-22-50%20PhiloHub%20%E2%80%93%20Fiches%20de%20R%C3%A9vision.png",
        links: [
            { label: "GitHub", url: "https://github.com/gtdevrandom/philo" },
            { label: "Site", url: "https://gtdevrandom.github.io/philo/" }
        ]
    },
    {
        title: "NeonDash",
        desc: "Jeu style Geometry Dash réaliser en NSI",
        img: "https://github.com/user-attachments/assets/ed310593-5822-4fad-aed1-f5548b047690",
        links: [
            { label: "GitHub", url: "https://github.com/gtdevrandom/Neondash" }
        ]
    },
    {
        title: "ClockWork Empire",
        desc: "Clicker basé sur le thème du temps réalisé en NSI",
        img: "https://raw.githubusercontent.com/gtdevrandom/screenshot/refs/heads/main/Screenshot%202025-12-11%20at%2018-32-19%20Clockwork%20Empire%20%E2%8C%9B.png",
        links: [
            { label: "GitHub", url: "https://github.com/gtdevrandom/clockwork-principal" },
            { label: "Site", url: "https://gtdevrandom.github.io/clockwork-principal/" }

        ]
    }
];

const langageData = [
    { title: "Lua", desc: "Langage léger, utilisé dans l'embarqué et le modding." },
    { title: "Python", desc: "Polyvalent, scripting, data, IA." },
    { title: "JavaScript", desc: "Langage du web côté client." },
    { title: "CSS", desc: "Mise en forme, styles et animations." },
    { title: "HTML", desc: "Structure des pages web." }
];

function renderGrid(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            ${item.img ? `<img src="${item.img}" style="width:100%; margin-bottom:0.5rem;" />` : ""}
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            ${item.links ? `
                <div class="links">
                    ${item.links.map(l => `<a href="${l.url}" target="_blank" class="proj-link">${l.label}</a>`).join(" ")}
                </div>` : ""
            }
        `;

        container.appendChild(card);
    });
}

// Rendu des grilles
renderGrid("sitesGrid", sitesData);
renderGrid("langageGrid", langageData);
