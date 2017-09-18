const PathPiece = require('./PathPiece')

class Bike extends PathPiece {
  constructor(name, board, x, y, width, height, color, direction) {
    super(x, y, width, height, color)
    this.name = name;

    this.board = board

    this.length = width
    this.direction = direction
    this.history = []
    this.isAlive = true
    this.opponent = '';
  }

  drawBike(context) {
    const newPathPiece = new PathPiece(this.x, this.y, this.width, this.height / 2);

    context.fillStyle = this.makeColor(this.color, 1);
    context.fillRect(newPathPiece.x - 4,
                newPathPiece.y - 4,
                newPathPiece.width + 8,
                newPathPiece.height + 8);
    return newPathPiece;
  }

  draw(context) {
    const newPathPiece = this.drawBike(context)
    if (this.direction && this.isAlive) {
      this.move();
      this.updateHistory(newPathPiece);
      this.drawHistory(context);
      return this.detectCollision();
    }
  }

  detectCollision() {
    if (this.x < 0 || this.x > this.board.width || this.y < 0 || this.y > this.board.height) {
      console.log(this.name, "Ran into wall", this.x, this.y);
      return true;
    }

    for (let i = 0; i < this.history.length; i++) {
      if (this.x == this.history[i].x && this.y == this.history[i].y) {
        console.log(this.name, "Ran into self", this.x, this.history[i].x, this.y, this.history[i].y);
        return true;
      }
    }

    for (let i = 0; i < this.opponent.history.length; i++) {
      if (this.x == this.opponent.history[i].x && this.y == this.opponent.y) {
        console.log(this.name, "Ran into opponent at", this.x, this.opponent.history[i].x, this.y, this.opponent.y);
        return true;
      }
    }

    return false;
  }

  drawHistory(context) {
    this.history.forEach( (tail) => {
      console.log(tail);
      let percentage = this.history.indexOf(tail) / this.history.length

      if (percentage > 0.8) {
        percentage = 0.8
      }

      if (percentage < 0.6) {
        percentage = 0.6
      }
      context.fillStyle = tail.makeColor(this.color, percentage );
      context.fillRect(tail.x, tail.y, tail.width, tail.height);
    })
  }

  updateHistory(pathPiece) {
    this.history.push(pathPiece)
    if ( this.history.length > 100 ) {
      this.history.shift();
    }
  }

  move() {
    switch (this.direction) {
    case "down":
      this.y += this.length / 2
      break;
    case "up":
      this.y -= this.length / 2
      break;
    case "left":
      this.x -= this.length / 2
      break;
    case "right":
      this.x += this.length / 2
      break;
    }

    return this
  }
}

module.exports = Bike
