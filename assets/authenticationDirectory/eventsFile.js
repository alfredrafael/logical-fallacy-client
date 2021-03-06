'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const ajaxCallsFile = require('./ajaxCallsFile.js')
const userInterfaceFile = require('./userInterfaceFile.js')
const store = require('/Users/alfredrafael/wdi/projects/project-2-client/assets/scripts/store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const dataToSend = getFormFields(event.target)
  console.log(dataToSend)
  ajaxCallsFile.signUpAjaxCall(dataToSend)
    //.then(console.log)
    .then(userInterfaceFile.signUpUserInterfaceSuccess)
    // .catch(console.log)
    .catch(userInterfaceFile.signUpUserInterfaceFailure)
}

const onGetAllExamples = function (event) {
  event.preventDefault()

  ajaxCallsFile.onGetAllExamplesAjaxCall()
    .then(userInterfaceFile.onGetAllExamplesUserInterfaceSuccess)
    .catch(userInterfaceFile.onGetAllExamplesUserInterfaceFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const dataToSend = getFormFields(event.target)
  ajaxCallsFile.signInAjaxCall(dataToSend)   // console.log(dataToSend)
    .then(userInterfaceFile.signInUserInterfaceSuccess)     //.then(console.log)
    .then(() => onGetAllExamples(event))
    .catch(userInterfaceFile.signInUserInterfaceFailure)     // .catch(console.log)
}

const onSignOut = function () {
  ajaxCallsFile.signOutAjaxCall()
    .then(userInterfaceFile.signOutSuccessUserInterface)
    .catch(userInterfaceFile.signOutFailureUserInterface)
}

const onChangePassword = function (e) {
  e.preventDefault() // standard for this procedure

  const dataInTheForm = getFormFields(event.target)
  ajaxCallsFile.changePasswordAjaxCall(dataInTheForm)
    .then(userInterfaceFile.onChangePasswordSuccess)
    .catch(userInterfaceFile.onChangePasswordFailure)
}

const onCreateExample = function (e) {
  e.preventDefault()

  const userExample = getFormFields(event.target)
  ajaxCallsFile.createExampleAjaxCall(userExample)
    .then(() => onGetAllExamples(e))
    .then(userInterfaceFile.onCreateExampleSuccess)
    .catch(userInterfaceFile.onCreateExampleFailure)
}

const onDeleteExample = function (event) {
  event.preventDefault()
  store.flash_card_id = $(event.target).data('id')

  if (confirm('Are you sure you want to delete this example?')) {
    ajaxCallsFile.onDeleteExampleAjaxCall()
      .then(() => onGetAllExamples(event))
      .catch(userInterfaceFile.deleteExampleFailure)
  }
}

const onUpdateIndexCard = function (e) {
  e.preventDefault()
  console.log(event)
  const dataOnForm = getFormFields(e.target)
  store.id = $(e.target).data('id')
  ajaxCallsFile.updateIndexCardAjaxCall(dataOnForm)
    .then(() => onGetAllExamples(e))
    .catch(userInterfaceFile.updateFailure)
}

const addHandleBarComponent = () => {
  $('showing-cards-handlebars').on('click', onDeleteExample)
}


const addHandlers = () => {

  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out-button').on('click', onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
  $('#create-example-form').on('submit', onCreateExample)
  $('.see-examples').on('click', onGetAllExamples)
  $('#showing-cards-handlebars').on('click', '.delete-card-button', onDeleteExample)
  $('#showing-cards-handlebars').on('submit', '.update-example-form', onUpdateIndexCard)
  // $('#showing-cards-handlebars').on('click', '.update-example-section', function () {
  //     alert("this is working")
  // })
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateExample,
  onGetAllExamples,
  addHandleBarComponent,
  addHandlers,
  onDeleteExample,
  onUpdateIndexCard
}
