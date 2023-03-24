import React from 'react';
import BeachCard from '../components/beach-card';
import Layout from 'src/components/layout';
import styles from './style.module.scss';

import type { Beach } from 'src/types/beaches';
import Head from 'next/head';
import { HeavyRainFallAdvisory } from 'src/data/advisories';
import { getLastTorontoBeachUpdate } from 'src/utils/beaches/get-latest';
import { getTorontoReadings } from 'src/utils/beaches/get-beaches';

export async function getStaticProps() {
  let beachData = []
  try {
    const lastUpdate = await getLastTorontoBeachUpdate()
    const readings = await getTorontoReadings(lastUpdate, lastUpdate)

    const collectionDate = readings[0].CollectionDate;
    beachData = readings[0].data.map(reading => {
      return {
        ...reading,
        collectionDate
      }
    })
  } catch (error) {
    console.log('error', error);
  }

  return {
    props: {
      beaches: beachData,
    },
    revalidate: 3600, // In seconds
  };
}

interface Props {
  beaches: Beach[];
}

export default function Home({ beaches }: Props) {
  const hasAdvisory = beaches.some(
    beach => beach.advisory === HeavyRainFallAdvisory
  );

  const beachCards = beaches.map((beach, index) => (
    <BeachCard beach={beach} key={index} />
  ));

  return (
    <Layout>

      <section className={styles.description}>
        {/* <p>E. coli measurements are per 100 ml of water.</p> */}
        {hasAdvisory && <p>{HeavyRainFallAdvisory}</p>}
        <div className={styles['beach-list']}>{beachCards}</div>
      </section>
    </Layout>
  );
}
