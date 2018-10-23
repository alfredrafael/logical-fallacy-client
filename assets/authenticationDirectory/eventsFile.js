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


const onSignIn = function (event) {
    event.preventDefault()
    const dataToSend = getFormFields(event.target)
    console.log(dataToSend)
    ajaxCallsFile.signInAjaxCall(dataToSend)
        //.then(console.log)
        .then(userInterfaceFile.signInUserInterfaceSuccess)
        // .catch(console.log)
        .catch(userInterfaceFile.signInUserInterfaceFailure)
}

const onSignOut = function () {
    ajaxCallsFile.signOutAjaxCall()
        .then(userInterfaceFile.signOutSuccessUserInterface)
        .catch(userInterfaceFile.signOutFailureUserInterface)
}

const onChangePassword = function (e) {
    e.preventDefault()

    const dataInTheForm = getFormFields(event.target)
    ajaxCallsFile.changePasswordAjaxCall(dataInTheForm)
        .then(userInterfaceFile.onChangePasswordSuccess)
        .catch(userInterfaceFile.onChangePasswordFailure)
}

const onCreateExample = function (e) {
    e.preventDefault()

    const userExample = getFormFields(event.target)
    ajaxCallsFile.createExampleAjaxCall(userExample)
        .then(userInterfaceFile.onCreateExampleSuccess)
        .catch(userInterfaceFile.onCreateExampleFailure)

}

const onGetAllExamples = function (event) {
    event.preventDefault()

    ajaxCallsFile.onGetAllExamplesAjaxCall()
        .then(userInterfaceFile.onGetAllExamplesUserInterfaceSuccess)
        .catch(userInterfaceFile.onGetAllExamplesUserInterfaceFailure)
}

const onDeleteExample = function (event) {
    event.preventDefault()

    store.flash_card_id = $(event.target).data('id')

    // const flash_card_id = $('event.target').closest('section').data('id')

    if (confirm('Are you sure you want to delete this example?')) {
        ajaxCallsFile.onDeleteExampleAjaxCall()
            .then(() => onGetAllExamples(event))
            .catch(userInterfaceFile.deleteExampleFailure)
    }
}

const addHandleBarComponent = () => {
    $('showing-cards-handlebars').on('click', onDeleteExample)
}

const onUpdateIndexCard = function (e) {
    e.preventDefault()
    console.log(event)
    const dataOnForm = getFormFields(e.target)
    store.id = $(e.target).data('id')
    ajaxCallsFile.updateIndexCardAjaxCall(dataOnForm)
        .then(userInterfaceFile.updateSucess)
        .catch(userInterfaceFile.updateFailure)
}

const addHandlers = () => {
    $('#sign-up-form').on('submit', onSignUp)
    $('#sign-in-form').on('submit', onSignIn)
    $('#sign-out-button').on('click', onSignOut)
    $('#change-password-form').on('submit', onChangePassword)
    $('#create-example-form').on('submit', onCreateExample)
    $('#see-examples-tab').on('click', onGetAllExamples)
    $('#showing-cards-handlebars').on('click', '.delete-card-button', onDeleteExample)
    $('#showing-cards-handlebars').on('submit', '.update-example-form', onUpdateIndexCard)
    // $('.editButton').on('submit', $('.update-example-section').removeClass('hidden'))
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

