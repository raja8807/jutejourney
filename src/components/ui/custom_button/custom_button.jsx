import { Spinner } from "react-bootstrap";
import styles from "./custom_button.module.scss";

const CustomButton = ({
  children,
  type = 1,
  clickHandler = () => {},
  disabled,
  btnType = "button",
  isLoading
}) => {
  return (
    <button
      type={btnType}
      className={`${styles.custom_button} ${styles[`btnType_${type}`]}`}
      onClick={(e) => {
        e.preventDefault();
        clickHandler(e);
      }}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Spinner className={styles.spinner} /> : children}
    </button>
  );
};

export default CustomButton;
