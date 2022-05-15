import styled from "styled-components";
import MinusButton from "./images/MinusButton";
import AddButton from "./images/AddButton";
import { useState } from "react";
import Item from "../types/Item";

type Props = {
  product: Item;
  setProducts: any;
};

export default function QuantityButton({ product, setProducts }: Props) {
  const [quantity, setQuantity] = useState(product.quantity);

  /**
   * Adds a quantity to a product in the cart
   */
  const handleAdd = () => {
    setQuantity(quantity + 1); // increment quantity
    setProducts((prevProducts: any) => {
      // update products
      const newProducts = [...prevProducts];
      const index = newProducts.indexOf(product);
      newProducts[index] = { ...product, quantity: quantity + 1 };
      return newProducts;
    });
  };

  /**
   * Decrements a quantity to a product in the cart
   */
  const handleMinus = () => {
    let newQuantity = quantity - 1;
    if (newQuantity < 0) {
      return;
    }
    setQuantity(newQuantity); // decrement quantity
    setProducts((prevProducts: any) => {
      // update products
      const newProducts = [...prevProducts];
      const index = newProducts.indexOf(product); // find index of product
      newProducts[index] = { ...product, quantity: newQuantity }; // update product
      return newProducts;
    });
  };
  return (
    <Box>
      <MinusButton
        width={7}
        height={3}
        callback={() => {
          handleMinus();
        }}
      />
      <Text>{quantity}</Text>
      <AddButton
        width={7}
        height={8}
        callback={() => {
          handleAdd();
        }}
      />
    </Box>
  );
}

const Box = styled.div`
  border: 1px solid #448aff;
  width: 75px;
  height: 28px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const Text = styled.div`
  font-weight: 250;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.08px;
  color: rgb(34, 34, 34);
`;
