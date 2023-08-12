import { Routes, Route, useLocation } from 'react-router-dom';
import {
  About,
  Contact,
  HomeScreen,
  Login,
  Property,
  Services,
  SignUp,
  SingleHouseScreen,
} from './Pages';
import Layout from './component/AppLayout';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const link = `${pathname}`;
  //   console.log({ app: link });
  // }, []);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/property" element={<Property />} />
          <Route path="/services" element={<Services />} />
          <Route path={`${pathname}`} element={<SingleHouseScreen />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
