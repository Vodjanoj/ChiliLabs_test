const PageButton = ({ pages, onPaginate }) => {
  return (
    <>
      {pages.map((page) => (
        <button style={{margin: "3px" , padding: "10px 15px"}} key={page} onClick={() => onPaginate(page)}>
          {page}
        </button>
      ))}
    </>
  );
};

export default PageButton;
