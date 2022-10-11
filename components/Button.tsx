import getEmailLink from "../actions/getEmailLink";
import styles from "../styles/components/Button.module.css";

type customStyleOptions = "socialButton" | "emailButton";
const ePt1 = ":cfzimmerman";
const ePt2 = "college";
const ePt3 = ".harvard.edu";

interface InputTypes {
  title: string;
  customStyle: customStyleOptions;
  anchor: string;
}

const getCustomStyle = (customStyle: customStyleOptions) => {
  if (customStyle === "socialButton") {
    return styles.socialLink;
  } else if (customStyle === "emailButton") {
    return styles.emailLink;
  }
};

const Button = ({ title, customStyle, anchor }: InputTypes) => {
  return (
    <p>
      <a
        className={[styles.button, getCustomStyle(customStyle)].join(" ")}
        href={anchor}
      >
        {title}
      </a>
    </p>
  );
};

export default Button;
