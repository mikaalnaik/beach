import React from 'react';
import BeachStandard from 'src/components/beach-standards-card';
import Layout from 'src/components/layout';
import styles from './style.module.scss';

const EcoliPage = () => {
  return (
    <Layout>
      <section>
        <h1>
        What is E. coli even?
        </h1>
        <p>
          The City of Toronto has a very high standard of E. coli in water. Here we can compare the different standards from around the world.
        </p>
        {/* <p>
          100 Colony Forming Units (CFUs) per 100 millilitres of water
        </p> */}
      </section>
      <section className={styles.grid}>

        <BeachStandard standard={{ name: 'Drinking Water ', eColi: 0 }} />
        <BeachStandard standard={{ name: 'City of Toronto', eColi: 100 }} />
        <BeachStandard standard={{ name: 'Province of Ontario', eColi: 200 }} />
        <BeachStandard standard={{ name: 'United States', eColi: 235 }} />
        <BeachStandard standard={{ name: 'New Zealand', eColi: 260 }} />
      </section>
    </Layout>
  );
};


export default EcoliPage;
