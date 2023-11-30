import ProductList from "./ProductList";
import SearchProducts from '../Search/SearchProducts'
import Pagination from "./Pagination";
const Products = ({ currentProducts, products, productsPerPage, onPaginate,currentPage, query, onChangeQuery}) => {
  
  return (
    <>
      <SearchProducts query={query} onChangeQuery={onChangeQuery}/>
      <ProductList currentProducts={currentProducts} />
      {products.length > 6 && <Pagination
        products={products.length}
        productsPerPage={productsPerPage}
        onPaginate={onPaginate}
        currentPage={currentPage}
      />}
    </>
  );
};

export default Products;
