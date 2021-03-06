'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store.js')
// Set up event handlers

// get all books event handler:

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

//
// const.onOtherStuff
//
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

// Used to help provide memberhsips for active user
const onGetUserData = event => {
  const userID = store.user.id
  api.getUserData(userID)
    .then(ui.userDataUpdated)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetUserData
}
