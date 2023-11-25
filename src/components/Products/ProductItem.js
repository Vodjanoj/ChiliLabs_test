import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItemWrapper = styled.div`
  background-color: #ffefd5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProductItem = (props) => {
  return (
    <ProductItemWrapper>
      <StyledLink to={`/card/${props.id}`}>
        <div>{props.category}</div>
        <div>{props.name}</div>
        <div>{props.price}</div>
      </StyledLink>
    </ProductItemWrapper>
  );
};

export default ProductItem;
