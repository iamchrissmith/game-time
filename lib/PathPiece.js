class PathPiece {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }

  makeColor(color, opacity) {
    return 'rgba(' + color + ', ' + opacity + ')'
  }
}

module.exports = PathPiece
