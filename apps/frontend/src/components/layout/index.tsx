import React from 'react';
import HomePageHeader from '../home-page-header';
import styles from './style.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <HomePageHeader />
      <main className={styles.home}>
        {children}
      </main>
    </div>
  );
}
