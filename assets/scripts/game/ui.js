'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (newGame) {
  store.games = newGame
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
