const Pagination = ({ products, productsPerPage, onPaginate }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(products / productsPerPage); i++) {
    pages.push(i);
  }

 

  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li onClick={() => onPaginate(page)}>{page}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
