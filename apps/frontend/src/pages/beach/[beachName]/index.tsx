import React from 'react';
import { ParticlesAnimation } from 'src/components/beach-card/particle';
// import { getBeachConstants } from 'src/utils/beachPositions';
// import beachRouteMatch from 'src/utils/beachRouteMatch';
// import fetch from 'node-fetch';
import styles from './style.module.scss';
// import { endpoint } from 'src/data/endpoints';


export default function BeachPage() {
  return (
    <div className={styles.component}>
      <section className={styles.content}>
        <h1>
          {/* {beachData?.name} */}
        </h1>
      </section>
      <div className={styles.particle}>
        {/* <ParticlesAnimation ecoli={beachData?.reading?.eColi} /> */}
      </div>
    </div>
  );
}
