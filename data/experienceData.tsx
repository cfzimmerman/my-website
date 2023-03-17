const SOLESCA = () => <></>;

const RENDER = () => <p></p>;

const HSA = () => <p></p>;

const PRESS = () => (
  <p>
    Throughout high school, I worked as a reporting intern at my local news
    group (Paynesville Press and EV-W Voice).
    <br />
    <br />
    In a largely self-directed role, I set up and conducted source interviews,
    attended and recorded government functions, and explored an interest in
    quantitative analysis with local and state data sets.
    <br /> <br />
    Across three summers, I developed a foundational working skill set, crossed
    one million words written (including school), and grew a deep appreciation
    for the everyday heroes in my home community. My now-vintage portfolio can
    be found{" "}
    <a href="https://sites.google.com/view/cz-hs-newspaper-archive/home?authuser=0">
      here
    </a>
    .
  </p>
);

export interface ExperienceDataType {
  emoji: string;
  title: string;
  brief: string;
  route: string;
  imageURL: string;
  Description: () => JSX.Element;
}

export const experienceData: Record<string, ExperienceDataType> = {
  solesca: {
    emoji: "☀️",
    title: "Solesca",
    brief:
      "[Ongoing, internship] As a Full Stack SWE Intern, I'm building real-time collaborative design tools for solar developers.",
    route: `/xp/solesca`,
    imageURL: "",
    Description: SOLESCA,
  },
  render: {
    emoji: "📱",
    title: "Render",
    brief:
      "[Project, job] Over a gap year, I designed and built a full stack application enabling inter-platform photo and video management.",
    route: "/xp/render",
    imageURL: "",
    Description: RENDER,
  },
  hsa: {
    emoji: "👨‍💼",
    title: "Harvard Student Agencies",
    brief:
      "[Job] As a college freshman, I managed strategic partnerships at the world's largest student run company.",
    route: "/xp/hsa",
    imageURL: "",
    Description: HSA,
  },
  press: {
    emoji: "📰",
    title: "Paynesville Press",
    brief:
      "[Internship] During high school, I interned for two years as a reporter at my local newspaper. ",
    route: "/xp/press",
    imageURL:
      "https://raw.githubusercontent.com/cfzimmerman/my-website/main/files/newspaper.jpeg",
    Description: PRESS,
  },
};

interface ExperiencePathType {
  params: {
    experience: string;
  };
}

export const experiencePaths = (): ExperiencePathType[] =>
  Object.keys(experienceData).map((key: string) => ({
    params: { experience: key },
  }));
