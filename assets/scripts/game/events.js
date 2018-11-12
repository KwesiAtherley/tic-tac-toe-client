'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const gameLogic = require('./gameLogic.js')

const onUpdateMove = function (event) {
  event.preventDefault()
  const over = store.over
  const player = store.player
  const id = $(event.target).data().cellIndex
  api.onUpdateMove(id, player)
    .then(ui.onUpdateMoveSuccess(id))
    .catch(ui.failure)
  gameLogic.checkBox(id, player, over)
  gameLogic.switchPlayer(player)
  gameLogic.findWinner(store.cells)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.failure)
}

const addHandlers = function () {
  $('#play-game').on('submit', onNewGame)
}

const onGetGame = function (event) {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.failure)
}

module.exports = {
  onUpdateMove,
  onNewGame,
  addHandlers,
  onGetGame
}
