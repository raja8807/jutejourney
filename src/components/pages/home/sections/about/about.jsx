const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const { Row, Col, Image } = require("react-bootstrap");

import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./about.module.scss";
import { CaretRightFill } from "react-bootstrap-icons";
import SectionHeading from "@/components/ui/section-heading/section-heading";

const AboutSection = () => {
  return (
     <>
      <SectionHeading center>About Us</SectionHeading>
    <CustomContainer className={styles.aboutSec}>
      <Row>
        <Col sm={12} md={6} lg={8} className={styles.content}>
          <p>
            Empowerment in Every Weave: Discover the perfect blend of style and
            substance with our jute bags, meticulously crafted by 90 SelfHelp
            Group (SHG) women Tenkasi District who have undergone a
            transformative manufacturing training program (LEDP). Supported by
            AOS Mission and financially backed by NABARD, this initiative
            ensures not only the highest quality but also serves as a powerful
            means of empowerment for these skilled artisans. The manufacturing
            process, overseen by NABARD, guarantees top-tier products that
            resonate with craftsmanship and durability, thanks to the expertise
            imparted by subject professionals. Your choice to purchase our jute
            bags transcends mere fashion; it is a conscious decision to support
            the lives of these empowered women. With every sale, you contribute
            to the betterment of their livelihoods, paving the way for financial
            stability and improved well-being. Additionally, by opting for our
            eco-friendly jute bags, you play a role in the larger movement to
            eliminate plastics and embrace a sustainable, green future. Join us
            in making a statement - one that blends style, empowerment, and
            environmental consciousness in Tenkasi District.
          </p>
          <Row>
            <Col className={styles.feature} xs={6}>
              <CaretRightFill />
              <p>Large stock held at all times</p>
            </Col>
            <Col className={styles.feature} xs={6}>
              <CaretRightFill />
              <p>In-house design team</p>
            </Col>
            <Col className={styles.feature} xs={6}>
              <CaretRightFill />
              <p>Customized Services</p>
            </Col>
            <Col className={styles.feature} xs={6} >
              <CaretRightFill />
              <p>Ethical Trading</p>
            </Col>
          </Row>
          <br/>

          <CustomButton>Know More</CustomButton>
        </Col>

        <Col sm={12} md={6} lg={4} className={styles.content}>
          <h5>Compliant Production</h5>
          <Row>
            <Col xs={4} className={styles.imgHolder}>
              <Image src="/images/partners/vipro.png" fluid alt="vsilage" />
            </Col>
            <Col xs={4} className={styles.imgHolder}>
              <Image src="/images/partners/dheiraa.png" fluid alt="vsilage" />
            </Col>
            <Col xs={4} className={styles.imgHolder}>
              <Image src="/images/partners/data.png" fluid alt="vsilage" />
            </Col>
          </Row>
          <br />
          <h5>Financially Supported</h5>
          <Row>
            <Col xs={3} className={styles.imgHolder}>
              <Image src="/images/partners/nabard.png" fluid alt="vsilage" />
            </Col>
            <Col xs={4} className={styles.imgHolder}>
              {/* <Image src="/images/partners/dheiraa.png" fluid alt="vsilage" /> */}
            </Col>
            <Col xs={4} className={styles.imgHolder}>
              {/* <Image src="/images/partners/data.png" fluid alt="vsilage"/> */}
            </Col>
          </Row>
        </Col>
      </Row>
      <br/>
    </CustomContainer>
     </>
  );
};

export default AboutSection;
