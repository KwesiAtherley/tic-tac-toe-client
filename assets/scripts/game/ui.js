'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (newGame) {
  store.game = newGame.game.id
  store.cells = newGame.game.cells
  console.log(store)
  $('#message').html('Started New Game')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}
const onUpdateMoveSuccess = function (onUpdateMove) {
  // store.games = onUpdateMove
  console.log(store)
  $('#message').html('Started New Game')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

module.exports = {
  onUpdateMoveSuccess,
  onNewGameSuccess
}
