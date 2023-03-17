const SOLESCA = () => (
  <p>
    <a href="https://solesca.com/">Solesca</a> sells software that helps solar
    developers design projects (similar to Figma). I'm building infrastructure
    enabling multi user real-time collaboration at scale.
    <br /> <br />
    In the role, {"I've"} enjoyed the opportunity to tackle architecture design
    challenges while building a do-anything SWE skill set.
  </p>
);

const RENDER = () => (
  <p>
    Between my first and second years of college, I got involved in a startup
    and eventually took a year off school to pursue it as a technical
    co-founder.
    <br /> <br />
    As a hands-on introduction to software engineering, Render gave me a strong
    foundation in full stack development and a basic understanding of modern web
    app architecture.
    <br /> <br />
    The codebase was held privately, but {"here's"} a video{" "}
    <a href="https://youtu.be/fp9qIQecDdw">walkthrough</a> of what I built.
  </p>
);

const HSA = () => (
  <p>
    In my first year of college, I joined Harvard Student Agencies, a
    club/business managing an umbrella of companies operated by Harvard
    students.
    <br /> <br />I worked on small teams in the education and marketing agencies
    that developed relationships with international businesses (especially in
    India and China) and iconic brands like Red Bull, Grammarly, and Fjällräven.
    Over a year, I closed more than $385k in contracts.
  </p>
);

const PRESS = () => (
  <p>
    Throughout high school, I worked as an intern at my local news group.
    <br />
    <br />
    Across three summers, I developed a foundational working skill set, crossed
    one million words written (including school), and grew a deep appreciation
    for the everyday heroes in my community. My portfolio can be found{" "}
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
    imageURL:
      "https://raw.githubusercontent.com/cfzimmerman/my-website/main/files/solesca.JPG",
    Description: SOLESCA,
  },
  render: {
    emoji: "📱",
    title: "Render",
    brief:
      "[Project, job] Over a gap year, I designed and built a full stack application enabling inter-platform photo and video management.",
    route: "/xp/render",
    imageURL:
      "https://raw.githubusercontent.com/cfzimmerman/my-website/main/files/render.JPG",
    Description: RENDER,
  },
  hsa: {
    emoji: "👨‍💼",
    title: "Harvard Student Agencies",
    brief:
      "[Job] As a college freshman, I managed strategic partnerships at the world's largest student run company.",
    route: "/xp/hsa",
    imageURL:
      "https://raw.githubusercontent.com/cfzimmerman/my-website/main/files/hsa.jpeg",
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
