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
          <div className={styles.lineDivider} />
          <article>
            <div>
              <h4 className={styles.courseTitle}>
                CS50: Introduction to Computer Science
              </h4>
              <aside className={styles.tagHolder}>
                <div className={styles.tagBody}>
                  <p className={styles.tagText}>Python</p>
                </div>
                <div className={styles.tagBody}>
                  <p className={styles.tagText}>SQL</p>
                </div>
              </aside>
              <p className={styles.description}>
                <i>Fall 2020</i> - CS50 was my first computer science class.
                Coursework focused primarily on building a strong CS foundation
                in a broad sample of skill areas. Check out the{" "}
                <a
                  className={styles.textLink}
                  href="https://cs50.harvard.edu/college/2020/fall/"
                >
                  course website
                </a>{" "}
                and my class{" "}
                <a
                  className={styles.textLink}
                  href="https://github.com/cfzimmerman/20F-CS50"
                >
                  GitHub repo
                </a>{" "}
                for more info.
              </p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default AccordionUnit;
