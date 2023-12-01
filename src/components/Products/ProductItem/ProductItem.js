import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductCategory, ProductName, ProductPrice }  from "./ProductItem.styles" 
  

const ProductItemWrapper = styled.div`
  padding: 10px;
  background-color: #ffefd5;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
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
         <ProductCategory>{props.category} </ProductCategory>
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
