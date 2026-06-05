export function welcomingScreenTemplate(): string{
    return `<div class="welcome_screen__black">
                <div class="welcome_screen__text">
                    <h2 class="welcome_screen__h2">It's play time</h2>
                    <h1 class="welcome_screen__h1">Ready to play?</h1>
                </div>
                <div class="controler_button_positioning">
                    <div class="controler_button_positioning__controler">
                        <img class="controler_img" src="./public/assets/stadia_controller.svg">
                    </div>
                    <div class="play_button">
                        <div class="play_button__square">
                        <img class="controler_img_small" src="./public/assets/stadia_controller_small.svg">
                        <p>Play</p>
                        <img class="arrow_img_small" src="./public/assets/Arrow 1.svg">
                        </div>
                    </div>
                </div>
            </div>`
 }