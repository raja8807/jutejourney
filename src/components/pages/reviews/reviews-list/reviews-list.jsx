import { Row } from "react-bootstrap";
import Review from "./review/review";

const ReviewsList = ({ reviews, setReviews, storageReviews }) => {
  return (
    <Row>
      {reviews.map((r, i) => (
        <Review
          key={r._id}
          data={r}
          setReviews={setReviews}
          index={i}
          storageReviews={storageReviews}
        />
      ))}
    </Row>
  );
};

export default ReviewsList;
