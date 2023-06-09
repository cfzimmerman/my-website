import { memo } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "../styles/components/Tag.module.css";

export type ActiveTags =
  | "Python"
  | "C"
  | "Scratch"
  | "Python"
  | "SQL"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "Flask"
  | "Calculus"
  | "Probability"
  | "Statistics"
  | "Linear Algebra"
  | "Systems Programming"
  | "Multivariate Calculus"
  | "Discrete Math"
  | "Graph Theory"
  | "OCaml"
  | "Algorithms"
  | "Data Structures"
  | "Object Oriented Programming"
  | "Functional Programming"
  | "Design and Abstraction"
  | "Formal Reasoning"
  | "CS Theory";

interface InputTypes {
  title: string;
  key: string;
  link?: string;
}

const areEqual = (prev: InputTypes, next: InputTypes) => {
  return prev.title === next.title;
};

const Tag = ({ title, link }: InputTypes) => {
  return (
    <a
      className={styles.tagWrapper}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.tagBody}>
        <p>{title}</p>
        {link && <OpenInNewIcon className={styles.linkIcon} />}
      </div>
    </a>
  );
};

export default memo(Tag, areEqual);
