import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <body className={styles.pageBody}>
      <div className={styles.backgroundPattern} />
      <h1 className={styles.blueText}>Hello there</h1>
      <h2>Hello there</h2>
      <h3>Hello there</h3>
      <h4>Hello there</h4>
      <p>Hello there</p>
      <small>Hello there</small>
    </body>
  );
};

export default Home;
