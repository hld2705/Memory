import { playerState } from "../../scripts/playerstate";

export function endGameCodeVibesTemplate() {
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

export function gameOverCodeVibesTemplate() {
    return `<div class="gameovercodevibes">
                <h1>Game over</h1>
                <p>Final score</p>
            <div class="gameovercodevibes__result">
            <div class="playercountercodevibes">
                <img class="playercountercodevibes__icon" src="../assets/cards/codevibestheme/label_blue_code_vibes.svg">
                <p data-score="player_one" class="playercountercodevibes__blue">Blue ${playerState.playerOneScore}</p>
                <img class="playercountercodevibes__icon" src="../assets/cards/codevibestheme/label_orange_code_vibes.svg">
                <p data-score="player_two" class="playercountercodevibes__orange">Orange ${playerState.playerTwoScore}</p>
            </div>
            </div>
    </div>`
}

export function winLoseDrawCodeVibesTemplate() {
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
