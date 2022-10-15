import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import getEmailLink from "../actions/getEmailLink";
import HomeHeader from "../components/HomeHeader";
import LinkButton from "../components/LinkButton";
import RotatingButton from "../components/RotatingButton";
import styles from "../styles/index.module.css";

type DropDownOptions = "courses";

interface DropDownTypes {
  courses: boolean;
}

const Home: NextPage = () => {
  const [dropDown, setDropDown] = useState<DropDownTypes>({
    courses: false,
  });
  const DropDownAction = (target: DropDownOptions) => {
    setDropDown((options) => ({
      ...options,
      ...{ [target]: !dropDown[target] },
    }));
  };
  return (
    <body className={styles.pageBody}>
      <Head>
        <title>Cory Zimmerman</title>
        <meta
          name="description"
          content="Isn't that shark emoji cool ^ (it's my favorite)"
        />
        <meta property="og:title" content="Cory Zimmerman" />
        <meta
          property="og:description"
          content="Isn't that shark emoji cool (it's my favorite)"
        />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/18VUN7h7leKfOM9q64lMATxPdwwPY2FIO/preview"
        />
      </Head>
      <HomeHeader />
      <main className={styles.accordionWrapper}>
        <section className={styles.accordion}>
          <menu className={styles.dropDown}>
            <h3>Courses</h3>
            <RotatingButton
              active={dropDown.courses}
              action={() => DropDownAction("courses")}
            />
          </menu>
        </section>
      </main>
    </body>
  );
};

export default Home;
