import styles from "../styles/WorkExperience.module.css";
import newspaper from "../assets/newspaper.jpeg";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <main className={styles.pageMain}>
      <section className={styles.allPageContent}>
        <div className={styles.pageItem}>
          <div className={styles.imageWrapper}>
            <Image
              objectFit="cover"
              src={newspaper}
              className={styles.mainImage}
              // Shadow and border radius! How to extend classes?
            />
          </div>
        </div>
        <article className={styles.pageItem}>
          <div className={styles.textDispay}>
            <h3 className={styles.headerSpacer}>Paynesville Press</h3>
            <p>
              Throughout high school, I worked as a reporting intern at my local
              newspaper group (Paynesville Press and EV-W Voice).
              <br />
              <br />
              In my largely self-directed role, I set up and conducted source
              interviews, attended and recorded government functions, and
              indulged an interest in quantitative analysis with local and state
              data sets.
              <br /> <br />
              Across three summers, I developed a foundational working skill
              set, crossed one million words written (including classes), and
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
  );
};

export default WorkExperience;
