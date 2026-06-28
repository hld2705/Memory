export function endGameGamingThemeTemplate() {
    return `<div class="endgameoverlaygamingtheme">
                <div class="endgameoverlaygamingtheme__window">
                    <h1>Are you sure you want to quit the game?</h1>
                        <div class="endgamegamethemebuttons">
                            <div class="endgamegamethemebuttons__red">
                                <p>Back to game</p>
                            </div>
                        <div class="endgamegamethemebuttons__white">
                            <p>Exit game</p>
                        </div>
                    </div>
            </div>`
}

export function winGameThemeTemplate(){
    return `<div class="wingametheme">
                <img src="../assets/cards/codevibestheme/Confetti.svg">
                    <div class="winoverlaycodevibes__title">
                    <h3 data-player-draw-text>The winner is</h3>
                    <h2 data-player-won-text>BLUE PLAYER</h2>
                    <img data-player-won-image src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
                        <div class="winnerbacktogamebutton">
                            <p>Back to start</p>
                        </div>
                    </div>
            </div>`
}