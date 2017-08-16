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
  }

  draw(context) {
    let newPathPiece = new PathPiece(this.x, this.y, this.width, this.height);

    context.fillStyle = this.makeColor(this.color, 1);
    context.fillRect(newPathPiece.x,
                newPathPiece.y,
                newPathPiece.width,
                newPathPiece.height);

    if (this.direction && this.isAlive) {
      this.move();
      this.updateHistory(newPathPiece);
      this.drawHistory(context)
    }
  }

  drawHistory(context) {
    this.history.forEach( (tail) => {
      let percentage = this.history.indexOf(tail) / this.history.length

      if (percentage < 0.4) {
        percentage = 0.4
      }
      context.fillStyle = tail.makeColor(this.color, percentage );
      context.fillRect(tail.x, tail.y, tail.width, tail.height);
    })
  }

  updateHistory(pathPiece) {
    this.history.push(pathPiece)
    if ( this.history.length > 500 ) {
      this.history.shift()
    }
  }

  move() {
    switch (this.direction) {
    case "down":
      if (this.y >= this.board.height) {
        this.y = 0
      } else {
        this.y += this.length
      }
      break;
    case "up":
      if (this.y <= 0) {
        this.y = this.board.height
      } else {
        this.y -= this.length
      }
      break;
    case "left":
      if (this.x <= 0) {
        this.x = this.board.width
      } else {
        this.x -= this.length
      }
      break;
    case "right":
      if (this.x >= this.board.width) {
        this.x = 0
      } else {
        this.x += this.length
      }
      break;
    }

    return this
  }
}

module.exports = Bike
