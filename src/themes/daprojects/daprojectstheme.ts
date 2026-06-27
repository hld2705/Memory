import {endGameDaProjectsThemeTemplate} from "./daprojectsttemplate"

export function initDaProjectsTheme() {
    const gameOverlay = document.querySelector(".gameoverlay");
    if (!gameOverlay) return;
    gameOverlay.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.closest(".exitgamedaprojects")) {
            gameOverlay.innerHTML += endGameDaProjectsThemeTemplate();}
        if (target.closest(".endgamedaprojectsbuttons__blue")) {
            document.querySelector(".endgamedaprojects")?.remove();}
        if(target.closest(".endgamedaprojectsbuttons__red")){
            gameOverlay?.remove();
        }
    });
}