import { Route, Routes, useLocation } from "react-router-dom";
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
  UpdateProfile,
} from "./Pages";
// import UpdateProfile from './Pages/UpdateProfile';

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
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="/update-profile/:id" element={<UpdateProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
