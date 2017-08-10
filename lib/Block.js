class Block {
  constructor(board, x, y, width, height) {
    this.board = board
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  draw (context) {
    context.fillStyle = "rgba(0, 255, 0, 1)";
    context.fillRect(this.x, this.y, this.width, this.height)
    return this
  }

  move () {
    if (this.y == this.board.height) {
      this.y = 0
    } else {
      this.y++
    }
    return this
  }
}

module.exports = Block
