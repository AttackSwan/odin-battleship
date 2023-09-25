import gameLogic from "../src/gameLogic";
describe("Game controller", () => {
	const game = gameLogic();

	test("Tests ship fitment correctly", () => {
		expect(game.checkFits(1, 2, 2, true)).toBe(true);
	});

	// test("makes valid attacks", () => {
	// 	expect(game.attack(0, 0)).toBe("hit");
	// 	expect(game.attack(3, 4)).toBe("hit");
	// 	expect(game.attack(1, 6)).toBe("hit");
	// 	expect(game.attack(0, 5)).toBe("miss");
	// 	expect(game.attack(1, 1)).toBe("miss");
	// 	expect(game.attack(9, 9)).toBe("miss");
	// });

	// test("Does not make invalid attacks", () => {
	// 	expect(game.attack(10, 10)).toBe(false);
	// 	expect(game.attack(-1, 3)).toBe(false);
	// 	expect(game.attack("string", 10)).toBe(false);
	// });

	test("Attacks reduce the number of available cells", () => {
		expect(game.getLength()).toBe(100);
		game.attack(0, 0);
		expect(game.getLength()).toBe(99);
	});
});
