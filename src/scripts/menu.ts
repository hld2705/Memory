import { themes, ThemeKey, SizeKey } from "../database/db";
import { displayNames } from "../database/db";

export type State = {
    theme: ThemeKey | null;
    player: string | null;
    size: SizeKey | null;
};

export const state: State = {
    theme: null,
    player: null,
    size: null
}

export type Card = {
    id: string;
    pairId: number;
    frontside: string;
    backside: string;
    isFlipped: boolean;
    isMatched: boolean;
};

/**
 * Sets the "default" values upon page load
 */
document.addEventListener("DOMContentLoaded", () => {
    state.theme = "code_vibes_theme";
    state.player = "player_blue";
    state.size = "16_cards";
    const defaultTheme = document.querySelector('[data-type="theme"][data-value="code_vibes_theme"]') as HTMLElement;
    const defaultPlayer = document.querySelector('[data-type="player"][data-value="player_blue"]') as HTMLElement;
    const defaultSize = document.querySelector('[data-type="size"][data-value="16_cards"]') as HTMLElement;
    updateUI("theme", defaultTheme);
    updateUI("player", defaultPlayer);
    updateUI("size", defaultSize);
    renderPreviewImage();

});

/**
 * Collects all of the values of the user chosen properties stores them and forwards it to other needed UI functions
 */
document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest(".textsection__selector") as HTMLElement | null;
    if (!target) return;
    const type = target.dataset.type as "theme" | "player" | "size" | undefined;
    const value = target.dataset.value;
    if (!type || !value) return;
    if (type === "theme" || type === "player" || type === "size") {
        if (type === "theme") { state.theme = value as ThemeKey; } else { state[type] = value }
        updateUI(type, target);
        renderPreviewImage();
        const bar = document.getElementById("game_play_bar");
        if (bar?.classList.contains("expanded")) { gameBar(); }
    }
});


/**
 *  UI function that adds the centerdott classlist and the line upon selecting something from the menu
 */
function updateUI(type: string, selectedElement: HTMLElement) {
    document.querySelectorAll(`.textsection__selector[data-type="${type}"]`)
        .forEach((element) => { element.classList.remove("active"); });
    selectedElement.classList.add("active");
}

/**
 * Puts the needed background image of the selected game theme
 */
function renderPreviewImage() {
    if (!state.theme || !state.player || !state.size) return;
    const themeData = themes[state.theme];
    document.getElementById("game_theme_image")!.innerHTML = `<img src="${themeData.menu_picture}">`;
}

/**
 * Updates the UI beneath the theme picture
 */
document.getElementById("game_play_bar")?.addEventListener("click", () => {
    const bar = document.getElementById("game_play_bar");
    if (!bar) return;
    bar.classList.add("expanded");
    document.querySelectorAll(".selectedbarline").forEach((element) => {
        element.classList.add("active");})
    gameBar();
});

/**
 * Changes the textcontent of the game bar after clicking on it
 */
function gameBar() {
    document.getElementById("choosen_game_theme")!.textContent =
        displayNames[state.theme as keyof typeof displayNames] ?? "Game theme";
    document.getElementById("choosen_game_player")!.textContent =
        displayNames[state.player as keyof typeof displayNames] ?? "Player";
    document.getElementById("choosen_game_size")!.textContent =
        displayNames[state.size as keyof typeof displayNames] ?? "Board size";
}