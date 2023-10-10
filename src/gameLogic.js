import Gameboard from "./gameboard";

const gameLogic = () => {
	let isPlayerTurn = true;

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

	function populateAiBoard() {
		const shipData = [
			{ name: "Carrier", length: 5 },
			{ name: "Battleship", length: 4 },
			{ name: "Cruiser", length: 3 },
			{ name: "Submarine", length: 3 },
			{ name: "Destroyer", length: 2 },
		];

		for (const shipInfo of shipData) {
			const { name, length } = shipInfo;
			let placed = false;

			while (!placed) {
				const vertical = Math.random() < 0.5; // Randomly choose vertical or horizontal placement
				const x = vertical
					? Math.floor(Math.random() * aiBoard.size)
					: Math.floor(Math.random() * (aiBoard.size - length + 1));
				const y = vertical
					? Math.floor(Math.random() * (aiBoard.size - length + 1))
					: Math.floor(Math.random() * aiBoard.size);

				// Check if the ship can be placed at the random position
				if (aiBoard.shipFits(x, y, length, vertical)) {
					aiBoard.placeShip(x, y, length, vertical, name);
					placed = true;
				}
			}
		}
	}

	function getShipsRemaining(isPlayer) {
		if (isPlayer) {
			return playerBoard.shipsRemaining();
		}
		return aiBoard.shipsRemaining();
	}

	populateAiBoard();

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
