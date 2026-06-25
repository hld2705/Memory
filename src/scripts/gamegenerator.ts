import { state, type State, Card } from "../scripts/menu";
import { themes, boardSizes } from "../database/db";
import { codeVibesThemeTemplate } from "../templates/game_screen";
import { gamingThemeTemplate } from "../templates/game_screen";
import { daProjectsThemeTemplate } from "../templates/game_screen";
import { foodsThemeTemplate } from "../templates/game_screen";

export const playerState: PlayerState = {
    currentPlayer: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
    flippedCards: [],
    locked: false,
    matchedPairs: 0
}

export type PlayerState = {
    currentPlayer: number;
    playerOneScore: number;
    playerTwoScore: number;
    flippedCards: HTMLElement[];
    locked: boolean;
    matchedPairs: number;
}

/**
 * 
 * @param state 
 * @returns Collects everything the user has choosen, and forwards it to other functions through params
 */
function generateGameFromState(state: State, playerState: PlayerState) {
    if (!state.theme || !state.size) return;
    const themeData = themes[state.theme as keyof typeof themes];
    const numberOfPairs = boardSizes[state.size as keyof typeof boardSizes];
    const selectedFrontsides = themeData.frontside.slice(0, numberOfPairs);
    const cards = createCardsFromPairs(selectedFrontsides, themeData.frontside_path, themeData.backside);
    return shuffleCards(cards);
}

/**
 * 
 * @param state 
 * @returns Creates pairs of cards needed to win the game
 */
function calculatePairsFromState(state: State, playerState: PlayerState) {
    if (!state.theme || !state.size) return [];
    const numberOfPairs = boardSizes[state.size];
    const themeData = themes[state.theme];
    return themeData.frontside.slice(0, numberOfPairs);
}

/**
 * 
 * @param pairs 
 * @param frontside_path 
 * @param backside 
 * @returns Pairs of cards with the needed params
 */
function createCardsFromPairs(pairs: string[], frontside_path: string, backside: string) {
    return pairs.flatMap((item, index) => [
        {
            id: `${index}-a`,
            pairId: index,
            frontside: frontside_path + item,
            backside: backside,
            isFlipped: false,
            isMatched: false,
        },
        {
            id: `${index}-b`,
            pairId: index,
            frontside: frontside_path + item,
            backside: backside,
            isFlipped: false,
            isMatched: false,
        }
    ]);
}

/**
 * Shuffels the cards so that we get all of the needed pairs
 */
function shuffleCards(cards: Card[]) {
    return [...cards].sort(() => Math.random() - 0.5);
}

/**
 * Eventlistener on the startbutton, depending on what the user has chosen the template will be loaded,
 */
document.getElementById("startbutton")?.addEventListener("click", () => {
    startGame(state, playerState)
});

function startGame(state: State, playerState: PlayerState){
    const cards = generateGameFromState(state, playerState);
    if (!cards) return;
    const game = document.getElementById("game_screen");
    if (state.theme === "code_vibes_theme") {
        game!.innerHTML = codeVibesThemeTemplate(cards, playerState);
    }
    if (state.theme === "gaming_theme") {
        game!.innerHTML = gamingThemeTemplate(cards, playerState);
    }
    if (state.theme === "da_projects_theme") {
        game!.innerHTML = daProjectsThemeTemplate(cards, playerState);
    }
    if (state.theme === "foods_theme") {
        game!.innerHTML = foodsThemeTemplate(cards, playerState);
    }
}

/**
 * Function that rerenders the playerstates(score, and position)
 */
function renderPlayerState(playerState: PlayerState) {
    const playerOneScore = document.querySelector('[data-score="player_one"]');
    const playerTwoScore = document.querySelector('[data-score="player_two"]');
    const currentPlayer = document.querySelector('[data-current-player]');
    if (playerOneScore) {
        playerOneScore.textContent = String(playerState.playerOneScore);
    }
    if (playerTwoScore) {
        playerTwoScore.textContent = String(playerState.playerTwoScore);
    }
    if (currentPlayer) {
        currentPlayer.textContent = String(playerState.currentPlayer);
    }
}
/**
 * Eventlistener for flipping the cards, also forwards the checking of the state of matched pairs, and couting of the players
 */
document.addEventListener("click", (e) => {
    const card = (e.target as HTMLElement).closest(".card") as HTMLElement;
    if (!card) return;
    if (playerState.locked) return;
    card.classList.add("is-flipped");
    playerState.flippedCards.push(card);
    if (playerState.flippedCards.length === 2) {
        checkPair();
    }
});

/**
 * Function that returns if the pairs match
 */
function checkPair() {
    const [first, second] = playerState.flippedCards;
    const firstPair = first.dataset.pair;
    const secondPair = second.dataset.pair;
    playerState.locked = true;
    if (firstPair === secondPair) {
        first.classList.add("matched");
        second.classList.add("matched");
        updateScore();
        playerState.flippedCards = [];
        playerState.locked = false;
    } else {
        setTimeout(() => {
            first.classList.remove("is-flipped");
            second.classList.remove("is-flipped");
            changePlayer();
            playerState.flippedCards = [];
            playerState.locked = false;
        }, 1000)
    }
}

function changePlayer() {
    if (playerState.currentPlayer === 1) {
        playerState.currentPlayer = 2;
    } else {
        playerState.currentPlayer = 1;
    }
    renderPlayerState(playerState);
}


function updateScore() {
     if(playerState.currentPlayer === 1){
        playerState.playerOneScore += 1;
        playerState.matchedPairs +=1;
    }else{
        playerState.playerTwoScore += 1;
        playerState.matchedPairs +=1;
    }
    renderPlayerState(playerState);
}
