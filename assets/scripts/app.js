'use strict'

const eventsFile = require('../authenticationDirectory/eventsFile.js')


$(() => {
  eventsFile.addHandlers()
  // $('#sign-up-form').on('submit', eventsFile.onSignUp)
  // $('#sign-in-form').on('submit', eventsFile.onSignIn)
  // $('#sign-out-button').on('click', eventsFile.onSignOut)
  // $('#change-password-form').on('submit', eventsFile.onChangePassword)
  // $('#create-example-form').on('submit', eventsFile.onCreateExample)
  // $('#see-examples-tab').on('click', eventsFile.onGetAllExamples)
  // $('#handlebars-section').on('click', ''eventsFile.onGetAllExamples)
})

// checking if it fires...
// $('#sign-up-form').on('submit', function (e) {
//   e.preventDefault()
//   alert("button clicked")
//   console.log('button clicked')
// })