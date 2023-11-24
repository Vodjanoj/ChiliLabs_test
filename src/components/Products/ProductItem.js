const ProductItem = (props) => {
  return (
    <>
      <section>
        <div>{props.category}</div>
        <div>{props.name}</div>
        <div>{props.price}</div>
      </section>
    </>
  );
};

export default ProductItem;
