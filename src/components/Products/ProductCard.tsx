import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../Utils/fetchProducts";
import styled from "styled-components";
import {
  ProductCategory,
  ProductName,
  ProductPrice,
} from "./ProductItem/ProductItem.styles";

import { Product } from "../components.types";

const ProductDetailsWrapper = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 15px;
`;

const ProductDescription = styled.div`
  font-size: 16px;
`;

const ProductCard = () => {
  const [productsDetails, setProductDetails] = useState<Product | null>(null);

  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    const filterProductDetailsById = async () => {
      const result = await fetchProducts();
      if (productId) {
        const filteredProductDetails = result.products.find(
          (item: Product) => item.id === parseInt(productId)
        );

        setProductDetails(filteredProductDetails);
      }
    };

    filterProductDetailsById();
  }, [productId]);

  const { category, name, price, currency, description } =
    productsDetails || {};
    
  return (
    <>
      {productsDetails ? (
        <ProductDetailsWrapper>
          <ProductCategory $fontSize="23px">{category}</ProductCategory>
          <ProductName $fontSize="23px"> {name}</ProductName>
          <ProductPrice $margin="0 0 20px 0">
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
