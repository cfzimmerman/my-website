import { ActiveTags } from "../components/Tag";
import styles from "../styles/components/CoursesItem.module.css";

export interface CoursesItemType {
  title: string;
  tags: ActiveTags[];
  Description: Function;
  stem: boolean;
}

const CS50 = () => {
  return (
    <p className={styles.description}>
      <i>Fall 2020</i> - CS50 was my first computer science class. Coursework
      focused primarily on building a strong CS foundation in a broad sample of
      skill areas. Check out the{" "}
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
  );
};

const coursesData: CoursesItemType[] = [
  {
    title: "CS50: Introduction to Computer Science",
    tags: [
      "C",
      "Python",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "Scratch",
    ],
    Description: CS50,
    stem: true,
  },
];

export default coursesData;
