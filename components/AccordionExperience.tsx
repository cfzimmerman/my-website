import React from "react";
import { experienceData, ExperienceDataType } from "../data/experienceData";
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

const xpList = Object.entries(experienceData).map(
  ([key, data]: [string, ExperienceDataType]) => (
    <div key={key}>
      <LineDivider />
      <h4>
        {data.emoji} {data.title}
      </h4>
      <p>
        {data.brief} <InlineLink address={data.route}>More →</InlineLink>
      </p>
    </div>
  )
);

const AccordionExperience = ({ isActive }: InputTypes) => {
  return (
    <section className={styles.dropDownContent} data-isactive={isActive}>
      <article>{xpList}</article>
    </section>
  );
};

export default React.memo(AccordionExperience, areEqual);
