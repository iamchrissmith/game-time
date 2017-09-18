const Bike = require ('./Bike')

class Game {
  constructor(board) {
    this.board = board
    this.context = board.getContext('2d')
    this.bikes = this.generatePlayers()
    this.gameRunning = false;
    this.loser = '';
    this.winner = '';
  }

  generatePlayers() {
    const playerSize = 10
    const player1 = new Bike(
                          'Player 1',
                          this.board,
                          0, 0,
                          playerSize,
                          playerSize,
                          "15, 119, 190",
                          "down",
                        );

    const player2 = new Bike(
                          'Player 2',
                          this.board,
                          this.board.width - playerSize, this.board.height - playerSize,
                          playerSize,
                          playerSize,
                          "195, 134, 20",
                          "up"
                        );

    player1.opponent = player2;
    player2.opponent = player1;

    player1.draw(this.context)
    player2.draw(this.context);


    return [player1, player2];
  }

  startGame() {
    this.gameRunning = true
    if (this.bikes.length === 0) {
      this.bikes = this.generatePlayers()
    }
  }

  otherBike(current) {
    return this.bikes.filter( (bike) => bike.name != current.name )[0];
  }

  prevent180(bike, direction) {
    if (bike.direction == "up" && direction == "down") {
      return true;
    }

    if (bike.direction == "down" && direction == "up") {
      return true;
    }

    if (bike.direction == "left" && direction == "right") {
      return true;
    }

    if (bike.direction == "right" && direction == "left") {
      return true;
    }
  }

  changeDirection(bike_index, direction) {
    const bike = this.bikes[bike_index];

    if (this.prevent180(bike, direction)) {
      console.log(bike.direction, direction);
      return;
    }
    bike.direction = direction
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
    for (let i = 0; i < this.bikes.length; i++) {
      if (!this.gameRunning) {
        this.winner = this.bikes[i].name;
        console.log("winner", this.winner)
        this.bikes[i].drawHistory(this.context);
        this.bikes[i].drawBike(this.context);
        return;
      }
      if (this.bikes[i].draw(this.context)) {
        this.gameRunning = false;
      }
    }
  }
}

module.exports = Game
