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
      id: "4",
      text: "Perfect for every need. I'm impressed by their quality and environmental commitment. Highly recommend supporting this eco-friendly brand.",
      isMale: true,
      name: "Mohan Ram",
      location: "Tuticorin",
    },
    {
      id: "1",
      text: "Love these bags! They're strong, look great, and eco-friendly. Perfect for all needs. Impressed by quality and planet-friendly approach. Highly recommend supporting this eco-conscious company.",
      isMale: true,
      name: "Satheesh Kumar",
      location: "Tirunelveli",
    },
    {
      id: "2",
      text: "Love these eco-bags! Sturdy, fashionable, and sustainable. Ideal for various uses. Impressed by their quality and commitment to the environment. Highly recommended.",
      isMale: false,
      name: "Sundari Raj",
      location: "Chennai",
    },
    // {
    //   id: "3",
    //   text: "These bags are fantastic! Durable, trendy, and good for the planet. Great quality and environmentally friendly. Recommend this eco-aware company wholeheartedly.",
    //   isMale: false,
    //   name: "Firstname Lastname 3",
    //   location: "Tirunelveli",
    // },
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
          <CustomButton href="/reviews">View More</CustomButton>
        </div>
        <br />
      </CustomContainer>
    </>
  );
};

export default ReviewsSection;
