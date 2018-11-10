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
  // console.log(id)
  // console.log(store)
  api.onUpdateMove(id, player)
    .then(ui.onUpdateMoveSuccess)
    .catch(ui.failure)
  gameLogic.checkBox(id, player)
  gameLogic.switchPlayer(player)
  gameLogic.findWinner(store.cells)
}

const onNewGame = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.failure)
}

const addHandlers = function () {
  $('#play-game').on('submit', onNewGame)
}

// }
module.exports = {
  onUpdateMove,
  onNewGame,
  addHandlers
}
