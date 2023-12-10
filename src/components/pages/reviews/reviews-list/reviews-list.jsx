import { Row } from "react-bootstrap";
import Review from "./review/review";

const ReviewsList = ({ reviews, setReviews }) => {
  return (
    <Row>
      {reviews.map((r, i) => (
        <Review key={r._id} data={r} setReviews={setReviews} index={i} />
      ))}
    </Row>
  );
};

export default ReviewsList;
