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
function codeVibesThemeTemplate(cards) {
	return `
     <section class="gameoverlay">
     
     </section>   
    `;
}
function gamingThemeTemplate(cards) {
	return `
    <section class="gameoverlay">
    
    </section>
    `;
}
function daProjectsThemeTemplate(cards) {
	return `
    <section class="gameoverlay">
    
    </section>
    `;
}
function foodsThemeTemplate(cards) {
	return `
    <section class="gameoverlay">
    
    </section>
    `;
}
var init_game_screen = __esmMin((() => {}));
//#endregion
//#region src/scripts/gamegenerator.ts
var require_gamegenerator = /* @__PURE__ */ __commonJSMin((() => {
	init_menu();
	init_db();
	init_game_screen();
	function generateGameFromState(state) {
		if (!state.theme || !state.size) return;
		const themeData = themes[state.theme];
		const numberOfPairs = boardSizes[state.size];
		return shuffleCards(createCardsFromPairs(themeData.frontside.slice(0, numberOfPairs), themeData.frontside_path, themeData.backside));
	}
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
	function shuffleCards(cards) {
		return [...cards].sort(() => Math.random() - .5);
	}
	document.getElementById("startbutton")?.addEventListener("click", () => {
		const cards = generateGameFromState(state);
		if (!cards) return;
		const game = document.getElementById("game_screen");
		if (state.theme === "code_vibes_theme") game.innerHTML += codeVibesThemeTemplate(cards);
		if (state.theme === "gaming_theme") game.innerHTML += gamingThemeTemplate(cards);
		if (state.theme === "da_projects_theme") game.innerHTML += daProjectsThemeTemplate(cards);
		if (state.theme === "foods_theme") game.innerHTML += foodsThemeTemplate(cards);
	});
}));
//#endregion
//#region index.html
init_style();
require_main();
require_gamegenerator();
init_menu();
//#endregion
