import { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/fetchProducts";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  StyledProductCategory,
  StyledProductName,
  StyledProductPrice,
  StyledError,
} from "../../styles/sharedStyles";
import { Product } from "../../components/types/components.types";

const StyledProductDetailsWrapper = styled.div.attrs(() => ({
  // added for tests
  role: "product-details",
}))`
  margin: 0 auto;
  max-width: 900px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 15px;

  @media (max-width: 991px) {
    max-width: 700px;
  }

  @media (max-width: 767px) {
    max-width: 500px;
  }

  @media (max-width: 414px) {
    max-width: 390px;
  }
`;

const StyledProductDescription = styled.div`
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
          const parsedProductId = Number(productId);

          if (!isNaN(parsedProductId) && Number.isInteger(parsedProductId)) {
            const filteredProductDetails = result.find(
              (item: Product) => item.id === parsedProductId
            );

            if (filteredProductDetails) {
              setProductDetails(filteredProductDetails);
            } else {
              console.error(`Product with id ${parsedProductId} not found.`);
              setWrongIdError(`Product with id ${parsedProductId} not found.`);
            }
          } else {
            // Handle case where productId is not a valid integer
            console.log(`Invalid productId: ${productId}`);
            setWrongIdError(`Invalid productId: ${productId}`);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log((error as Error).message);
        setError((error as Error).message);
        setLoading(false);
      }
    };

    filterProductDetailsById();
  }, [productId]);

  const { category, name, price, currency, description } =
    productsDetails || {};

  if (loading) {
    return <StyledError>Loading products..</StyledError>;
  }

  if (error) {
    return <StyledError>Error: {error}</StyledError>;
  }

  if (wrongIdError) {
    return <StyledError>Error: {wrongIdError}</StyledError>;
  }

  return (
    <>
      <StyledProductDetailsWrapper>
        <StyledProductCategory $fontSize="23px">
          {category}
        </StyledProductCategory>
        <StyledProductName $fontSize="23px"> {name}</StyledProductName>
        <StyledProductPrice $margin="0 0 20px 0">
          <span>
            {currency} {price}
          </span>
        </StyledProductPrice>
        <StyledProductDescription>{description}</StyledProductDescription>
      </StyledProductDetailsWrapper>
    </>
  );
};

export default ProductCard;
