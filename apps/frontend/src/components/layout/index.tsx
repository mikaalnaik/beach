import Head from 'next/head';
import React from 'react';
import HomePageHeader from '../home-page-header';
import styles from './style.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Head>
        <title>Toronto Beach Report</title>
        <meta name="description" content="The easiest way to access information about Toronto's 11 beaches and they ferry schedule"></meta>
      </Head>
      <HomePageHeader />
      <main className={styles.home}>
        {children}
      </main>
    </div>
  );
}
