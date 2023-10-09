import "./style.css";
import gameLogic from "./gameLogic.js";
import * as utility from "./utility.js";
import shipImg from "../img/splash.png";

const ui = (() => {
	const game = gameLogic();
	const gridSize = 10;
	let placementRotation = true;

	function loadSplash() {
		const overlay = document.querySelector(".overlay");

		const splash = utility.createDiv("splash");
		const splashText = utility.createDiv("splash_text");
		const splashImg = utility.createDiv("splash_img");
		const splashButton = utility.createDiv("splash_button");

		splashText.textContent = "BATTLESHIP";
		utility.addImage(shipImg, splashImg);

		const startButton = utility.createButton("yellowButton", "START!");
		startButton.addEventListener("click", loadPlacementUI);
		splashButton.appendChild(startButton);

		splash.append(splashText, splashImg, splashButton);
		overlay.appendChild(splash);
	}

	function startGame() {
		// const placement = document.querySelector(".placement");
		const overlay = document.querySelector(".overlay");
		// placement.remove();

		const playfield = utility.createDiv("playfield");

		const upperText = utility.createDiv("upper_text");
		const playerZone = utility.createDiv("player_zone");
		const middleZone = utility.createDiv("middle_zone");
		const aiZone = utility.createDiv("ai_zone");

		const playerGrid = utility.createDiv("player_grid");
		const playerText = utility.createDiv("player_text");
		const icon = utility.createDiv("game_icon");
		const gameText = utility.createDiv("game_text");
		const aiGrid = utility.createDiv("ai_grid");
		const aiText = utility.createDiv("ai_text");
		const grids = utility.createDiv("grids");

		addGrid(playerGrid, gridSize, "game", true);
		addGrid(aiGrid, gridSize, "game", false);
		utility.addImage(shipImg, icon);

		playerZone.append(playerGrid, playerText);
		middleZone.append(icon, gameText);
		aiZone.append(aiGrid, aiText);

		grids.append(playerZone, middleZone, aiZone);
		playfield.append(upperText, grids);
		overlay.append(playfield);

		drawBoard(playerGrid, true);

		turnsLoop(); // Start main game loop.
	}

	function loadPlacementUI() {
		const overlay = document.querySelector(".overlay");
		const splash = document.querySelector(".splash");
		splash.remove();

		const placement = utility.createDiv("placement");
		const ship = game.getNextShip();

		const icon = utility.createDiv("placement_image");
		const text = utility.createDiv("placement_text");
		const rotateButton = utility.createDiv("placement_rotate");
		const placeGrid = utility.createDiv("placement_grid");

		utility.addImage(shipImg, icon);
		text.textContent = `Place your ${ship.name}!`;

		// Listeners
		placeGrid.addEventListener("mouseout", clearHighlights);
		const button = utility.createButton("yellowButton", "ROTATE");
		button.addEventListener("click", () => {
			placementRotation = placementRotation ? false : true;
		});

		rotateButton.appendChild(button);

		placement.append(icon, text, rotateButton, placeGrid);
		overlay.appendChild(placement);
		addGrid(placeGrid, gridSize, "placement");
	}

	function turnsLoop() {
		// while (!game.isGameOver()) {}
	}

	function drawBoard(grid, isPlayer) {
		// Color grid cells depending on content and attacks
		const cells = grid.querySelectorAll(".grid_cell");
		cells.forEach((cell) => {
			const position = cell.getAttribute("data-pos").split("-");
			const x = parseInt(position[0]);
			const y = parseInt(position[1]);

			const cellContent = game.getCellContent(x, y, isPlayer);

			if (cellContent.ship !== null) {
				if (isPlayer) {
					cell.classList.add("placed_cell");
				} else if (cellContent.isAttacked) {
					cell.classList.add("hit_cell");
				}
			} else if (cellContent.isEmpty && cellContent.isAttacked) {
				cell.classList.add("miss_cell");
			}
		});
	}

	function addGrid(container, size, type, isPlayer) {
		// Types are "placement" and "game" grids

		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				const x = j;
				const y = size - 1 - i;
				const cell = utility.createDiv("grid_cell");
				cell.setAttribute("Data-pos", `${x}-${y}`);

				// Placement Grid
				if (type === "placement") {
					cell.addEventListener("mouseover", () => {
						placementMouseOver(x, y);
					});
					cell.addEventListener("click", placeShip);
				}
				// ai grid
				else if ((type = "game" && isPlayer === false)) {
					cell.addEventListener("mouseover", () => {
						highlightCell(cell);
					});
					cell.addEventListener("mouseout", clearHighlights);
					cell.addEventListener("click", () => {
						attackCell(cell, x, y);
					});
				}

				container.appendChild(cell);
			}
		}
	}

	function attackCell(cell, x, y) {
		const result = game.playerAttack(x, y);
		if (result === "hit") {
			cell.classList.add("cell_hit");
		} else if (result === "miss") {
			cell.classList.add("cell_miss");
		}

		if (result !== false) {
			// Make AI attack
			const aiAttack = game.aiAttack();
			updatePlayerBoard(aiAttack.x, aiAttack.y, aiAttack.result);
			console.log(
				`ai: attack at ${aiAttack.x},${aiAttack.y} is a ${aiAttack.result}`
			);
		}
	}

	function updatePlayerBoard(x, y, result) {
		if (result === false) {
			return;
		}
		// get player cell
		const playerGrid = document.querySelector(".player_grid");
		const cell = playerGrid.querySelector(`[data-pos="${x}-${y}"]`);
		// update classList
		if (result === "hit") {
			cell.classList.add("cell_hit");
		} else if (result === "miss") {
			cell.classList.add("cell_miss");
		}
	}

	function highlightCell(cell) {
		if (game.isPlayersTurn()) {
			cell.classList.add("cell_highlight");
		}
	}

	// function placementMouseOver(e) {
	function placementMouseOver(x, y) {
		clearHighlights();
		const ship = game.getNextShip();
		if (!ship) {
			removePlacementListeners();
			return;
		}

		const valid = game.checkFits(x, y, ship.length, placementRotation);

		// color cells if ship position is valid
		for (let i = 0; i < ship.length; i++) {
			const newX = x + (placementRotation ? 0 : i);
			const newY = y + (placementRotation ? i : 0);
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

	function placeShip(e) {
		const ship = game.getNextShip();
		if (!ship) {
			// All ships placed
			removePlacementListeners();
			return;
		}

		const position = e.target.getAttribute("data-pos").split("-");
		const x = parseInt(position[0]);
		const y = parseInt(position[1]);
		const valid = game.checkFits(x, y, ship.length, placementRotation);

		if (valid) {
			game.addShip(x, y, ship.length, placementRotation, ship.name);
			for (let i = 0; i < ship.length; i++) {
				const newX = x + (placementRotation ? 0 : i);
				const newY = y + (placementRotation ? i : 0);
				const cell = document.querySelector(
					`[data-pos="${newX}-${newY}"]`
				);
				cell.classList.add("placed_cell");
			}
			game.removeCurrentShip();
		}
	}

	function clearHighlights() {
		const highlights = document.querySelectorAll(
			".valid_cell, .invalid_cell, .cell_highlight"
		);
		highlights.forEach((cell) => {
			cell.classList.remove("valid_cell");
			cell.classList.remove("invalid_cell");
			cell.classList.remove("cell_highlight");
		});
	}

	function removePlacementListeners() {
		const cells = document.querySelectorAll(".grid_cell");
		cells.forEach((cell) => {
			cell.removeEventListener("click", placeShip);
			cell.removeEventListener("mouseover", placementMouseOver);
		});

		const button = document.querySelector(".yellowButton");
		button.textContent = "START!";
		button.removeEventListener("click", placeShip);
		button.addEventListener("click", startGame);
		button.classList.remove("yellowButton");
		button.classList.add("greenButton");
	}

	function loadBackground() {
		const content = document.querySelector(".content");
		const overlay = utility.createDiv("overlay");
		content.appendChild(overlay);
	}

	loadBackground();
	// loadSplash();
	// loadPlacementUI();
	startGame();
})();
