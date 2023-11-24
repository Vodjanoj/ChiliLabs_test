import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((item, index) => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
