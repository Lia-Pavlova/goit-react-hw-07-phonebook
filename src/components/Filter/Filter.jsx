import TextField from '@mui/material/TextField'
import React from 'react'
import { connect } from 'react-redux'

import phoneActions from '../../redux/phoneActions'
import phoneSelectors from '../../redux/phoneSelectors'

import s from './Filter.module.css'

const Filter = ({ value, onChange }) => (
  <div className={s.filter}>
    <label>
      <TextField
        id="standard-search"
        label="Find contacts by name"
        type="search"
        variant="standard"
        color="warning"
        fullWidth
        autoComplete="off"
        // focused
        value={value}
        onChange={onChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
        required
      />
    </label>
  </div>
)

const mapStateToProps = (state) => ({
  value: phoneSelectors.getFilter(state),
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(phoneActions.filterContact(event.currentTarget.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
