import BeachCard from '../components/beach-card';
import { getLatestFromCity, getOntarioPlaceReading } from 'src/data/store/beaches';
import Layout from 'src/components/layout';
import styles from './style.module.scss';

import type { Beach } from 'src/types/beaches';

// Swim Drink Fish JSON data. Ontario Place beach! Need illustration
//  Published Thurssday afternoons from July 23rd to ???.
// http://translate.theswimguide.org/toronto/json

export async function getStaticProps() {

  const [beaches, ontarioPlaceBeach] = await Promise.all([
    getLatestFromCity(),
    getOntarioPlaceReading(),
  ]);


  return {
    props: {
      beaches,
      ontarioPlaceBeach,
    },
    revalidate: 3600, // In seconds
  };
}

interface Props {
  weather: any;
  beaches: Beach[];
  ontarioPlaceBeach: Beach;
}

export default function Home({  beaches, ontarioPlaceBeach }: Props) {

  const beachCards = beaches.map((beach, index) => (
    <div key={index}>
      <BeachCard beach={beach} key={index} />
    </div>
  ));

  return (
    <Layout>
      <div className={styles['beach-list']}>
        {beachCards}
        <BeachCard beach={ontarioPlaceBeach} key={13} />
      </div>
    </Layout>
  );
}
