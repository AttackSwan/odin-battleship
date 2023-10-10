import "./style.css";
import gameLogic from "./gameLogic.js";
import * as utility from "./utility.js";
import shipImg from "../img/splash.png";
import endGraphic from "../img/gameOver.png";

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
		const shipsLabel = "Ships remaining";

		const placement = document.querySelector(".placement");
		const overlay = document.querySelector(".overlay");
		placement.remove();

		const playfield = utility.createDiv("playfield");

		const upperText = utility.createDiv("upper_text");
		const playerZone = utility.createDiv("player_zone");
		const middleZone = utility.createDiv("middle_zone");
		const aiZone = utility.createDiv("ai_zone");

		// Player
		const playerGridContainer = utility.createDiv("player_grid_container");
		const playerGrid = utility.createDiv("player_grid");
		const playerGraphic = utility.createDiv("player_graphic");
		playerGridContainer.append(playerGrid, playerGraphic);

		const playerText = utility.createDiv("player_text");
		const playerShipsLabel = utility.createDiv("player_ships_label");
		playerShipsLabel.textContent = shipsLabel;
		const playerShipsText = utility.createDiv("player_ships_text");
		playerShipsText.textContent = game.getShipsRemaining(true); // isPlayer = true
		playerText.append(playerShipsLabel, playerShipsText);

		// Center
		const icon = utility.createDiv("game_icon");
		const gameText = utility.createDiv("game_text");
		gameText.textContent = "Begin!";

		// AI
		const aiGridContainer = utility.createDiv("ai_grid_container");
		const aiGrid = utility.createDiv("ai_grid");
		const aiGraphic = utility.createDiv("ai_graphic");
		aiGridContainer.append(aiGrid, aiGraphic);

		const aiText = utility.createDiv("ai_text");
		const aiShipsLabel = utility.createDiv("ai_ships_label");
		aiShipsLabel.textContent = shipsLabel;
		const aiShipsText = utility.createDiv("ai_ships_text");
		aiShipsText.textContent = game.getShipsRemaining(false); // isPlayer = false
		aiText.append(aiShipsLabel, aiShipsText);

		const grids = utility.createDiv("grids");
		addGrid(playerGrid, gridSize, "game", true);
		addGrid(aiGrid, gridSize, "game", false);

		// Images
		utility.addImage(shipImg, icon);
		utility.addImage(endGraphic, playerGraphic);
		utility.addImage(endGraphic, aiGraphic);

		playerZone.append(playerGridContainer, playerText);
		middleZone.append(icon, gameText);
		aiZone.append(aiGridContainer, aiText);

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
		text.textContent = "Place your ships!";

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
			cell.textContent = "X";
		} else if (result === "miss") {
			cell.classList.add("cell_miss");
		}

		if (result !== false) {
			// Make AI attack
			const aiAttack = game.aiAttack();
			updatePlayerBoard(aiAttack.x, aiAttack.y, aiAttack.result);
			updateGameText(result);
		}
	}

	function updateGameText(result) {
		const gameText = document.querySelector(".game_text");
		const updateText = result.charAt(0).toUpperCase() + result.slice(1);
		const playerShipsText = document.querySelector(".player_ships_text");
		const aiShipsText = document.querySelector(".ai_ships_text");

		gameText.textContent = `${updateText}!`;
		// shake text box on hit
		if (result === "hit") {
			gameText.classList.add("shake");
			setTimeout(() => {
				gameText.classList.remove("shake");
			}, 1000);
		}

		const playerShipsRemaining = game.getShipsRemaining(true);
		const aiShipsRemaining = game.getShipsRemaining(false);

		playerShipsText.textContent = playerShipsRemaining;
		aiShipsText.textContent = aiShipsRemaining;

		if (playerShipsRemaining === 0) {
			endGame(false); // playerWins = true
		} else if (aiShipsRemaining === 0) {
			endGame(true);
		}
	}

	function updatePlayerBoard(x, y, result) {
		if (result === false) {
			return;
		}
		// Get player cell
		const playerGrid = document.querySelector(".player_grid");
		const cell = playerGrid.querySelector(`[data-pos="${x}-${y}"]`);
		// Update classList
		if (result === "hit") {
			cell.classList.add("cell_hit");
			// Shake player board
			playerGrid.classList.add("shake");
			setTimeout(() => {
				playerGrid.classList.remove("shake");
			}, 1000);
		} else if (result === "miss") {
			cell.classList.add("cell_miss");
		}
	}

	function highlightCell(cell) {
		if (game.isPlayersTurn()) {
			cell.classList.add("cell_highlight");
		}
	}

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
		const grid = document.querySelector(".placement_grid");
		grid.style.pointerEvents = "none";
		// const cells = document.querySelectorAll(".grid_cell");
		// cells.forEach((cell) => {
		// 	cell.removeEventListener("click", placeShip);
		// 	cell.removeEventListener("mouseover", placementMouseOver);
		// });

		const button = document.querySelector(".yellowButton");
		button.classList.remove("yellowButton");
		button.classList.add("greenButton");

		button.textContent = "START!";
		button.removeEventListener("click", placeShip);
		button.addEventListener("click", startGame);
	}

	function loadBackground() {
		const content = document.querySelector(".content");
		const overlay = utility.createDiv("overlay");
		content.appendChild(overlay);
	}

	function endGame(playerWins) {
		const aiGrid = document.querySelector(".ai_grid");
		const playerGraphic = document.querySelector(".player_graphic");
		const aiGraphic = document.querySelector(".ai_graphic");
		const infoText = document.querySelector(".upper_text");
		const gameText = document.querySelector(".game_text");

		if (playerWins) {
			aiGraphic.style.display = "block";
			gameText.textContent = "You win!";
			infoText.textContent = "All computer ships destroyed!";
		} else if (!playerWins) {
			playerGraphic.style.display = "block";
			gameText.textContent = "You lose!";
			infoText.textContent = "Your ships have been destroyed!";
		}
		aiGrid.style.pointerEvents = "none";
	}

	loadBackground();
	loadSplash();
	// loadPlacementUI();
	// startGame();
})();
