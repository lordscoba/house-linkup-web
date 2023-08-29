import { Dispatch } from 'redux';
import { StoreReducerTypes } from '../store';
import {
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from '../constants/users.constants';
import { SERVER_URL, apiRoutes } from '../routes/apiRoutes';
import axios from 'axios';

interface PageInterface {
  pageNumber: number;
}

export const getAllUsersAction =
  ({ pageNumber }: PageInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ allUsers }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: GET_ALL_USERS_REQUEST });

      const { data } = await axios.get(
        `${SERVER_URL}/all-users?page=${pageNumber}`
      );

      // console.log({ allusers: data });
      dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: GET_ALL_USERS_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

interface DeleteUserInterface {
  _id: string;
}

export const deleteUserAction =
  ({ _id }: DeleteUserInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });

      const { data } = await axios.delete(`${SERVER_URL}/delete-user/${_id}`);

      console.log({ delete: data });
      dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
