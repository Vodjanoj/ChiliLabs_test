import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItemWrapper = styled.div`
  padding: 10px;
  background-color: #ffefd5;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

const ProductCategory = styled.div`
  margin: 0 0 10px 0;
  font-weight: 600;
  font-size: 20px;
`;

const ProductName = styled.div`
  font-style: italic;
  font-size: 20px;
`;

const ProductPrice = styled.div`
  span {
    color: #ad5502;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProductItem = (props) => {
  return (
    <ProductItemWrapper>
      <StyledLink to={`/card/${props.id}`}>
        <ProductCategory>{props.category}</ProductCategory>
        <ProductName>{props.name}</ProductName>
        <ProductPrice>
          <span>
            {props.currency} {props.price}
          </span>
        </ProductPrice>
      </StyledLink>
    </ProductItemWrapper>
  );
};

export default ProductItem;
