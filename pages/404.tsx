import LinkButton from "../components/LinkButton";
import styles from "../styles/construction.module.css";

const Construction = () => {
  return (
    <main className={styles.container}>
      <h1>😱</h1>
      <h4 className={styles.textSpacer}>Page not found.</h4>
      <LinkButton title="Go back" anchor="/" customStyle="listButton" />
    </main>
  );
};

export default Construction;
