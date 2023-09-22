import gameLogic from "../src/gameLogic";
describe("Game controller", () => {
	const game = gameLogic();

	test("Tests ship fitment correctly", () => {
		expect(game.checkPosition(0, 0, 5, true)).toBe(true);
	});
});
