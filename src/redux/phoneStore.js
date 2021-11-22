import { configureStore } from '@reduxjs/toolkit'

import { filterReducer } from './phoneReducer'
import { contactsApi } from '../services/contactsAPI'

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})

//--------------------------------------------------
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// import logger from 'redux-logger'
// import phoneReducer from './phoneReducer'

// export const store = configureStore({
//   reducer: {
//     contacts: phoneReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
//   devTools: process.env.NODE_ENV !== 'development',
// })
