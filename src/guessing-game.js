class GuessingGame {

  constructor() {
    this.min = 0
    this.max = 0
    this.g = 0
  }
  setRange(a, b) {
    this.min = a
    this.max = b
  }
  guess() {
    this.g = Math.ceil((this.min + this.max) / 2)
    return this.g
  }

  lower() {
    this.setRange(this.min, this.g--)
  }

  greater() {
    this.setRange(this.g++, this.max)
  }

}

module.exports = GuessingGame;
