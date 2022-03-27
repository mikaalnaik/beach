import React from 'react';
import Layout from 'src/components/layout';
import styles from './style.module.scss';

export default function AboutUs() {
  return (
    <Layout>
      <section>
        <h1>
          The Project
        </h1>
        <p className={styles.component}>
        The Toronto Beach App is an community project focused on improving access to Toronto's beaches.
        </p>
      </section>
      <section>
        <h1>
          Have a great idea? A comment? A suggestion?
        </h1>
        <p className={styles.component}>
        We'd love to hear it! Send us an email here.

        </p>
      </section>
      <section>
        <h1>
          How can I get involved?
        </h1>
        <p className={styles.component}>
        We run the project almost free, so we'll never ask for money or anything like that.
        </p>
        <p>
          What we do need is <b>you!</b> Your thoughts, opinions, feedback, and support are what powers the project.
        </p>
        <p className={styles.component}>
        If you're a software engineer, or designer, you can help us out by
        contributing to the project. Developers can find the monorepo for the project at Github
          <a href="https://www.github.com/mikaalnaik/beach">
         here.
          </a>
        </p>
      </section>
      <section>
        <h1>
          Contributors
        </h1>
        <p className={styles.component}>
          This project wouldn't exist with the help of these people.
        </p>
        <ul>
          <li>
            Steve Shearer
          </li>
          <li>
            Norman Chan
          </li>
        </ul>
      </section>
    </Layout>
  );
}
