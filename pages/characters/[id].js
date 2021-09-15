import Head from "next/head";
import Image from 'next/image'
import {useMemo} from "react";
import {gql} from "@apollo/client";
import InfoCard from "../../components/InfoCard";
import styles from "./CharacterPage.module.css";
import apolloClient from "../../services/apollo";

const Character = ({ data = {} }) => {
  const {
    name,
    id,
    species,
    status,
    gender,
    image,
  } = data

  const info = useMemo(() => {
    return [
      { label: 'id', value: id },
      { label: 'name', value: name },
      { label: 'species', value: species },
      { label: 'status', value: status },
      { label: 'gender', value: gender },
    ]
  }, [data])

  return (
    <div className={styles.container}>
      <Head>
        <title>Character - {name}</title>
        <meta data-n-head="ssr" property="og:type" content="website" />
        <meta property="og:title" content={`Character - ${name}`} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta data-hid="description" name="description" content={`Character ${species} - ${name}`} />
      </Head>
      <div className={styles.content}>
        <div className={styles.imgWrapper}>
          <Image
            src={image}
            alt={name}
            className={styles.img}
            width="280px"
            height="280px"
          />
        </div>
        <div>
          <InfoCard data={info} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  const { data } = await apolloClient.query({
    query: gql`
      query Character {
        character(id: ${id}) {
          id
          name
          species
          status
          gender
          image
        }
      }
    `
  })

  return {
    props: {
      data: data.character,
    }
  }
}


export default Character
