import "./style.css";
import gameLogic from "./gameLogic.js";
import * as utility from "./utility.js";
import shipImg from "../img/splash.png";

const ui = (() => {
	const game = gameLogic();

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
		placeGrid.addEventListener("mouseout", clearHighlights);

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

				//add listener
				cell.addEventListener("mouseover", (e) => {
					mouseOver(e);
				});

				container.appendChild(cell);
			}
		}
	}

	function mouseOver(e) {
		clearHighlights();
		let isVertical = true; // change when required.
		let length = 5; // change when required.

		// get cell co-ordinates
		const position = e.target.getAttribute("data-pos").split("-");
		const x = parseInt(position[0]);
		const y = parseInt(position[1]);
		const valid = game.checkFits(x, y, length);

		// color cells if ship position is valid
		for (let i = 0; i < length; i++) {
			const newX = x + (isVertical ? 0 : i);
			const newY = y + (isVertical ? i : 0);
			const cell = document.querySelector(`[data-pos="${newX}-${newY}"]`);

			if (valid) {
				cell.classList.add("valid_cell");
			} else {
				if (game.validXY(newX, newY)) {
					cell.classList.add("invalid_cell");
				}
			}
		}
	}

	function clearHighlights() {
		const highlights = document.querySelectorAll(
			".valid_cell, .invalid_cell"
		);
		highlights.forEach((cell) => {
			cell.classList.remove("valid_cell");
			cell.classList.remove("invalid_cell");
		});
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
	// loadSplash();
	loadPlacementUI();
})();
