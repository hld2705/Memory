type State = {
    theme: string | null;
    player: string | null;
    size: string | null;
};

const state: State = {
    theme: null,
    player: null,
    size: null
}

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
});

document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest(".textsection__selector") as HTMLElement | null;
    if (!target) return;
    const type = target.dataset.type;
    const value = target.dataset.value;
    if (!type || !value) return;
    if (type === "theme" || type === "player" || type === "size") {
        state[type] = value;
        updateUI(type, target)
    }
});

function updateUI(type: string,selectedElement: HTMLElement) {
    document.querySelectorAll(`.textsection__selector[data-type="${type}"]`)
        .forEach((element) => {element.classList.remove("active");});
    selectedElement.classList.add("active");
}

function playBar(type: string){


}