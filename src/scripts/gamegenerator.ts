import { state, type State, Card } from "../scripts/menu";
import { themes, boardSizes } from "../database/db";

document.getElementById("startbutton")?.addEventListener("click", () => {

})

/**
 * Checks which settings did the user choose, and forwards it to the needed template
 */
/*
document.getElementById("startbutton")?.addEventListener("click", () => {
    let codeVibesTheme = document.getElementById("code_vibes_theme");
    let gamingTheme = document.getElementById("gaming_theme");
    let daProjectsTheme = document.getElementById("da_projects_theme");
    let foodsTheme = document.getElementById("foods_theme");
    if (state.theme === "code_vibes_theme") {
        codeVibesTheme = codeVibesThemeTemplate()
    } else if (state.theme === "gaming_theme") {
        gamingTheme = gamingThemeTemplate()
    } else if (state.theme === "da_projects_theme") {
        daProjectsTheme = daProjectsThemeTemplate()
    } else if (state.theme === "foods_theme") {
        foodsTheme = foodsThemeTemplate()
    }
});*/

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