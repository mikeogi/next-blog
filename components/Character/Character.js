import Image from 'next/image'
import styles from './Character.module.css'
import Link from "next/link";

const Character = ({
  id,
  name,
  status,
  gender,
  image,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          src={image}
          alt={name}
          className={styles.img}
          width="280px"
          height="280px"
        />
      </div>
      <div className={styles.info}>
        <p>
          <span className={styles.label}>name:</span> {name}
        </p>
        <p>
          <span className={styles.label}>gender:</span> {gender}
        </p>
        <p>
          <span className={styles.label}>status:</span> {status}
        </p>
      </div>
      <Link href={`/characters/${id}`}>
        <a className={styles.moreLink}>
          More
        </a>
      </Link>
    </div>
  )
}

export default Character
