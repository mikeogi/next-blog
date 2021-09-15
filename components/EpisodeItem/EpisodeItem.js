import Link from 'next/link'
import styles from './EpisodeItem.module.css'

const EpisodeItem = ({ name = '', airDate = '', id = 1 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>
          <span className={styles.label}>id:</span> {id}
        </p>
        <p>
          <span className={styles.label}>name:</span> {name}
        </p>
        <p>
          <span className={styles.label}>air date:</span> {airDate}
        </p>
      </div>
      <Link href={`/episodes/${id}`}>
        <a className={styles.moreLink}>
          More
        </a>
      </Link>
    </div>
  )
}

export default EpisodeItem
