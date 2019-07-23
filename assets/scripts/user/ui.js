'use strict'

const store = require('./../store.js')

const messageReset = function () {
  $('form').trigger('reset')
  $('#system-message').delay(2000).fadeOut(200)
}

const signUpSuccessful = responseData => {
  $('#system-message').show()
  $('#system-message').text(`Nice - you've signed up successfully! Now please sign in!`)
  messageReset()
}

const signUpFailure = responseData => {
  $('#system-message').show()
  $('#system-message').text(`Oops! Something went wrong. Try signing in!`)
  messageReset()
}

const signInSuccess = responseData => {
  $('#system-message').show()
  $('#system-message').text(`Welcome ${responseData.user.email}! Check out what's new in your community!`)
  messageReset()

}

const signInFailure = responseData => {
  $('#system-message').show()
  $('#system-message').text(`Oops! Forgot you password? Tough...`)
  messageReset()
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccess,
  signInFailure
}