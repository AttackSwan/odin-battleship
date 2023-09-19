import Gameboard from "../src/gameboard.js";

describe("Gameboard", () => {
	const board = new Gameboard(10); // Create a 10x10 gameboard for testing

	test("Initializes the board correctly", () => {
		expect(board.size).toBe(10);
		expect(board.board.length).toBe(10);
		expect(board.board.every((row) => row.length === 10)).toBe(true);
		expect(
			board.board.every((row) => row.every((cell) => cell === "empty"))
		).toBe(true);
	});

	test("Places ships in valid positions", () => {
		expect(board.placeShip(0, 0, 5, true, "Carrier")).toBe(true);
		expect(board.placeShip(9, 0, 4, true, "Battleship")).toBe(true);
		expect(board.placeShip(3, 5, 3, false)).toBe(true);
		expect(board.placeShip(7, 9, 3, false)).toBe(true);
	});

	test("Does not place ships off the board", () => {
		expect(board.placeShip(10, 10, 5, true)).toBe(false);
		expect(board.placeShip(11, 11, 3, false)).toBe(false);
	});

	test("Does not place ships crossing edge of board", () => {
		expect(board.placeShip(1, 8, 4, true)).toBe(false);
		expect(board.placeShip(9, 4, 3, false)).toBe(false);
	});

	// test("Receives a valid attack", () => {
	// 	expect(board.receiveAttack(2, 3)).toBe(true);
	// 	expect(board.board[3][2]).toBe(true);
	// });

	// test("Receives an invalid attack", () => {
	// 	expect(board.receiveAttack(-1, 4)).toBe(false);
	// 	expect(board.receiveAttack(6, 2)).toBe(false);
	// 	expect(board.receiveAttack(3, 8)).toBe(false);
	// });
});
