import { PlayerState } from "../../scripts/playerstate";
import {endGameCodeVibesTemplate} from "./codevibestemplate";
import {winLoseDrawCodeVibesTemplate} from "./codevibestemplate";
/**
 * Function that rerenders the playerstates(score, and position) only for this team because of needed "Blue" and "Orange" text 
 */
export function renderCodeVibesPlayerState(playerState: PlayerState) {
    const playerOneScore = document.querySelector('[data-score="player_one"]');
    const playerTwoScore = document.querySelector('[data-score="player_two"]');

    if (playerOneScore) {
        playerOneScore.textContent = 
            `Blue ${playerState.playerOneScore}`;
    }

    if (playerTwoScore) {
        playerTwoScore.textContent = 
            `Orange ${playerState.playerTwoScore}`;
    }

    currentPlayerImage(playerState);
}

/**
 * Helper function calling all of the other "exit game" functions
 */
export function initCodeVibesTheme() {
    const gameOverlay = document.getElementById("gameoverlay");
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

export function currentPlayerImage(playerState: PlayerState) {
    const currentPlayerImage = document.querySelector('[data-current-player-image]') as HTMLImageElement | null;
    if (!currentPlayerImage) return;

    if (playerState.currentPlayer === 1) {
        currentPlayerImage.src = "../assets/cards/codevibestheme/label_blue_code_vibes.svg";
    } else {
        currentPlayerImage.src = "../assets/cards/codevibestheme/label_orange_code_vibes.svg";
    }
}

export function winLoseDraw(playerState: PlayerState){
    const gameOverlay = document.querySelector(".gameoverlay");
    if (!gameOverlay) return;

    if(playerState.matchedPairs === playerState.totalPairs){
        gameOverlay.innerHTML += winLoseDrawCodeVibesTemplate();
    }
}
/*
document.addEventListener("keydown", ("8") =>{
    playerState.matchedPairs === playerState.totalPairs
})*/