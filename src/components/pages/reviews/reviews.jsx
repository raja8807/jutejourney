import { useState } from "react";
import ReviewForm from "./review-form/review-form";
import ReviewsList from "./reviews-list/reviews-list";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const {
  default: SectionHeading,
} = require("@/components/ui/section-heading/section-heading");

const ReviewsPage = ({ Allreviews }) => {
  const [reviews, setReviews] = useState(Allreviews);

  const [storageReviews, setLocalStorage] = useState([]);

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
        <ReviewForm
          setReviews={setReviews}
          setLocalStorage={setLocalStorage}
          storageReviews={storageReviews}
        />
        <br />
        <ReviewsList
          reviews={reviews}
          setReviews={setReviews}
          storageReviews={storageReviews}
        />
      </CustomContainer>
      <br />
    </>
  );
};

export default ReviewsPage;
