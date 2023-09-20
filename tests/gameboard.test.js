import Gameboard from "../src/gameboard.js";

describe("Gameboard", () => {
	const board = new Gameboard(10); // Create a 10x10 gameboard for testing

	test("Initializes the board correctly", () => {
		expect(board.size).toBe(10);
		expect(board.board.length).toBe(10);
		expect(board.board.every((row) => row.length === 10)).toBe(true);
		expect(
			board.board.every((row) => row.every((cell) => cell.isEmpty))
		).toBe(true);
	});

	test("Places ships in valid positions", () => {
		expect(board.placeShip(0, 0, 5, true)).toBe(true);
		expect(board.placeShip(9, 0, 4, true)).toBe(true);
		expect(board.placeShip(0, 9, 4, false)).toBe(true);
		expect(board.placeShip(3, 5, 3, false)).toBe(true);
		expect(board.placeShip(7, 8, 3, false)).toBe(true);
	});

	test("Does not place ships off the board", () => {
		expect(board.placeShip(10, 10, 5, true)).toBe(false);
		expect(board.placeShip(11, 11, 3, false)).toBe(false);
	});

	test("Does not place ships crossing edge of board", () => {
		expect(board.placeShip(1, 8, 4, true)).toBe(false);
		expect(board.placeShip(9, 4, 3, false)).toBe(false);
	});

	test("Does not place ships crossing other ships", () => {
		expect(board.placeShip(4, 4, 4, true)).toBe(false);
		expect(board.placeShip(7, 1, 3, false)).toBe(false);
		expect(board.placeShip(8, 7, 3, true)).toBe(false);
	});

	test("Cannot attack the same square more than once", () => {
		expect(board.receiveAttack(2, 3)).not.toBeFalsy();
		expect(board.receiveAttack(2, 3)).toBe(false);
	});

	test("Won't attack outside the board", () => {
		expect(board.receiveAttack(-1, 4)).toBe(false);
		expect(board.receiveAttack(10, 2)).toBe(false);
		expect(board.receiveAttack("string", 8)).toBe(false);
	});

	test("Attacks successfully hit ships", () => {
		expect(board.receiveAttack(0, 0)).toBe("hit");
		expect(board.receiveAttack(0, 1)).toBe("hit");
		expect(board.receiveAttack(0, 2)).toBe("hit");
		expect(board.receiveAttack(0, 3)).toBe("hit");
		expect(board.receiveAttack(0, 4)).toBe("hit");
		expect(board.receiveAttack(0, 5)).toBe("miss");
	});

	test("Ships show correct number of hits", () => {
		board.displayBoard();
		const ship = board.getShip(9, 0);
		expect(ship.numHits()).toBe(0);
		expect(ship.isSunk()).toBe(false);
		// 1 hit
		expect(board.receiveAttack(9, 0)).toBe("hit");
		expect(ship.numHits()).toBe(1);
		expect(ship.isSunk()).toBe(false);
		// 2 hits
		expect(board.receiveAttack(9, 1)).toBe("hit");
		expect(ship.numHits()).toBe(2);
		expect(ship.isSunk()).toBe(false);
		// 3 hits
		expect(board.receiveAttack(9, 2)).toBe("hit");
		expect(ship.numHits()).toBe(3);
		expect(ship.isSunk()).toBe(false);
		// 4 hits and sunk
		expect(board.receiveAttack(9, 3)).toBe("hit");
		expect(ship.numHits()).toBe(4);
		expect(ship.isSunk()).toBe(true);
	});
});
