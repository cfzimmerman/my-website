import React from "react";
import CoursesItem from "./CoursesItem";
import coursesData, { CoursesItemType } from "../data/coursesData";
import styles from "../styles/components/AccordionUnit.module.css";
import CheckBox from "./Checkbox";

interface InputTypes {
  isActive: boolean;
  stemOnlyCourses: boolean;
  setStemOnlyCourses: Function;
}

const areEqual = (prev: InputTypes, next: InputTypes) => {
  if (
    prev.isActive === next.isActive &&
    prev.stemOnlyCourses === next.stemOnlyCourses
  ) {
    return true;
  }
  return false;
};

const AccordionCourses = ({
  isActive,
  stemOnlyCourses,
  setStemOnlyCourses,
}: InputTypes) => {
  console.log("AccordionCourses: " + stemOnlyCourses);
  return (
    <section className={styles.dropDownContent} data-isactive={isActive}>
      <div className={styles.checkboxWrapper}>
        <CheckBox setIsActive={setStemOnlyCourses} title={"STEM only"} />
      </div>
      {coursesData.map((item: CoursesItemType) => (
        <CoursesItem
          key={item.key}
          title={item.title}
          tags={item.tags}
          Description={item.Description}
          stem={item.stem}
          stemOnlyCourses={stemOnlyCourses}
        />
      ))}
    </section>
  );
};

// export default React.memo(AccordionCourses, areEqual);
export default AccordionCourses;
