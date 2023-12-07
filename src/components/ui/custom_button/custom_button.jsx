import styles from "./custom_button.module.scss";

const CustomButton = ({
  children,
  type = 1,
  clickHandler = () => {},
  disabled,
  btnType = "button",
}) => {
  // const = props;

  return (
    <button
      type={btnType}
      className={`${styles.custom_button} ${styles[`btnType_${type}`]}`}
      onClick={(e) => {
        e.preventDefault();
        clickHandler(e);
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
