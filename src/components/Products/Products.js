import ProductList from "./ProductList";
import SearchProducts from '../Search/SearchProducts'
import Pagination from "./Pagination";
const Products = ({ currentProducts, products, productsPerPage, onPaginate, query, onChangeQuery}) => {
  return (
    <>
      <SearchProducts query={query} onChangeQuery={onChangeQuery} />
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
