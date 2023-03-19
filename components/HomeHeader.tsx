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
        <h2>{`Hey! I'm Cory.`}</h2>
        <div className={styles.lineDivider} />
        <p>
          I study computer science at Harvard, and I get excited about building
          software that's elegant, modular, useful, efficient, and beautiful.
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
