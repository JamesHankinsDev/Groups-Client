'use strict'

const showGroupsTemplate = require('../templates/groups-page.handlebars')
const showGroupTemplate = require('../templates/single-group-page.handlebars')

const messageReset = function () {
  $('form').trigger('reset')
  $('.system-message').delay(2000).fadeOut(200)
}

// Delete Group
const deleteSuccess = (responseData) => {
  $('.system-message').show()
  $('.system-message').text('Group Deleted')
  messageReset()
}

const deleteFailure = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Uh oh - looks like that didn't work...`)
  messageReset()
}

// get all groups
const getGroupsSuccess = responseData => {
  $('.secondary').addClass('hide')
  $('.GroupsViewAll').removeClass('hide')
  $('.createGroupView').addClass('hide')
  $('.title').text('Explore new communities')
  const showGroupsHtml = showGroupsTemplate({ groups: responseData.groups })
  $('.content').html('')
  $('.content').append(showGroupsHtml)
}

const getGroupsFail = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Uh oh - looks like that didn't work...`)
  messageReset()
}

// get a single groups
const getGroupSuccess = responseData => {
  const showGroupHtml = showGroupTemplate({ group: responseData.group })
  $('.content').html('')
  $('.content').append(showGroupHtml)
}

const getGroupFail = responseData => {
  $('.system-message').show()
  $('.system-message').text(`Uh oh - looks like that didn't work...`)
  messageReset()
}

// create a group
const createGroupSuccess = responseData => {
  $('.system-message').show()
  $('.system-message').text('Created Successfuly')
  messageReset()
}

const createGroupFail = responseData => {
  $('.system-message').show()
  $('.system-message').text('Whoops! Something went wrong...')
  messageReset()
}

module.exports = {
  getGroupsSuccess,
  getGroupsFail,
  createGroupSuccess,
  createGroupFail,
  getGroupFail,
  getGroupSuccess,
  deleteSuccess,
  deleteFailure
}