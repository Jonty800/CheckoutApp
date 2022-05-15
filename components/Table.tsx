import styled from "styled-components";
import Item from "../types/Item";
import QuantityButton from "./QuantityButton";
import BinIcon from "./images/BinIcon";

type Props = {
  products: Item[];
  setProducts: any;
};

type ThProps = {
  center?: boolean;
};

const currency = "£";

const formatPrice = (price: number) => {
  return `${currency}${price.toFixed(2)}`;
};

const formatName = (name: string, size: string) => {
  if (!size) return name;
  return `${name}, ${size}`;
};

export default function Table({ products, setProducts }: Props) {
  const total = products.reduce((acc: any, product: Item) => {
    return acc + product.price * product.quantity;
  }, 0);

  const deleteProduct = (sku: string) => {
    const newProducts = products.filter((product: Item) => product.sku !== sku);
    setProducts(newProducts);
  };

  const tax = total * 0.2;

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Product</StyledTh>
          <StyledTh>Price</StyledTh>
          <StyledTh center>Quantity</StyledTh>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td colSpan={4}>
            {" "}
            <StyledHr />
          </td>
        </tr>
      </thead>
      <tbody>
        {products.map((product: Item, key: number) => {
          return (
            <StyledTr key={key}>
              <td>{formatName(product.name, product.size)}</td>
              <td>{formatPrice(product.price)}</td>
              <td style={{ margin: "auto" }}>
                <QuantityButton product={product} setProducts={setProducts} />
              </td>
              <td style={{ width: 90, textAlign: "right" }}>
                {formatPrice(product.quantity * product.price)}
              </td>
              <BinTd
                onClick={() => {
                  console.log("click");
                  deleteProduct(product.sku);
                }}
              >
                <BinIcon />
              </BinTd>
            </StyledTr>
          );
        })}
        <StyledThinTr>
          <td colSpan={4}></td>
        </StyledThinTr>
        <StyledThinTr>
          <td>Subtotal</td>
          <td></td>
          <td></td>
          <td style={{ width: 90, textAlign: "right" }}>
            {formatPrice(total - tax)}
          </td>
        </StyledThinTr>
        <StyledThinTr>
          <td>VAT at 20%</td>
          <td></td>
          <td></td>
          <td style={{ width: 90, textAlign: "right" }}>{formatPrice(tax)}</td>
        </StyledThinTr>
        <StyledThinTr>
          <td style={{ fontFamily: "LibreFranklinBold" }}>Total Cost</td>
          <td></td>
          <td></td>
          <td
            style={{
              fontFamily: "LibreFranklinBold",
              width: 90,
              textAlign: "right",
            }}
          >
            {formatPrice(total)}
          </td>
        </StyledThinTr>
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
`;

const StyledTh = styled.th<ThProps>`
  font-family: LibreFranklinRegular;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.08px;
  ${(props) => props.center && "text-align: center"}
`;

const BinTd = styled.td`
  min-width: 100px;
  display: flex;
  justify-content: center;
  height: 68px;
  align-items: center;
`;

const StyledTr = styled.tr`
  line-height: 66px;
  height: 66px;
`;
const StyledThinTr = styled.tr`
  line-height: 33px;
  height: 33px;
`;

const StyledHr = styled.hr`
  border-color: #efefef;
  border-style: solid;
`;
