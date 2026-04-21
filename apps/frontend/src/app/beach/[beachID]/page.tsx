import React from 'react';
import styles from './style.module.scss';
import { sql } from '@vercel/postgres';
import { beachIDToName } from 'src/utils/beachRouteMatch';
import { HistoricalChart } from 'src/components/HistoricalChart';


const getData = async (beachID: number) => {
  if (!beachID) {
    return { rows: [] }
  }
  const data = await sql`
    SELECT *
    FROM beach_readings
    WHERE beach_id = ${beachID}
    ORDER BY date ASC;
  `
  const rows = data.rows
  return { rows };
}



export default async function BeachPage({ params: { beachID } }: { params: { beachID: number } }) {
  const data = await getData(beachID);

  const name = beachIDToName(beachID)

  const chartData = data.rows.map(entry => {
    return {
      x: entry.date,
      y: entry.e_coli,
    }
  })
    .filter(entry => entry.y > 0)

  return (
    <div className={styles.component}>
      <section className={styles.content}>
        <h1>
          {name}
        </h1>
      </section>
      <div className={styles.particle}>
        <HistoricalChart data={chartData} />
      </div>
    </div>
  );
}
