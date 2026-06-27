import { endGameFoodsTemplate } from "./foodsthemetemplate"

export function initFoodsProjectsTheme(){
    const gameOverlay = document.querySelector(".gameoverlay");
    if (!gameOverlay) return;
    gameOverlay.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.closest(".exitgamefoodstheme")) {
            gameOverlay.innerHTML += endGameFoodsTemplate();}
        if (target.closest(".endgamefoodsthemebuttons__yellow")) {
            document.querySelector(".endgameoverlayfoodstheme")?.remove();}
        if(target.closest(".endgamefoodsthemebuttons__white")){
            gameOverlay?.remove();
        }
    });
}