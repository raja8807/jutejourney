import SectionHeading from "@/components/ui/section-heading/section-heading";
import AboutSection from "../home/sections/about/about";
import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./about.module.scss";
import {
  AirplaneFill,
  DropletFill,
  FileZip,
  Pencil,
  PencilFill,
  StarFill,
} from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Customiized from "./cutomized/customized";

const AboutScreen = () => {
  return (
    <>
      <AboutSection isAboutPage />
      <SectionHeading center>Our Journey</SectionHeading>
      <CustomContainer>
        <Row>
          <Col xs={12} lg={6}>
            <Image
              src="/images/about/ab1 (1).JPG"
              fluid
              alt="1"
              className={styles.abImg}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Image
              src="/images/about/ab1 (4).jpeg"
              fluid
              alt="1"
              className={styles.abImg}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Image
              src="/images/about/ab1 (2).JPG"
              fluid
              alt="1"
              className={styles.abImg}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Image
              src="/images/about/ab1 (1).jpeg"
              fluid
              alt="1"
              className={styles.abImg}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Image
              src="/images/about/ab1 (2).jpeg"
              fluid
              alt="1"
              className={styles.abImg}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Image
              src="/images/about/ab1 (3).jpeg"
              fluid
              alt="1"
              className={styles.abImg}
            />
          </Col>
        </Row>
        <div className={styles.center}>
          <CustomButton href="/gallery">View Our Gallery</CustomButton>
        </div>
      </CustomContainer>
      <br />
      <SectionHeading
        center
        caption="You imagine it, we'll create it | Lead times from 8 weeks"
      >
        CUSTOMIZED SERVICE
      </SectionHeading>

      <CustomContainer className={styles.juteJourney}>
        <br />
        <Row>
          <Col xs={12} md={12}>
            <Image src="/images/about/customized.jpg" alt="customized" fluid />
          </Col>
        </Row>
        <p className={styles.text}>YOU DESIGN IT, WE’LL CREATE IT</p>
        <p className={styles.text}>
          We make it easy for you to design your own customized bag! Work
          directly with our in-house design team, we can help you with your bag
          design as well as artwork for your bag! Creating mock-ups or visuals
          of your chosen design before you go on to sampling and bulk
          production. Need help converting your artwork to the correct format?
          Our artwork team would be happy to help with that too!
        </p>
      </CustomContainer>

      <div className={styles.holder}>
        <CustomContainer className={styles.wrap}>
          <div className={styles.box}>
            <div className={styles.top}>
              <span>In-house Design</span>
              <div className={styles.icon}>
                <Pencil />
              </div>
            </div>
            <div className={styles.bottom}>
              Work directly with our design studio
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.icon}>
                <DropletFill />
              </div>
              {/* <AirplaneFill style={{ transform: "rotate(30deg)" }} /> */}
              <span>rint Specialists</span>
            </div>
            <div className={styles.bottom}>Screen | Digital | Transfer</div>
          </div>
          <div className={styles.box}>
            <div className={styles.top}>
              <div className={styles.icon}>
                <FileZip />
              </div>
              <span>Accessories</span>
            </div>
            <div className={styles.bottom}>Rivets | Grommets | Zippers</div>
          </div>
        </CustomContainer>

        <br />
      </div>
      <CustomContainer>
        <Customiized />
        <br />
      </CustomContainer>
    </>
  );
};

export default AboutScreen;
