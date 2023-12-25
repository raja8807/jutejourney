const { default: CustomButton } = require("@/components/ui/custom_button/custom_button");
const { Image, Row, Col } = require("react-bootstrap");

const Customiized = () => {
  return (
    <>
      <Image src="/images/about/3.jpg" fluid alt="custom" />
      <Row>
        <Col xs={12} md={6}>
          <Image src="/images/about/4.jpg" fluid alt="custom" />
        </Col>
        <Col xs={12} md={6}>
          <Image src="/images/about/5.jpg" fluid alt="custom" />
          <br />
          <br />
          <CustomButton type={2} href='/contact'>Contact Now</CustomButton>
          <br />
        </Col>
      </Row>
      <Image src="/images/about/bottom.jpg" fluid alt="custom" />
    </>
  );
};

export default Customiized
