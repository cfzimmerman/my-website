import Link from "next/link";
import React from "react";
import styles from "../styles/components/LinkButton.module.css";

type customStyleOptions = "socialButton" | "emailButton" | "listButton";

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
  }
};

const LinkButton = ({ title, customStyle, anchor }: InputTypes) => {
  return (
    <Link href={anchor}>
      <a className={[styles.button, getCustomStyle(customStyle)].join(" ")}>
        <p>{title}</p>
      </a>
    </Link>
  );
};

export default React.memo(LinkButton, areEqual);
