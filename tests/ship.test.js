import Ship from "../src/ship.js";

describe("Ship", () => {
	test("Ship should initialize with correct properties", () => {
		const ship = new Ship(3);
		expect(ship.length).toBe(3);
		expect(ship.hits).toBe(0);
		expect(ship.sunk).toBe(false);
	});
});
