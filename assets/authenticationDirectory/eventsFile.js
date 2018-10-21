'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const ajaxCallsFile = require('./ajaxCallsFile.js')
const userInterfaceFile = require('./userInterfaceFile.js')


const onSignUp = function (e) {
    e.preventDefault()
    const dataToSend = getFormFields(event.target)
    console.log(dataToSend)
    ajaxCallsFile.signUpAjaxCall(dataToSend)
        .then(userInterfaceFile.signUpUserInterfaceSuccess)
        .catch(userInterfaceFile.signUpUserInterfaceFailure)
}

module.exports = {
    onSignUp
}