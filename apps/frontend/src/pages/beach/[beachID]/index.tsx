import React from 'react';
import ParticlesAnimation from 'src/components/beach-card/particle';
import { beachPositions } from 'src/utils/beachPositions';
import beachRouteMatch from 'src/utils/beachRouteMatch';
import fetch from 'node-fetch';
import styles from './style.module.scss';
import { endpoint } from 'src/data/endpoints';

export async function getStaticPaths() {
  return {
    paths: [
      '/beach/marie-curtis',
      '/beach/hanlans',
    ],
    fallback: true,
  };
}


const getBeachData = async () => {
  const weather = await fetch(`${endpoint}/beaches/1`)
    .then(r => r.json());
  return weather;
};



export async function getStaticProps({ params }) {
  console.log('params', params);
  const beachID = beachRouteMatch(params.beachID);
  const beachName = beachPositions(beachID).displayName;
  const reading = await getBeachData();

  const beachData = {
    id: beachID,
    name: beachName,
    reading,
  };

  console.log('beachData', beachData);
  return {
    props: {
      beachData,
    },
    revalidate: 3600, // In seconds
  };
}




export default function BeachPage({ beachData }) {

  console.log('beachData', beachData);

  return (
    <div className={styles.component}>
      <section className={styles.content}>
        <h1>
          {beachData?.name}
        </h1>
        Content
      </section>
      <div className={styles.particle}>
        <ParticlesAnimation ecoli={beachData?.reading.eColi} />
      </div>
    </div>
  );
}
