require("!style-loader!css-loader!sass-loader!./game.scss");
const Game = require ('./Game')

const canvas = document.getElementById('game')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')

const keys = document.querySelector('.key')

const leftArrow = document.getElementById('left-arrow')
const upArrow = document.getElementById('up-arrow')
const downArrow = document.getElementById('down-arrow')
const rightArrow = document.getElementById('right-arrow')

const aKey = document.getElementById('a-key')
const wKey = document.getElementById('w-key')
const sKey = document.getElementById('s-key')
const dKey = document.getElementById('d-key')

const game = new Game(canvas)

startBtn.addEventListener('click', (e) => {
  e.preventDefault()
  game.startGame()
})

pauseBtn.addEventListener('click', (e) => {
  e.preventDefault()
  game.pauseGame()
})

resetBtn.addEventListener('click', (e) => {
  e.preventDefault()
  game.endGame()
})

resetBtn.addEventListener('click', (e) => {
  e.preventDefault()
  game.endGame()
})

const activateKey = (key) => {
  key.className += ' active'
  setTimeout(function () {
    key.className = 'key'
  }, 100);
}

const steerBike = (key, bike, direction) => {
  activateKey(key)
  game.changeDirection(bike, direction)
}

document.addEventListener('keydown', (e) => {
  if (!game.gameRunning) {
    return
  }
  
  if ( e.keyCode === 37) { // left arrow	37
    steerBike(leftArrow, 0, "left")
  }

  if ( e.keyCode === 38) { // up arrow	38
    e.preventDefault()
    steerBike(upArrow, 0, "up")
  }

  if ( e.keyCode === 39) { // right arrow	39
    steerBike(rightArrow, 0, "right")
  }

  if ( e.keyCode === 40) { // down arrow	40
    e.preventDefault()
    steerBike(downArrow, 0, "down")
  }

  if ( e.keyCode === 65) { // a	65
    steerBike(aKey, 1, 'left')
  }

  if ( e.keyCode === 87) { // w	87
    steerBike(wKey, 1, 'up')
  }

  if ( e.keyCode === 83) { // s	83
    steerBike(sKey, 1, 'down')
  }

  if ( e.keyCode === 68) { // d	68
    steerBike(dKey, 1, 'right')
  }
})

requestAnimationFrame(function gameLoop() {
  if (game.gameRunning) {

    game.drawBikes()
  }
  requestAnimationFrame(gameLoop);
});
