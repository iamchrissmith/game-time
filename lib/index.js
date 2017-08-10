require("!style-loader!css-loader!sass-loader!./game.scss");
const Game = require ('./Game')
const Block = require ('./Block')

const canvas = document.getElementById('game')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')

const game = new Game(canvas)

canvas.addEventListener('click', (e) => {
  console.log(e)
  let newBlock = new Block(canvas, e.offsetX, e.offsetY, 10, 10)

  game.addBlock(newBlock)
})

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

requestAnimationFrame(function gameLoop() {
  if (game.gameRunning) {

    game.drawBlocks()
  }
  requestAnimationFrame(gameLoop);
});
