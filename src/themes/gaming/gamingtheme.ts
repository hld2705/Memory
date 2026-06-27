import { PlayerState } from "../../scripts/playerstate";
import { endGameGamingThemeTemplate } from "../gaming/gamingthemetemplate";

/**
 * 
 * @param playerState Updates all of other teams headbar counters
 */
export function renderGamingPlayerState(playerState: PlayerState) {
    const playerOneScore = document.querySelector('[data-score="player_one"]');
    const playerTwoScore = document.querySelector('[data-score="player_two"]');
    const currentPlayer = document.querySelector('[data-current-player]');

    if (playerOneScore) {
        playerOneScore.textContent = 
            `${playerState.playerOneScore}`;
    }

    if (playerTwoScore) {
        playerTwoScore.textContent = 
            `${playerState.playerTwoScore}`;
    }

    if (currentPlayer) {
        currentPlayer.textContent =
            String(playerState.currentPlayer);
    }
}

/**
 * Helper function calling all of the other "exit game" functions
 */
export function initGameVibesTheme() {
    const gameOverlay = document.querySelector(".gameoverlay");
    if (!gameOverlay) return;
    gameOverlay.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.closest(".exitgamegamingtheme")) {
            gameOverlay.innerHTML += endGameGamingThemeTemplate();}
        if (target.closest(".endgamegamethemebuttons__red")) {
            document.querySelector(".endgameoverlaygamingtheme")?.remove();}
        if(target.closest(".endgamegamethemebuttons__white")){
            gameOverlay?.remove();
        }
    });
}