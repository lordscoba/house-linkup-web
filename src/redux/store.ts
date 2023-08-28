import {
  forgotPasswordReducer,
  loginReducer,
  registerReducer,
  resetPasswordReducer,
  updateProfileReducer,
  userDetailsReducer,
} from './reducers/auth.reducer';
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
