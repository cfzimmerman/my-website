import React from "react";
import { DropDownOptions, DropDownTypes } from "../pages";
import RotatingButton from "./RotatingButton";
import styles from "../styles/components/AccordionUnit.module.css";

interface InputTypes {
  isActive: boolean;
  category: DropDownOptions;
  DropDownAction: Function;
  children?: JSX.Element;
}

// Intentionally not memoized. Child updates should persist for child prop updates that aren't passed to this component (when they are, the re-render causes animation flickers)

const AccordionUnit = ({
  isActive,
  category,
  DropDownAction,
  children,
}: InputTypes) => {
  return (
    <div className={styles.widthConstraint}>
      <section className={styles.accordion}>
        <menu className={styles.dropDown}>
          <h3 className={styles.header}>Courses</h3>
          <RotatingButton
            active={isActive}
            action={() => DropDownAction(category)}
          />
        </menu>
        {children}
      </section>
    </div>
  );
};

export default AccordionUnit;
