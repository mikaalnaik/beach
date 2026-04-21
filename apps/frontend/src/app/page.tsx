import React from 'react';
import BeachCard from '../components/beach-card';
import Layout from 'src/components/layout';
import styles from './style.module.scss';

import type { Beach } from 'src/types/beaches';
import { getLastTorontoBeachUpdate } from 'src/utils/beaches/get-latest';
import { getTorontoReadings } from 'src/utils/beaches/get-beaches';

const getData = async () => {
  let beachData = []
  try {
    const lastUpdate = await getLastTorontoBeachUpdate()
    const readings = await getTorontoReadings(lastUpdate, lastUpdate)

    const collectionDate = readings[0].CollectionDate;
    beachData = readings[0].data.map(reading => {
      return {
        ...reading,
        collectionDate,
      }
    })
  } catch (error) {
    // fetch failed — return empty list
  }

  return {
    beaches: beachData,
  };
}

interface Props {
  beaches: Beach[];
}

export default async function Home({ }: Props) {
  const { beaches } = await getData()

  const beachCards = beaches.map((beach, index) => (
    <BeachCard beach={beach} key={index} />
  ));

  return (
    <Layout>

      <section className={styles.description}>
        <div className={styles['beach-list']}>{beachCards}</div>
      </section>
    </Layout>
  );
}
