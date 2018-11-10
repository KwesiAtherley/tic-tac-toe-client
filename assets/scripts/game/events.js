'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameLogic = require('./gameLogic.js')

const onUpdateMove = function (event) {
  event.preventDefault()
  const player = store.player
  const data = $(event.target).data()
  const id = data.cellIndex
  store.cells[id] = player
  console.log(id)
  console.log(store)
  api.onUpdateMove(id, player)
    .then()
    .catch()
  gameLogic.switchPlayer(player)
  gameLogic.findWinner(store.cells)
}

const onNewGame = function (event) {
  event.preventDefault()
  // console.log('new game started!')
  // const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.failure)
}

const addHandlers = function () {
  $('#play-game').on('submit', onNewGame)
}

// let whichTurn = (0)
//
// const whosTurnIsIt = function (aTurn) {
//   let chance = ('x')
//   if (aTurn % 2 === 0) {
//     chance = 'x'
//   } else {
//     chance = 'o'
//   }
//   return chance
// }
//
// for (let i = 0; i < 9; i++) {
//   const whosTurn = whosTurnIsIt(whichTurn)
//   // console.log('whichTurn', whichTurn)
//   whichTurn++
//   // console.log('whosTurn', whosTurn)
//   whosTurnIsIt(0, 'x')
// }
module.exports = {
  onUpdateMove,
  onNewGame,
  addHandlers
}
