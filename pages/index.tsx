import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { fetchProducts } from "../Utils/fetchProducts";
import Products from "../components/Products/Products";
import SearchProducts from "../components/Search/SearchProducts";
import Pagination from "../components/Pagination/Pagination";
import { Product } from "../components/components.types";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(6);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const loadAllProducts = async () => {
      const result = await fetchProducts();
      setProducts(result.products);
      setFilteredProducts(result.products);
    };

    loadAllProducts();
  }, []);

  useEffect(() => {
    if (query || products.length > 0) {
      const identifier = setTimeout(() => {
        const filteredItems = products.filter(
          (product) =>
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filteredItems);
        setCurrentPage(1);
      }, 1000);

      return () => clearTimeout(identifier);
    }
  }, [query, products]);

  const changeQueryHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const lastIndexOfProducts = currentPage * productsPerPage;
  const firstIndexOfProducts = lastIndexOfProducts - productsPerPage;
  const currentProducts = filteredProducts.slice(
    firstIndexOfProducts,
    lastIndexOfProducts
  );

  const onPaginateHandler = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SearchProducts query={query} onChangeQuery={changeQueryHandler} />
      <Products currentProducts={currentProducts} />
      {filteredProducts.length > 6 && (
        <Pagination
          productsAmount={filteredProducts.length}
          productsPerPage={productsPerPage}
          onPaginate={onPaginateHandler}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default HomePage;
