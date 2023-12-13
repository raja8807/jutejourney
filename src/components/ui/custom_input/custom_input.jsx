import styles from "./custom_input.module.scss";

const CustomInput = ({
  value,
  placeHolder,
  onChange = () => {},
  type,
  error,
}) => {
  return (
    <input
      style={error ? { borderColor: "red" } : {}}
      className={styles.customInput}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      type={type}
    />
  );
};

export default CustomInput;
