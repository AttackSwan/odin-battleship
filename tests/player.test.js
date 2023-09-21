import Gameboard from "../src/gameboard.js";
import Player from "../src/player.js";

describe("Player tests", () => {
	const playerBoard = new Gameboard(10);
	const aiBoard = new Gameboard(10);
	const player = new Player("Player");
	const ai = new Player("Ai", true);

	test("ai successfully makes 30 attacks", () => {
		for (let i = 0; i < 30; i++) {
			expect(ai.computerAttack(playerBoard)).toBe(true);
		}
	});
});
