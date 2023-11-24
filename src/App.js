import ProductList from "./components/Products/ProductList";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd"
      );

      const result = await response.json();
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

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <ProductList products={products} />
    </div>
  );
}

export default App;
