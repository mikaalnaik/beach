import React from 'react';
import WeatherHeader from '../weather-header';
import styles from './style.module.scss';


const HomePageHeader = ({ weather }) => {
  return (
    <section className={styles['title-section']}>
      <h1 className={styles.title}>
            Toronto Beaches
      </h1>
      <WeatherHeader weather={weather.current} />
    </section>
  );
};

export default HomePageHeader;
