const SOLESCA = () => <></>;

const RENDER = () => <p></p>;

const HSA = () => <p></p>;

const PRESS = () => <p></p>;

export interface ExperienceDataType {
  emoji: string;
  title: string;
  brief: string;
  route: string;
  Description: () => JSX.Element;
}

export const experienceData: Record<string, ExperienceDataType> = {
  solesca: {
    emoji: "☀️",
    title: "Solesca",
    brief:
      "[Ongoing, internship] As a Full Stack SWE Intern, I'm building real-time collaborative design tools for solar developers.",
    route: `/xp/solesca`,
    Description: SOLESCA,
  },
  render: {
    emoji: "📱",
    title: "Render",
    brief:
      "[Project, job] Over a gap year, I designed and built a full stack application enabling inter-platform photo and video management.",
    route: "/xp/render",
    Description: RENDER,
  },
  hsa: {
    emoji: "👨‍💼",
    title: "Harvard Student Agencies",
    brief:
      "[Job] As a college freshman, I managed strategic partnerships at the world's largest student run company.",
    route: "/xp/hsa",
    Description: HSA,
  },
  press: {
    emoji: "📰",
    title: "Paynesville Press",
    brief:
      "[Internship] During high school, I interned for two years as a reporter at my local newspaper. ",
    route: "/xp/press",
    Description: PRESS,
  },
};
