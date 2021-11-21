import { useState } from 'react'
import { connect } from 'react-redux'

import phoneOperations from '../../redux/phoneOperations'

import s from './ContactForm.module.css'

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  // --- input  to "input" ---

  const handleChange = (event) => {
    const { name, value } = event.currentTarget

    switch (name) {
      case 'name':
        setName(value)
        break

      case 'number':
        setNumber(value)
        break

      default:
        return
    }
  }

  // --- add contact via button ---

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({ name, number })
    setName('')
    setNumber('')
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
          required
          value={name}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The phone number must be digits and may contain spaces, dashes, parentheses and may start with +"
          required
          value={number}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <button type="submit" className={s.btnAdd}>
        Add contact
      </button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => dispatch(phoneOperations.addContact(value)),
})

export default connect(null, mapDispatchToProps)(ContactForm)
