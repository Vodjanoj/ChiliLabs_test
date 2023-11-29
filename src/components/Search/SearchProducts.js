import styled from "styled-components";

const StyledInput = styled.div`
  margin: 20px 0;
  input {
    padding: 5px 10px;
    font: inherit;
    font-size: 16px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    outline: none;
    &::placeholder {
      font-size: 16px;
    }
  }
`;

const SearchProducts = ({ query, onChangeQuery }) => {
  return (
    <StyledInput>
      <input
        type="text"
        value={query}
        placeholder="Type to search"
        onChange={(event) => onChangeQuery(event)}
      ></input>
    </StyledInput>
  );
};

export default SearchProducts;
