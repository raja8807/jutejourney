import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./contact-form.module.scss";
import { useState } from "react";
import { Check2Circle } from "react-bootstrap-icons";

const ContactFormXX = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mbjnllvl", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          message: values,
        }),
        mode: "no-cors",
      });
      console.log(res);
      if (res) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <form
      className={styles.contactForm}
      onSubmit={async (e) => {
        e.preventDefault();
        await sendMessage();
      }}
    >
      <p className={styles.head}>
        Contact Us For <span>Help</span>
      </p>
      {isSuccess ? (
        <div className={styles.success}>
          <Check2Circle />
          <p>Thank you!</p>
          <small>Your message has been sent</small>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Name"
            required
            value={values.name}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={values.email}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            pattern="[0-9]{10}"
            value={values.phone}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, phone: e.target.value }));
            }}
          />
          <textarea
            placeholder="Message"
            rows={5}
            required
            value={values.message}
            onChange={(e) => {
              setValues((prev) => ({ ...prev, message: e.target.value }));
            }}
          />
          <div className={styles.btn}>
            <CustomButton type={3} btnType="submit" isLoading={isLoading}>
              Submit
            </CustomButton>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactFormXX;
