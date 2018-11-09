'use strict'
const store = require('../store.js')
const config = require('../config.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const getGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {

      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': false
      }
    }
  }
  )
}

module.exports = {
  updateGame,
  getGame,
  newGame
}
