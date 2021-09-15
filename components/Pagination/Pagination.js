import Link from 'next/link'
import useWhyDidYouUpdate from "../../hooks/useWhyDidYouUpdate";
import styles from './Pagination.module.css'

const Pagination = ({ page = 1, onChange = () => true, count = 1 }) => {
  useWhyDidYouUpdate('page')

  const handleClick = (value) => {
    onChange(value)
  }

  return (
    <div>
      <button
        className={styles.button}
        type="button"
        onClick={() => handleClick('prev')}
      >prev</button>
      <span className={styles.info}>{page} / {count}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => handleClick('next')}
      >next</button>
    </div>
  )
}

export default Pagination
