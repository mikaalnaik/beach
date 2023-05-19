import React from 'react';
import styles from './style.module.scss';
import { sql } from '@vercel/postgres';
import { beachIDToName } from 'src/utils/beachRouteMatch';
import { VictoryChart, VictoryLine } from 'victory'
import { HistoricalChart } from 'src/components/HistoricalChart';


const getData = async (beachID: number) => {
  const data = await sql`
    SELECT *
    FROM beach_readings
    WHERE beach_id = ${beachID} AND date >= DATE_TRUNC('year', CURRENT_DATE - INTERVAL '5 years')
    ORDER BY date DESC;
  `
  const rows = data.rows
  return { rows };
}



export default async function BeachPage({ params: { beachID } }) {
  const data = await getData(beachID);

  const name = beachIDToName(beachID)

  const chartData = data.rows.map(entry => {
    console.log({ entry });
    return {
      x: entry.date,
      y: entry.e_coli,
    }
  })
    .filter(entry => entry.y > 0)

  console.log({ chartData });

  return (
    <div className={styles.component}>
      <section className={styles.content}>
        <h1>
          {name}
        </h1>
      </section>
      <div className={styles.particle}>
        <HistoricalChart data={chartData} />
        {/* <ParticlesAnimation ecoli={beachData?.reading?.eColi} /> */}
      </div>
    </div>
  );
}
