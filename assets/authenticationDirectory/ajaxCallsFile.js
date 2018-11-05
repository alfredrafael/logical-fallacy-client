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
  //  console.log(userDataSent)
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

const changePasswordAjaxCall = (passwordDataFromDatabase) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordDataFromDatabase
  })
}

const createExampleAjaxCall = (usersExample) => {
  console.log(usersExample)
  return $.ajax({
    url: config.apiUrl + '/flash_cards',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: usersExample
  })
}

const onGetAllExamplesAjaxCall = () => {
  return $.ajax({
    url: config.apiUrl + '/flash_cards' // GET
  })
}

const onDeleteExampleAjaxCall = () => {
  return $.ajax({
    url: config.apiUrl + `/flash_cards/${store.flash_card_id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateIndexCardAjaxCall = (flashCardData) => {
  console.log(flashCardData)
  return $.ajax({
    url: config.apiUrl + `/flash_cards/${store.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: flashCardData
  })
}

module.exports = {
  signUpAjaxCall,
  signInAjaxCall,
  signOutAjaxCall,
  changePasswordAjaxCall,
  createExampleAjaxCall,
  onGetAllExamplesAjaxCall,
  onDeleteExampleAjaxCall,
  updateIndexCardAjaxCall
}

/*
const updateWorkout = function (notesData) {
  return $.ajax({
    // http://localhost:4741 or // https://frozen-sierra-35636.herokuapp.com
    url: config.apiUrl + `/workouts/${store.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: notesData
  })
}
*/
