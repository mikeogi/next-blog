import {gql} from "@apollo/client";
import Head from "next/head";
import {useMemo} from "react";
import apolloClient from "../../services/apollo";
import styles from './EpisodePage.module.css'
import Character from "../../components/Character";
import InfoCard from "../../components/InfoCard";

const Episode = ({ data = {} }) => {
  const {
    air_date,
    characters = [],
    id,
    name,
    episode,
  } = data

  const info = useMemo(() => {
    return [
      { label: 'id', value: id },
      { label: 'name', value: name },
      { label: 'air date', value: air_date },
      { label: 'episode', value: episode },
    ]
  }, [data])

  return (
    <div className={styles.container}>
      <Head>
        <title>Episode - {name} {episode}</title>
        <meta data-n-head="ssr" property="og:type" content="website" />
        <meta property="og:title" content={`Episode - ${name} ${episode}`} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta data-hid="description" name="description" content={`Episode - ${name} ${episode}`} />
      </Head>
      <InfoCard data={info} />
      <div className={styles.characters}>
        {characters.map((character) => (
          <div className={styles.character} key={character.id}>
            <Character
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              gender={character.gender}
              image={character.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  const { data } = await apolloClient.query({
    query: gql`
      query Episode {
        episode(id: ${id}) {
          id
          name
          air_date
          episode
          characters {
            id
            name
            image
            status
            gender
          }
        }
      }
    `
  })

  return {
    props: {
      data: data.episode,
    }
  }
}


export default Episode