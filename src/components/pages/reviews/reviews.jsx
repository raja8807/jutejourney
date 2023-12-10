import ReviewForm from "./review-form/review-form";
import ReviewsList from "./reviews-list/reviews-list";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const {
  default: SectionHeading,
} = require("@/components/ui/section-heading/section-heading");

const ReviewsPage = () => {
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
        <ReviewForm />
        <br />
        <ReviewsList />
      </CustomContainer>
      <br />
    </>
  );
};

export default ReviewsPage;
