'use strict'

const eventsFile = require('../authenticationDirectory/eventsFile.js')
const store = require('./store.js')

$(() => {
  $('#sign-up-form').on('submit', eventsFile.onSignUp)
  $('#sign-in-form').on('submit', eventsFile.onSignIn)

})







// checking if it fires...
// $('#sign-up-form').on('submit', function (e) {
//   e.preventDefault()
//   alert("button clicked")
//   console.log('button clicked')
// })