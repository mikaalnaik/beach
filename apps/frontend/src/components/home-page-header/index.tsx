import Link from 'next/link';
import React from 'react';
import styles from './style.module.scss';


const HomePageHeader = () => {
  return (
    <nav className={styles['title-section']}>
      <Link href="/" className={styles.title}>
        Toronto Beach Report
      </Link>
      <div className={styles.links}>
        {/* <Link href="/ecoli" className={styles.link}>
          About readings
        </Link> */}
        {/* <Link href="/about-us" className={styles.link}>
          About the project
        </Link> */}
      </div>
    </nav>
  );
};

export default HomePageHeader;
