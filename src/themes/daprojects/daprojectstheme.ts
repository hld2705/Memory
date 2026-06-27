import { PlayerState } from "../../scripts/playerstate";
import {endGameDaProjectsThemeTemplate} from "./daprojectsttemplate"

export function renderDaProjectsPlayerState(playerState: PlayerState) {
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

export function currentPlayerImage(playerState: PlayerState) {
    const currentPlayerImage = document.querySelector('[data-current-player-image]') as HTMLImageElement | null;
    if (!currentPlayerImage) return;

    if (playerState.currentPlayer === 1) {
        currentPlayerImage.src = "../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg";
    } else {
        currentPlayerImage.src = "../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg";
    }
}