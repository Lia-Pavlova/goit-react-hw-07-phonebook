import ContactItem from './ContactListItem'

import { useGetContactsQuery } from '../../services/contactsAPI'
import { useSelector } from 'react-redux'

import Loader from '../Loader/Loader.jsx'
import s from './ContactList.module.css'

export default function ContactList() {
  const filter = useSelector((state) => state.filter)

  const { data, isFetching } = useGetContactsQuery()

  return (
    <>
      {isFetching && <Loader />}

      {data && !isFetching && (
        <ul className={s.contacts}>
          {data
            .filter((contact) =>
              contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
            )
            .map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
        </ul>
      )}
    </>
  )
}
