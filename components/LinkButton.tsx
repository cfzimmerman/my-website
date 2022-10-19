import React from "react";
import styles from "../styles/components/LinkButton.module.css";

type customStyleOptions = "socialButton" | "emailButton";

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
  }
};

const LinkButton = ({ title, customStyle, anchor }: InputTypes) => {
  return (
    <p>
      <a
        className={[styles.button, getCustomStyle(customStyle)].join(" ")}
        href={anchor}
      >
        {title}
      </a>
    </p>
  );
};

export default React.memo(LinkButton, areEqual);
