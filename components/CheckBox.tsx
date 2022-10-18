import React from "react";
import styles from "../styles/components/CheckBox.module.css";

interface InputTypes {
  setIsActive: Function;
  title: string;
}

const areEqual = (prev: InputTypes, next: InputTypes) => {
  return prev.title === next.title;
};

const CheckBox = ({ setIsActive, title }: InputTypes) => {
  return (
    <label className={styles.container}>
      <input
        className={styles.checkBox}
        type={"checkbox"}
        onChange={() => setIsActive((current: boolean) => !current)}
      />
      <div className={styles.checkMark} />
      {title}
    </label>
  );
};

export default React.memo(CheckBox, areEqual);
