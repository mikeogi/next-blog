import Head from "next/head";
import {gql} from "@apollo/client";
import {useRouter} from "next/router";
import Pagination from "../../components/Pagination";
import apolloClient from "../../services/apollo";
import Character from "../../components/Character";
import styles from './CharactersPage.module.css'

const Characters = ({ characters = [], info }) => {
  const router = useRouter()
  const page = Number(router.query.page) || 1
  const { pages } = info

  const onChangePage = (value) => {
    let nextPage = router.query.page

    if (value === 'prev' && page !== 1) {
      nextPage = page - 1
    }
    if (value === 'next' && page !== pages) {
      nextPage = page + 1
    }

    if (page !== nextPage) {
      router.push({
        pathname: '/characters',
        query: { page: nextPage },
      })
    }
  }

  return (
    <div>
      <Head>
        <title>Characters Rick and Morty - {page}</title>
        <meta data-n-head="ssr" property="og:type" content="website" />
        <meta property="og:title" content={`Characters Rick and Morty - ${page}`} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta data-hid="description" name="description" content={`list of characters Rick and Morty. Page - ${page}`} />
      </Head>
      <div className={styles.characters}>
        {characters.length
          ? characters.map((character) => (
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
          ))
          : null}
      </div>
      <div className={styles.pagination}>
        <Pagination
          page={page}
          onChange={onChangePage}
          count={pages}
        />
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx, a) {
  const { page = 1 } = ctx.query
  const { data } = await apolloClient.query({
    query: gql`
      query Characters {
        characters(page: ${page}) {
          info {
            pages
          }
          results {
            id
            name
            species
            status
            gender
            image
          }
        }
      }
    `,
  })

  return {
    props: {
      characters: data.characters.results,
      info: data.characters.info,
    }
  }
}


export default Characters
