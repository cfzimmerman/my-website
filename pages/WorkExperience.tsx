import styles from "../styles/WorkExperience.module.css";
import defaultImg from "../assets/defaultImg.jpeg";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <main className={styles.pageMain}>
      <section className={styles.allPageContent}>
        <div className={styles.pageItem}>
          <Image
            objectFit="cover"
            src={defaultImg}
            className={styles.mainImage}

            // Shadow and border radius! How to extend classes?
          />
        </div>
        <article className={styles.pageItem}>
          <h3>Paynesville Press</h3>
          <p>
            Words words Words words Words words Words words Words words Words
            words Words words Words words Words words Words words Words words
          </p>
        </article>
      </section>
    </main>
  );
};

export default WorkExperience;
