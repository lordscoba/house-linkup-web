import React from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
