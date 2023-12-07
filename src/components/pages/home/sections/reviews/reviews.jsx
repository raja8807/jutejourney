import SectionHeading from "@/components/ui/section-heading/section-heading";
import Testimonial from "./testimonial/testimonial";
import { Carousel } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import styles from "./reviews.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");

const ReviewsSection = () => {
  const reviews = [
    {
      id: "1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga eveniet iste et non rerum vel ducimus nam labore sit ab laborum, natus reprehenderit voluptates nostrum temporibus ullam earum nihil.",
      isMale: true,
      name: "Firstname Lastname 1",
      location: "Coimbatore",
    },
    {
      id: "2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga eveniet iste et non rerum vel ducimus nam labore sit ab laborum, natus reprehenderit voluptates nostrum temporibus ullam earum nihil.",
      isMale: false,
      name: "Firstname Lastname 2",
      location: "Chennai",
    },
    {
      id: "3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga eveniet iste et non rerum vel ducimus nam labore sit ab laborum, natus reprehenderit voluptates nostrum temporibus ullam earum nihil.",
      isMale: false,
      name: "Firstname Lastname 3",
      location: "Tirunelveli",
    },
    {
      id: "4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga eveniet iste et non rerum vel ducimus nam labore sit ab laborum, natus reprehenderit voluptates nostrum temporibus ullam earum nihil.",
      isMale: true,
      name: "Firstname Lastname 4",
      location: "Tuticorin",
    },
  ];

  return (
    <>
      <SectionHeading
        center
        caption="Look what our precious customers say about us."
      >
        Customer Reviews
      </SectionHeading>
      <CustomContainer className={styles.reviews}>
        <br />
        <Carousel
          controls
          nextIcon={<ArrowRight className={styles.arrow} />}
          prevIcon={<ArrowLeft className={styles.arrow} />}
        >
          {reviews.map((r) => (
            <Carousel.Item key={r.id}>
              <Testimonial data={r} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={styles.btn}>
          <CustomButton>View More</CustomButton>
        </div>
        <br />
      </CustomContainer>
    </>
  );
};

export default ReviewsSection;
