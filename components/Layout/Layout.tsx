import styled from "styled-components";
import React, { ReactNode } from 'react'

const StyledLayout = styled.main`
  margin: 100px auto;
  padding: 0 5px;
  max-width: 1240px;
`;

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    
    <StyledLayout>{children}</StyledLayout>
  </>
);

export default Layout;
