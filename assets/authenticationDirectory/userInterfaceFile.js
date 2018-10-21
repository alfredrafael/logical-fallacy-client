'use strict'

//require = something'

const signUpUserInterfaceSuccess = () => {
    $('#show-sign-up-message').html('Sign up successful')
    $('#show-sign-up-message').trigger('reset')
}

const signUpUserInterfaceFailure = () => {
    $('#show-sign-up-message').html('Sign up didn\'t work')
    $('#show-sign-up-message').trigger('reset')
}

