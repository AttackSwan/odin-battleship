import Player from "./player";
import Gameboard from "./gameboard";

const gameLogic = () => {
	// create players
	const player = new Player("player");
	const ai = new Player("ai", true);
	let currentPlayer = "player";

	// create gameboards
	const playerBoard = new Gameboard();
	const aiBoard = new Gameboard();

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

	function mainLoop() {
		// step through main loop
	}

	function endGame() {
		// end game
	}

	while (!gameOver) {
		mainLoop();
	}

	populateBoards();

	endGame();
};
