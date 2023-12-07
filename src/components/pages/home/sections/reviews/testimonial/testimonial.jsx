import { Image } from "react-bootstrap";
import styles from "./testimonial.module.scss";

const Testimonial = ({ data }) => {
  const { text, isMale, name, location } = data;
  return (
    <div className={styles.testimonial}>
      <div className={styles.text}>
        <i>
          {/* <div>&quot;</div> */}
          {text}
          {/* <div>&quot;</div> */}
        </i>
      </div>
      <Image
        src={`/images/assets/${isMale ? "boy" : "girl"}.png`}
        alt="avatar"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

export default Testimonial;
