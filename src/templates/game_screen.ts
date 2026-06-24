import type { Card } from "../scripts/menu";

export function cardsTemplate(cards: Card[]): string {
    return cards.map((card) => {
        return `
                <button class="card" data-id="${card.id}" data-pair="${card.pairId}">
                    <div class="card__inner">
                        <img class="card__face card__face--back" src="${card.backside}">
                        <img class="card__face card__face--front" src="${card.frontside}">
                    </div>
                </button>
        `;
    }).join("");
}

export function codeVibesThemeTemplate(cards: Card[]): string {
    return `
     <section class="gameoverlay">
    <div class="codevibestheme">
        <header class="headercodevibestheme">
            <div class="playercountercodevibes">
                <img class="playercountercodevibes__icon" src="../assets/cards/codevibestheme/label_blue_code_vibes.svg"
                <p></p>
                <img class="playercountercodevibes__icon" src="../assets/cards/codevibestheme/label_orange_code_vibes.svg"
                <p></p>
            </div>
                <div class="currentplayercodevibes">
                    <h2>Current player: <span id="current_player"></span></h2>
                </div>
                    <div class="exitgamecodevibes">
                        <img class="exitgame__icon" src="../assets/cards/codevibestheme/exit_icon.svg">
                        <p>Exit game</p>
                    </div>              
        </header>
            <div class="cardssection">
                ${cardsTemplate(cards)}
            </div>
    </div>
    </section>  
    `
}

export function gamingThemeTemplate(cards: Card[]): string {
    return `
     <section class="gameoverlay">
     <div class="gamingtheme">
        <header class="gamingthemeheader">
            <div class="playercounter">
                <img class="playercounter__icon" src="../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg">
                <p></p>
                <img class="playercounter__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
                <p></p>
            </div>
            <div class="currentplayer">
                <h2>Current player: <span id="current_player"></span></h2>
            </div>
            <div class="exitgame">
                <img class="exitgame__icon" src="../assets/cards/codevibestheme/exit_icon.svg">
                <p>Exit game</p>
            </div>
        </header>
        <div class="cardssection">
        ${cardsTemplate(cards)}
        </div>
     </div>
     </section>   
    `
}

export function daProjectsThemeTemplate(cards: Card[]): string {
    return `
     <section class="gameoverlay">
     <div class="daprojectstheme">
        <header class="headerdaprojectstheme">
            <div class="playercounterdaprojects">
                <img class="playercounterdaprojects__icon" src="../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg">
                <p></p>
                <img class="playercounterdaprojects__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
                <p></p>
            </div>
            <div class="currentplayerdaprojects">
                <h2>Current player: <span id="current_player"></span></h2>
            </div>
            <div class="exitgamedaprojects">
                <img class="exitgamedaprojects__icon" src="../assets/cards/codevibestheme/exit_icon.svg">
                <p>Exit game</p>
            </div>
        </header>
        <div class="cardssection">
        ${cardsTemplate(cards)}
        </div>
     </div>
     </section>   
    `
}

export function foodsThemeTemplate(cards: Card[]): string {
    return `
     <section class="gameoverlay">
     <div class="foodstheme">
        <header class="headerfoodstheme">
            <div class="playercounterfoodstheme">
                <img class="playercounterfoodstheme__icon" src="../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg">
                <p></p>
                <img class="playercounterfoodstheme__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
                <p></p>
            </div>
            <div class="currentplayerfoodstheme">
                <h2>Current player: <span id="current_player"></span></h2>
            </div>
            <div class="exitgamefoodstheme">
                <img class="exitgamefoodstheme__icon" src="../assets/cards/codevibestheme/exit_icon.svg">
                <p>Exit game</p>
            </div>
        </header>
        <div class="cardssection">
        ${cardsTemplate(cards)}
        </div>
     </div>
     </section>   
    `
}
