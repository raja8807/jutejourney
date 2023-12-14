import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./review-form.module.scss";
import { StarFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const ReviewForm = ({ setReviews, storageReviews, setLocalStorage }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const r = localStorage.getItem("reviews");
    setLocalStorage(r ? JSON.parse(r) : []);
  }, []);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const newReview = { ...values, rating: selectedRating };
      const res = await axios.post("/api/review", newReview);
      setReviews((prev) => [res.data, ...prev]);
      const newStorage = [...storageReviews, res.data._id];
      localStorage.setItem("reviews", JSON.stringify(newStorage));
      setLocalStorage(newStorage);
      setValues({
        firstName: "",
        lastName: "",
        message: "",
      });
      setSelectedRating(0);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <form className={styles.reviewForm}>
      <p className={styles.head}>
        Leave a <span>review</span>
      </p>
      <div className={styles.row}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            const { value } = e.target;
            setValues((prev) => ({ ...prev, firstName: value }));
          }}
          value={values.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            const { value } = e.target;
            setValues((prev) => ({ ...prev, lastName: value }));
          }}
          value={values.lastName}
        />
      </div>
      <textarea
        placeholder="What do you think about us?"
        rows={4}
        onChange={(e) => {
          const { value } = e.target;
          setValues((prev) => ({ ...prev, message: value }));
        }}
        value={values.message}
      />
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
                } ${selectedRating >= idx && styles.active}`}
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
      <CustomButton
        type={3}
        disabled={
          !values.firstName ||
          !values.lastName ||
          !values.message ||
          !selectedRating
        }
        isLoading={isLoading}
        clickHandler={handleSubmit}
      >
        Submit
      </CustomButton>
    </form>
  );
};

export default ReviewForm;
