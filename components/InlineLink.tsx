import Link from "next/link";
import styles from "../styles/components/InlineLink.module.css";

interface InputTypes {
  address: string;
  children?: string | JSX.Element;
}

const InlineLink = ({ children, address }: InputTypes) => (
  <Link href={address}>
    <a className={styles.inlineLink}>{children}</a>
  </Link>
);

export default InlineLink;
