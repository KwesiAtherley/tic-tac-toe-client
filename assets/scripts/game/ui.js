'use strict'

const store = require('../store.js')

const onNewGameSuccess = function (newGame) {
  store.game = newGame.game.id
  store.cells = newGame.game.cells
  store.over = newGame.game.over
  // console.log(store)
  $('#message').html('Started New Game')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#player-turn').html(`Player: ${store.player}'s Turn`)
  $('.box').html('')
}
const onUpdateMoveSuccess = function (id) {
  if (store.player === 'x' && store.over === false && store.cells[id] === '') {
    $(event.target).html('X')
  } else if (store.player === 'o' && store.over === false && store.cells[id] === '') {
    $(event.target).html('O')
  }
}

const onGetGameSuccess = function (event) {
  $('#message').html(`Total games played: ${event.games.length}`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}
const failure = function (onFailure) {
  $('#message').html('Something went wrong, please try again')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}
module.exports = {
  onUpdateMoveSuccess,
  onNewGameSuccess,
  failure,
  onGetGameSuccess
}
