'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}
const onSignOut = function (event) {
  // event.preventDefault()
  // const userData = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

// const gameboard = []
// const playerX = []
// const playerO =[]
// const currentgame = []

// set playerx to start
// set that turn to 0
// then loop through the size of the array(9)
// to rotate the turns assign even numbers to playerO and odd to playerX
// maybe something like if turn % 2 === 0

// if playerX(clicks data cell 1) {
//   played.push(clicks)
//   lock off cell
// }

// const played = function (currentGame) {
//   if played.includes([0,1,2]) {
//     console.log('You Won')
//   } else {
//     played.includes([0,3,6]) {
//       console.log('You Won')
//     } else {
//       played.includes([0,4,8]) {
//         console.log('You Won')
//       } else {
//         played.includes([3,4,5]) {
//           console.log('You Won')
//         } else {
//           played.includes([6,7,8]) {
//             console.log('You Won')
//           } else {
//             played.includes([2,5,8]) {
//               console.log('You Won')
//             } else {
//               played.includes([6,4,2]) {
//                 console.log('You Won')
//               } else {
//                 played.includes([7,4,1]) {
//                   console.log('You Won')
//                 } else { console.log('Game Tied')}
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut

}
