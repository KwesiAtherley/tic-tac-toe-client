'use strict'
const store = require('../store.js')
const config = require('../config.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json'
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

const onUpdateMove = function (id, value) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'game': {
          'cell': {
            'index': id,
            'value': value
          },
          'over': false
        }
      })
  })
}

module.exports = {
  onUpdateMove,
  getGame,
  newGame
}
