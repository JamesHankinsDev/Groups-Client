'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

// Get all groups
const onGetGroups = event => {
  api.getGroups()
    .then(ui.getGroupsSuccess)
    .catch(ui.getGroupsFail)
}

// Get a single group
const onGetGroup = event => {
  const groupid = $(event.target).data('id')
  api.getGroup(groupid)
    .then(ui.getGroupSuccess)
    .catch(ui.getGroupFail)
}

// Delete a group
const deleteGroupSuccess = () => {
  ui.deleteSuccess()
  onGetGroups()
}

const onDeleteGroup = event => {
  const groupId = $(event.target).closest('ul').data('id')
  api.deleteGroup(groupId)
    .then(deleteGroupSuccess)
    .catch(ui.deleteFailure)
}

// Create a group
const createGroupSuccess = () => {
  ui.createGroupSuccess()
  onGetGroups()
}

const onCreateGroup = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.group.group_admin = store.user.email
  api.createGroup(formData)
    .then(createGroupSuccess)
    .catch(ui.createGroupFail)
}

const onUpdateGroup = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const groupID = $(event.target).data('id')
  api.updateGroup(formData, groupID)
    .then(ui.updateGroupSuccess)
    .catch(ui.fail)
}

// And Handlers that live in Handlebars Template
const addHandlers = () => {
  $('.content').on('click', '.viewGroup', onGetGroup)
  $('.content').on('click', '.deleteGroup', onDeleteGroup)
  $('.content').on('click', '.getGroups', onGetGroups)
  $('.content').on('submit', '.editGroup', onUpdateGroup)
}

module.exports = {
  addHandlers,
  onGetGroup,
  onGetGroups,
  onCreateGroup
}
