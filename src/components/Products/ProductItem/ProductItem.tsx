import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  ProductCategory,
  ProductName,
  ProductPrice,
} from "./ProductItem.styles";

const ProductItemWrapper = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

type ProductItemProps = {
  id: number;
  name: string;
  category: string;
  currency: string;
  price: number;
};

const ProductItem = (props: ProductItemProps) => {
  const { id, name, category, currency, price } = props;
  return (
    <ProductItemWrapper>
      <StyledLink to={`/card/${id}`}>
        <ProductCategory>{category} </ProductCategory>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          <span>
            {currency} {price}
          </span>
        </ProductPrice>
      </StyledLink>
    </ProductItemWrapper>
  );
};

export default ProductItem;
