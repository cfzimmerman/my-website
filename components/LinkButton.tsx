import Link from "next/link";
import React from "react";
import styles from "../styles/components/LinkButton.module.css";

type customStyleOptions =
  | "socialButton"
  | "emailButton"
  | "listButton"
  | "invertedButton";

interface InputTypes {
  title: string;
  customStyle: customStyleOptions;
  anchor: string;
}

const areEqual = (prev: InputTypes, next: InputTypes) => {
  return prev.anchor === next.anchor;
};

const getCustomStyle = (customStyle: customStyleOptions) => {
  switch (customStyle) {
    case "socialButton":
      return styles.socialLink;
    case "emailButton":
      return styles.emailLink;
    case "listButton":
      return styles.listLink;
    case "invertedButton":
      return styles.invertedLink;
  }
};

const LinkButton = ({ title, customStyle, anchor }: InputTypes) => {
  return (
    <div className={styles.buttonWrapper}>
      <Link href={anchor}>
        <a className={[getCustomStyle(customStyle), styles.button].join(" ")}>
          <p>{title}</p>
        </a>
      </Link>
    </div>
  );
};

export default React.memo(LinkButton, areEqual);
