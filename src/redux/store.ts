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

  // dashboard

  activateUser: ReturnType<typeof activateUserReducer>;
  deActivateUser: ReturnType<typeof deActivateuserReducer>;
  blockUser: ReturnType<typeof blockUserReducer>;
  promoteUser: ReturnType<typeof promoteUserReducer>;
  demoteUser: ReturnType<typeof demoteUserReducer>;
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
