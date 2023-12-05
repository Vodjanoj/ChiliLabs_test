import { useState, useEffect } from "react";
import { fetchProducts } from "../../Utils/fetchProducts";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  ProductCategory,
  ProductName,
  ProductPrice,
} from "../../components/Products/ProductItem/ProductItem.styles";
import { Product } from "../../components/components.types";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [wrongIdError, setWrongIdError] = useState<string | null>(null);
  const { productId } = useRouter().query as { productId: string };

  useEffect(() => {
    const filterProductDetailsById = async () => {
      try {
        const result = await fetchProducts();
        if (productId) {
          const filteredProductDetails = result.find(
            (item: Product) => item.id === parseInt(productId)
          );

          if (filteredProductDetails) {
            setProductDetails(filteredProductDetails);
          } else {
            console.error(`Product with id ${productId} not found.`);
            setWrongIdError(`Product with id ${productId} not found.`)
          }
        }
        setLoading(false);
      } catch (error) {
        console.log((error as Error).message);
        setError((error as Error).message)
        setLoading(false);
      }
    };

    filterProductDetailsById();
  }, [productId]);

  const { category, name, price, currency, description } =
    productsDetails || {};

  if (loading) {
    return (
      <p style={{ display: "block", width: "200px", margin: "0 auto" }}>
        Loading products..
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ display: "block", width: "400px", margin: "0 auto" }}>
        Error: {error}
      </p>
    );
  }

  if (wrongIdError) {
    return (
      <p style={{ display: "block", width: "400px", margin: "0 auto" }}>
        Error: {wrongIdError}
      </p>
    );
  }

  return (
    <>
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
    </>
  );
};

export default ProductCard;
