import { DropDownOptions, DropDownTypes } from "../pages";
import RotatingButton from "./RotatingButton";
import styles from "../styles/components/AccordionUnit.module.css";

interface InputTypes {
  isActive: boolean;
  category: DropDownOptions;
  DropDownAction: Function;
  AccordionContent: Function;
}

const AccordionUnit = ({
  isActive,
  category,
  DropDownAction,
  AccordionContent,
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
        <AccordionContent />
      </section>
    </div>
  );
};

export default AccordionUnit;
