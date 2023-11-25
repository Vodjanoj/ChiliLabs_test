import styled from "styled-components";

const StyledLayout = styled.main`
  margin: 160px auto;
  padding: 0 5px;
  max-width: 1240px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

export default Layout;
