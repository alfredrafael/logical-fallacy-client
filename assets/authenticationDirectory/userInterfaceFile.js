'use strict'

const store = require('../scripts/store')

$(() => {
    $('.study-materials').hide()
    $('.about-section').hide()
    $('.create-example').hide()
})

const signUpUserInterfaceSuccess = () => {
    $('#show-sign-up-message').html('Sign up successful. SIGN IN now')
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
    $('.about-section').show()
    $('.sign-in-out').hide()


}

const signInUserInterfaceFailure = () => {
    $('#show-sign-in-message').html('You were not able to sign in')
    $('#show-sign-in-message').trigger('reset')
    $("#show-sign-in-message").fadeOut(3000)
    $('#sign-in-form').trigger('reset')
}

const signOutSuccessUserInterface = () => {
    $('.sign-in-out').show()
}

const signOutFailureUserInterface = () => {
    $('#sign-out-failed-message').html("Sign out failed")
}

module.exports = {
    signUpUserInterfaceSuccess,
    signUpUserInterfaceFailure,
    signInUserInterfaceSuccess,
    signInUserInterfaceFailure,
    signOutSuccessUserInterface,
    signOutFailureUserInterface
}