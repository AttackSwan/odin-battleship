import Player from "./player";
import Gameboard from "./gameboard";

const gameLogic = () => {
	// create players
	const player = new Player("player");
	const ai = new Player("ai", true);
	let isPlayerTurn = true;
	let isOver = false;

	// create gameboards
	const playerBoard = new Gameboard();
	const aiBoard = new Gameboard();

	function checkFits(x, y, length, isVertical = true) {
		return playerBoard.shipFits(x, y, length, isVertical);
	}

	function validXY(x, y) {
		return playerBoard.isValidXY(x, y) && playerBoard.spaceIsEmpty(x, y);
	}

	function getCellContent(x, y, isPlayer) {
		let cell = null;

		if (isPlayer) {
			return playerBoard.getCellContent(x, y);
		} else if (!isPlayer) {
			return aiBoard.getCellContent(x, y);
		} else {
			return false;
		}
	}

	function getNextShip() {
		return playerBoard.getNextShip();
	}

	function removeCurrentShip() {
		playerBoard.removeCurrentShip();
	}

	function addShip(x, y, length, isVertical, name) {
		playerBoard.placeShip(x, y, length, isVertical, name);
	}

	function isPlayersTurn() {
		return isPlayerTurn;
	}

	function isGameOver() {
		return this.isOver;
	}

	function changePlayer() {
		isPlayerTurn = isPlayerTurn ? false : true;
	}

	function playerAttack(x, y) {
		if (!isPlayerTurn) {
			return false;
		}
		const result = aiBoard.receiveAttack(x, y);
		if (!result) {
			return false; // invalid attack
		}
		changePlayer();
		return result;
	}

	function aiAttack() {
		const targets = playerBoard.getAvailableCells();

		if (targets.length === 0) {
			return null;
		}

		// AI version 1: generate random attack
		const randomTargetIndex = Math.floor(Math.random() * targets.length);
		const targetCell = targets[randomTargetIndex];

		const result = playerBoard.receiveAttack(targetCell.x, targetCell.y);
		changePlayer();

		// return attack coordinates and results in an object
		return { x: targetCell.x, y: targetCell.y, result: result };
	}

	function populateBoards() {
		// Populate player's board
		playerBoard.placeShip(0, 0, 5, true, "Carrier");
		playerBoard.placeShip(3, 4, 4, false, "Battleship");
		playerBoard.placeShip(7, 6, 3, true, "Cruiser");
		playerBoard.placeShip(6, 2, 3, false, "Submarine");
		playerBoard.placeShip(1, 6, 2, false, "Destroyer");
		// Populate ai's board
		aiBoard.placeShip(0, 0, 5, true, "Carrier");
		aiBoard.placeShip(3, 4, 4, false, "Battleship");
		aiBoard.placeShip(7, 6, 3, true, "Cruiser");
		aiBoard.placeShip(6, 2, 3, false, "Submarine");
		aiBoard.placeShip(1, 6, 2, false, "Destroyer");
	}

	function getShipsRemaining(isPlayer) {
		if (isPlayer) {
			return playerBoard.shipsRemaining();
		}
		return aiBoard.shipsRemaining();
	}

	populateBoards();

	return {
		addShip,
		playerAttack,
		checkFits,
		getCellContent,
		getShipsRemaining,
		isPlayersTurn,
		getNextShip,
		isGameOver,
		removeCurrentShip,
		validXY,
		aiAttack,
	};
};

export default gameLogic;
