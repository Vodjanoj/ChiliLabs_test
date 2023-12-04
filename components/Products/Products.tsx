import React from "react";
import ProductList from "./ProductList";
import { Product } from "../components.types";

type ProductsProps = {
  currentProducts: Product[];
};

const Products = (props: ProductsProps) => {
  const { currentProducts } = props;

  return (
    <>
      <ProductList currentProducts={currentProducts} />
    </>
  );
};

export default Products;
