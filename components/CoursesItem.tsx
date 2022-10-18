import React from "react";
import { CoursesItemType } from "../data/coursesData";
import styles from "../styles/components/CoursesItem.module.css";
import Tag, { ActiveTags } from "./Tag";
interface InputTypes extends CoursesItemType {
  stemOnlyCourses: boolean;
}

const areEqual = (prev: InputTypes, next: InputTypes) => {
  // Title is a reliable proxy for other data points
  return (
    prev.title === next.title && prev.stemOnlyCourses === next.stemOnlyCourses
  );
};

const CoursesItem = ({
  title,
  tags,
  Description,
  stem,
  stemOnlyCourses,
}: InputTypes) => {
  if (stemOnlyCourses === true && stem === false) {
    return null;
  }
  return (
    <article>
      <div className={styles.lineDivider} />
      <h4 className={styles.courseTitle}>{title}</h4>
      <aside className={styles.tagHolder}>
        {tags.map((title: ActiveTags) => (
          <Tag title={title} key={title.split(" ").join("")} />
        ))}
      </aside>
      <Description />
    </article>
  );
};

export default React.memo(CoursesItem, areEqual);
