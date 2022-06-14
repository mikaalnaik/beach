import React from 'react';
import BeachCard from '../components/beach-card';
import Layout from 'src/components/layout';
import fetch from 'node-fetch';
import { endpoint } from 'src/data/endpoints';
import styles from './style.module.scss';

import type { Beach } from 'src/types/beaches';
import Head from 'next/head';
import { HeavyRainFallAdvisory } from 'src/data/advisories';

export async function getStaticProps() {
  let beaches = {};
  try {

    const beachResponse = await fetch(`${endpoint}/beaches/latest`);
    beaches = await beachResponse.json();
  } catch (error) {
    console.log('error', error);
  }

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
  const hasAdvisory = beaches.some(beach => beach.advisory === HeavyRainFallAdvisory);

  const beachCards = beaches.map((beach, index) => (
    <BeachCard beach={beach} key={index} />
  ));

  return (
    <Layout>
      <Head>
        <title>Toronto Beach Report</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="toronto beaches, water quality, beach ecoli"/>
        <meta name="description" content="The easiest way to access information about Toronto's beaches e.Coli levels and safety standards"></meta>
      </Head>
      <section className={styles.description}>
        <p>
          E. coli measurements are per 100 ml of water.
        </p>
        {hasAdvisory && (
          <p>
            {HeavyRainFallAdvisory}
          </p>
        )}
        <div className={styles['beach-list']}>
          {beachCards}
        </div>
      </section>
    </Layout>
  );
}
