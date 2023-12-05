import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { fetchProducts } from "../Utils/fetchProducts";
import Products from "../components/Products/Products";
import SearchProducts from "../components/Search/SearchProducts";
import Pagination from "../components/Pagination/Pagination";
import { Product } from "../components/types/components.types";
import { StyledError } from ".././styles/sharedStyles";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(6);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAllProducts = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result);
        setFilteredProducts(result);
        setLoading(false);
      } catch (error) {
        console.log((error as Error).message);
        setError((error as Error).message);
        setLoading(false);
      }
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

  if (loading) {
    return <StyledError>Loading products..</StyledError>;
  }

  if (error) {
    return <StyledError>Error: {error}</StyledError>;
  }

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
      {filteredProducts.length === 0 && <div>Nothing found</div>}
    </>
  );
};

export default HomePage;
