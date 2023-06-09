import { ActiveTags } from "../components/Tag";

const CS61 = () => (
  <p>
    <i>Fall 2023</i>
  </p>
);

const CS120 = () => (
  <p>
    <i>Fall 2023</i>
  </p>
);

const AM22A = () => (
  <p>
    <i>Fall 2023</i>
  </p>
);

const PENDING = () => (
  <p>
    <i>Fall 2023</i> - Still looking for a great course.
  </p>
);

const CS51 = () => (
  <p>
    <i>Spring 2023</i> - Structured around five design principles (irredundancy,
    intentionality, compartmentalization, prevention, and decomposition), CS 51
    explored algorithm design and essential data structures in OCaml. Check out
    the <a href="https://cs51.io/">class site</a> for more info.
  </p>
);

const ENGSCI150 = () => (
  <p>
    <i>Spring 2023</i> - ES 150 was an intense introduction to probability and
    statistics. In the class, we worked with conditional probability,
    probability distributions, hypothesis testing, and Markov chains.
  </p>
);

const PHIL18 = () => (
  <p>
    <i>Spring 2023</i> - Combining ethics, history, and philosophy, Phil 18
    explored great works and ideas from around the world, including ancient
    Egypt, Mesopotamia, India, China, and Greece.
  </p>
);

const CS20 = () => (
  <p>
    <i>Spring 2023</i> - Taught by Rebecca Nesson (SEAS dean of academics), CS
    20 covered proof writing, formal reasoning, CS theory, and mathematical
    foundations for CS in a highly-collaborative environment.
  </p>
);

const ENGSCI95R = () => (
  <p>
    <i>Fall 2021</i> -{" "}
    <a href="http://tech.seas.harvard.edu/rad">Startup RAD</a> was a
    startup-for-credit opportunity for me to build Render and meet with about 20
    other founders weekly under the mentorship of instructor{" "}
    <a href="http://tech.seas.harvard.edu/fellows-1">Paul Bottino</a>.
  </p>
);

const GENED1091 = () => (
  <p>
    <i>Fall 2021</i> - This class offered a guided reading of some of China’s
    most influential ancient philosophers, including Kongzi, Mengzi, Mozi,
    Laozi, Zhuangzi, and Lord Shen. My final project applied Mengzi’s philosophy
    through a landscape architecture{" "}
    <a href="https://cory-zimmerman.notion.site/GENED-1091-Final-Project-2f40b905d9a64e89be6135da8c5f05a4">
      Minecraft build
    </a>
    .
  </p>
);

const PSY1 = () => (
  <p>
    <i>Fall 2021</i> - Taught in Prof.{" "}
    <a href="https://en.m.wikipedia.org/wiki/Daniel_Gilbert_(psychologist)">
      Dan Gilbert
    </a>
    's signature style, Psych 1 was a bi-weekly series of well-polished TED
    talks. The course explored a wide range of topics including socialization,
    language, anatomy, memory, and more.
  </p>
);

const ECON1010A = () => (
  <p>
    <i>Fall 2021</i> - Ec1010 with Maxim Boycko offered a conceptual and
    technical study of core microeconomic concepts in applications relating to
    consumer, firm, and market behavior.
  </p>
);

const MATH1B = () => (
  <p>
    <i>Spring 2021</i> - Math 1B focused on conceptualizing, modeling, and
    analyzing real-world solutions addressed by its target subjects. Details on
    this{" "}
    <a href="https://www.math.harvard.edu/course/mathematics-1b-spring/">
      class site
    </a>
    .
  </p>
);

const EXPOS20 = () => (
  <p>
    <i>Spring 2021</i> - Expository writing is a long-time pillar of Harvard’s
    core curriculum. This section investigated the process of writing concise,
    compelling, well-organized prose through the medium of reading and
    reflecting on George Orwell's <i>1984</i> and other published works.
  </p>
);

const FRSEMR52E = () => (
  <p>
    <i>Spring 2021</i> - Freshman Seminars connect first-year students with
    leading researchers and professors at Harvard in a close, lighthearted
    academic environment. Mine was instructed by Prof.{" "}
    <a href="https://hongkunparklab.com">Hongkun Park</a>, who guided us on a
    high-level exploration of quantum computing, artificial intelligence, genome
    editing, and more.
  </p>
);

