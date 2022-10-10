import styles from "../styles/components/Button.module.css";

type customStyleOptions = "socialButton";

interface InputTypes {
  title: string;
  customStyle: customStyleOptions;
  anchor: string;
}

const getCustomStyle = (customStyle: customStyleOptions) => {
  if (customStyle === "socialButton") {
    return styles.socialLink;
  }
};

const Button = ({ title, customStyle, anchor }: InputTypes) => {
  return (
    <p>
      <a
        id={getCustomStyle(customStyle)}
        className={styles.button}
        href={anchor}
      >
        {title}
      </a>
    </p>
  );
};

export default Button;
