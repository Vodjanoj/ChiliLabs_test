import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../Utils/fetchProducts";

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

  const { category, name, price, description } = productsDetails || {};
  return (
    <>
      {productsDetails ? (
        <>
          <div>{category}</div>
          <div>{name}</div>
          <div>{price}</div>
          <div>{description}</div>
        </>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};

export default ProductCard;
