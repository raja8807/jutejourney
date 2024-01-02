import CustomButton from "@/components/ui/custom_button/custom_button";
import styles from "./noToPlastic.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { useRouter } from "next/router";

const NoToPlasticSection = () => {
  const router = useRouter();

  return (
    <div className={styles.noToPlastic}>
      <CustomContainer className={styles.wrap}>
        <div>
          <p className={styles.txtTop}>
            Say &apos;NO&apos; To Plastic <b>YES</b> To Jute
          </p>
          <p className={styles.txtBtm}>
            Promote your business or Event with Jute bag
          </p>
        </div>
        <div>
          <CustomButton
            type={3}
            clickHandler={() => {
              router.replace("/quote");
            }}
          >
            Request A Quote
          </CustomButton>
        </div>
      </CustomContainer>
    </div>
  );
};

export default NoToPlasticSection;
