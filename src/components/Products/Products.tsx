import React from "react";
import ProductList from "./ProductList";
import SearchProducts from "../Search/SearchProducts";
import Pagination from "./Pagination";
import { Product } from "../components.types";

type ProductsProps = {
  currentProducts: Product[];
  products: Product[];
  productsPerPage: number;
  currentPage: number;
  query: string;
  onPaginate: (page: number) => void;
  onChangeQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Products = (props: ProductsProps) => {
  const {
    currentProducts,
    products,
    productsPerPage,
    currentPage,
    query,
    onPaginate,
    onChangeQuery,
  } = props;

  return (
    <>
      <SearchProducts query={query} onChangeQuery={onChangeQuery} />
      <ProductList currentProducts={currentProducts} />
      {products.length > 6 && (
        <Pagination
          productsAmount={products.length}
          productsPerPage={productsPerPage}
          onPaginate={onPaginate}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Products;
