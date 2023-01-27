export interface WorkDataType {
  key: string;
  title: string;
  description: string;
  route: string;
}

export const workData: WorkDataType[] = [
  {
    key: "w4",
    title: "☀️ Solesca",
    description:
      "[Ongoing] As a Full Stack SWE Intern, I'm building real-time collaborative design tools for solar developers.",
    route: "/construction",
  },
  {
    key: "w3",
    title: "📱 Render",
    description:
      "Over a gap year, my co-founder and I assembled a team, designed and built a product, and launched it to a community of users.",
    route: "/construction",
  },
  {
    key: "w2",
    title: "👨‍💼 Harvard Student Agencies",
    description:
      "As a college freshman, I managed strategic partnerships at the world's largest student run company.",
    route: "/construction",
  },
  {
    key: "w1",
    title: "📰 Paynesville Press",
    description:
      "During high school, I interned for two years as a reporter at my local newspaper. ",
    route: "/construction",
  },
];
