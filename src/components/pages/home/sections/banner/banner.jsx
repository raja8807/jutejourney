import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./banner.module.scss";
import { Carousel, Image } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const OverLay = ({ children, isSliding }) => (
  <div className={styles.overlay}>
    <div className={styles.cap}>
      {!isSliding && <h1 data-aos="fade-left">{children}</h1>}
    </div>
    {!isSliding && (
      <div className={styles.btns} data-aos="fade-right">
        <CustomButton href="/products">View Products</CustomButton>
        <Link
          href="/assets/catelogue.pdf"
          download={"LEDP - Jute Journey.pdf"}
          target="_blank"
        >
          <CustomButton type={4}>Download Catalogue</CustomButton>
        </Link>
      </div>
    )}
  </div>
);

const Banner = () => {
  const [isSliding, setIsSliding] = useState(false);

  return (
    <>
      <Carousel
        onSlide={() => {
          setIsSliding(true);
        }}
        onSlid={() => {
          setIsSliding(false);
        }}
      >
        <Carousel.Item className={styles.holder}>
          <OverLay isSliding={isSliding}>Empowerment in Every Weave</OverLay>
          <Image src="/images/banner/1.jpg" alt="xx" fluid />
        </Carousel.Item>
        <Carousel.Item className={styles.holder}>
          <Image src="/images/banner/2.jpg" alt="xx" fluid />
          <OverLay isSliding={isSliding}>
            Excellent service with no hidden costs
          </OverLay>
        </Carousel.Item>
        <Carousel.Item className={styles.holder}>
          <OverLay isSliding={isSliding}>Custom made bags for you</OverLay>
          <Image src="/images/banner/1.jpg" alt="xx" fluid />
        </Carousel.Item>
        <Carousel.Item className={styles.holder}>
          <OverLay isSliding={isSliding}>Innavation and Eco Friendly</OverLay>
          <Image src="/images/banner/2.jpg" alt="xx" fluid />
        </Carousel.Item>
      </Carousel>
      <br />
    </>
  );
};

export default Banner;
