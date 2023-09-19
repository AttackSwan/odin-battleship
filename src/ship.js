class Ship {
	constructor(length = 0) {
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}

	hit() {
		if (this.hits < this.length) {
			this.hits++;
			this.checkIfSunk();
		}
	}

	checkIfSunk() {
		if (this.hits === this.length) {
			return true;
		}
		return false;
	}
}

export default Ship;
