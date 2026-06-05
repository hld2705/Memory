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
                <div>
                    <h2>It's play time</h2>
                    <h1>Ready to play?</h1>
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
	function welcomingScreen() {
		const welcome = document.getElementById("welcoming_screen");
		if (welcome) welcome.innerHTML = welcomingScreenTemplate();
	}
}));
//#endregion
//#region index.html
init_style();
require_main();
//#endregion
