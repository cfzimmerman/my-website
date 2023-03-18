import React from "react";
import { DropDownOptions, DropDownTypes } from "../pages";
import RotatingButton from "./RotatingButton";
import styles from "../styles/components/AccordionUnit.module.css";

interface InputTypes {
  isActive: boolean;
  category: DropDownOptions;
  dropDownAction: Function;
  title: string;
  children?: JSX.Element;
}

// Intentionally not memoized. Child updates should persist for child prop updates that aren't passed to this component (when they are, the re-render causes animation flickers)

const AccordionUnit = ({
  isActive,
  category,
  dropDownAction,
  title,
  children,
}: InputTypes) => {
  return (
    <div className={styles.widthConstraint}>
      <section className={styles.accordion}>
        <menu
          className={styles.dropDown}
          onClick={() => dropDownAction(category)}
        >
          <h3 className={styles.header}>{title}</h3>
          <RotatingButton
            active={isActive}
            action={() => dropDownAction(category)}
          />
        </menu>
        {children}
      </section>
    </div>
  );
};

export default AccordionUnit;
