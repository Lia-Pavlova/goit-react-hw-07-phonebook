// import { createSelector } from '@reduxjs/toolkit'

import { createSelector } from 'reselect'

//----------------------------------------------------------------------------
const getContacts = (state) => state.contacts.isLoading
const getFilter = (state) => state.contacts.filter
const getAllContacts = (state) => state.contacts.dataContacts

// --- search on filter ---

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase()

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
    )
  },
)

const phoneSelectors = { getContacts, getFilter, getVisibleContacts }

export default phoneSelectors

// ------------------------------
// --- another way ---

// const getVisibleContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizeFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter),
//   );
// };

// ------------------------------
