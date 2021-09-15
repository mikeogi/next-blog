import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Rick and Morty with Graphql</h1>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.link}>Main</a>
        </Link>
        <Link href="/episodes">
          <a className={styles.link}>Episodes</a>
        </Link>
        <Link href="/characters">
          <a className={styles.link}>Characters</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header