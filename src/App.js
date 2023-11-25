import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/Products/ProductList";
import Layout from "./components/Layout/Layout";
import ProductCard from "./components/Products/ProductCard";
import fetchProducts from "./components/Utils/fetchProducts";

function App() {
  const [products, setProducts] = useState([]);

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

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/card/:productId" element={<ProductCard />} />
      </Routes>
    </Layout>
  );
}

export default App;
