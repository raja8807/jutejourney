import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./journey.module.scss";
import SectionHeading from "@/components/ui/section-heading/section-heading";
import { Col, Image, Row } from "react-bootstrap";
import { AirplaneFill, DropletFill, StarFill } from "react-bootstrap-icons";

const JuteJourneySection = () => {
  return (
    <>
      <SectionHeading
        center
        caption="Choose from over 100 stock styles | Lead times up to 10 working days"
      >
        Jute Journey
      </SectionHeading>
      <CustomContainer className={styles.juteJourney}>
        <br />
        <Row>
          <Col xs={6} md={6}>
            <Image src="/images/assets/diagram1.png" alt="diagram1" fluid />
          </Col>
          <Col xs={6} md={6}>
            <Image src="/images/assets/diagram2.png" alt="diagram1" fluid />
          </Col>
        </Row>
        <p className={styles.text}>CHOOSE FROM JUTE, COTTON, CANVAS</p>
        <p className={styles.text}>
          We hold stock of over 100 styles of bag in jute, cotton and Canvas.
          Choose from cotton tote bags to jute shoppers and have your own
          artwork printed on any of our stock bags
        </p>
      </CustomContainer>
      <div className={styles.holder}>
        <CustomContainer className={styles.wrap}>
        <div className={styles.box}>
          <div className={styles.top}>
            <DropletFill />
            <span>Print Specialists</span>
          </div>
          <div className={styles.bottom}>Screen | Digital | Transfer</div>
        </div>
        <div className={styles.box}>
          <div className={styles.top}>
            <AirplaneFill style={{ transform: "rotate(30deg)" }} />
            <span>Flexible Delivery</span>
          </div>
          <div className={styles.bottom}>Up to 10 working days</div>
        </div>
        <div className={styles.box}>
          <div className={styles.top}>
            <StarFill />
            <span>Quality Service</span>
          </div>
          <div className={styles.bottom}>
            Dedicated team to oversee your order
          </div>
        </div>
        </CustomContainer>
      </div>
      <br/>
    </>
  );
};

export default JuteJourneySection;
