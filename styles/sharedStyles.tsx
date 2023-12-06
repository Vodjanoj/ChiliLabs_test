import styled from "styled-components";

interface StyledProductCategoryProps {
  $fontSize?: string;
}

interface StyledProductNameProps {
  $fontSize?: string;
}

interface StyledProductPriceProps {
  $margin?: string;
}

const StyledProductCategory = styled.h3<StyledProductCategoryProps>`
  margin: 0 0 10px 0;
  font-weight: 600;
  text-decoration: none;
  font-size: ${(props) => props.$fontSize || "20px"};
`;

const StyledProductName = styled.div<StyledProductNameProps>`
  font-style: italic;
  font-size: ${(props) => props.$fontSize || "20px"};
`;

const StyledProductPrice = styled.div<StyledProductPriceProps>`
  margin: ${(props) => props.$margin || "0"};
  span {
    color: #ad5502;
  }
`;

const StyledError = styled.p`
  display: flex;
  justify-content:center;
`;
const StyledLoading = styled.p`
  display: flex;
  justify-content:center;
`;

export {
  StyledProductCategory,
  StyledProductName,
  StyledProductPrice,
  StyledError,
  StyledLoading
};
