import { StarFill, Trash } from "react-bootstrap-icons";
import styles from "./review.module.scss";
import { Col } from "react-bootstrap";
import axios from "axios";
import { useSession } from "next-auth/react";
const Review = ({ data, index, setReviews, storageReviews }) => {
  const { firstName, lastName, message, rating, _id } = data;


  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/review?id=${_id}`);
      console.log(res);
      if (res.status === 200) {
        setReviews((prev) => {
          return prev.filter((r, i) => i !== index);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const session = useSession();

  return (
    <Col xs={12} md={6}>
      <div className={styles.review}>
        <div className={styles.left}>
          <div>
            {firstName[0]}
            {lastName[0]}
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.name}>
            {firstName} {lastName}
          </p>
          <div>
            {[1, 2, 3, 4, 5].map((idx) => {
              return (
                <StarFill
                  key={idx}
                  className={`${styles.star} ${rating >= idx && styles.active}`}
                />
              );
            })}
          </div>
          <p className={styles.message}>{message}</p>
        </div>
        {(session.data || storageReviews?.includes(_id)) && (
          <Trash className={styles.trash} onClick={handleDelete} />
        )}
      </div>
    </Col>
  );
};

export default Review;
