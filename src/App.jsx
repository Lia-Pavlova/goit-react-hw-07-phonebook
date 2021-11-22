// Import components
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import ContactForm from './components/ContactForm/ContactForm'
import { ToastContainer } from 'react-toastify'
import '../node_modules/react-toastify/dist/ReactToastify.css'

import s from './App.module.css'

function App() {
  return (
    <div className={s.app}>
      <h1 className={s.title}>Phonebook</h1>
      <ToastContainer autoClose={3000} position="top-center" />
      <ContactForm />
      <h2 className={s.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}

export default App
