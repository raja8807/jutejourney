import styles from "./custom_select.module.scss";

const CustomSelect = ({ options = [], value, onChange = () => {}}) => {
  // const { } = props;

  return (
    <select
      className={styles.customSelect}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      
    >
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
