import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../Utils/fetchProducts";
import styled from "styled-components";
import {
  ProductCategory,
  ProductName,
  ProductPrice,
} from "./ProductItem/ProductItem.styles";

const ProductDetailsWrapper = styled.div`
  padding: 10px;
  background-color: #F5F5F5;
  border-radius: 15px;
`;

const ProductDescription = styled.div`
  font-size: 16px;
`;

const ProductCard = () => {
  const [productsDetails, setProductDetails] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const filterProductDetailsById = async () => {
      const result = await fetchProducts();

      const filteredProductDetails = result.products.find(
        (item) => item.id === parseInt(productId)
      );

      setProductDetails(filteredProductDetails);
    };

    filterProductDetailsById();
  }, [productId]);

  const { category, name, price, currency, description } =
    productsDetails || {};
  return (
    <>
      {productsDetails ? (
        <ProductDetailsWrapper>
          <ProductCategory fontSize="23px">{category}</ProductCategory>
          <ProductName fontSize="23px"> {name}</ProductName>
          <ProductPrice margin='0 0 20px 0'>
            <span>
              {currency} {price}
            </span>
          </ProductPrice>
          <ProductDescription>{description}</ProductDescription>
        </ProductDetailsWrapper>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};

export default ProductCard;
