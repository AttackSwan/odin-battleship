import Ship from "../src/ship.js";

describe("Ship", () => {
	test("Ship should initialize with correct properties", () => {
		const ship = new Ship(3);
		expect(ship.length).toBe(3);
		expect(ship.hits).toBe(0);
		expect(ship.sunk).toBe(false);
	});

	test("hit() should increase the hits count", () => {
		const ship = new Ship(3);
		ship.hit();
		expect(ship.hits).toBe(1);
		expect(ship.sunk).toBe(false);
	});

	test("hit() should not increase hits count if the ship is already sunk", () => {
		const ship = new Ship(3);
		ship.hit();
		ship.hit();
		ship.hit();
		expect(ship.hits).toBe(3); // Ship is now sunk
		ship.hit(); // This should not increase hits further
		expect(ship.hits).toBe(3); // Hits should remain 3
	});

	test("checkIfSunk() should return true when the ship is sunk", () => {
		const ship = new Ship(2);
		ship.hit();
		ship.hit(); // Ship is now sunk
		expect(ship.isSunk()).toBe(true);
	});

	test("checkIfSunk() should return false when the ship is not sunk", () => {
		const ship = new Ship(2);
		ship.hit();
		expect(ship.isSunk()).toBe(false);
	});

	test("Creating a Ship with a Length of 0 should throw an error", () => {
		expect(() => new Ship(0)).toThrowError(
			"Ship length must be greater than zero."
		);
	});

	test("Creating a Ship with a Negative Length should throw an error", () => {
		expect(() => new Ship(-2)).toThrowError(
			"Ship length must be greater than zero."
		);
	});
});
