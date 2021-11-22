import s from '../Loader/Loader.module.css'
export default function Loader() {
  return (
    <div className={s.backdrop}>
      <span className={s.loader}></span>
    </div>
  )
}
