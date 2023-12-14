import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section-heading/section-heading";

const { Image } = require("react-bootstrap");

const ProductsScreen = () => {
  const index = [];

  for (let i = 1; i <= 24; i++) {
    index.push(`${i}`);
  }

  return (
    <>
      <SectionHeading center>Products</SectionHeading>
      <br />
      <CustomContainer>
        {index.map((i) => (
          <Image
            key={i}
            src={`/images/products/producs (${i}).jpg`}
            fluid
            alt={i}
          />
        ))}
      </CustomContainer>
      <br />
    </>
  );
};

export default ProductsScreen;
