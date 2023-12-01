import styled from "styled-components";

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: #ffffff;
  background-color: ${(props) => (props.$isActive ? "#3fa556" : "#5ece7b")};
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
`;

const PageButton = ({ pages, onPaginate, currentPage }) => {
  console.log("currentPage", currentPage);
  return (
    <>
      {pages.map((page) => (
        <Button
          type="button"
          key={page}
          onClick={() => onPaginate(page)}
          $isActive={page === currentPage}  
        >
          {page}
        </Button>
      ))}
    </>
  );
};

export default PageButton;
