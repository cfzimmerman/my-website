import React from "react";
import { ChevronLeft } from "react-feather";
import styles from "../styles/components/RotatingButton.module.css";

interface InputTypes {
  active: boolean;
  action: Function;
}

const areEqual = (previous: InputTypes, next: InputTypes) => {
  return previous.active === next.active;
};

const RotatingButton = ({ active, action }: InputTypes) => {
  return (
    <button className={styles.buttonWrapper} data-isActive={active}>
      <ChevronLeft
        onClick={() => action()}
        className={styles.arrow}
        data-isActive={active}
      />
    </button>
  );
};

export default React.memo(RotatingButton, areEqual);
