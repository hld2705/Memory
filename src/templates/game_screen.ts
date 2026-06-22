import type { Card } from "../scripts/menu";

export function cardsTemplate(cards: Card[]): string {
    return cards.map((card) => {
        return `
        <section id="field">
                <button class="card" data-id="${card.id}" data-pair="${card.pairId}">
                    <img src="${card.backside}">
                    <img src="${card.frontside}">
                </button>
        </section>
        `;}).join("");
}

export function codeVibesThemeTemplate(cards: Card[]): string{
    return`
     <section class="gameoverlay">
     <div class="codevibestheme">
        <header>
        </header>
     </div>
     </section>   
    `
}

export function gamingThemeTemplate(cards: Card[]): string{
    return`
    <section class="gameoverlay">
    <div>
        <header>   
        </header>
    </div>
    </section>
    `
}

export function daProjectsThemeTemplate(cards: Card[]): string{
    return`
    <section class="gameoverlay">
    <div>
        <header> 
        </header>
    </div>
    </section>
    `
}

export function foodsThemeTemplate(cards: Card[]): string{
    return`
    <section class="gameoverlay">
    <div>
        <header>  
        </header>
    </div>
    </section>
    `
}
