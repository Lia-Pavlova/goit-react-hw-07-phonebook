import axios from 'axios'
import shortid from 'shortid'
import phoneActions from './phoneActions'

axios.defaults.baseURL =
  'https://6199fec19022ea0017a7afc2.mockapi.io/phonebook/'

// fetchContacts - использует синхронные медоды phoneActions по http запросу. (до, успех и ошибка)

//--- fetchContacts ---
const fetchContacts = () => async (dispatch) => {
  dispatch(phoneActions.fetchContactsRequest())

  try {
    const { data } = await axios.get('/contacts')
    dispatch(phoneActions.fetchContactsSuccess(data))
  } catch (error) {
    dispatch(phoneActions.fetchContactsError(error.massage))
  }
}

//--- addContact ---
const addContact = (contactData) => (dispatch) => {
  const contact = {
    id: shortid.generate(),
    ...contactData,
    completed: false,
  }

  dispatch(phoneActions.addContactsRequest())

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(phoneActions.addContactsSuccess(data)))
    .catch((error) => dispatch(phoneActions.addContactsError(error.massage)))
}

//--- deleteContacts ---
const deleteContacts = (contactId) => (dispatch) => {
  dispatch(phoneActions.deleteContactsRequest())

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(phoneActions.deleteContactsSuccess(contactId)))
    .catch((error) => dispatch(phoneActions.deleteContactsError(error.massage)))
}

const phoneOperations = { fetchContacts, addContact, deleteContacts }
export default phoneOperations

//------------------------
// //--- fetchContacts ---
// export const fetchContacts = createAsyncThunk(
//   phoneActions.fetchContacts,
//   async () => {
//     const contacts = await fetchContactsAPI()
//     return contacts
//   },
// )

// //--- addContact ---
// export const addContacts = createAsyncThunk(
//   phoneActions.addContacts,
//   async (contactData) => {
//     const { name, number } = contactData
//     const contact = await addContactsAPI(name, number)

//     return contact
//   },
// )

// //--- deleteContacts ---
// export const deleteContacts = createAsyncThunk(
//   phoneActions.deleteContacts,
//   async (contactId) => {
//     if (!contactId) {
//       return
//     }
//     const contact = await deleteContactsAPI(contactId)

//     return contact
//   },
// )
