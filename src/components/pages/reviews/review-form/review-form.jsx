import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./review-form.module.scss";
import { StarFill } from "react-bootstrap-icons";
import { useState } from "react";

const ReviewForm = () => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <form className={styles.reviewForm}>
      <p>Leave a review</p>
      <div className={styles.row}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <textarea placeholder="What do you think about us?" rows={4} />
      <div
        className={styles.rating}
        onMouseLeave={() => {
          setHoveredRating(0);
        }}
      >
        <p>Your Rating :</p>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((idx) => {
            return (
              <StarFill
                className={`${styles.star} ${
                  hoveredRating >= idx && styles.hovered
                } ${selectedRating >= idx && styles.hovered}`}
                key={idx}
                onMouseEnter={() => {
                  setHoveredRating(idx);
                }}
                onClick={() => {
                  setSelectedRating(idx);
                }}
              />
            );
          })}
        </div>
      </div>
      <CustomButton type={3}>Submit</CustomButton>
    </form>
  );
};

export default ReviewForm;
