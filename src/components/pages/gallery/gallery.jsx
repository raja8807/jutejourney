import styles from "./gallery.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section-heading/section-heading";
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import FullView from "./full-view/full-view";

const GalleryScreen = ({ allImages = [] }) => {
  const categories = ["Category 1", "Category 2", "Category 3"];
  const [currentCategory, setCurrentCategory] = useState("All");
  const [fullViewIndex, setFullViewIndex] = useState(null);

  const [images, setImages] = useState(allImages);

  useEffect(() => {
    setImages(
      allImages.filter((x) => {
        if (currentCategory === "All") {
          return true;
        } else {
          return x.category === currentCategory;
        }
      })
    );
  }, [currentCategory]);

  const [isSm, setIsSm] = useState(true);

  useEffect(() => {
    setIsSm(window.innerWidth < 769);
    window.addEventListener("resize", () => {
      setIsSm(window.innerWidth < 769);
    });
  }, []);

  let c1 = 1;
  let c2 = 2;
  let c3 = 3;

  // console.log(images);

  return (
    <>
      {fullViewIndex !== null && (
        <FullView
          images={images}
          setFullViewIndex={setFullViewIndex}
          fullViewIndex={fullViewIndex}
        />
      )}
      <br />
      <SectionHeading>Gallery</SectionHeading>
      <br />
      <CustomContainer className={styles.gallery}>
        <div>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${
                currentCategory === "All" && styles.active
              }`}
              onClick={() => {
                if (currentCategory !== "All") {
                  setCurrentCategory("All");
                }
              }}
            >
              All
            </div>
            {categories.map((c) => (
              <div
                key={c}
                className={`${styles.tab} ${
                  currentCategory === c && styles.active
                }`}
                onClick={() => {
                  if (currentCategory !== c) {
                    setCurrentCategory(c);
                  }
                }}
              >
                {c}
              </div>
            ))}
          </div>
          <br />

          {isSm ? (
            <div className={styles.rowSm}>
              <Row>
                <Col xs={6}>
                  {images.map((image, i) => {
                    const idx = i;
                    if (
                      idx % 2 === 0 &&
                      (currentCategory === "All" ||
                        currentCategory === image.category)
                    ) {
                      return (
                        <div key={image._id} className={styles.img}>
                          <div className={styles.overlay}>
                            <Eye
                              className={styles.eye}
                              onClick={() => {
                                setFullViewIndex(i);
                              }}
                            />
                          </div>
                          <Image src={image.url} alt={image.category} fluid />
                        </div>
                      );
                    }
                  })}
                </Col>
                <Col xs={6}>
                  {images.map((image, i) => {
                    const idx = i;
                    if (
                      idx % 2 !== 0 &&
                      (currentCategory === "All" ||
                        currentCategory === image.category)
                    ) {
                      return (
                        <div key={image._id} className={styles.img}>
                          <div className={styles.overlay}>
                            <Eye
                              className={styles.eye}
                              onClick={() => {
                                setFullViewIndex(i);
                              }}
                            />
                          </div>
                          <Image
                            key={image._id}
                            src={image.url}
                            alt={image.category}
                            fluid
                            className={styles.img}
                          />
                        </div>
                      );
                    }
                  })}
                </Col>
              </Row>
            </div>
          ) : (
            <div className={styles.rowMd}>
              <Row>
                <Col xs={4}>
                  {images.map((image, i) => {
                    const idx = i + 1;
                    if (
                      idx === c1 &&
                      (currentCategory === "All" ||
                        currentCategory === image.category)
                    ) {
                      c1 = c1 + 3;
                      return (
                        <div key={image._id} className={styles.img}>
                          <div className={styles.overlay}>
                            <Eye
                              className={styles.eye}
                              onClick={() => {
                                setFullViewIndex(i);
                              }}
                            />
                          </div>
                          <Image src={image.url} alt={image.category} fluid />
                        </div>
                      );
                    }
                  })}
                </Col>
                <Col xs={4}>
                  {images.map((image, i) => {
                    const idx = i + 1;

                    if (
                      idx === c2 &&
                      (currentCategory === "All" ||
                        currentCategory === image.category)
                    ) {
                      c2 = c2 + 3;
                      return (
                        <div key={image._id} className={styles.img}>
                          <div className={styles.overlay}>
                            <Eye
                              className={styles.eye}
                              onClick={() => {
                                setFullViewIndex(i);
                              }}
                            />
                          </div>
                          <Image src={image.url} alt={image.category} fluid />
                        </div>
                      );
                    }
                  })}
                </Col>
                <Col xs={4}>
                  {images.map((image, i) => {
                    const idx = i + 1;

                    if (
                      idx === c3 &&
                      (currentCategory === "All" ||
                        currentCategory === image.category)
                    ) {
                      c3 = c3 + 3;
                      return (
                        <div key={image._id} className={styles.img}>
                          <div className={styles.overlay}>
                            <Eye
                              className={styles.eye}
                              onClick={() => {
                                setFullViewIndex(i);
                              }}
                            />
                          </div>
                          <Image src={image.url} alt={image.category} fluid />
                        </div>
                      );
                    }
                  })}
                </Col>
              </Row>
            </div>
          )}
        </div>
      </CustomContainer>
      <br />
    </>
  );
};

export default GalleryScreen;
