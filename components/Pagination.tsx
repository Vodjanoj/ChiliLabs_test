import styled from "styled-components";
import PageButton from "./Products/PageButton";

const StyledPagination = styled.div`
  width: 100%;
`;

const StyledPaginationInner = styled.div`
  width: 130px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

type PaginationProps = {
  productsAmount: number;
  productsPerPage: number;
  currentPage: number;
  onPaginate: (page: number) => void;
};

const Pagination = (props: PaginationProps) => {
  const { productsAmount, productsPerPage, currentPage, onPaginate } = props;

  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(productsAmount / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <StyledPagination>
      <StyledPaginationInner>
        <PageButton
          pages={pages}
          currentPage={currentPage}
          onPaginate={onPaginate}
        />
      </StyledPaginationInner>
    </StyledPagination>
  );
};

export default Pagination;
