'use strict'

// const store = require('../scripts/store.js')
const config = require('../scripts/config.js')

const signUpAjaxCall = (userDataSent) => {
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: userDataSent
    })
}

module.exports = {
    signUpAjaxCall
}


