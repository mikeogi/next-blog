import EpisodeItem from "../EpisodeItem/EpisodeItem";
import styles from './Episodes.module.css'

const Episodes = ({ data = [] }) => {
  return (
    <div className={styles.container}>
      {data.map((episode) => (
        <div key={episode.id} className={styles.item}>
          <EpisodeItem
            name={episode.name}
            id={episode.id}
            airDate={episode.air_date}
          />
        </div>
      ))}
    </div>
  )
}

export default Episodes
