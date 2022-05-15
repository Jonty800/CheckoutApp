import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import CheckoutSection from "../components/CheckoutSection";
import styled from "styled-components";
import { useState } from "react";
import RootObject from "../types/RootObject";

type Props = {
  data: any;
};

const Home: NextPage<Props> = (props: Props) => {
  const { data } = props;
  const [products, setProducts] = useState(data);
  return (
    <>
      <Head>
        <title>Checkout App</title>
        <meta name="description" content="Checkout application" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <Container>
        <NavBar />
        <StyledMain>
          <CheckoutSection products={products} setProducts={setProducts} />
        </StyledMain>
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from JSON file
  const products: RootObject = require("../assets/index.json");
  const items = products.items;
  const itemsWithQuantity = items.map((item: any) => {
    return {
      ...item,
      quantity: item.quantity || 1,
    };
  });

  return { props: { data: itemsWithQuantity } };
}

const StyledMain = styled.main`
  padding-top 112px;
  padding-bottom: 112px;
  margin-top: 116px;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 16px;
`;

export default Home;
