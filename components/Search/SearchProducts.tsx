import styled from "styled-components";

const StyledInput = styled.div`
  margin: 20px 0;
  input {
    width: 100%;
    padding: 5px 10px;
    font: inherit;
    font-size: 15px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    outline: none;
    &::placeholder {
      font-size: 15px;
    }
  }
`;

type SearchProductsProps = {
  query: string;
  onChangeQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchProducts = (props: SearchProductsProps) => {
  const { query, onChangeQuery } = props;
  return (
    <StyledInput>
      <input
        type="text"
        value={query}
        placeholder="Type to search products by name or category"
        onChange={(event) => onChangeQuery(event)}
      ></input>
    </StyledInput>
  );
};

export default SearchProducts;
