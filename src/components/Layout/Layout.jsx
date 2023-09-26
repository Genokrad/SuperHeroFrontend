import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';
import { StyledHeader, StyledMain } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader className="Header">
        <Navigation />
      </StyledHeader>
      <StyledMain className="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};

export default Layout;
