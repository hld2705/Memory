export type ThemeKey = keyof typeof themes;
export type SizeKey = keyof typeof boardSizes;


export const themes = {
    gaming_theme: {
        menu_picture: "./assets/cards/gamingtheme/gamingmenu.png",
        backside: "./public/assets/cards/gamingtheme/backface/gamingbackfacecard.png",
        player_blue: "./assets/cards/gamingtheme/winner_pockal_gaming_theme.svg",
        player_orange: "./assets/cards/gamingtheme/winner_pockal_gaming_theme.svg",
        draw_scale: "./assets/cards/gamingtheme/scale_icon_gaming_theme.svg",
        frontside_path: "./public/assets/cards/gamingtheme/frontface/",
        frontside: [
            "gamingacecardfrontface.png",
            "gamingbananafrontface.png",
            "gamingcirclefrontface.png",
            "gamingcoinfrontface.png",
            "gamingcontrollerfrontface.png",
            "gamingdicefrontface.png",
            "gaminglevelupfrontface.png",
            "gamingminecraftfrontface.png",
            "gamingnintendofrontface.png",
            "gamingpacman2frontface.png",
            "gamingpacmanfrontface.png",
            "gamingplayercircle.png",
            "gamingplayersquare.png",
            "gamingplayertriangle.png",
            "gamingplayfrontface.png",
            "gamingpuzzlefrontface.png",
            "gamingshroomfrontface.png",
            "gamingsnakefrontface.png"
        ]
    },
    code_vibes_theme: {
        menu_picture: "./assets/cards/codevibestheme/codemenu.png",
        backside: "./public/assets/cards/codevibestheme/backface/codebackfacecard.png",
        player_blue: "./assets/cards/codevibestheme/player_blue_code_vibes_theme.svg",
        player_orange: "./assets/cards/codevibestheme/player_orange_code_vibes_theme.svg",
        draw_scale: "./assets/cards/codevibestheme/scale_icon_code_vibes_theme.svg",
        frontside_path: "./public/assets/cards/codevibestheme/frontface/",
        frontside: [
            "codeangularfrontface.png",
            "codebootstrapfrontface.png",
            "codecssfrontface.png",
            "codedjangofrontface.png",
            "codegitfrontface.png",
            "codehtmlfrontface.png",
            "codehubfrontface.png",
            "codejsfrontface.png",
            "codenodefrontface.png",
            "codephytonfrontface.png",
            "codereactfrontface.png",
            "codescssfrontface.png",
            "codesqlfrontface.png",
            "codesupabasefrontface.png",
            "codeterminalfrontface.png",
            "codetsfrontface.png",
            "codevsfrontface.png",
            "codevuefrontface.png"
        ]
    }
};

export const displayNames = {
    code_vibes_theme: "Code Vibes",
    gaming_theme: "Game Theme",

    player_blue: "Blue Player",
    player_orange: "Orange Player",

    "16_cards": "Board-16 Cards",
    "24_cards": "Board-24 Cards",
    "36_cards": "Board-36 Cards"
};

export const boardSizes = {
    "16_cards": 8,
    "24_cards": 12,
    "36_cards": 18
};
