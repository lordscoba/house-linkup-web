import { Routes, Route, useLocation } from 'react-router-dom';
import {
  About,
  Contact,
  HomeScreen,
  Login,
  NotFound,
  Profile,
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
  //   console.log({ app: link.split('/') });
  // }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/property" element={<Property />} />
        <Route path="/services" element={<Services />} />
        <Route path="/property/:id" element={<SingleHouseScreen />} />
        <Route path="/services/:id" element={<SingleHouseScreen />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
