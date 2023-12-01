import ProductItem from "./ProductItem/ProductItem";
import styled from "styled-components";

const ProductListWrapper = styled.div`
  margin: 0 0 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 200px;
`;

const ProductList = ({ currentProducts }) => {
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
