import Ship from "./ship.js";

class Gameboard {
	constructor(size = 10) {
		this.size = size;
		this.board = [];
		this.ships = [];
		this.initialiseBoard();
	}

	initialiseBoard() {
		this.board = Array(this.size)
			.fill(null)
			.map(() => Array(this.size).fill("empty"));
	}

	placeShip(x, y, length, isVertical, name) {
		if (!this.shipFits(x, y, length, isVertical)) {
			// Ship does not fit at given coordinates
			return false;
		}
		//place ship
		return true;
	}

	shipFits(x, y, length, isVertical) {
		let shipFits = true;

		for (let i = 0; i < length; i++) {
			if (
				(isVertical &&
					(!this.spaceIsEmpty(x, y + i) ||
						!this.isValidXY(x, y + i))) ||
				(!isVertical &&
					(!this.spaceIsEmpty(x + i, y) || !this.isValidXY(x + i, y)))
			) {
				shipFits = false;
				break;
			}
		}
		return shipFits;
	}

	isValidXY(x, y) {
		return x >= 0 && y >= 0 && x < this.size && y < this.size;
	}

	spaceIsEmpty(x, y) {
		return this.isValidXY(x, y) && this.board[y][x] === "empty";
	}

	receiveAttack(x, y) {
		if (this.isValidXY(x, y) && this.hasNotBeenAttacked(x, y)) {
		}
	}

	isValidAttack(x, y) {}
}

export default Gameboard;
