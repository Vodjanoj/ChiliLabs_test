import styled from "styled-components";
import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import { Product } from "../components.types";

const ProductsWrapper = styled.div`
  margin: 0 0 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 200px;
`;

type ProductsProps = {
  currentProducts: Product[];
};

const Products = (props: ProductsProps) => {
  const { currentProducts } = props;

  return (
    <>
      <ProductsWrapper>
        {currentProducts.map((item, index) => (
          <ProductItem
            key={item.id + index}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            currency={item.currency}
          />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Products;
