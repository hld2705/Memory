import { PlayerState } from "../../scripts/playerstate";
import {endGameCodeVibesTemplate} from "./codevibestemplate"
/**
 * Function that rerenders the playerstates(score, and position) only for this team because of needed "Blue" and "Orange" text 
 */
export function renderCodeVibesPlayerState(playerState: PlayerState) {
    const playerOneScore = document.querySelector('[data-score="player_one"]');
    const playerTwoScore = document.querySelector('[data-score="player_two"]');
    const currentPlayer = document.querySelector('[data-current-player]');

    if (playerOneScore) {
        playerOneScore.textContent = 
            `Blue ${playerState.playerOneScore}`;
    }

    if (playerTwoScore) {
        playerTwoScore.textContent = 
            `Orange ${playerState.playerTwoScore}`;
    }

    if (currentPlayer) {
        currentPlayer.textContent =
            String(playerState.currentPlayer);
    }
}

/**
 * Helper function calling all of the other "exit game" functions
 */
export function initCodeVibesTheme() {
    const gameOverlay = document.querySelector(".gameoverlay");
    if (!gameOverlay) return;
    gameOverlay.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.closest(".exitgamecodevibes")) {
            gameOverlay.innerHTML += endGameCodeVibesTemplate();}
        if (target.closest(".endgamecodevibesbuttons__green")) {
            document.querySelector(".endgameoverlaycodevibes")?.remove();}
        if(target.closest(".endgamecodevibesbuttons__white")){
            gameOverlay?.remove();
        }
    });
}