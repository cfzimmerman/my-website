import styles from "../styles/components/CoursesItem.module.css";
import Tag from "./Tag";

type ActiveTags = "Python";

interface InputTypes {
  title: string;
  tags: ActiveTags[];
  description: Function;
}

// Next, create coursesData object in data folder

const CoursesItem = () => {
  return (
    <article>
      <div className={styles.lineDivider} />
      <h4 className={styles.courseTitle}>
        CS50: Introduction to Computer Science
      </h4>
      <aside className={styles.tagHolder}>
        <Tag title={"Python"} />
      </aside>
      <p className={styles.description}>
        <i>Fall 2020</i> - CS50 was my first computer science class. Coursework
        focused primarily on building a strong CS foundation in a broad sample
        of skill areas. Check out the{" "}
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
    </article>
  );
};

export default CoursesItem;
