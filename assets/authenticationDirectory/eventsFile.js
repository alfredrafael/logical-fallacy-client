'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const ajaxCallsFile = require('./ajaxCallsFile.js')
const userInterfaceFile = require('./userInterfaceFile.js')
// const store = require('../store')

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

    const flash_card_id = $('event.target').closest('section').data('id')

    if (confirm('Yo! You shuer yu wanna dilit ')) {
        ajaxCallsFile.onDeleteExample(flash_card_id)
            .then(() => onGetAllExamples(event))
            .catch(userInterfaceFile.deleteExampleFailure)
    }
}

const addHandleBarComponent = () => {
    $('showing-cards-handlebars').on('click', 'button', onDeleteExample)
}



module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword,
    onCreateExample,
    onGetAllExamples,
    addHandleBarComponent
}

