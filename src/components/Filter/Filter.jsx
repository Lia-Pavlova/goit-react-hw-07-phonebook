import TextField from '@mui/material/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../redux/phoneActions'
import s from './Filter.module.css'

export default function Filter() {
  const value = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const onChange = (e) => dispatch(setFilter(e.target.value))
  return (
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
}
