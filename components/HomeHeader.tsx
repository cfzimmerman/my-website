import React from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";
import getEmailLink from "../actions/getEmailLink";
import portrait from "../assets/profile-light.png";
import styles from "../styles/components/HomeHeader.module.css";

const areEqual = () => {
  return true;
};

const HomeHeader = () => {
  return (
    <header className={styles.heroBox}>
      <div className={styles.heroImgWrapper}>
        <Image
          src={portrait}
          objectFit={"contain"}
          className={styles.heroImg}
          alt={"Stylized portrait image."}
          priority
        />
      </div>
      <div className={styles.heroTextHolder}>
        <h1>{`Hey there!`}</h1>
        <h2>{`I'm Cory.`}</h2>
        <div className={styles.lineDivider} />
        <p>
          {`Welcome to my site!`}
          <br />
          {`I'm a computer science student at Harvard interested in software
            engineering, economics, and artificial intelligence.`}
          <br />
          {`Shoot me an email if you'd like to chat.`}
        </p>
        <div className={styles.buttonHolder}>
          <LinkButton
            title={"LinkedIn"}
            customStyle={"socialButton"}
            anchor={"https://www.linkedin.com/in/cory-f-zimmerman"}
          />
          <LinkButton
            title={"Email"}
            customStyle={"emailButton"}
            anchor={getEmailLink()}
          />
          <LinkButton
            title={"GitHub"}
            customStyle={"socialButton"}
            anchor={"https://github.com/cfzimmerman"}
          />
        </div>
      </div>
    </header>
  );
};

export default React.memo(HomeHeader, areEqual);
