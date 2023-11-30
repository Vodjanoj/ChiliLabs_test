import styled from "styled-components";
import PageButton from "./PageButton";

const StyledPagination = styled.div`
  width: 100%;
`;

const StyledPaginationInner = styled.div`
  width: 130px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Pagination = ({ products, productsPerPage, onPaginate, currentPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(products / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <StyledPagination>
      <StyledPaginationInner>
        <PageButton pages={pages} currentPage={currentPage} onPaginate={onPaginate} />
      </StyledPaginationInner>
    </StyledPagination>
  );
};

export default Pagination;
