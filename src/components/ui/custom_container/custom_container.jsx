const { Container } = require("react-bootstrap");
import styles from './custom_container.module.scss'

const CustomContainer = ({ children, className }) => {
  // const  = props;

  return (
    <Container className={`${className} ${styles.custom_container}`}>
      {children}
    </Container>
  );
};

export default CustomContainer;
