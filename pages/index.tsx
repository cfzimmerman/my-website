import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense, useState } from "react";
import AccordionUnit from "../components/AccordionUnit";
import HomeHeader from "../components/HomeHeader";
import styles from "../styles/index.module.css";
import { useMediaQuery } from "@mui/material";

const AccordionCourses = dynamic(
  () => import("../components/AccordionCourses"),
  {
    loading: () => <p>Loading</p>,
  }
);

const AccordionExperience = dynamic(
  () => import("../components/AccordionExperience"),
  {
    loading: () => <p>Loading</p>,
  }
);

export type DropDownOptions = "courses" | "experience";

export interface DropDownTypes {
  courses: boolean;
  experience: boolean;
}

const Home: NextPage = () => {
  const [dropDown, setDropDown] = useState<DropDownTypes>({
    courses: false,
    experience: false,
  });
  const [stemOnlyCourses, setStemOnlyCourses] = useState<boolean>(false);
  const smallScreen = useMediaQuery("(max-width:500px)");

  const dropDownAction = (target: DropDownOptions) => {
    setDropDown((options) => ({
      ...options,
      ...{ [target]: !dropDown[target] },
    }));
  };

  return (
    <main className={styles.pageBody}>
      <Head>
        <title>Cory Zimmerman</title>
        <meta
          name="description"
          content="My personal website: GitHub, LinkedIn, and a preview of my classes and professional experiences."
        />
        <meta property="og:title" content="Cory Zimmerman" />
        <meta
          property="og:description"
          content="My personal website: GitHub, LinkedIn, and a preview of my classes and professional experiences."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/cfzimmerman/my-website/main/files/ogImage.png"
        />
        <meta name="author" content="Cory Zimmerman" />
      </Head>
      <HomeHeader />
      <div className={styles.mainWrapper}>
        <AccordionUnit
          isActive={dropDown.experience}
          category="experience"
          title={smallScreen ? "Work" : "Experience"}
          dropDownAction={dropDownAction}
        >
          <AccordionExperience isActive={dropDown.experience} />
        </AccordionUnit>
        <AccordionUnit
          isActive={dropDown.courses}
          category={"courses"}
          title="Courses"
          dropDownAction={dropDownAction}
        >
          <AccordionCourses
            isActive={dropDown.courses}
            stemOnlyCourses={stemOnlyCourses}
            setStemOnlyCourses={setStemOnlyCourses}
          />
        </AccordionUnit>
      </div>
    </main>
  );
};

export default Home;
