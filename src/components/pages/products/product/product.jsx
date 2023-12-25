import { Col, Image, Row } from "react-bootstrap";
import styles from "./product.module.scss";

const ProductDesc = ({ product }) => {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.head}>
          <h1 style={{ color: product.color }}>{product.name}</h1>
          <div className={styles.desc}>
            {product.desc.map((d, i) => (
              <p key={`desc_${i}`}>{d}</p>
            ))}
          </div>

          {product.size && (
            <small style={{ color: product.color }}>{product.size}</small>
          )}
        </div>
        {product.images && (
          <Row>
            {product.images.map((img, i) => {
              return (
                <Col key={i} xs={img.size} className={styles.img}>
                  <Image
                    src={`/images/products/${product.name}/${img.id}.jpg`}
                    alt="xx"
                    fluid
                    style={{ borderColor: product.color }}
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
};

export default ProductDesc;
