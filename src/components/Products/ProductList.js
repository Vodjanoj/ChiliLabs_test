import ProductItem from "./ProductItem";
import styled from "styled-components";

const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 200px;
`;

const ProductList = ({ products }) => {
  return (
    <ProductListWrapper>
      {products.map((item, index) => (
        <ProductItem
          key={item.id + index}
          id={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
        />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
