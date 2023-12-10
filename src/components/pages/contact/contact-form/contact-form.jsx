import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./contact-form.module.scss";

const ContactForm = () => {
  return (
    <form
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className={styles.head}>
        Contact Us For <span>Help</span>
      </p>

      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <textarea placeholder="Message" rows={5} />
      <div className={styles.btn}>
        <CustomButton type={3} btnType="submit" >
          Submit
        </CustomButton>
      </div>
    </form>
  );
};

export default ContactForm;