const ECON10B = () => (
  <p>
    <i>Spring 2021</i> - Sequel to ECON 10A (see Fall 2020) with a focus on
    macroeconomics.
  </p>
);

const CS50 = () => (
  <p>
    <i>Fall 2020</i> - CS 50 was my first computer science class. Coursework
    focused on building a strong CS foundation in a broad sample of skill areas.
    Check out the{" "}
    <a href="https://cs50.harvard.edu/college/2020/fall/">course website</a> and
    my class <a href="https://github.com/cfzimmerman/20F-CS50">GitHub repo</a>{" "}
    for more info.
  </p>
);

const GERMAN20B = () => (
  <p>
    <i>Fall 2020</i> - German 20B brought together a small group of students to
    practice speaking, writing, and understanding the German language.
  </p>
);

const MATH1A = () => (
  <p>
    <i>Fall 2020</i> - Math 1A offered a collaborative, application-focused
    introduction to differential and integral calculus. More info available at
    this{" "}
    <a href="https://people.math.harvard.edu/~knill/teaching/fall2020/index.html">
      course page
    </a>
    .
  </p>
);

const ECON10A = () => (
  <p>
    <i>Fall 2020</i> - Ec10 was a year-long introductory course led by Profs.{" "}
    <a href="https://en.m.wikipedia.org/wiki/David_Laibson">David Laibson</a>{" "}
    and <a href="https://en.m.wikipedia.org/wiki/Jason_Furman">Jason Furman</a>.
    The curriculum focused on theoretical concepts and their practical
    implications. Guest speakers included{" "}
    <a href="https://en.m.wikipedia.org/wiki/Ben_Bernanke">Ben Bernanke</a>,{" "}
    <a href="https://en.m.wikipedia.org/wiki/Greg_Mankiw">Greg Mankiw</a>,{" "}
    <a href="https://en.m.wikipedia.org/wiki/Carmen_Reinhart">
      Carmen Reinhart
    </a>
    , <a href="https://en.m.wikipedia.org/wiki/Cecilia_Rouse">Cecilia Rouse</a>,
    and more.
  </p>
);

export interface CoursesItemType {
  key: string;
  title: string;
  tags: ActiveTags[];
  Description: () => JSX.Element;
  stem: boolean;
}

// CS 61, CS 120, AM 22A, Pending
const coursesData: CoursesItemType[] = [
  {
    key: "CS61",
    title: "CS 61: Systems Programming and Machine Organization",
    tags: ["Systems Programming"],
    Description: CS61,
    stem: true,
  },
  {
    key: "CS120",
    title: "CS 120: Intro to Algorithms and their Limitations",
    tags: ["Algorithms", "Design and Abstraction", "CS Theory"],
    Description: CS120,
    stem: true,
  },
  {
    key: "AM22A",
    title: "AM 22A: Solving and Optimizing",
    tags: ["Linear Algebra", "Multivariate Calculus", "Algorithms"],
    Description: AM22A,
    stem: true,
  },
  {
    key: "PENDING",
    title: "Pending",
    tags: [],
    Description: PENDING,
    stem: false,
  },
  {
    key: "CS51",
    title: "CS 51: Abstraction and Design in Computation",
    tags: [
      "Algorithms",
      "OCaml",
      "Data Structures",
      "Design and Abstraction",
      "Functional Programming",
      "Object Oriented Programming",
    ],
    Description: CS51,
    stem: true,
  },
  {
    key: "ENGSCI150",
    title: "ENGSCI 150: Probability with Engineering Applications",
    tags: ["Probability", "Statistics"],
    Description: ENGSCI150,
    stem: true,
  },
  {
    key: "PHIL18",
    title: "PHIL 18: Ethics",
    tags: [],
    Description: PHIL18,
    stem: false,
  },
  {
    key: "CS20",
    title: "CS 20: Discrete Mathematics for Computer Science",
    tags: ["Discrete Math", "Probability", "Formal Reasoning", "CS Theory"],
    Description: CS20,
    stem: true,
  },

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
      "Algorithms",
      "Data Structures",
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
