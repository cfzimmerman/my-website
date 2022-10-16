import { DropDownOptions, DropDownTypes } from "../pages";
import styles from "../styles/components/AccordionUnit.module.css";
import RotatingButton from "./RotatingButton";

interface InputTypes {
  isActive: boolean;
  category: DropDownOptions;
  DropDownAction: Function;
}

const AccordionUnit = ({ isActive, category, DropDownAction }: InputTypes) => {
  return (
    <section className={styles.accordion}>
      <menu className={styles.dropDown}>
        <h3>Courses</h3>
        <RotatingButton
          active={isActive}
          action={() => DropDownAction(category)}
        />
      </menu>
      <section className={styles.dropDownContent} data-isactive={isActive}>
        adsf asdf asdf asdf asdf adsf asdf asdf asdf as
        <br />
        adsf asdf asdf asdf asdf adsf asdf asdf asdf as
        <br />
        adsf asdf asdf asdf asdf adsf asdf asdf asdf as
        <br />
        adsf asdf asdf asdf asdf adsf asdf asdf asdf as
        <br />
      </section>
    </section>
  );
};

export default AccordionUnit;
