import BeachCard from '../components/beach-card';
import Layout from 'src/components/layout';
import fetch from 'node-fetch';
import { endpoint } from 'src/data/endpoints';
import styles from './style.module.scss';

import type { Beach } from 'src/types/beaches';

export async function getStaticProps() {
  const beachResponse = await fetch(`${endpoint}/beaches/latest`);
  const beaches = await beachResponse.json();

  return {
    props: {
      beaches,
    },
    revalidate: 3600, // In seconds
  };
}

interface Props {
  beaches: Beach[];
}

export default function Home({ beaches }: Props) {

  const beachCards = beaches.map((beach, index) => (
    <BeachCard beach={beach} key={index} />
  ));

  return (
    <Layout>
      <section className={styles.description}>
        <p>
          E. coli measurements are per 100 ml of water.
        </p>
        <div className={styles['beach-list']}>
          {beachCards}
        </div>
      </section>
    </Layout>
  );
}
