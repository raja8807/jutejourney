import styles from "./gallery.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section-heading/section-heading";
import { useState } from "react";

const GalleryScreen = () => {
  const categories = ["All", "Category 1", "Category 2", "Category 3"];

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <>
      <br />
      <SectionHeading>Gallery</SectionHeading>
      <br />
      <CustomContainer className={styles.gallery}>
        <div>
          <div className={styles.tabs}>
            {categories.map((c) => (
              <div
                key={c}
                className={`${styles.tab} ${
                  currentCategory === c && styles.active
                }`}
                onClick={() => {
                  setCurrentCategory(c);
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
      <br />
    </>
  );
};

export default GalleryScreen;
