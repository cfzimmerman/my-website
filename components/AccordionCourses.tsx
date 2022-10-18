import CoursesItem from "./CoursesItem";
import coursesData, { CoursesItemType } from "../data/coursesData";
import styles from "../styles/components/AccordionUnit.module.css";

interface InputTypes {
  isActive: boolean;
}

const AccordionCourses = ({ isActive }: InputTypes) => {
  return (
    <section className={styles.dropDownContent} data-isactive={isActive}>
      <div className={styles.checkboxWrapper}>
        {/* 
        Make a custom checkbox
        <input className={styles.stemOnly} type={"checkbox"} id="stemOnly" />
        <label htmlFor="stemOnly">
          <p>STEM only</p>
        </label>
        */}
      </div>
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
  );
};

export default AccordionCourses;
