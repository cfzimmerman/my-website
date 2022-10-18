import styles from "../styles/components/CheckBox.module.css";

interface InputTypes {
  setIsActive: Function;
  title: string;
}

const CheckBox = ({ setIsActive, title }: InputTypes) => {
  return (
    <label className={styles.container}>
      <input
        className={styles.checkBox}
        type={"checkbox"}
        onChange={() => setIsActive((current: boolean) => !current)}
      />
      <div className={styles.checkMark} />
      {title}
    </label>
  );
};

export default CheckBox;
