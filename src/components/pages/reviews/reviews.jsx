import { useState } from "react";
import ReviewForm from "./review-form/review-form";
import ReviewsList from "./reviews-list/reviews-list";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const {
  default: SectionHeading,
} = require("@/components/ui/section-heading/section-heading");

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    // {
    //   _id: "1",
    //   firstName: "Raja",
    //   lastName: "Rathinam",
    //   message:
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nobis illum? Perspiciatis quae quia quidem dicta ipsum sit quo maiores delectus, autem totam officiis? Iste aliquam consequuntur aspernatur non rerum!",
    //   rating: 4,
    // },
    // {
    //   _id: "2",
    //   firstName: "John",
    //   lastName: "Doe",
    //   message:
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nobis illum? Perspiciatis quae quia quidem dicta ipsum sit quo maiores delectus, autem totam officiis? Iste aliquam consequuntur aspernatur non rerum!",
    //   rating: 3,
    // },
    // {
    //   _id: "3",
    //   firstName: "Foo",
    //   lastName: "User",
    //   message:
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nobis illum? Perspiciatis quae quia quidem dicta ipsum sit quo maiores delectus, autem totam officiis? Iste aliquam consequuntur aspernatur non rerum!",
    //   rating: 5,
    // },
  ]);

  return (
    <>
      <SectionHeading
        center
        caption="Look what our precious customers say about us"
      >
        Reviews
      </SectionHeading>
      <br />
      <CustomContainer>
        <ReviewForm setReviews={setReviews} />
        <br />
        <ReviewsList reviews={reviews} setReviews={setReviews}/>
      </CustomContainer>
      <br />
    </>
  );
};

export default ReviewsPage;
