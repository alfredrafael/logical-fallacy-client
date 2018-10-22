'use strict'

//const store = require('../scripts/store')

const signUpUserInterfaceSuccess = () => {
    $('#show-sign-up-message').html('Sign up successful')
    $('#show-sign-up-message').trigger('reset')
    $("#show-sign-up-message").fadeOut(2000)
    $('#sign-up-form').trigger('reset')
    //$('#sign-out-button').show()
}

const signUpUserInterfaceFailure = () => {
    $('#show-sign-up-message').html('Sign up didn\'t work')
    $('#show-sign-up-message').trigger('reset')
    $("#show-sign-up-message").fadeOut(2000)
    $('#sign-up-form').trigger('reset')
}


const signInUserInterfaceSuccess = () => {
    $('#show-sign-in-message').html('Sign in successful')
    $('#show-sign-in-message').trigger('reset')
    $("#show-sign-in-message").fadeOut(2000)
    $('#sign-in-form').trigger('reset')
}

const signInUserInterfaceFailure = () => {
    $('#show-sign-in-message').html('You were not able to sign in')
    $('#show-sign-in-message').trigger('reset')
    $("#show-sign-in-message").fadeOut(3000)
    $('#sign-in-form').trigger('reset')
}


module.exports = {
    signUpUserInterfaceSuccess,
    signUpUserInterfaceFailure,
    signInUserInterfaceSuccess,
    signInUserInterfaceFailure
}