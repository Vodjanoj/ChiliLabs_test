import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductCard from "./components/Products/ProductCard";
import fetchProducts from "./components/Utils/fetchProducts";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadAllProducts = async () => {
      const result = await fetchProducts();

      const transformedProducts = result.products.map((productData) => {
        return {
          id: productData.id,
          name: productData.name,
          price: productData.price,
          category: productData.category,
        };
      });

      setProducts(transformedProducts);

      setFilteredProducts(transformedProducts);
    };

    loadAllProducts();
  }, []);

  useEffect(() => {
    console.log('products.length', products.length)
    if (query || products.length > 0) {
      setTimeout(() => {
        const filteredItems = products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filteredItems);
       
      }, 1000);
    }
  }, [query, products]);

  const lastIndexOfProducts = currentPage * productsPerPage;
  const firstIndexOfProducts = lastIndexOfProducts - productsPerPage;
  const currentProducts = filteredProducts.slice(firstIndexOfProducts, lastIndexOfProducts);

  const onPaginateHandler = (page) => {
    setCurrentPage(page);
  };

  console.log("query", query);
  return (
    <Layout>
      <input
        defaultValue={query}
        placeholder="Type to search"
        onChange={(event) => setQuery(event.target.value)}
      ></input>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={filteredProducts}
              currentProducts={currentProducts}
              productsPerPage={productsPerPage}
              onPaginate={onPaginateHandler}
            />
          }
        />
        <Route path="/card/:productId" element={<ProductCard />} />
      </Routes>
    </Layout>
  );
}

export default App;
