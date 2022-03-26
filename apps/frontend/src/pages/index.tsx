import Head from 'next/head';
import BeachCard from '../components/beach-card';
import { getLatestFromCity, getOntarioPlaceReading } from 'src/data/store/beaches';
import getWeather from 'src/data/store/weather';
import styles from './style.module.scss';

import type { Beach } from 'src/types/beaches';
import WeatherHeader from 'src/components/weather-header';

// Swim Drink Fish JSON data. Ontario Place beach! Need illustration
//  Published Thurssday afternoons from July 23rd to ???.
// http://translate.theswimguide.org/toronto/json

export async function getStaticProps() {

  const [weather, beaches, ontarioPlaceBeach] = await Promise.all([
    getWeather(),
    getLatestFromCity(),
    getOntarioPlaceReading(),
  ]);


  return {
    props: {
      beaches,
      ontarioPlaceBeach,
      weather,
    },
    revalidate: 3600, // In seconds
  };
}

interface Props {
  weather: any;
  beaches: Beach[];
  ontarioPlaceBeach: Beach;
}

export default function Home({ weather, beaches, ontarioPlaceBeach }: Props) {

  const beachCards = beaches.map((beach, index) => (
    <div key={index}>
      <BeachCard beach={beach} key={index} />
    </div>
  ));

  console.log('beaches', beaches);

  return (
    <div className={styles.home}>
      <Head>
        <title>Toronto Beach Report</title>
        <meta name="description" content="The easiest way to access information about Toronto's 11 beaches and they ferry schedule"></meta>
      </Head>
      <main>
        <section className={styles['title-section']}>
          <h1 className={styles.title}>
            Toronto Beaches
          </h1>
          <WeatherHeader weather={weather.current} />

        </section>

        <h5>Show respect for the health of others and for the beauty of our natural spaces.</h5>
        <div className={styles['beach-list']}>
          {beachCards}
          <BeachCard beach={ontarioPlaceBeach} key={13} />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
