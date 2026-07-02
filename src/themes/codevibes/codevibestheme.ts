import {playerState, PlayerState, WinnerData } from "../../scripts/playerstate";
import {endGameCodeVibesTemplate, winLoseDrawCodeVibesTemplate, gameOverCodeVibesTemplate} from "./codevibestemplate";

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

/**
 * Helper function for switching the currentplayer tags
 */
export function currentPlayerImage(playerState: PlayerState) {
    const currentPlayerImage = document.querySelector('[data-current-player-image]') as HTMLImageElement | null;
    if (!currentPlayerImage) return;

    if (playerState.currentPlayer === 1) {
        currentPlayerImage.src = "../assets/cards/codevibestheme/label_blue_code_vibes.svg";
    } else {
        currentPlayerImage.src = "../assets/cards/codevibestheme/label_orange_code_vibes.svg";
    }
}

/**
 * Helper function for deciding the winner
 */
function getWinner(playerState: PlayerState): WinnerData {
    if(playerState.playerOneScore > playerState.playerTwoScore){
        return {
            image: "../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg",
            text: "BLUE PLAYER",
            color: "#2BB1FF"};}
    if(playerState.playerOneScore < playerState.playerTwoScore){
        return {
            image: "../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg",
            text: "ORANGE PLAYER",
            color: "#F58E39"};}
    return {
        image: "../assets/cards/codevibestheme/scale_icon_code_vibes_theme.svg",
        textDraw: "It's a",
        text: "DRAW",
        color: "#4DD5BC"};
}

/**
 * Callout-render function for rendering the winner and the needed template
 */
export function winLoseDraw(playerState: PlayerState){
    const gameOverlay = document.querySelector(".gameoverlay");
    if(!gameOverlay) return;
    gameOverlay.innerHTML += winLoseDrawCodeVibesTemplate();
    const winner = getWinner(playerState);
    (document.querySelector("[data-player-won-image]") as HTMLImageElement).src = winner.image;
    (document.querySelector("[data-player-draw-text]") as HTMLElement).textContent = winner.textDraw ?? "The winner is";
    (document.querySelector("[data-player-won-text]") as HTMLElement).textContent = winner.text;
    (document.querySelector("[data-player-won-text]") as HTMLElement).style.color = winner.color;
}

export function gameOverCodeVibes(playerState: PlayerState) {
    const gameOverlay = document.querySelector(".gameoverlay");
    if (!gameOverlay) return;
    gameOverlay.innerHTML += gameOverCodeVibesTemplate();
    const gameOver = document.querySelector(".gameovercodevibes") as HTMLElement;
    gameOver.classList.add("slide-up");
    setTimeout(() => {
        gameOver.classList.remove("slide-up");
        gameOver.classList.add("slide-down");
        gameOver.addEventListener("animationend", () => {
            gameOver.remove();
            winLoseDraw(playerState);
        }, { once: true });
    }, 2000);
}
/*
document.addEventListener("keydown", (e) => {
    if(e.key === "8"){
        playerState.playerOneScore = 5;
        playerState.playerTwoScore = 2;
        gameOverCodeVibes(playerState);
    }
    else if(e.key === "9"){
        playerState.playerOneScore = 2;
        playerState.playerTwoScore = 5;
        gameOverCodeVibes(playerState);
    }
    else if(e.key === "7"){
        playerState.playerOneScore = 3;
        playerState.playerTwoScore = 3;
        gameOverCodeVibes(playerState);
    }
});*/

/**
 * Function that returns to main menu after winning
 */
document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.closest(".winnerbacktogamebutton")) {
        document.querySelector(".gameoverlay")?.remove();
    }
});