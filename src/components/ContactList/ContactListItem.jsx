import { useDeleteContactMutation } from '../../services/contactsAPI'
import PropTypes from 'prop-types'

import s from './ContactList.module.css'

export default function ContactItem({ contact }) {
  const [delItem] = useDeleteContactMutation()
  return (
    <li className={s.item}>
      <p className={s.name}>{contact.name}</p>
      <div>
        <a className={s.tel} href={`tel:${contact.phone}`}>
          {contact.phone}
        </a>

        <button
          className={s.btnDel}
          id={contact.id}
          onClick={() => delItem(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.string,
  }),
  delItem: PropTypes.func,
}
