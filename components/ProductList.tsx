import React from "react";
import ProductItem from "./Products/ProductItem/ProductItem";
import styled from "styled-components";
import { Product } from "./components.types";

const ProductListWrapper = styled.div`
  margin: 0 0 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 200px;
`;

type ProductListProps = {
  currentProducts: Product[];
};

const ProductList = (props: ProductListProps) => {
  const { currentProducts } = props;
  return (
    <ProductListWrapper>
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
    </ProductListWrapper>
  );
};

export default ProductList;
