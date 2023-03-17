import newspaper from "../../assets/newspaper.jpeg";
import styles from "../../styles/experience.module.css";
import Image from "next/image";
import LinkButton from "../../components/LinkButton";
import { useRouter } from "next/router";
import { experienceData, ExperienceDataType } from "../../data/experienceData";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { experience: "press" } },
      { params: { experience: "hsa" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const xp = context.params.experience;
  if (!experienceData[xp]) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  return {
    props: {
      xp,
    },
  };
}

const WorkExperience = ({ xp }: { xp: string }) => {
  // const { experience } = router.query;

  return (
    <>
      <header className={styles.navBarWrapper}>
        <section className={styles.navBar}>
          <LinkButton title="Go back" customStyle="invertedButton" anchor="/" />
        </section>
      </header>
      <main className={styles.pageMain}>
        <section className={styles.allPageContent}>
          <div className={styles.pageItem}>
            <div className={styles.imageWrapper}>
              <Image
                objectFit="cover"
                src={newspaper}
                className={styles.mainImage}
                alt="Newspaper story preview"
              />
            </div>
          </div>
          <article className={styles.pageItem}>
            <div className={styles.textDispay}>
              <h3 className={styles.headerSpacer}>
                {experienceData[xp].title}
              </h3>
              <p>
                Throughout high school, I worked as a reporting intern at my
                local news group (Paynesville Press and EV-W Voice).
                <br />
                <br />
                In a largely self-directed role, I set up and conducted source
                interviews, attended and recorded government functions, and
                explored an interest in quantitative analysis with local and
                state data sets.
                <br /> <br />
                Across three summers, I developed a foundational working skill
                set, crossed one million words written (including school), and
                grew a deep appreciation for the everyday heroes in my home
                community. My now-vintage portfolio can be found{" "}
                <a href="https://sites.google.com/view/cz-hs-newspaper-archive/home?authuser=0">
                  here
                </a>
                .
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default WorkExperience;
