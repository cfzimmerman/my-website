import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense, useState } from "react";
import AccordionUnit from "../components/AccordionUnit";
import AccordionWork from "../components/AccordionWork";
import HomeHeader from "../components/HomeHeader";
import styles from "../styles/index.module.css";

const AccordionCourses = dynamic(
  () => import("../components/AccordionCourses"),
  {
    suspense: true,
  }
);

export type DropDownOptions = "courses" | "work";

export interface DropDownTypes {
  courses: boolean;
  work: boolean;
  // projects
  // clubs
}

const Home: NextPage = () => {
  const [dropDown, setDropDown] = useState<DropDownTypes>({
    courses: false,
    work: false,
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
        <AccordionUnit
          isActive={dropDown.work}
          category="work"
          title="Work"
          dropDownAction={dropDownAction}
        >
          <AccordionWork isActive={dropDown.work} />
        </AccordionUnit>
      </div>
    </main>
  );
};

export default Home;
