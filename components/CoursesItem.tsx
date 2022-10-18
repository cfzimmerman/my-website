import React from "react";
import { CoursesItemType } from "../data/coursesData";
import styles from "../styles/components/CoursesItem.module.css";
import Tag, { ActiveTags } from "./Tag";

const areEqual = (prev: CoursesItemType, next: CoursesItemType) => {
  // Title serves as an easily-readable proxy for the other elements
  return prev.title === next.title;
};

const CoursesItem = ({ title, tags, Description }: CoursesItemType) => {
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
