import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../services/contactsAPI'

import s from './ContactForm.module.css'

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm()

  const { data: contacts } = useGetContactsQuery()
  const [addContact] = useAddContactMutation()

  const onSubmit = (data) => {
    const existContact = contacts.some(
      (el) => el.name.toLowerCase() === data.name.toLowerCase(),
    )
    const existNumber = contacts.some(
      (el) => el.phone.toLowerCase() === data.phone.toLowerCase(),
    )
    if (existContact) {
      toast.error(`Name is already in contact list`)
      return
    } else if (existNumber) {
      toast.error(`Number is already in contact list`)
      return
    } else {
      addContact(data)
      toast.success(`Successfully added!`)
      reset()
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
          {...register('name', {
            required: true,
            pattern: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          })}
          className={s.input}
        />
        {errors?.name?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
        {errors?.name?.type === 'pattern' && (
          <p className={s.error}>Alphabetical characters only</p>
        )}
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          title="The phone number must be digits and may contain spaces, dashes, parentheses and may start with +"
          {...register('phone', {
            required: true,
            pattern: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
          })}
          className={s.input}
        />
        {errors?.phone?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
        {errors?.phone?.type === 'pattern' && (
          <p className={s.error}>Numeric characters only</p>
        )}
      </label>
      <button type="submit" className={s.btnAdd}>
        Add contact
      </button>
    </form>
  )
}
