import './style.scss';
import { welcomingScreenTemplate } from "./templates/welcome_screen";


init()


function init() {
    const fieldRef = document.getElementById("field");
    if (fieldRef) {
        fieldRef.addEventListener("click", e => {
            const card = (e.target as HTMLElement).closest(".card") as HTMLButtonElement
            if (card) {
                card.classList.toggle("is-flipped")
            }
        })
    }
};

window.addEventListener("load", welcomingScreen);
const welcome = document.getElementById("welcoming_screen");
function welcomingScreen() {
    if (welcome) {
        welcome.innerHTML = welcomingScreenTemplate();
        document.getElementById("play_button")?.addEventListener("click", closeWelcomingScreen);
    }
}

function closeWelcomingScreen() {
    const welcome = document.getElementById("welcoming_screen");
    if (welcome) {
        welcome.style.transition = "transform 0.5s ease-in-out";
        welcome.style.transform = "translateX(100vw)";
        setTimeout(() => {
            welcome.style.display = "none";
        }, 500);
    }
}