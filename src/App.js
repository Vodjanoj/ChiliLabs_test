import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductCard from "./components/Products/ProductCard";
import fetchProducts from "./components/Utils/fetchProducts";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

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
    };

    loadAllProducts();
  }, []);

  const lastIndexOfProducts = currentPage * productsPerPage;
  const firstIndexOfProducts = lastIndexOfProducts - productsPerPage;
  const currentProducts = products.slice(firstIndexOfProducts, lastIndexOfProducts)
   

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products products={currentProducts} />} />
        <Route path="/card/:productId" element={<ProductCard />} />
      </Routes>
    </Layout>
  );
}

export default App;
