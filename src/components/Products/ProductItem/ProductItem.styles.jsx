import styled from "styled-components";

const ProductCategory = styled.div`
  margin: 0 0 10px 0;
  font-weight: 600;
  font-size: ${(props) => props.fontSize || "20px"};
`;

const ProductName = styled.div`
  font-style: italic;
  font-size: ${(props) => props.fontSize || "20px"};
`;

const ProductPrice = styled.div`
  margin: ${(props) => props.margin || "0"};
  span {
    color: #ad5502;
  }
`;

export { ProductCategory, ProductName, ProductPrice };
