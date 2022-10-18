import { CoursesItemType } from "../data/coursesData";
import styles from "../styles/components/CoursesItem.module.css";
import Tag, { ActiveTags } from "./Tag";

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

export default CoursesItem;
