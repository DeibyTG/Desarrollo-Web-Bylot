const sections = document.querySelectorAll("section[id$='-main']");
const navLinks = document.querySelectorAll(".contenedor-enlaces-nav a");
const navBar = document.getElementById('nav-index');
const main = document.getElementById('main-index');

export function activateLinkOnScroll() {
    let currentSectionId = "";

    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop - 350) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
}

export function f_verNavBar(){
    
    const scrollY= window.scrollY;
    const principioSeccion=main.offsetTop;


        if(scrollY >= principioSeccion){
            navBar.classList.add('visible')
        }else{
            navBar.classList.remove('visible'); 
        }
};

// Activar manualmente al hacer click
export function hoverClick() {
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}


