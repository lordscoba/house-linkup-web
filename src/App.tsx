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
  UpdateUserDetails,
} from "./Pages";
import { Dashboard, Location, Users } from "./Pages/dashboardPages/AdminPage";
import { ViewLocalGov } from "./Pages/dashboardPages/AdminPage/locationscreens";
import ViewTowns from "./Pages/dashboardPages/AdminPage/locationscreens/ViewTowns";
import {
  Application,
  Favourite,
  UserDashboadPage,
} from "./Pages/dashboardPages/UserPage";
// import UpdateProfile from './Pages/UpdateProfile';

function App() {
  const { pathname } = useLocation();
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
        <Route path="/update-profile/:id" element={<UpdateUserDetails />} />

        {/* Admin DASHBOARD */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/location" element={<Location />} />
        <Route path="/dashboard/all-users" element={<Users />} />
        <Route
          path="/dashboard/view-local-gov/:id/:index"
          element={<ViewLocalGov />}
        />
        <Route
          path="/dashboard/view-towns/:id/:index"
          element={<ViewTowns />}
        />

        {/* USER DASHBOARD */}
        <Route path="/dashboard/user" element={<UserDashboadPage />} />
        <Route path="/dashboard/user/application" element={<Application />} />
        <Route path="/dashboard/user/favourite" element={<Favourite />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
