import styled from "styled-components";

const StyledLayout = styled.main`
  margin: 100px auto;
  padding: 0 5px;
  max-width: 1240px;
`;

type LayoutProps = {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

export default Layout;
