import { endGameFoodsTemplate } from "./foodsthemetemplate"
import { PlayerState } from "../../scripts/playerstate";

export function renderFoodsPlayerState(playerState: PlayerState) {
    const playerOneScore = document.querySelector('[data-score="player_one"]');
    const playerTwoScore = document.querySelector('[data-score="player_two"]');

    if (playerOneScore) {
        playerOneScore.textContent = String(playerState.playerOneScore);
    }

    if (playerTwoScore) {
        playerTwoScore.textContent = String(playerState.playerTwoScore);
    }

    currentPlayerImage(playerState);
}

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

export function currentPlayerImage(playerState: PlayerState) {
    const currentPlayerImage = document.querySelector('[data-current-player-image]') as HTMLImageElement | null;
    if (!currentPlayerImage) return;

    if (playerState.currentPlayer === 1) {
        currentPlayerImage.src = "../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg";
    } else {
        currentPlayerImage.src = "../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg";
    }
}