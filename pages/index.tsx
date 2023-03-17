import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense, useState } from "react";
import AccordionUnit from "../components/AccordionUnit";
import HomeHeader from "../components/HomeHeader";
import styles from "../styles/index.module.css";
import AccordionExperience from "../components/AccordionExperience";

const AccordionCourses = dynamic(
  () => import("../components/AccordionCourses"),
  {
    suspense: true,
  }
);

export type DropDownOptions = "courses" | "experience";

export interface DropDownTypes {
  courses: boolean;
  experience: boolean;
  // projects
  // clubs
}

const Home: NextPage = () => {
  const [dropDown, setDropDown] = useState<DropDownTypes>({
    courses: false,
    experience: false,
  });
  const [stemOnlyCourses, setStemOnlyCourses] = useState<boolean>(false);

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
          content="Isn't that shark emoji cool ^ (it's my favorite)"
        />
        <meta property="og:title" content="Cory Zimmerman" />
        <meta
          property="og:description"
          content="Isn't that shark emoji cool (it's my favorite)"
        />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?id=18VUN7h7leKfOM9q64lMATxPdwwPY2FIO"
        />
        <meta name="author" content="Cory Zimmerman" />
      </Head>
      <HomeHeader />
      <div className={styles.mainWrapper}>
        <AccordionUnit
          isActive={dropDown.experience}
          category="experience"
          title="Experience"
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
          <Suspense fallback={"Loading"}>
            <AccordionCourses
              isActive={dropDown.courses}
              stemOnlyCourses={stemOnlyCourses}
              setStemOnlyCourses={setStemOnlyCourses}
            />
          </Suspense>
        </AccordionUnit>
      </div>
    </main>
  );
};

export default Home;
