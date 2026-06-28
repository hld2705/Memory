export function endGameCodeVibesTemplate(){
    return `<div class="endgameoverlaycodevibes">
                <div class="endgameoverlaycodevibes__window">
                    <h1>Are you sure you want to quit the game?</h1>
                        <div class="endgamecodevibesbuttons">
                            <div class="endgamecodevibesbuttons__green">
                                <p>Back to game</p>
                            </div>
                        <div class="endgamecodevibesbuttons__white">
                            <p>Exit game</p>
                        </div>
                    </div>
            </div>`
}

export function winLoseDrawCodeVibesTemplate(){
    return `<div class="winoverlaycodevibes">
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
