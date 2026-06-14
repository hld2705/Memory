export type ThemeKey = keyof typeof themes;

export const themes = {
    gaming_theme: {
        menu_picture: "./public/assets/cards/gamingtheme/gamingmenu.png",
        backside: "./public/assets/cards/gamingtheme/backface/gamingbackfacecard.png",
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
    foods_theme: {
        menu_picture: "./public/assets/cards/foodstheme/foods.png",
        backside: "./public/assets/cards/foodstheme/backface/foodsbackfacecard.png",
        frontside_path: "./public/assets/cards/foodstheme/frontface/",
        frontside: [
            "foodbowlfrontface.png",
            "foodburgerfrontface.png",
            "foodcakefrontface.png",
            "foodchocolatefrontface.png",
            "foodcolorfrontface.png",
            "fooddonutfrontface.png",
            "foodfriesfrontface.png",
            "foodicecreamfrontface.png",
            "foodlavafrontface.png",
            "foodmuffinfrontface.png",
            "foodnuggetsfrontface.png",
            "foodpizzafrontface.png",
            "foodpretzelfrontface.png",
            "foodshrimpfrontface.png",
            "foodsnedwichfrontface.png",
            "foodsushifrontface.png",
            "foodtacofrontface.png",
            "fronthotdogfrontface.png"
        ]
    },
    da_projects_theme: {
        menu_picture: "./public/assets/cards/daprojectstheme/daprojects.png",
        backside: "./public/assets/cards/daprojectstheme/backface/dabackfacecard.png",
        frontside_path: "./public/assets/cards/daprojectstheme/frontface/",
        frontside: [
            "dabackendfrontface.png",
            "dabowlfrontface.png",
            "dabubblefrontface.png",
            "dachangefrontface.png",
            "dachatfrontface.png",
            "dacodexfrontface.png",
            "daeggsfrontface.png",
            "dahochfrontface.png",
            "dajoinfrontface.png",
            "dakochfrontface.png",
            "dalocofrontface.png",
            "dapokedexfrontface.png",
            "daprojectfrontface.png",
            "dasakurafrontface.png",
            "dashopingfrontface.png",
            "dasoupfrontface.png",
            "dastreaningfrontface.png",
            "daxfrontface.png"
        ]
    },
    code_vibes_theme: {
        menu_picture: "./public/assets/cards/codevibestheme/codemenu.png",
        backside: "./public/assets/cards/codevibestheme/backface/codebackfacecard.png",
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
    da_projects_theme: "DA Projects",
    foods_theme: "Foods",

    player_blue: "Blue Player",
    player_orange: "Orange Player",

    "16_cards": "Board-16 Cards",
    "24_cards": "Board-24 Cards",
    "36_cards": "Board-36 Cards"
};