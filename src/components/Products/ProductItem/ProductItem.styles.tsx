import styled from "styled-components";

interface ProductCategoryProps {
  fontSize?: string;
}

interface ProductNameProps {
  fontSize?: string;
}

interface ProductPriceProps {
  margin?: string;
}

const ProductCategory = styled.div<ProductCategoryProps>`
  margin: 0 0 10px 0;
  font-weight: 600;
  font-size: ${(props) => props.fontSize || "20px"};
`;

const ProductName = styled.div<ProductNameProps>`
  font-style: italic;
  font-size: ${(props) => props.fontSize || "20px"};
`;

const ProductPrice = styled.div<ProductPriceProps>`
  margin: ${(props) => props.margin || "0"};
  span {
    color: #ad5502;
  }
`;

export { ProductCategory, ProductName, ProductPrice };