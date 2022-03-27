import Link from 'next/link';
import React from 'react';
import styles from './style.module.scss';


const HomePageHeader = () => {
  return (
    <nav className={styles['title-section']}>
      <h1>
        <Link href="/">
          <a className={styles.title}>
            Toronto Beach Report
          </a>
        </Link>
      </h1>
      <div>
        <Link href="/ecoli">
          <a>
          What do readings mean?
          </a>
        </Link>
        <Link href="/about-us">
          <a>
           About the project
          </a>
        </Link>

      </div>
    </nav>
  );
};

export default HomePageHeader;
