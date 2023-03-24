import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './style.module.scss';


const HomePageHeader = () => {
  return (
    <>
      <Head>
        <title>Toronto Beach Report</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='keywords'
          content='toronto beaches, water quality, beach ecoli'
        />
        <meta
          name='description'
          content="The easiest way to access information about Toronto's beaches e.Coli levels and safety standards"
        ></meta>
      </Head>
      <nav className={styles['title-section']}>
        <Link href="/" className={styles.title}>
          Toronto Beach Report
        </Link>
        {/* <div className={styles.links}>
          <Link href="/ecoli" className={styles.link}>
            About the readings
          </Link>
          <Link href="/about-us" className={styles.link}>
            About the project
          </Link>
        </div> */}
      </nav>
    </>
  );
};

export default HomePageHeader;
