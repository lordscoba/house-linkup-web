import { Dispatch } from 'redux';
import { LoginInterface } from '../../component/Login/loginTypes';
import { StoreReducerTypes } from '../store';
import {
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from '../constants/user.constants';
import axios from 'axios';
import { apiRoutes } from '../routes/apiRoutes';
import { RegisterInterface } from '../../component/Signup/signupTypes';

export const registerAction =
  ({ email, fullName, password }: RegisterInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ registerUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: REGISTER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          // credentials: 'include',
        },
      };

      const { data } = await axios.post(
        apiRoutes.auth.user.register,
        { email, password, fullName },
        config
      );

      dispatch({ type: REGISTER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const loginAction =
  ({ email, password }: LoginInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ loginUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // credentials: 'include',
        },
      };

      const { data } = await axios.post(
        apiRoutes.auth.user.login,
        { email, password },
        config
      );

      if (data) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('loginUser', JSON.stringify(data));
        }
      }
      console.log({ login: data });
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

interface UserDetailsInterface {
  _id: string;
}

export const userDetailsAction =
  () =>
  async (
    dispatch: Dispatch,
    getState: ({ userDetails }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(apiRoutes.auth.user.getUserDetails);

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const updateProfileAction =
  () =>
  async (
    dispatch: Dispatch,
    getState: ({ updateProfile }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(apiRoutes.auth.user.updateProfile);

      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

interface forgotPasswordInterface {
  email: string;
}

export const forgotPassordAction =
  ({ email }: forgotPasswordInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ forgotPassword }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(apiRoutes.auth.user.forgotPassword);

      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

interface resetPasswordInterface {
  password: string;
  token: string;
}

export const resetPasswordAction =
  ({ password, token }: resetPasswordInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ resetPassword }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(apiRoutes.auth.user.resetPassword);

      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };