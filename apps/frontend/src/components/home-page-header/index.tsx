import React from 'react';
import styles from './style.module.scss';


const HomePageHeader = () => {
  return (
    <section className={styles['title-section']}>
      <h1 className={styles.title}>
        Toronto Beach Report
      </h1>
    </section>
  );
};

export default HomePageHeader;
