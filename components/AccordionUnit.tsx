import { DropDownOptions, DropDownTypes } from "../pages";
import styles from "../styles/components/AccordionUnit.module.css";
import CoursesItem from "./CoursesItem";
import RotatingButton from "./RotatingButton";

interface InputTypes {
  isActive: boolean;
  category: DropDownOptions;
  DropDownAction: Function;
}

const AccordionUnit = ({ isActive, category, DropDownAction }: InputTypes) => {
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
        <section className={styles.dropDownContent} data-isactive={isActive}>
          <CoursesItem />
        </section>
      </section>
    </div>
  );
};

export default AccordionUnit;
