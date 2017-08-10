class Game {
  constructor(board) {
    this.board = board
    this.context = board.getContext('2d')
    this.blocks = []
    this.gameRunning = false
  }

  addBlock (block) {
    this.blocks.push(block)
    block.draw(this.context)
  }

  startGame () {
    this.gameRunning = true
  }

  pauseGame () {
    this.gameRunning = false
  }

  endGame () {
    this.context.clearRect(0, 0, this.board.width, this.board.height)
    this.blocks = []
    this.gameRunning = false
  }

  drawBlocks () {
    this.context.clearRect(0, 0, this.board.width, this.board.height)
    this.blocks.forEach( (block) => {
      block.move().draw(this.context)
    })
  }
}

module.exports = Game
