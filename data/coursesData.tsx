import { ActiveTags } from "../components/Tag";
import {
  CS50,
  ECON1010A,
  ECON10A,
  ECON10B,
  ENGSCI95R,
  EXPOS20,
  FRSEMR52E,
  GENED1091,
  GERMAN20B,
  MATH1A,
  MATH1B,
  PSY1,
} from "./coursesDescription";

export interface CoursesItemType {
  key: string;
  title: string;
  tags: ActiveTags[];
  Description: Function;
  stem: boolean;
}

const coursesData: CoursesItemType[] = [
  {
    key: "ENGSCI95R",
    title: "ENGSCI 95R: Startup R&D",
    tags: [],
    Description: ENGSCI95R,
    stem: false,
  },
  {
    key: "GENED1091",
    title: "GENED 1091: Classical Chinese Ethical and Political Theory",
    tags: [],
    Description: GENED1091,
    stem: false,
  },
  {
    key: "PSY1",
    title: "PSY 1: Introduction to Psychological Science",
    tags: [],
    Description: PSY1,
    stem: false,
  },
  {
    key: "ECON1010A",
    title: "ECON 1010A: Intermediate Microeconomics",
    tags: [],
    Description: ECON1010A,
    stem: false,
  },
  {
    key: "MATH1B",
    title: "MATH 1B: Integration, Series, and Differential Equations",
    tags: ["Calculus"],
    Description: MATH1B,
    stem: true,
  },
  {
    key: "EXPOS20",
    title: "EXPOS 20: Orwell's World and Ours",
    tags: [],
    Description: EXPOS20,
    stem: false,
  },
  {
    key: "FRSEMR52E",
    title: "FRSEMR 52E: Science and Technology Primer for Future Leaders",
    tags: [],
    Description: FRSEMR52E,
    stem: false,
  },
  {
    key: "ECON10B",
    title: "ECON 10B: Principles of Macroeconomics",
    tags: [],
    Description: ECON10B,
    stem: false,
  },
  {
    key: "CS50",
    title: "CS 50: Introduction to Computer Science",
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
  {
    key: "GERMAN20B",
    title: "GERMAN 20B: Intermediate German",
    tags: [],
    Description: GERMAN20B,
    stem: false,
  },
  {
    key: "MATH1A",
    title: "MATH 1A: Introduction to Calculus",
    tags: ["Calculus"],
    Description: MATH1A,
    stem: true,
  },
  {
    key: "ECON10A",
    title: "ECON 10A: Principles of Microeconomics",
    tags: [],
    Description: ECON10A,
    stem: false,
  },
];

export default coursesData;
