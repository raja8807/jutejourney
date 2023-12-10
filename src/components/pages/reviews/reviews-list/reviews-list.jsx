import { Row } from "react-bootstrap";
import Review from "./review/review";
import { useState } from "react";

const ReviewsList = () => {
  const [reviews,setReviews] = useState([
    {
      _id: "1",
      firstName: "Raja",
      lastName: "Rathinam",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nobis illum? Perspiciatis quae quia quidem dicta ipsum sit quo maiores delectus, autem totam officiis? Iste aliquam consequuntur aspernatur non rerum!",
      rating: 4,
    },
    {
      _id: "2",
      firstName: "John",
      lastName: "Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nobis illum? Perspiciatis quae quia quidem dicta ipsum sit quo maiores delectus, autem totam officiis? Iste aliquam consequuntur aspernatur non rerum!",
      rating: 3,
    },
    {
      _id: "1",
      firstName: "Foo",
      lastName: "User",
      message:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nobis illum? Perspiciatis quae quia quidem dicta ipsum sit quo maiores delectus, autem totam officiis? Iste aliquam consequuntur aspernatur non rerum!",
      rating: 5,
    },
  ])
  return (
    <Row >
      {reviews.map((r) => (
        <Review key={r._id} data={r} />
      ))}
    </Row>
  );
};

export default ReviewsList;
