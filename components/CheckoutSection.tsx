import { Text } from "./shared/Styles";
import styled from "styled-components";
import Table from "./Table";
import Item from "../types/Item";
import Button from "./Button";

type Props = {
  products: Item[];
  setProducts: any;
};

/**
 * Checkout section component, renders a table with the products and a button to submit the data
 */
export default function CheckoutSection({ products, setProducts }: Props) {
  const onSubmit = () => {
    //todo: submit to server
  };

  return (
    <Container className="checkout-section">
      <Heading>Your Basket</Heading>
      <Subtext>
        Items you have added to your basket are shown below. Adjust the
        quantities or remove items before continuing purchase.
      </Subtext>
      <Table products={products} setProducts={setProducts}></Table>
      <Button
        onClick={onSubmit}
        disabled={!products.length}
        extraCss="align-self: flex-end; margin-top: 48px; margin-right: 134px;"
      >
        Buy Now
      </Button>
    </Container>
  );
}

const Heading = styled(Text)`
  font-weight: 250;
  font-size: 24px;
  line-height: 32px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: LibreFranklinExtraLight;
  flex-direction: column;
  width: 647px;
  max-width: 100%;
  height: 100%;
  margin: auto;
`;

const Subtext = styled(Text)`
  font-weight: 250;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.08px;
  margin-bottom: 43px;
  margin-top: 8px;
`;
