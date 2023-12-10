import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section-heading/section-heading";
import { Col, Row } from "react-bootstrap";
import ContactForm from "./contact-form/contact-form";
import ContactDetails from "./contact-details/contact-details";

const ContactPage = () => {
  return (
    <div>
      <SectionHeading center>Contact Us</SectionHeading>
      <br />
      <CustomContainer>
        <Row>
          <Col xs={12} md={7}>
            <ContactForm />
          </Col>
          <Col xs={12} md={5}>
            <ContactDetails />
          </Col>
        </Row>
      </CustomContainer>
      <br />
    </div>
  );
};

export default ContactPage;
