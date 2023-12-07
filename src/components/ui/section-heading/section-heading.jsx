import styles from "./section-heading.module.scss";
const SectionHeading = ({ children, caption,center }) => {
  return (
    <div className={styles.head} style={{textAlign:center?'center':'left'}}>
      <h2>{children}</h2>
      <small>{caption}</small>
    </div>
  );
};

export default SectionHeading;
