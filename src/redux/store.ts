import {
  forgotPasswordReducer,
  loginReducer,
  registerReducer,
  resetPasswordReducer,
  updateProfileReducer,
  userDetailsReducer,
} from './reducers/auth.reducer';
import {
  activateUserReducer,
  blockUserReducer,
  deActivateuserReducer,
  demoteUserReducer,
  promoteUserReducer,
} from './reducers/dashboardreducers/dashboard.reducer';
import {
  addLocalGovReducer,
  addStateReducer,
  addTownReducer,
  createRegionReducer,
  deleteCountryReducer,
  deleteLocalGovReducer,
  deleteStateReducer,
  deleteTownReducer,
  editLgaReducer,
  editStateReducer,
  editTownReducer,
  fetchAllRegionReducer,
} from './reducers/dashboardreducers/locationdashboardreducer/locationDashboard.reducer';
import {
  getUserUploadedHouseReducer,
  uploaParlorImageReducer,
  uploadBathRoomImageReducer,
  uploadHouseReducer,
  uploadKitchenImageReducer,
  uploadRoomImageReducer,
  uploadToiletImageReducer,
} from './reducers/dashboardreducers/usersdashboard.reducers/usersdashboard.reducers';
import { allUsersReducer, deleteUserReducer } from './reducers/users.reducer';

const {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
} = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension');
const { default: thunk } = require('redux-thunk');

export type StoreReducerTypes = {
  registerUser: ReturnType<typeof registerReducer>;
  loginUser: ReturnType<typeof loginReducer>;
  userDetails: ReturnType<typeof userDetailsReducer>;
  updateProfile: ReturnType<typeof updateProfileReducer>;
  resetPassword: ReturnType<typeof resetPasswordReducer>;
  forgotPassword: ReturnType<typeof forgotPasswordReducer>;

  //USERS

  allUsers: ReturnType<typeof allUsersReducer>;
  deleteUser: ReturnType<typeof deleteUserReducer>;
  // getUser: ReturnType<typeof getUserReducer>;

  // dashboard

  activateUser: ReturnType<typeof activateUserReducer>;
  deActivateUser: ReturnType<typeof deActivateuserReducer>;
  blockUser: ReturnType<typeof blockUserReducer>;
  promoteUser: ReturnType<typeof promoteUserReducer>;
  demoteUser: ReturnType<typeof demoteUserReducer>;
  // LOCATION MANAGEMENT
  createNewRegion: ReturnType<typeof createRegionReducer>;
  fetchAllRegion: ReturnType<typeof fetchAllRegionReducer>;
  addState: ReturnType<typeof addStateReducer>;
  addLocalGov: ReturnType<typeof addLocalGovReducer>;
  addTown: ReturnType<typeof addTownReducer>;
  deleteState: ReturnType<typeof deleteStateReducer>;
  deleteLocalGov: ReturnType<typeof deleteLocalGovReducer>;
  deleteTown: ReturnType<typeof deleteTownReducer>;
  deleteCountry: ReturnType<typeof deleteCountryReducer>;
  editState: ReturnType<typeof editStateReducer>;
  editLocalGov: ReturnType<typeof editLgaReducer>;
  editTown: ReturnType<typeof editTownReducer>;

  // users dashboard
  uploadHouse: ReturnType<typeof uploadHouseReducer>;
  uploadparlorImage: ReturnType<typeof uploaParlorImageReducer>;
  uploadKitchenImage: ReturnType<typeof uploadKitchenImageReducer>;
  uploadToiletImage: ReturnType<typeof uploadToiletImageReducer>;
  uploadRoomImage: ReturnType<typeof uploadRoomImageReducer>;
  uploadBathRoomImage: ReturnType<typeof uploadBathRoomImageReducer>;
  getUserUploads: ReturnType<typeof getUserUploadedHouseReducer>;
};

const reducer: StoreReducerTypes = combineReducers({
  loginUser: loginReducer,
  registerUser: registerReducer,
  userDetails: userDetailsReducer,
  updateProfile: updateProfileReducer,
  resetPassword: resetPasswordReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  deleteUser: deleteUserReducer,

  // dashboard
  activateUser: activateUserReducer,
  deActivateUser: deActivateuserReducer,
  blockUser: blockUserReducer,
  promoteUser: promoteUserReducer,
  demoteUser: demoteUserReducer,

  // LOCATION MANAGEMENT
  createNewRegion: createRegionReducer,
  fetchAllRegion: fetchAllRegionReducer,
  addState: addStateReducer,
  addLocalGov: addLocalGovReducer,
  addTown: addTownReducer,
  deleteState: deleteStateReducer,
  deleteLocalGov: deleteLocalGovReducer,
  deleteTown: deleteTownReducer,
  deleteCountry: deleteCountryReducer,
  editState: editStateReducer,
  editLocalGov: editLgaReducer,
  editTown: editTownReducer,

  // users dashboard
  uploadHouse: uploadHouseReducer,
  uploadparlorImage: uploaParlorImageReducer,
  uploadKitchenImage: uploadKitchenImageReducer,
  uploadToiletImage: uploadToiletImageReducer,
  uploadRoomImage: uploadRoomImageReducer,
  uploadBathRoomImage: uploadBathRoomImageReducer,
  getUserUploads: getUserUploadedHouseReducer,
});

const initialState: any = {
  loginUser:
    typeof window !== 'undefined' && localStorage.getItem('loginUser')
      ? JSON.parse(localStorage.getItem('loginUser') as any)
      : null,
};

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
