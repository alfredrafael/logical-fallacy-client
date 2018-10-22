'use strict'

const store = require('../scripts/store.js')
const config = require('../scripts/config.js')


const signUpAjaxCall = (userDataSent) => {
    console.log(userDataSent)
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: userDataSent
    })
}

const signInAjaxCall = (userDataSent) => {
    console.log(userDataSent)
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: userDataSent
    })
}

const signOutAjaxCall = () => {
    return $.ajax({
        url: config.apiUrl + '/sign-out',
        headers: {
            Authorization: `Token token=${store.user.token}`
        },
        method: 'DELETE'
    })

}

module.exports = {
    signUpAjaxCall,
    signInAjaxCall,
    signOutAjaxCall
}

