import styled from "styled-components";
import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../types/components.types";

const StyledProductsWrapper = styled.div`
  margin: 0 0 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 170px;

  @media (max-width: 1300px) {
    grid-gap: 50px 140px;
  }

  @media (max-width: 991px) {
    grid-gap: 50px 100px;
  }
  
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px 60px;
  }
  @media (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px 0;
    justify-items: center;
`;

type ProductsProps = {
  currentProducts: Product[];
};

const Products = (props: ProductsProps) => {
  const { currentProducts } = props;

  return (
    <>
      <StyledProductsWrapper>
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
      </StyledProductsWrapper>
    </>
  );
};

export default Products;
