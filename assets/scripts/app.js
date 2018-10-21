'use strict'

const eventsFile = require('../authenticationDirectory/eventsFile.js')
const store = require('./store.js')

$(() => {
  $('#sign-up-button').on('click', eventsFile.onSignUp)
  //$('#sign-in-button').on('submit', eventsFile.onSignIn)

})


// $('#sign-up-button').on('click', function (e) {
//   e.preventDefault()
//   alert("button clicked")
//   console.log('button clicked')
// })