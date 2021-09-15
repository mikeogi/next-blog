import Head from "next/head";
import styles from './../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <meta property="og:title" content="Rick and Morty" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta data-hid="description" name="description" content="The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying car." />
        <meta data-n-head="ssr" property="og:type" content="website" />
      </Head>
      <h2 className={styles.text}>Rick and Morty site</h2>
    </div>
  )
}
