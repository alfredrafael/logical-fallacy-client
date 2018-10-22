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

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword,
    onCreateExample
}

