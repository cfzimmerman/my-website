import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import getEmailLink from "../actions/getEmailLink";
import portrait from "../assets/profile-light.png";
import Button from "../components/Button";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <body className={styles.pageBody}>
      <header className={styles.heroBox}>
        <div className={styles.heroImgWrapper}>
          <Image
            src={portrait}
            objectFit={"contain"}
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroTextHolder}>
          <h1>Hey there!</h1>
          <h2>I'm Cory.</h2>
          <div className={styles.lineDivider} />
          <p>
            Welcome to my site!
            <br />
            I'm a computer science student at Harvard interested in software
            engineering, economics, and community service.
            <br />
            Shoot me an email if you'd like to chat sometime.
          </p>
          <div className={styles.buttonHolder}>
            <Button
              title={"LinkedIn"}
              customStyle={"socialButton"}
              anchor={"https://www.linkedin.com/in/cory-f-zimmerman"}
            />
            <Button
              title={"Email"}
              customStyle={"emailButton"}
              anchor={getEmailLink()}
            />
            <Button
              title={"Github"}
              customStyle={"socialButton"}
              anchor={"https://github.com/cfzimmerman"}
            />
          </div>
        </div>
      </header>
    </body>
  );
};

export default Home;
