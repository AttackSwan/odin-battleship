import "./style.css";
import * as utility from "./utility.js";
import textImg from "../img/text.png";
import shipImg from "../img/splash.png";

const ui = (() => {
	function loadSplash() {
		const content = document.querySelector(".content");
		const overlay = utility.createDiv("overlay");

		const splash = utility.createDiv("splash");
		const splashText = utility.createDiv("splash_text");
		const splashImg = utility.createDiv("splash_img");
		const splashButton = utility.createDiv("splash_button");

		utility.addImage(textImg, splashText);
		utility.addImage(shipImg, splashImg);

		utility.addButton("startButton", "START!", splashButton);

		splash.append(splashText, splashImg, splashButton);
		overlay.appendChild(splash);
		content.appendChild(overlay);

		console.log("Splash loaded");
	}
	loadSplash();
})();
