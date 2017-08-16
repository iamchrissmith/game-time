const Bike = require ('./Bike')

class Game {
  constructor(board) {
    this.board = board
    this.context = board.getContext('2d')
    this.bikes = this.generatePlayers()
    this.gameRunning = false
  }

  generatePlayers() {
    const playerSize = 10
    const player1 = new Bike(
                          'Player 1',
                          this.board,
                          0, 0,
                          playerSize,
                          playerSize,
                          "15, 119, 190"
                        )
    const player2 = new Bike(
                          'Player 2',
                          this.board,
                          this.board.width - playerSize, this.board.height - playerSize,
                          playerSize,
                          playerSize,
                          "195, 134, 20"
                        )

    player1.draw(this.context)
    player2.draw(this.context)

    return [player1, player2]
  }

  startGame() {
    this.gameRunning = true
    if (this.bikes.length === 0) {
      this.bikes = this.generatePlayers()
    }
    this.bikes.forEach( (bike) => {
      bike.direction = 'down'
    })
  }

  changeDirection(bike, direction) {
    this.bikes[bike].direction = direction
  }

  pauseGame() {
    this.gameRunning = false
  }

  endGame() {
    this.context.clearRect(0, 0, this.board.width, this.board.height)
    this.gameRunning = false
    this.bikes = []
  }

  drawBikes() {
    this.context.clearRect(0, 0, this.board.width, this.board.height)
    this.bikes.forEach( (bike) => {
      bike.draw(this.context)
    })
  }
}

module.exports = Game
