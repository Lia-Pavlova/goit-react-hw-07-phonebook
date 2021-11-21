import { createAction } from '@reduxjs/toolkit'

//--- !synchronous Action, which will come to reducer ---

//--- в ожидании (pending) ---
const fetchContactsRequest = createAction('contacts/fetchContactsRequest')

//--- выполнено (fulfilled) ---
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess')

//--- отклоненный (rejected) ---
const fetchContactsError = createAction('contacts/fetchContactsError')

const addContactsRequest = createAction('contacts/addContactsRequest')
const addContactsSuccess = createAction('contacts/addContactsSuccess')
const addContactsError = createAction('contacts/addContactsError')

const deleteContactsRequest = createAction('contacts/deleteContactsRequest')
const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess')
const deleteContactsError = createAction('contacts/deleteContactsError')

const filterContact = createAction('contacts/filterContact')

const phoneActions = {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  filterContact,
}
export default phoneActions
