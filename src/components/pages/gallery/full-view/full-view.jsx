import { Image } from "react-bootstrap";
import styles from "./full-view.module.scss";
import { ChevronLeft, ChevronRight, Download, X } from "react-bootstrap-icons";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const FullView = ({ images, fullViewIndex, setFullViewIndex }) => {
  return (
    <div className={styles.fullView}>
      <div className={styles.top}>
        <CustomContainer>
          <div className={styles.wrap}>
            <Download />
            <X
              onClick={() => {
                setFullViewIndex(null);
              }}
            />
          </div>
        </CustomContainer>
      </div>

      <div className={styles.imgr}>
        {/* <div className={styles.imgHolder}> */}
        {fullViewIndex !== 0 && (
          <ChevronLeft
            className={styles.arrowLeft}
            onClick={() => {
              setFullViewIndex((prev) => prev - 1);
            }}
          />
        )}
        <Image src={images[fullViewIndex].url} alt="xx" fluid />
        {fullViewIndex < images.length - 1 && (
          <ChevronRight
            className={styles.arrowRight}
            onClick={() => {
              setFullViewIndex((prev) => prev + 1);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FullView;
