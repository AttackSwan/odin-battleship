import "./style.css";
import * as utility from "./utility.js";
import shipImg from "../img/splash.png";

const ui = (() => {
	function loadSplash() {
		const overlay = document.querySelector(".overlay");

		const splash = utility.createDiv("splash");
		const splashText = utility.createDiv("splash_text");
		const splashImg = utility.createDiv("splash_img");
		const splashButton = utility.createDiv("splash_button");

		splashText.textContent = "BATTLESHIP";
		utility.addImage(shipImg, splashImg);

		const startButton = utility.createButton("yellowButton", "START!");
		startButton.addEventListener("click", startGame);
		splashButton.appendChild(startButton);

		splash.append(splashText, splashImg, splashButton);
		overlay.appendChild(splash);
	}

	function startGame() {
		const splash = document.querySelector(".splash");
		splash.remove();

		//load placementUI
		loadPlacementUI();

		// load gameUI
		loadGameUI();
	}

	function loadPlacementUI() {
		const overlay = document.querySelector(".overlay");
		const placement = utility.createDiv("placement");

		const icon = utility.createDiv("placement_image");
		const text = utility.createDiv("placement_text");
		const rotateButton = utility.createDiv("placement_rotate");
		const placeGrid = utility.createDiv("placement_grid");

		utility.addImage(shipImg, icon);

		const button = utility.createButton("yellowButton", "ROTATE");
		// button.addEventListener("click", startGame);
		rotateButton.appendChild(button);

		text.textContent = "Place your carrier!";

		placement.append(icon, text, rotateButton, placeGrid);
		overlay.appendChild(placement);
		addGrid(placeGrid, 10);
	}

	function addGrid(container, size) {
		//create and append cells
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				const cell = utility.createDiv("grid_cell");
				cell.setAttribute("Data-pos", `${j}-${size - 1 - i}`);
				container.appendChild(cell);
			}

			//add listener
			// cell.addEventListener("click", (e) => {
			// 	placeShip(e);
			// });
		}
	}

	function loadGameUI() {
		const content = document.querySelector(".content");

		//create
	}

	function loadBackground() {
		const content = document.querySelector(".content");
		const overlay = utility.createDiv("overlay");
		content.appendChild(overlay);
	}

	loadBackground();
	loadSplash();
	// loadPlacementUI();
})();
