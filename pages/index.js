import Terminal from "../components/Terminal";

import styles from "../styles/Home.module.css";

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Achintya</title>
        <link rel="My Icon" href="/favicon.png" />
      </Head>
      <h1>
        Achintya:$ <span className={styles.help}>type help to start</span>
      </h1>
      <p>
        Visit{" "}
        <a href="https://achintya-7.github.io/" target="_blank" rel="noreferrer">
          Normal website
        </a>
      </p>

      <Terminal />
    </div>
  );
}
