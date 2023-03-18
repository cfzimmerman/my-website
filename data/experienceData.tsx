const SOLESCA = () => (
  <p>
    <a href="https://solesca.com/">Solesca</a> sells software that helps solar
    developers design projects (similar to Figma). I'm building infrastructure
    enabling multi-user real-time collaboration at scale.
    <br /> <br />
    In the role, {"I've"} enjoyed the opportunity to tackle architecture design
    challenges while building a do-anything SWE skill set.
  </p>
);

const IMGFILTER = () => (
  <p>
    I wanted to learn C++, so I made a basic image filter. While the code itself
    is fairly elementary, this project was a great introduction to C++, Object
    Oriented Programming, and some common data structures. The project's GitHub
    repo has some cool examples in the{" "}
    <a href="https://github.com/cfzimmerman/Simple-CPP-Image-Filter/tree/main/output">
      /output
    </a>{" "}
    directory.
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
    <a href="https://youtu.be/fp9qIQecDdw">demo</a> of what I built.
  </p>
);

const HSA = () => (
  <p>
    In my first year of college, I joined{" "}
    <a href="https://www.hsa.net/">Harvard Student Agencies</a>, a club/business
    managing an umbrella of companies operated by Harvard students.
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
  externalLink?: string;
  linkTitle?: string;
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
  imgFilter: {
    emoji: "🌌",
    title: "C++ Image Filter",
    brief:
      "[Project] I learned about C++, OOP, and common data structures while building a basic image filter.",
    route: "/xp/imgFilter",
    externalLink: "https://github.com/cfzimmerman/Simple-CPP-Image-Filter",
    linkTitle: "GitHub repo",
    imageURL:
      "https://raw.githubusercontent.com/cfzimmerman/Simple-CPP-Image-Filter/main/output/filtered-img3.jpeg",
    Description: IMGFILTER,
  },
  render: {
    emoji: "📱",
    title: "Render",
    brief:
      "[Project, job] Over a gap year, I designed and built a full stack application enabling inter-platform photo and video management.",
    route: "/xp/render",
    externalLink: "https://youtu.be/fp9qIQecDdw",
    linkTitle: "Demo",
    imageURL:
      "https://raw.githubusercontent.com/cfzimmerman/my-website/main/files/render.JPG",
    Description: RENDER,
  },
  hsa: {
    emoji: "👨‍💼",
    title: "Harvard Student Agencies",
    brief:
      "[Job] As a college freshman, I managed strategic partnerships at the world's largest student-run company.",
    route: "/xp/hsa",
    imageURL:
      "https://raw.githubusercontent.com/cfzimmerman/my-website/main/files/hsa.jpeg",
    Description: HSA,
  },
  press: {
    emoji: "📰",
    title: "Paynesville Press",
    brief:
      "[Internship] During high school, I interned as a reporter at my local newspaper. ",
    route: "/xp/press",
    externalLink:
      "https://sites.google.com/view/cz-hs-newspaper-archive/home?authuser=0",
    linkTitle: "Portfolio",
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
