//#region \0rolldown/runtime.js
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
//#endregion
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/style.scss
var init_style = __esmMin((() => {}));
//#endregion
//#region src/templates/welcome_screen.ts
function welcomingScreenTemplate() {
	return `<div class="welcome_screen__black">
                <div class="welcome_screen__text">
                    <h2 class="welcome_screen__h2">It's play time</h2>
                    <h1 class="welcome_screen__h1">Ready to play?</h1>
                </div>
                <div class="controler_button_positioning">
                    <div class="controler_button_positioning__controler">
                        <img class="controler_img" src="./assets/stadia_controller.svg">
                    </div>
                    <div class="play_button" id="play_button">
                        <div class="play_button__square">
                        <img class="controler_img_small" src="./assets/stadia_controller_small.svg">
                        <p>Play</p>
                        <img class="arrow_img_small" src="./assets/Arrow 1.svg">
                        </div>
                    </div>
                </div>
            </div>`;
}
var init_welcome_screen = __esmMin((() => {}));
//#endregion
//#region src/main.ts
var require_main = /* @__PURE__ */ __commonJSMin((() => {
	init_style();
	init_welcome_screen();
	init();
	function init() {
		const fieldRef = document.getElementById("field");
		if (fieldRef) fieldRef.addEventListener("click", (e) => {
			const card = e.target.closest(".card");
			if (card) card.classList.toggle("is-flipped");
		});
	}
	window.addEventListener("load", welcomingScreen);
	var welcome = document.getElementById("welcoming_screen");
	function welcomingScreen() {
		if (welcome) {
			welcome.innerHTML = welcomingScreenTemplate();
			document.getElementById("play_button")?.addEventListener("click", closeWelcomingScreen);
		}
	}
	function closeWelcomingScreen() {
		const welcome = document.getElementById("welcoming_screen");
		if (welcome) {
			welcome.style.transition = "transform 0.5s ease-in-out";
			welcome.style.transform = "translateX(100vw)";
			setTimeout(() => {
				welcome.style.display = "none";
			}, 500);
		}
	}
}));
//#endregion
//#region src/database/db.ts
var themes, displayNames, boardSizes;
var init_db = __esmMin((() => {
	themes = {
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
		foods_theme: {
			menu_picture: "./assets/cards/foodstheme/foods.png",
			backside: "./public/assets/cards/foodstheme/backface/foodsbackfacecard.png",
			player_blue: "./assets/cards/foodstheme/player_blue_foods_theme.svg",
			player_orange: "./assets/cards/foodstheme/player_orange_foods_theme.svg",
			draw_scale: "./assets/cards/foodstheme/scale_icon_foods_theme.svg",
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
			menu_picture: "./assets/cards/daprojectstheme/daprojects.png",
			backside: "./public/assets/cards/daprojectstheme/backface/dabackfacecard.png",
			player_blue: "./assets/cards/daprojectstheme/player_blue_da_projects_theme.svg",
			player_orange: "./assets/cards/daprojectstheme/player_orange_da_projects_theme.svg",
			draw_scale: "./assets/cards/daprojectstheme/scale_icon_da_projects_theme.svg",
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
	displayNames = {
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
	boardSizes = {
		"16_cards": 8,
		"24_cards": 12,
		"36_cards": 18
	};
}));
//#endregion
//#region src/scripts/menu.ts
/**
*  UI function that adds the centerdott classlist and the line upon selecting something from the menu
*/
function updateUI(type, selectedElement) {
	document.querySelectorAll(`.textsection__selector[data-type="${type}"]`).forEach((element) => {
		element.classList.remove("active");
	});
	selectedElement.classList.add("active");
}
/**
* Puts the needed background image of the selected game theme
*/
function renderPreviewImage() {
	if (!state.theme || !state.player || !state.size) return;
	const themeData = themes[state.theme];
	document.getElementById("game_theme_image").innerHTML = `<img src="${themeData.menu_picture}">`;
}
/**
* Changes the textcontent of the game bar after clicking on it
*/
function gameBar() {
	document.getElementById("choosen_game_theme").textContent = displayNames[state.theme] ?? "Game theme";
	document.getElementById("choosen_game_player").textContent = displayNames[state.player] ?? "Player";
	document.getElementById("choosen_game_size").textContent = displayNames[state.size] ?? "Board size";
}
var state;
var init_menu = __esmMin((() => {
	init_db();
	state = {
		theme: null,
		player: null,
		size: null
	};
	/**
	* Sets the "default" values upon page load
	*/
	document.addEventListener("DOMContentLoaded", () => {
		state.theme = "code_vibes_theme";
		state.player = "player_blue";
		state.size = "16_cards";
		const defaultTheme = document.querySelector("[data-type=\"theme\"][data-value=\"code_vibes_theme\"]");
		const defaultPlayer = document.querySelector("[data-type=\"player\"][data-value=\"player_blue\"]");
		const defaultSize = document.querySelector("[data-type=\"size\"][data-value=\"16_cards\"]");
		updateUI("theme", defaultTheme);
		updateUI("player", defaultPlayer);
		updateUI("size", defaultSize);
		renderPreviewImage();
	});
	/**
	* Collects all of the values of the user chosen properties stores them and forwards it to other needed UI functions
	*/
	document.addEventListener("click", (e) => {
		const target = e.target.closest(".textsection__selector");
		if (!target) return;
		const type = target.dataset.type;
		const value = target.dataset.value;
		if (!type || !value) return;
		if (type === "theme" || type === "player" || type === "size") {
			if (type === "theme") state.theme = value;
			if (type === "player") state.player = value;
			if (type === "size") state.size = value;
			updateUI(type, target);
			renderPreviewImage();
			if (document.getElementById("game_play_bar")?.classList.contains("expanded")) gameBar();
		}
	});
	/**
	* Updates the UI beneath the theme picture
	*/
	document.getElementById("game_play_bar")?.addEventListener("click", () => {
		const bar = document.getElementById("game_play_bar");
		if (!bar) return;
		bar.classList.add("expanded");
		document.querySelectorAll(".selectedbarline").forEach((element) => {
			element.classList.add("active");
		});
		gameBar();
	});
}));
//#endregion
//#region src/templates/game_screen.ts
function cardsTemplate(cards) {
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
function codeVibesThemeTemplate(cards, playerState) {
	return `
     <section class="gameoverlay">
    <div class="codevibestheme">
        <header class="headercodevibestheme">
            <div class="playercountercodevibes">
                <img class="playercountercodevibes__icon" src="../assets/cards/codevibestheme/label_blue_code_vibes.svg">
                <p data-score="player_one" class="playercountercodevibes__blue">Blue ${playerState.playerOneScore}</p>
                <img class="playercountercodevibes__icon" src="../assets/cards/codevibestheme/label_orange_code_vibes.svg">
                <p data-score="player_two" class="playercountercodevibes__orange">Orange ${playerState.playerTwoScore}</p>
            </div>
                <div class="currentplayercodevibes">
                    <h2>Current player: </h2>
                    <img data-current-player-image src="../assets/cards/codevibestheme/label_blue_code_vibes.svg">
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
    `;
}
function gamingThemeTemplate(cards, playerState) {
	return `
     <section class="gameoverlay">
     <div class="gamingtheme">
        <header class="gamingthemeheader">
            <div class="playercounter">
                <img class="playercounter__icon" src="../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg">
                <p data-score="player_one" class="playercounter__orange">${playerState.playerOneScore}</p>
                <img class="playercounter__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
                <p data-score="player_two" class="playercounter__blue">${playerState.playerTwoScore}</p>
            </div>
            <div class="currentplayer">
                <h2>Current player: </h2>
                <img data-current-player-image class="currentplayer__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
            </div>
            <div class="exitgamegamingtheme">
                <img class="exitgame__icon" src="../assets/cards/codevibestheme/exit_icon.svg">
                <p>Exit game</p>
            </div>
        </header>
        <div class="cardssection">
        ${cardsTemplate(cards)}
        </div>
     </div>
     </section>   
    `;
}
function daProjectsThemeTemplate(cards, playerState) {
	return `
     <section class="gameoverlay">
     <div class="daprojectstheme">
        <header class="headerdaprojectstheme">
            <div class="playercounterdaprojects">
                <img class="playercounterdaprojects__icon" src="../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg">
                <p data-score="player_one" class="playercounterdaprojects__blue">${playerState.playerOneScore}</p>
                <img class="playercounterdaprojects__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
                <p data-score="player_two" class="playercounterdaprojects__orange">${playerState.playerTwoScore}</p>
            </div>
            <div class="currentplayerdaprojects">
                <h2>Current player: </h2>
                <img data-current-player-image class="currentplayerdaprojects__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
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
    `;
}
function foodsThemeTemplate(cards, playerState) {
	return `
     <section class="gameoverlay">
     <div class="foodstheme">
        <header class="headerfoodstheme">
            <div class="playercounterfoodstheme">
                <img class="playercounterfoodstheme__icon" src="../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg">
                <p data-score="player_one" class="playercounterfoodstheme__blue">${playerState.playerOneScore}</p>
                <img class="playercounterfoodstheme__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
                <p data-score="player_two" class="playercounterfoodstheme__orange">${playerState.playerTwoScore}</p>
            </div>
            <div class="currentplayerfoodstheme">
                <h2>Current player: </h2>
                <img data-current-player-image class="currentplayerdaprojects__icon" src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
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
    `;
}
var init_game_screen = __esmMin((() => {}));
//#endregion
//#region src/scripts/playerstate.ts
var playerState;
var init_playerstate = __esmMin((() => {
	playerState = {
		currentPlayer: 1,
		playerOneScore: 0,
		playerTwoScore: 0,
		flippedCards: [],
		locked: false,
		matchedPairs: 0,
		totalPairs: 0
	};
}));
//#endregion
//#region src/themes/codevibes/codevibestemplate.ts
function endGameCodeVibesTemplate() {
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
            </div>`;
}
function winLoseDrawCodeVibesTemplate() {
	return `<div class="winoverlaycodevibes">
                <img src="../assets/cards/codevibestheme/Confetti.svg">
                    <div class="winoverlaycodevibes__title">
                    <h3>The winner is</h3>
                    <h2 data-player-won-text>BLUE PLAYER</h2>
                    <img data-player-won-image src="../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg">
                    </div>
            </div>`;
}
var init_codevibestemplate = __esmMin((() => {}));
//#endregion
//#region src/themes/codevibes/codevibestheme.ts
/**
* Function that rerenders the playerstates(score, and position) only for this team because of needed "Blue" and "Orange" text 
*/
function renderCodeVibesPlayerState(playerState) {
	const playerOneScore = document.querySelector("[data-score=\"player_one\"]");
	const playerTwoScore = document.querySelector("[data-score=\"player_two\"]");
	if (playerOneScore) playerOneScore.textContent = `Blue ${playerState.playerOneScore}`;
	if (playerTwoScore) playerTwoScore.textContent = `Orange ${playerState.playerTwoScore}`;
	currentPlayerImage$3(playerState);
}
/**
* Helper function calling all of the other "exit game" functions
*/
function initCodeVibesTheme() {
	const gameOverlay = document.getElementById("gameoverlay");
	if (!gameOverlay) return;
	gameOverlay.addEventListener("click", (e) => {
		const target = e.target;
		if (target.closest(".exitgamecodevibes")) gameOverlay.innerHTML += endGameCodeVibesTemplate();
		if (target.closest(".endgamecodevibesbuttons__green")) document.querySelector(".endgameoverlaycodevibes")?.remove();
		if (target.closest(".endgamecodevibesbuttons__white")) gameOverlay?.remove();
	});
}
function currentPlayerImage$3(playerState) {
	const currentPlayerImage = document.querySelector("[data-current-player-image]");
	if (!currentPlayerImage) return;
	if (playerState.currentPlayer === 1) currentPlayerImage.src = "../assets/cards/codevibestheme/label_blue_code_vibes.svg";
	else currentPlayerImage.src = "../assets/cards/codevibestheme/label_orange_code_vibes.svg";
}
function getWinResult(playerState) {
	if (playerState.playerOneScore > playerState.playerTwoScore) return WIN_RESULTS.blue;
	if (playerState.playerTwoScore > playerState.playerOneScore) return WIN_RESULTS.orange;
	return WIN_RESULTS.draw;
}
function renderWinResult(playerState) {
	const result = getWinResult(playerState);
	const playerWonImage = document.querySelector("[data-player-won-image]");
	const playerWonText = document.querySelector("[data-player-won-text]");
	if (!playerWonImage || !playerWonText) return;
	playerWonImage.src = result.image;
	playerWonText.textContent = result.text;
	playerWonText.className = result.className;
}
function winLoseDraw(playerState) {
	const gameOverlay = document.querySelector(".gameoverlay");
	if (!gameOverlay) return;
	gameOverlay.innerHTML += winLoseDrawCodeVibesTemplate();
	renderWinResult(playerState);
}
var WIN_RESULTS;
var init_codevibestheme = __esmMin((() => {
	init_codevibestemplate();
	WIN_RESULTS = {
		blue: {
			text: "BLUE PLAYER",
			image: "../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg",
			className: "winoverlaycodevibes__winner--blue"
		},
		orange: {
			text: "ORANGE PLAYER",
			image: "../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg",
			className: "winoverlaycodevibes__winner--orange"
		},
		draw: {
			text: "DRAW",
			image: "../assets/cards/codevibestheme/scale_icon_code_vibes_theme.svg",
			className: "winoverlaycodevibes__winner--draw"
		}
	};
	document.addEventListener("keydown", (e) => {
		if (e.key === "8") {
			const gameOverlay = document.querySelector(".gameoverlay");
			if (gameOverlay) gameOverlay.innerHTML += winLoseDrawCodeVibesTemplate();
		}
	});
}));
//#endregion
//#region src/themes/gaming/gamingthemetemplate.ts
function endGameGamingThemeTemplate() {
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
            </div>`;
}
var init_gamingthemetemplate = __esmMin((() => {}));
//#endregion
//#region src/themes/gaming/gamingtheme.ts
/**
* 
* @param playerState Updates all of other teams headbar counters
*/
function renderGamingPlayerState(playerState) {
	const playerOneScore = document.querySelector("[data-score=\"player_one\"]");
	const playerTwoScore = document.querySelector("[data-score=\"player_two\"]");
	document.querySelector("[data-current-player]");
	if (playerOneScore) playerOneScore.textContent = `${playerState.playerOneScore}`;
	if (playerTwoScore) playerTwoScore.textContent = `${playerState.playerTwoScore}`;
	currentPlayerImage$2(playerState);
}
/**
* Helper function calling all of the other "exit game" functions
*/
function initGameVibesTheme() {
	const gameOverlay = document.querySelector(".gameoverlay");
	if (!gameOverlay) return;
	gameOverlay.addEventListener("click", (e) => {
		const target = e.target;
		if (target.closest(".exitgamegamingtheme")) gameOverlay.innerHTML += endGameGamingThemeTemplate();
		if (target.closest(".endgamegamethemebuttons__red")) document.querySelector(".endgameoverlaygamingtheme")?.remove();
		if (target.closest(".endgamegamethemebuttons__white")) gameOverlay?.remove();
	});
}
function currentPlayerImage$2(playerState) {
	const currentPlayerImage = document.querySelector("[data-current-player-image]");
	if (!currentPlayerImage) return;
	if (playerState.currentPlayer === 1) currentPlayerImage.src = "../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg";
	else currentPlayerImage.src = "../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg";
}
var init_gamingtheme = __esmMin((() => {
	init_gamingthemetemplate();
}));
//#endregion
//#region src/themes/daprojects/daprojectsttemplate.ts
function endGameDaProjectsThemeTemplate() {
	return `<div class="endgamedaprojects">
                <div class="endgamedaprojects__window">
                    <h1>Are you sure you want to quit the game?</h1>
                        <div class="endgamedaprojectsbuttons">
                            <div class="endgamedaprojectsbuttons__blue">
                                <p>Back to game</p>
                            </div>
                        <div class="endgamedaprojectsbuttons__red">
                            <p>Exit game</p>
                        </div>
                    </div>
            </div>`;
}
var init_daprojectsttemplate = __esmMin((() => {}));
//#endregion
//#region src/themes/daprojects/daprojectstheme.ts
function renderDaProjectsPlayerState(playerState) {
	const playerOneScore = document.querySelector("[data-score=\"player_one\"]");
	const playerTwoScore = document.querySelector("[data-score=\"player_two\"]");
	if (playerOneScore) playerOneScore.textContent = String(playerState.playerOneScore);
	if (playerTwoScore) playerTwoScore.textContent = String(playerState.playerTwoScore);
	currentPlayerImage$1(playerState);
}
function initDaProjectsTheme() {
	const gameOverlay = document.querySelector(".gameoverlay");
	if (!gameOverlay) return;
	gameOverlay.addEventListener("click", (e) => {
		const target = e.target;
		if (target.closest(".exitgamedaprojects")) gameOverlay.innerHTML += endGameDaProjectsThemeTemplate();
		if (target.closest(".endgamedaprojectsbuttons__blue")) document.querySelector(".endgamedaprojects")?.remove();
		if (target.closest(".endgamedaprojectsbuttons__red")) gameOverlay?.remove();
	});
}
function currentPlayerImage$1(playerState) {
	const currentPlayerImage = document.querySelector("[data-current-player-image]");
	if (!currentPlayerImage) return;
	if (playerState.currentPlayer === 1) currentPlayerImage.src = "../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg";
	else currentPlayerImage.src = "../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg";
}
var init_daprojectstheme = __esmMin((() => {
	init_daprojectsttemplate();
}));
//#endregion
//#region src/themes/foods/foodsthemetemplate.ts
function endGameFoodsTemplate() {
	return `<div class="endgameoverlayfoodstheme">
                <div class="endgameoverlayfoodstheme__window">
                    <h1>Are you sure you want to quit the game?</h1>
                        <div class="endgamefoodsthemebuttons">
                            <div class="endgamefoodsthemebuttons__yellow">
                                <p>Back to game</p>
                            </div>
                        <div class="endgamefoodsthemebuttons__white">
                            <p>Exit game</p>
                        </div>
                    </div>
            </div>`;
}
var init_foodsthemetemplate = __esmMin((() => {}));
//#endregion
//#region src/themes/foods/foodstheme.ts
function renderFoodsPlayerState(playerState) {
	const playerOneScore = document.querySelector("[data-score=\"player_one\"]");
	const playerTwoScore = document.querySelector("[data-score=\"player_two\"]");
	if (playerOneScore) playerOneScore.textContent = String(playerState.playerOneScore);
	if (playerTwoScore) playerTwoScore.textContent = String(playerState.playerTwoScore);
	currentPlayerImage(playerState);
}
function initFoodsProjectsTheme() {
	const gameOverlay = document.querySelector(".gameoverlay");
	if (!gameOverlay) return;
	gameOverlay.addEventListener("click", (e) => {
		const target = e.target;
		if (target.closest(".exitgamefoodstheme")) gameOverlay.innerHTML += endGameFoodsTemplate();
		if (target.closest(".endgamefoodsthemebuttons__yellow")) document.querySelector(".endgameoverlayfoodstheme")?.remove();
		if (target.closest(".endgamefoodsthemebuttons__white")) gameOverlay?.remove();
	});
}
function currentPlayerImage(playerState) {
	const currentPlayerImage = document.querySelector("[data-current-player-image]");
	if (!currentPlayerImage) return;
	if (playerState.currentPlayer === 1) currentPlayerImage.src = "../assets/cards/codevibestheme/player_blue_code_vibes_theme.svg";
	else currentPlayerImage.src = "../assets/cards/codevibestheme/player_orange_code_vibes_theme.svg";
}
var init_foodstheme = __esmMin((() => {
	init_foodsthemetemplate();
}));
//#endregion
//#region src/scripts/gamegenerator.ts
var require_gamegenerator = /* @__PURE__ */ __commonJSMin((() => {
	init_menu();
	init_db();
	init_game_screen();
	init_playerstate();
	init_codevibestheme();
	init_gamingtheme();
	init_daprojectstheme();
	init_foodstheme();
	/**
	* 
	* @param state 
	* @returns Collects everything the user has choosen, and forwards it to other functions through params
	*/
	function generateGameFromState(state, playerState) {
		if (!state.theme || !state.size) return;
		const themeData = themes[state.theme];
		const numberOfPairs = boardSizes[state.size];
		playerState.totalPairs = numberOfPairs;
		return shuffleCards(createCardsFromPairs(themeData.frontside.slice(0, numberOfPairs), themeData.frontside_path, themeData.backside));
	}
	/**
	* 
	* @param pairs 
	* @param frontside_path 
	* @param backside 
	* @returns Pairs of cards with the needed params
	*/
	function createCardsFromPairs(pairs, frontside_path, backside) {
		return pairs.flatMap((item, index) => [{
			id: `${index}-a`,
			pairId: index,
			frontside: frontside_path + item,
			backside,
			isFlipped: false,
			isMatched: false
		}, {
			id: `${index}-b`,
			pairId: index,
			frontside: frontside_path + item,
			backside,
			isFlipped: false,
			isMatched: false
		}]);
	}
	/**
	* Shuffels the cards so that we get all of the needed pairs
	*/
	function shuffleCards(cards) {
		return [...cards].sort(() => Math.random() - .5);
	}
	/**
	* Eventlistener on the startbutton, depending on what the user has chosen the template will be loaded,
	*/
	document.getElementById("startbutton")?.addEventListener("click", () => {
		startGame(state, playerState);
	});
	function startGame(state, playerState) {
		const cards = generateGameFromState(state, playerState);
		if (!cards) return;
		const game = document.getElementById("game_screen");
		if (state.theme === "code_vibes_theme") {
			game.innerHTML = codeVibesThemeTemplate(cards, playerState);
			initCodeVibesTheme();
		}
		if (state.theme === "gaming_theme") {
			game.innerHTML = gamingThemeTemplate(cards, playerState);
			initGameVibesTheme();
		}
		if (state.theme === "da_projects_theme") {
			game.innerHTML = daProjectsThemeTemplate(cards, playerState);
			initDaProjectsTheme();
		}
		if (state.theme === "foods_theme") {
			game.innerHTML = foodsThemeTemplate(cards, playerState);
			initFoodsProjectsTheme();
		}
	}
	/**
	* Eventlistener for flipping the cards, also forwards the checking of the state of matched pairs, and couting of the players
	*/
	document.addEventListener("click", (e) => {
		const card = e.target.closest(".card");
		if (!card) return;
		if (playerState.locked) return;
		card.classList.add("is-flipped");
		playerState.flippedCards.push(card);
		if (playerState.flippedCards.length === 2) checkPair();
	});
	/**
	* Function that returns if the pairs match
	*/
	function checkPair() {
		const [first, second] = playerState.flippedCards;
		const firstPair = first.dataset.pair;
		const secondPair = second.dataset.pair;
		playerState.locked = true;
		if (firstPair === secondPair) {
			first.classList.add("matched");
			second.classList.add("matched");
			updateScore();
			playerState.flippedCards = [];
			playerState.locked = false;
		} else setTimeout(() => {
			first.classList.remove("is-flipped");
			second.classList.remove("is-flipped");
			changePlayer();
			playerState.flippedCards = [];
			playerState.locked = false;
		}, 1e3);
	}
	/**
	* Updates the theme UI depending on the user preferences
	*/
	function updatePlayerUI() {
		if (state.theme === "code_vibes_theme") renderCodeVibesPlayerState(playerState);
		if (state.theme === "gaming_theme") renderGamingPlayerState(playerState);
		if (state.theme === "da_projects_theme") renderDaProjectsPlayerState(playerState);
		if (state.theme === "foods_theme") renderFoodsPlayerState(playerState);
	}
	/**
	* Function that switches players according to matched or mistmatched pairs
	*/
	function changePlayer() {
		if (playerState.currentPlayer === 1) playerState.currentPlayer = 2;
		else playerState.currentPlayer = 1;
		updatePlayerUI();
		if (state.theme === "code_vibes_theme" && playerState.matchedPairs === playerState.totalPairs) winLoseDraw(playerState);
	}
	/**
	* Function that returns the correct values of mathed pairs to the user it has actually matched
	*/
	function updateScore() {
		if (playerState.currentPlayer === 1) {
			playerState.playerOneScore += 1;
			playerState.matchedPairs += 1;
		} else {
			playerState.playerTwoScore += 1;
			playerState.matchedPairs += 1;
		}
		updatePlayerUI();
	}
}));
//#endregion
//#region index.html
init_style();
require_main();
require_gamegenerator();
init_menu();
//#endregion
