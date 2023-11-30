import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../Utils/fetchProducts";
import styled from "styled-components";

const ProductDetailsWrapper = styled.div`
  padding: 10px;
  background-color: #ffefd5;
  border-radius: 15px;
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
          <div>{category}</div>
          <div>{name}</div>
          <div>{price}</div>
          <div>{currency}</div>
          <div>{description}</div>
        </ProductDetailsWrapper>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};

export default ProductCard;
