import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./footer.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import SocialLinks from "@/components/ui/social_links/social_links";
import Link from "next/link";
import {
  ChevronRight,
  EnvelopeAt,
  EnvelopeAtFill,
  GeoAltFill,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";

const Section = ({ children }) => (
  <Col sm={12} md={6} lg={3} className={styles.section}>
    {children}
  </Col>
);

const Footer = ({ pages }) => {
  return (
    <footer className={styles.footer}>
      <CustomContainer>
        <Row>
          <Section>
            <Image
              fluid
              src="/images/logo/logo-full.png"
              alt="logo"
              width={250}
            />
            <br />
            <br />
            <p>
              Jute King is one of the fast growing manufacturers in jute and non
              woven industry. We engaged in manufacturing all kinds of Jute
              Bags, Non Woven Bags, Wedding Bags, Canvas Bags, Shopping Bags,
              Joco Bags, and Cotton Bags etc.
            </p>
            <br />
            <br />
            <SocialLinks />
          </Section>
          <Section>
            <h4>USEFULL LINKS</h4>
            {pages.map((page) => (
              <div key={page.name} className={styles.row}>
                <ChevronRight stroke="#909090" className={styles.chevron} />
                <Link href={page.href}>{page.name}</Link>
              </div>
            ))}
          </Section>
          <Section>
            <h4>LOCATE US</h4>
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                width: "100%",
                height: "300px",
              }}
            >
              <div
                id="display-google-map"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  style={{ height: "100%", width: "100%", border: "0" }}
                  frameborder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=Tuticorin,+Tamil+Nadu,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
              <a
                class="from-embedmap-code"
                href="https://www.bootstrapskins.com/themes"
                id="enable-maps-data"
              >
                premium bootstrap themes
              </a>
              <style>{`#display-google-map img.text-marker{max-width:none!important;background:none!important;}img{max-width:none}`}</style>
            </div>
          </Section>
          <Section>
            <h4>CONTACT INFORMATION</h4>
            <div className={styles.contactRow}>
              <GeoAltFill className={styles.icon} />
              <div>
                <p>#7A, Nathan Building, 1st Floor,</p>
                <p>North Usman Road, T. Nagar,</p>
                <p>Chennai - 600017.</p>
              </div>
            </div>
            <div className={styles.contactRow}>
              <EnvelopeAtFill className={styles.icon} />
              <div>
                <p>admin@jutejourney.com</p>
              </div>
            </div>
            <div className={styles.contactRow}>
              <TelephoneFill className={styles.icon} />
              <p>+91 9876598745</p>
            </div>
            <div className={styles.contactRow}>
              <Whatsapp className={styles.icon} />
              <p>+91 9876598745</p>
            </div>
          </Section>
        </Row>
      </CustomContainer>
      {/* <div className={styles.bottom}>
        <p>
          Copyright 2018 
        </p>
      </div> */}
    </footer>
  );
};

export default Footer;
