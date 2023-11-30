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
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadAllProducts = async () => {
      const result = await fetchProducts();

      const transformedProducts = result.products.map((productData) => {
        return {
          id: productData.id,
          name: productData.name,
          price: productData.price,
          currency: productData.currency,
          category: productData.category,
        };
      });

      setProducts(transformedProducts);

      setFilteredProducts(transformedProducts);
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

  const changeQueryHandler =(event)=> {
    
  setQuery(event.target.value);
  }

  const lastIndexOfProducts = currentPage * productsPerPage;
  const firstIndexOfProducts = lastIndexOfProducts - productsPerPage;
  const currentProducts = filteredProducts.slice(
    firstIndexOfProducts,
    lastIndexOfProducts
  );

  const onPaginateHandler = (page) => {
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
}

export default App;
