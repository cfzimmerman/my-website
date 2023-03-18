import styles from "../../styles/experience.module.css";
import Image from "next/image";
import LinkButton from "../../components/LinkButton";
import { experienceData, experiencePaths } from "../../data/experienceData";
import Tag from "../../components/Tag";

export async function getStaticPaths() {
  return {
    paths: experiencePaths(),
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
  const { title, imageURL, Description, externalLink, linkTitle } =
    experienceData[xp];
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
              <a>
                <Image
                  src={imageURL}
                  layout="fill"
                  objectFit="contain"
                  className={styles.mainImage}
                  alt={title}
                />
              </a>
            </div>
          </div>
          <article className={styles.pageItem}>
            <div className={styles.textDispay}>
              <div className={styles.headerSpacer}>
                <h3 className={styles.title}>{title}</h3>
                {externalLink && linkTitle && (
                  <Tag key={title} title={linkTitle} link={externalLink} />
                )}
              </div>

              <Description />
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default WorkExperience;
