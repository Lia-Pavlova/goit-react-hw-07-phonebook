//--- !overwritten in phoneOperations ---

import axios from 'axios'

axios.defaults.baseURL =
  'https://6199fec19022ea0017a7afc2.mockapi.io/phonebook/'

export async function fetchContactsAPI() {
  const { data } = await axios.get('/contacts')
  return data
}

export async function addContactsAPI(contactData) {
  const { data } = await axios.post('/contacts', contactData)
  return data
}

export async function deleteContactsAPI(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`)
  return data
}
