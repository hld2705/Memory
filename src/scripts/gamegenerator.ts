import { state, type State, Card } from "../scripts/menu";
import { themes, boardSizes } from "../database/db";
import { codeVibesThemeTemplate } from "../templates/game_screen";
import { gamingThemeTemplate } from "../templates/game_screen";
import { daProjectsThemeTemplate } from "../templates/game_screen";
import { foodsThemeTemplate } from "../templates/game_screen";

function generateGameFromState(state: State) {
    if (!state.theme || !state.size) return;

    const themeData = themes[state.theme as keyof typeof themes];
    const numberOfPairs = boardSizes[state.size as keyof typeof boardSizes];

    const selectedFrontsides = themeData.frontside.slice(0, numberOfPairs);

    const cards = createCardsFromPairs(selectedFrontsides, themeData.frontside_path, themeData.backside);

    return shuffleCards(cards);
}

function calculatePairsFromState(state: State) {
    if (!state.theme || !state.size) return [];

    const numberOfPairs = boardSizes[state.size];
    const themeData = themes[state.theme];

    return themeData.frontside.slice(0, numberOfPairs);
}

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

function shuffleCards(cards: Card[]) {
    return [...cards].sort(() => Math.random() - 0.5);
}

document.getElementById("startbutton")?.addEventListener("click", () => {
    const cards = generateGameFromState(state);
    if (!cards) return;
    const game = document.getElementById("game_screen");
    if (state.theme === "code_vibes_theme") {
        game!.innerHTML += codeVibesThemeTemplate(cards);}
    if (state.theme === "gaming_theme") {
        game!.innerHTML += gamingThemeTemplate(cards);}
    if(state.theme === "da_projects_theme"){
        game!.innerHTML += daProjectsThemeTemplate(cards);}
    if(state.theme === "foods_theme"){
        game!.innerHTML += foodsThemeTemplate(cards);}
});