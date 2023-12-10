import {
  EnvelopeAtFill,
  GeoAltFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import styles from "./contact-details.module.scss";
import contactDetails from "@/constants/contactDetails";

const ContactDetails = () => {
  return (
    <div className={styles.contactDetails}>
      <p className={styles.head}>Get in Touch With Us!</p>
      <div className={styles.contactRow}>
        <GeoAltFill className={styles.icon} />
        <div className={styles.loc}>
          {contactDetails.addresses.map((address) => (
            <div key={address.location}>
              <p>
                <b>{address.location}</b> : {address.lines[0]},
              </p>
              <p>{address.lines[1]}.</p>
              <br />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contactRow}>
        <EnvelopeAtFill className={styles.icon} />
        <div>
          <p>{contactDetails.email}</p>
        </div>
      </div>
      <div className={styles.contactRow}>
        <TelephoneFill className={styles.icon} />
        <p>+91 {contactDetails.mobile}</p>
      </div>
      <div className={styles.contactRow}>
        <Whatsapp className={styles.icon} />
        <p>+91 {contactDetails.whatsapp}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
