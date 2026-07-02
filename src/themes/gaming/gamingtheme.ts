import { playerState, PlayerState, WinnerData } from "../../scripts/playerstate";
import { endGameGamingThemeTemplate, winGameThemeTemplate, gameOverGamingThemeTemplate } from "../gaming/gamingthemetemplate";

/**
 * 
 * @param playerState Updates all of other teams headbar counters
 */
export function renderGamingPlayerState(playerState: PlayerState) {
    const playerOneScore = document.querySelector('[data-score="player_one"]');
    const playerTwoScore = document.querySelector('[data-score="player_two"]');

    if (playerOneScore) {
        playerOneScore.textContent = 
            `${playerState.playerOneScore}`;
    }

    if (playerTwoScore) {
        playerTwoScore.textContent = 
            `${playerState.playerTwoScore}`;
    }

    currentPlayerImage(playerState)
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

export function currentPlayerImage(playerState: PlayerState) {
    const currentPlayerImage = document.querySelector('[data-current-player-image]') as HTMLImageElement | null;
    if (!currentPlayerImage) return;

    if (playerState.currentPlayer === 1) {
        currentPlayerImage.src = "../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg";
    } else {
        currentPlayerImage.src = "../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg";
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
    gameOverlay.innerHTML += winGameThemeTemplate();
    const winner = getWinner(playerState);
    (document.querySelector("[data-player-won-image]") as HTMLImageElement).src = winner.image;
    (document.querySelector("[data-player-draw-text]") as HTMLElement).textContent = winner.textDraw ?? "The winner is";
    (document.querySelector("[data-player-won-text]") as HTMLElement).textContent = winner.text;
    (document.querySelector("[data-player-won-text]") as HTMLElement).style.color = winner.color;
}


document.addEventListener("keydown", (e) => {

    if(e.key === "8"){
        playerState.playerOneScore = 5;
        playerState.playerTwoScore = 2;
        gameOverGamingTheme(playerState);
    }
    else if(e.key === "9"){
        playerState.playerOneScore = 2;
        playerState.playerTwoScore = 5;
        gameOverGamingTheme(playerState);
    }
    else if(e.key === "7"){
        playerState.playerOneScore = 3;
        playerState.playerTwoScore = 3;
        gameOverGamingTheme(playerState);
    }
});

/**
 * Function that returns to main menu after winning
 */
document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.closest(".winnerbacktogamebutton")) {
        document.querySelector(".gameoverlay")?.remove();
    }
});

export function gameOverGamingTheme(playerState: { currentPlayer: number; playerOneScore: number; playerTwoScore: number; flippedCards: HTMLElement[]; locked: boolean; matchedPairs: number; totalPairs: number; }){
    const gameOverlay = document.querySelector(".gameoverlay");
        if (!gameOverlay) return;
        gameOverlay.innerHTML += gameOverGamingThemeTemplate();
        const gameOver = document.querySelector(".gameovergamingtemplate") as HTMLElement;
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