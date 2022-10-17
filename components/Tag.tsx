import React from "react";
import styles from "../styles/components/Tag.module.css";

export type ActiveTags =
  | "Python"
  | "C"
  | "Scratch"
  | "Python"
  | "SQL"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "Flask";

interface InputTypes {
  title: string;
}

const areEqual = (prev: InputTypes, next: InputTypes) => {
  return prev.title === next.title;
};

const Tag = ({ title }: InputTypes) => {
  return (
    <div className={styles.tagBody}>
      <p className={styles.tagText}>{title}</p>
    </div>
  );
};

export default React.memo(Tag, areEqual);
