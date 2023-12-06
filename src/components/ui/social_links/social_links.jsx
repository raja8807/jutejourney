const {
  Facebook,
  Instagram,
  Youtube,
  Whatsapp,
  Linkedin,
} = require("react-bootstrap-icons");
import Link from "next/link";
import styles from "./social_links.module.scss";
import contactDetails from "@/constants/contactDetails";
import { useState } from "react";

const Blob = ({ href, icon, color, header }) => {
  const [hovered, setHovered] = useState(false);

  const st = { backgroundColor: hovered ? color : "transparent" };

  if (header) {
    st.color = !hovered ? color : "white";
  }

  return (
    <Link
      target="_blank"
      href={href}
      style={{
        // borderBottom: `3px solid ${header && !hovered ? color : "transparent"}`,
        borderBottom: `3px solid ${!hovered ? color : "transparent"}`,
      }}
    >
      <div
        className={styles.item}
        style={st}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {icon}
      </div>
    </Link>
  );
};

const SocialLinks = ({ header }) => {
  return (
    <div className={styles.social}>
      <Blob
        color="#1877F2"
        href={contactDetails.facebook}
        icon={<Facebook />}
        header={header}
      />
      <Blob
        color="#CD201F"
        href={contactDetails.youtube}
        icon={<Youtube />}
        header={header}
      />
      <Blob
        color="#075e54"
        href={contactDetails.whatsapp}
        icon={<Whatsapp />}
        header={header}
      />
      <Blob
        color="#0077b5"
        href={contactDetails.linkedIn}
        icon={<Linkedin />}
        header={header}
      />
      <Blob
        color="#cd486b"
        href={contactDetails.instagram}
        icon={<Instagram />}
        header={header}
      />
    </div>
  );
};

export default SocialLinks;
