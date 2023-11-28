import ProductList from "./ProductList";
import Pagination from "./Pagination";
const Products = ({ currentProducts, products, productsPerPage, onPaginate }) => {
  return (
    <>
      <ProductList currentProducts={currentProducts} />
      <Pagination
        products={products.length}
        productsPerPage={productsPerPage}
        onPaginate={onPaginate}
      />
    </>
  );
};

export default Products;
