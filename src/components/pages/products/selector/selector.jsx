import { Offcanvas } from "react-bootstrap";
import styles from "./selector.module.scss";
import { List } from "react-bootstrap-icons";
import { useState } from "react";

const Selector = ({ products, selectedIndex, setSelectedIndex }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Offcanvas
        show={showDrawer}
        onHide={() => {
          setShowDrawer(false);
        }}
      >
        <Offcanvas.Header closeButton>Products</Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.selector}>
            {products.map((p, i) => (
              <div
                key={p.id}
                className={selectedIndex === i ? styles.active : ""}
                onClick={() => {
                  setSelectedIndex(i);
                  setShowDrawer(false);
                }}
              >
                {p.name}
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={`${styles.selector} ${styles.hiddenMd}`}>
        <List
          className={styles.menu}
          onClick={() => {
            setShowDrawer(true);
          }}
        />
        {products.map((p, i) => (
          <div
            key={p.id}
            className={selectedIndex === i ? styles.active : ""}
            onClick={() => {
              setSelectedIndex(i);
            }}
          >
            {p.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Selector;
