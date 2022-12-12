import React from "react";
import { workData, WorkDataType } from "../data/workData";
import styles from "../styles/components/AccordionUnit.module.css";
import InlineLink from "./InlineLink";
import LineDivider from "./LineDivider";

interface InputTypes {
  isActive: boolean;
}

const areEqual = (prev: InputTypes, next: InputTypes) => {
  if (prev.isActive === next.isActive) {
    return true;
  }
  return false;
};
const workList = workData.map((data: WorkDataType) => (
  <div key={data.key}>
    <LineDivider />
    <h4>{data.title}</h4>
    <p>
      {data.description} <InlineLink address={data.route}>More →</InlineLink>
    </p>
  </div>
));

const AccordionWork = ({ isActive }: InputTypes) => {
  return (
    <section className={styles.dropDownContent} data-isactive={isActive}>
      <article>{workList}</article>
    </section>
  );
};
/*
As a college freshman, I managed strategic partnerships at the world's largest student-run company.
*/
export default React.memo(AccordionWork, areEqual);
