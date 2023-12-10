import { StarFill, Trash, Trash2 } from "react-bootstrap-icons";
import styles from "./review.module.scss";
import { Col } from "react-bootstrap";
const Review = ({ data,index,setReviews }) => {
  const { firstName, lastName, message, rating } = data;

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
        <Trash className={styles.trash} 
        onClick={()=>{
            setReviews((prev)=>{
                return prev.filter((r,i)=> i!==index)
            })
        }}
        />
      </div>
    </Col>
  );
};

export default Review;