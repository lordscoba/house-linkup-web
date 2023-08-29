import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  About,
  Contact,
  Forgotpassword,
  HomeScreen,
  Login,
  NotFound,
  Profile,
  Property,
  ResetPassword,
  Services,
  SignUp,
  SingleHouseScreen,
  UpdateUserDetails,
} from '../../Pages';

type Props = {};

const UserRoutes = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/user/home" element={<HomeScreen />} />
        <Route path="/user/sign-up" element={<SignUp />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/about" element={<About />} />
        <Route path="/user/contact-us" element={<Contact />} />
        <Route path="/user/property" element={<Property />} />
        <Route path="/user/services" element={<Services />} />
        <Route path="/user/property/:id" element={<SingleHouseScreen />} />
        <Route path="/user/services/:id" element={<SingleHouseScreen />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/forgot-password" element={<Forgotpassword />} />
        <Route path="/user/reset-password/:id" element={<ResetPassword />} />
        <Route
          path="/user/update-profile/:id"
          element={<UpdateUserDetails />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
