import { DropDownOptions, DropDownTypes } from "../pages";
import styles from "../styles/components/AccordionUnit.module.css";
import CoursesItem from "./CoursesItem";
import coursesData, { CoursesItemType } from "../data/coursesData";
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
          {coursesData.map((item: CoursesItemType) => (
            <CoursesItem
              key={item.key}
              title={item.title}
              tags={item.tags}
              Description={item.Description}
              stem={item.stem}
            />
          ))}
        </section>
      </section>
    </div>
  );
};

export default AccordionUnit;
