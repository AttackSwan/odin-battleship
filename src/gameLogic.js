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

	function attack(x, y) {
		if (!isPlayerTurn) {
			return;
		}
		// Make attack on ai board and change players
		const result = aiBoard.receiveAttack(x, y);
		isPlayerTurn = isPlayerTurn ? false : true;
		// makeAiAttack();

		return result;
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

	populateBoards();

	return {
		addShip,
		attack,
		checkFits,
		getCellContent,
		isPlayersTurn,
		getNextShip,
		isGameOver,
		removeCurrentShip,
		validXY,
	};
};

export default gameLogic;
