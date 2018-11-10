'use strict'
const store = require('../store.js')

const switchPlayer = function (playerId) {
  const player = playerId === 'x' ? 'o' : 'x'
  store.player = player
  return store.player
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
    console.log('X Wins!!!')
  } else if ((gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o') ||
(gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o') ||
(gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o') ||
(gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o') ||
(gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o') ||
(gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o') ||
(gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o') ||
(gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === 'o')) {
    console.log('O Wins!!!')
  } else if (gameboard[0] !== '' && gameboard[1] !== '' && gameboard[2] !== '' &&
   gameboard[3] !== '' && gameboard[4] !== '' && gameboard[5] !== '' &&
   gameboard[6] !== '' && gameboard[7] !== '' && gameboard[8] !== '') {
    console.log('Game Tied')
  }
}
module.exports = {
  switchPlayer,
  findWinner
}
