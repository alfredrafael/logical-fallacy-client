'use strict'

const store = require('../scripts/store')


// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


$(() => {
    $('.study-materials').hide()
    $('.about-section').hide()
    $('.create-example').hide()
    $('.change-password-section').hide()
    
})

const signUpUserInterfaceSuccess = () => {
    $('#show-sign-up-message').html('Sign up successful. SIGN IN now')
    $('#show-sign-up-message').trigger('reset')
    $("#show-sign-up-message").fadeOut(2000)
    $('#sign-up-form').trigger('reset')
}

const signUpUserInterfaceFailure = () => {
    $('#show-sign-up-message').html('Sign up didn\'t work')
    $('#show-sign-up-message').trigger('reset')
    $("#show-sign-up-message").fadeOut(2000)
    $('#sign-up-form').trigger('reset')
}


const signInUserInterfaceSuccess = (response) => {
    store.user = response.user
    $('#show-sign-in-message').html('Sign in successful')
    $('#show-sign-in-message').trigger('reset')
    $("#show-sign-in-message").fadeOut(2000)
    $('#sign-in-form').trigger('reset')
    $('.about-section').show()
    $('.sign-in-out').hide()

    $('.study-materials').show()
    $('.about-section').show()
    $('.create-example').show()
    $('.change-password-section').show()


}

const signInUserInterfaceFailure = () => {
    $('#show-sign-in-message').html('You were not able to sign in')
    $('#show-sign-in-message').trigger('reset')
    $("#show-sign-in-message").fadeOut(3000)
    $('#sign-in-form').trigger('reset')
}

const signOutSuccessUserInterface = () => {
    $('.sign-in-out').show()
    $('.study-materials').hide()
    $('.about-section').hide()
    $('.create-example').hide()
}

const signOutFailureUserInterface = () => {
    $('#sign-out-failed-message').html("Sign out failed")
}

const onChangePasswordSuccess = () => {
    $('.display-change-password-status').html("Successful password change!")
    $('.display-change-password-status').css('color', 'green')
    $('.display-change-password-status').fadeOut(3000)
    $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = () => {
    $('.display-change-password-status').html("Successful password change!")
    $('.display-change-password-status').css('color', 'green')
    $('.display-change-password-status').fadeOut(3000)
    $('#change-password-form').trigger('reset')
}

const onCreateExampleSuccess = () => {
    $('.display-create-example-status').html("Success at posting your example")
    $('.display-create-example-status').css('color', 'green')
    $('.display-create-example-status').fadeOut(3000)
    $('#create-example-form').trigger('reset')
} 

const onCreateExampleFailure = () => {
    $('.display-create-example-status').html("It did not work")
    $('.display-create-example-status').css('color', 'red')
    $('.display-create-example-status').fadeOut(3000)
    $('#create-example-form').trigger('reset')
} 

module.exports = {
    signUpUserInterfaceSuccess,
    signUpUserInterfaceFailure,
    signInUserInterfaceSuccess,
    signInUserInterfaceFailure,
    signOutSuccessUserInterface,
    signOutFailureUserInterface,
    onChangePasswordSuccess,
    onChangePasswordFailure,
    onCreateExampleSuccess,
    onCreateExampleFailure
}