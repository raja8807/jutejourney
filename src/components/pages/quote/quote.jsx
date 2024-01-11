const {
  default: CustomButton,
} = require("@/components/ui/custom_button/custom_button");
const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const {
  default: SectionHeading,
} = require("@/components/ui/section-heading/section-heading");
import { Col, Row } from "react-bootstrap";
import styles from "./quote.module.scss";
import PRODUCT_DETALS from "../products/constant";
import { useState } from "react";
import axios from "axios";
import { Check2All, Check2Circle } from "react-bootstrap-icons";

const QuoteScreen = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("https://formspree.io/f/mbjnllvl", {
        email: values.email,
        message: values,
      });
      if (res) {
        setIsSuccess(true);
        setValues({
          name: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  //   console.log(values);

  return (
    <>
      <SectionHeading center>Request Quote</SectionHeading>
      <br />
      <CustomContainer>
        <form
          className={styles.contactForm}
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <p className={styles.head}>
            Request a <span>Free Quote</span>
          </p>

          <input
            type="text"
            placeholder="Name"
            required
            value={values.name}
            onChange={(e) => {
              const { value } = e.target;
              setValues((prev) => ({ ...prev, name: value }));
            }}
          />
          <Row>
            <Col>
              <input
                type="email"
                placeholder="Email"
                required
                value={values.email}
                onChange={(e) => {
                  const { value } = e.target;
                  setValues((prev) => ({ ...prev, email: value }));
                }}
              />
            </Col>
            <Col>
              <input
                type="tel"
                placeholder="Phone"
                pattern="[0-9]{10}"
                required
                value={values.phone}
                onChange={(e) => {
                  const { value } = e.target;
                  setValues((prev) => ({ ...prev, phone: value }));
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <select
                placeholder="Product"
                value={values.product}
                onChange={(e) => {
                  const { value } = e.target;
                  setValues((prev) => ({ ...prev, product: value }));
                }}
                required
              >
                <option value="">Select product</option>
                {PRODUCT_DETALS.map((pro) => (
                  <option key={pro.id} value={pro.name}>
                    {pro.name}
                  </option>
                ))}
              </select>
            </Col>
            <Col>
              <input
                type="number"
                placeholder="Quantity"
                required
                value={values.quantity}
                onChange={(e) => {
                  const { value } = e.target;
                  setValues((prev) => ({ ...prev, quantity: value }));
                }}
              />
            </Col>
          </Row>
          <textarea
            placeholder="Message"
            rows={5}
            required
            value={values.message}
            onChange={(e) => {
              const { value } = e.target;
              setValues((prev) => ({ ...prev, message: value }));
            }}
          />
          <div className={styles.btn}>
            <CustomButton type={3} btnType="submit" isLoading={isLoading}>
              Submit
            </CustomButton>
          </div>
          {isSuccess && (
            <small className={styles.successMsg}>
              <Check2Circle />
              &nbsp; Request Sent
            </small>
          )}
        </form>
      </CustomContainer>
      <br />
      <br />
    </>
  );
};

export default QuoteScreen;
