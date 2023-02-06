import React from 'react';
import { ParticlesAnimation } from 'src/components/beach-card/particle';
// import { getBeachConstants } from 'src/utils/beachPositions';
// import beachRouteMatch from 'src/utils/beachRouteMatch';
// import fetch from 'node-fetch';
import styles from './style.module.scss';
// import { endpoint } from 'src/data/endpoints';

export async function getStaticPaths() {
  return {
    paths: [
      '/beach/hanlans-point',
    ],
    fallback: 'blocking',
  };
}

// const getBeachData = async (id: number) => {
//   const r = await fetch(`${endpoint}/beaches/${id}`);
//   return await r.json();
// };

export async function getStaticProps() {
  // const beachID = beachRouteMatch(params.beachName);
  // const beachName = getBeachConstants(beachID).displayName;
  // const reading = await getBeachData(beachID);

  const beachData = {
    name: 'Howdy Folks',
    readin: {},
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
      </section>
      <div className={styles.particle}>
        <ParticlesAnimation ecoli={beachData?.reading?.eColi} />
      </div>
    </div>
  );
}
