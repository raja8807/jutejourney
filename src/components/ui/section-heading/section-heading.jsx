import CustomContainer from "../custom_container/custom_container";
import styles from "./section-heading.module.scss";
const SectionHeading = ({ children, caption, center }) => {
  return (
    <div
      className={styles.head}
      style={{ textAlign: center ? "center" : "left" }}
    >
      <CustomContainer>
        <h2>{children}</h2>
        <small>{caption}</small>
      </CustomContainer>
    </div>
  );
};

export default SectionHeading;
