import styles from './InfoCard.module.css'

const InfoCard = ({ data = [] }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <p key={item.label}>
          <span className={styles.label}>{item.label}:</span> {item.value}
        </p>
      ))}
    </div>
  )
}

export default InfoCard
