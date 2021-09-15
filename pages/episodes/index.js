import {gql} from "@apollo/client";
import Head from 'next/head'
import { useRouter } from 'next/router';
import apolloClient from '../../services/apollo';
import EpisodesContainer from "../../components/Episodes";
import Pagination from "../../components/Pagination";
import styles from './EpisodesPage.module.css';

export default function Episodes({ episodes = [], info = {} }) {
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
        pathname: '/episodes',
        query: { page: nextPage },
      })
    }
  }

  return (
    <div>
      <Head>
        <title>Episodes Rick and Morty</title>
        <meta data-n-head="ssr" property="og:type" content="website" />
        <meta property="og:title" content="Episodes Rick and Morty" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta data-hid="description" name="description" content="The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying car." />
      </Head>
      {episodes.length ? <EpisodesContainer data={episodes} /> : null}
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

export async function getServerSideProps(ctx) {
  const { page = 1 } = ctx.query
  const { data } = await apolloClient.query({
    query: gql`
      query Episodes {
        episodes(page: ${page}) {
          info {
            pages
          }
          results {
            id
            name
            air_date
          }
        }
      }
    `,
  })

  return {
    props: {
      episodes: data.episodes.results,
      info: data.episodes.info,
    }
  }
}
