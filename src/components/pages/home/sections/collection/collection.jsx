import { Col, Image, Row } from "react-bootstrap";
import styles from "./collection.module.scss";
import { Eye, PlusCircle, PlusCircleFill } from "react-bootstrap-icons";
import contactDetails from "@/constants/contactDetails";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const {
  default: SectionHeading,
} = require("@/components/ui/section-heading/section-heading");

const CollectionSection = () => {
  return (
    <>
      <SectionHeading
        center
        caption="We are a recognized organization of this domain, involved in manufacturing, wholesaling and exporting a quality approved assortment of Jute Bags."
      >
        Our JuteBag Collection
      </SectionHeading>
    <CustomContainer>
      <br />
      <Row className={styles.imgHolderMd}>
        <Col xs={12} md={4} className={styles.col}>
          <div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/1.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/2.png" alt="1" fluid />
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className={styles.col}>
          <div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/3.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/6.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/7.png" alt="1" fluid />
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className={styles.col}>
          <div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/5.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/4.png" alt="1" fluid />
            </div>
          </div>
        </Col>
      </Row>

      <Row className={styles.imgHolderSm}>
        <Col xs={6} md={4} className={styles.col}>
          <div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/2.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/3.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/6.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/7.png" alt="1" fluid />
            </div>
          </div>
        </Col>

        <Col xs={6} md={4} className={styles.col}>
          <div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/1.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/5.png" alt="1" fluid />
            </div>
            <div>
              <div className={styles.overlay}>
                <PlusCircleFill className={styles.ico} />
              </div>
              <Image src="/images/collection/4.png" alt="1" fluid />
            </div>
          </div>
        </Col>
      </Row>
      <small className={styles.txt}>
        With hundreds of colours, designs, sizes and options available, choosing
        your ideal bag may seem complicated. {' '}
        {/* <br /> */}
        Give us a call on <span>+91 {contactDetails.mobile} </span>
        or email <span>{contactDetails.email}</span> and we will ensure that we
        find you the perfect bag.
      </small>
      <br />
      <br />
    </CustomContainer>
    </>
  );
};

export default CollectionSection;
