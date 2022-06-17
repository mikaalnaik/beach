import React from 'react';
import { ParticlesAnimation } from 'src/components/beach-card/particle';
import { getBeachConstants } from 'src/utils/beachPositions';
import beachRouteMatch from 'src/utils/beachRouteMatch';
import fetch from 'node-fetch';
import { getLastReportingDateFromToronto } from 'src/utils/beaches/toronto-beaches';
import styles from './style.module.scss';

export async function getStaticPaths() {
  return {
    paths: [
      '/beach/hanlans-point',
    ],
    fallback: 'blocking',
  };
}

const getBeachData = async (id: number) => {
  const startDate = await getLastReportingDateFromToronto();

  const r = await fetch(`https://secure.toronto.ca/opendata/adv/beach_results/v1?format=json&startDate=${startDate}&endDate=${startDate}&beachId=${id}`);
  const rawData = await r.json();
  return rawData;
};

export async function getStaticProps({ params }) {
  const beachID = beachRouteMatch(params.beachName);
  const beachName = getBeachConstants(beachID).displayName;
  const reading = await getBeachData(beachID);

  const beachData = {
    name: beachName,
    reading,
  };

  return {
    props: {
      beachData,
    },
    revalidate: 3600, // In seconds
  };
}

export default function BeachPage({ beachData }) {
  return (
    <div className={styles.component}>
      <section className={styles.content}>
        <h1>
          {beachData?.name}
        </h1>
        <h4>
          {beachData?.reading[0].data[0].eColi || '?'} E. coli
        </h4>
      </section>
      <div className={styles.particle}>
        <ParticlesAnimation ecoli={beachData?.reading.eColi} />
      </div>
    </div>
  );
}
