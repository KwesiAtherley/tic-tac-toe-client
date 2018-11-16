'use strict'
const store = require('../store.js')

const switchPlayer = function (player) {
  if (store.misclick === 'misclick') {
    return
  }
  if (store.misclick === 'click') {
    const players = player === 'x' ? 'o' : 'x'
    store.player = players
    $('#player-turn').html(`Player: ${store.player}'s Turn`)
    return players
  }
}
const checkBox = function (id, value, over) {
  if (over === true) {
    return
  }
  if (store.cells[id] === '') {
    store.cells[id] = value
    // console.log('it wrked')
    store.misclick = 'click'
  } else if (store.cells[id] === 'x' || 'o') {
    $('#message').html('Misclicked')
    $('#message').fadeOut(600)
    // console.log('Try Again')
    store.misclick = 'misclick'
  }
}
const findWinner = function (gameboard) {
  if ((gameboard[0] === 'x' && gameboard[1] === 'x' && gameboard[2] === 'x') ||
(gameboard[3] === 'x' && gameboard[4] === 'x' && gameboard[5] === 'x') ||
(gameboard[6] === 'x' && gameboard[7] === 'x' && gameboard[8] === 'x') ||
(gameboard[0] === 'x' && gameboard[3] === 'x' && gameboard[6] === 'x') ||
(gameboard[1] === 'x' && gameboard[4] === 'x' && gameboard[7] === 'x') ||
(gameboard[2] === 'x' && gameboard[5] === 'x' && gameboard[8] === 'x') ||
(gameboard[0] === 'x' && gameboard[4] === 'x' && gameboard[8] === 'x') ||
(gameboard[2] === 'x' && gameboard[4] === 'x' && gameboard[6] === 'x')) {
    store.over = true
    store.player = 'x'
    store.winner = 'x'
    // console.log('X Wins!!!')
    $('#game-message').html(' X wins!')
  } else if ((gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o') ||
(gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o') ||
(gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o') ||
(gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o') ||
(gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o') ||
(gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o') ||
(gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o') ||
(gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o')) {
    store.over = true
    store.player = 'x'
    store.winner = 'o'
    // console.log('O Wins!!!')
    $('#game-message').html('O wins!')
  } else if (gameboard[0] !== '' && gameboard[1] !== '' && gameboard[2] !== '' &&
   gameboard[3] !== '' && gameboard[4] !== '' && gameboard[5] !== '' &&
   gameboard[6] !== '' && gameboard[7] !== '' && gameboard[8] !== '') {
    store.over = true
    store.player = 'x'
    store.winner = 'Tie'
    // console.log('Game Tied')
    $('#game-message').html('Game Tied')
  }
}
module.exports = {
  switchPlayer,
  findWinner,
  checkBox
}
