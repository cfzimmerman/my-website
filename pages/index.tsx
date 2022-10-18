import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense, useState } from "react";
import AccordionUnit from "../components/AccordionUnit";
import HomeHeader from "../components/HomeHeader";
import styles from "../styles/index.module.css";

const AccordionCourses = dynamic(
  () => import("../components/AccordionCourses"),
  {
    suspense: true,
  }
);

export type DropDownOptions = "courses";

export interface DropDownTypes {
  courses: boolean;
}

const Home: NextPage = () => {
  const [dropDown, setDropDown] = useState<DropDownTypes>({
    courses: false,
  });
  const [stemOnlyCourses, setStemOnlyCourses] = useState<boolean>(false);

  const DropDownAction = (target: DropDownOptions) => {
    setDropDown((options) => ({
      ...options,
      ...{ [target]: !dropDown[target] },
    }));
  };

  return (
    <body className={styles.pageBody}>
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
          content="https://drive.google.com/file/d/18VUN7h7leKfOM9q64lMATxPdwwPY2FIO/preview"
        />
      </Head>
      <HomeHeader />
      <main className={styles.accordionWrapper}>
        <AccordionUnit
          isActive={dropDown.courses}
          category={"courses"}
          DropDownAction={() => DropDownAction("courses")}
        >
          <Suspense fallback={"Loading"}>
            <AccordionCourses
              isActive={dropDown.courses}
              stemOnlyCourses={stemOnlyCourses}
              setStemOnlyCourses={setStemOnlyCourses}
            />
          </Suspense>
        </AccordionUnit>
      </main>
    </body>
  );
};

export default Home;
