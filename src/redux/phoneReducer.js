import { createReducer } from '@reduxjs/toolkit'

import { setFilter } from './phoneActions'

export const filterReducer = createReducer('', {
  [setFilter]: (state, { payload }) => (state = payload),
})
