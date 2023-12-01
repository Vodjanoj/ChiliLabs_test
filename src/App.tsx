import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductCard from "./components/Products/ProductCard";
import { fetchProducts } from "./components/Utils/fetchProducts";
import Products from "./components/Products/Products";
import { Product } from "./components/components.types";

const App = () => {
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

  const changeQueryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={filteredProducts}
              currentProducts={currentProducts}
              productsPerPage={productsPerPage}
              onPaginate={onPaginateHandler}
              currentPage={currentPage}
              query={query}
              onChangeQuery={changeQueryHandler}
            />
          }
        />
        <Route path="/card/:productId" element={<ProductCard />} />
      </Routes>
    </Layout>
  );
};

export default App;
