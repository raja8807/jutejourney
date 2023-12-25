import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section-heading/section-heading";
import Selector from "./selector/selector";
import { useState } from "react";
import ProductDesc from "./product/product";
import PRODUCT_DETALS from "./constant";

const { Row, Col } = require("react-bootstrap");

const ProductsScreen = () => {
  const index = [];

  for (let i = 1; i <= 24; i++) {
    index.push(`${i}`);
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <SectionHeading center>Products</SectionHeading>
      <br />
      <CustomContainer>
        <Row>
          <Col xs={12} lg={3}>
            <Selector
              products={PRODUCT_DETALS}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </Col>
          <Col xs={12} lg={9}>
            <ProductDesc product={PRODUCT_DETALS[selectedIndex]} />
          </Col>
        </Row>
      </CustomContainer>
      <br />
    </>
  );
};

export default ProductsScreen;
