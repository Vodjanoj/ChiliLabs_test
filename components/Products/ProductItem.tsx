import Link from "next/link";
import styled from "styled-components";

import {
  StyledProductCategory,
  StyledProductName,
  StyledProductPrice,
} from "../../styles/sharedStyles";

const StyledProductWrapper = styled.article`
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
  }

  @media (max-width: 414px) {
    min-width:220px;
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
    <StyledProductWrapper>
      <StyledLink href={`/card/${id}`}>
        <StyledProductCategory>{category}</StyledProductCategory>
        <StyledProductName>{name}</StyledProductName>
        <StyledProductPrice>
          <span>
            {currency} {price}
          </span>
        </StyledProductPrice>
      </StyledLink>
    </StyledProductWrapper>
  );
};

export default ProductItem;
