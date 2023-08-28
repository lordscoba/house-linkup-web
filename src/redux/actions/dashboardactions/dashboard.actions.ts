import { Dispatch } from 'redux';
import { StoreReducerTypes } from '../../store';
import {
  ACTIVATE_USER_FAIL,
  ACTIVATE_USER_REQUEST,
  ACTIVATE_USER_SUCCESS,
  BLOCK_USER_FAIL,
  BLOCK_USER_REQUEST,
  BLOCK_USER_SUCCESS,
  DEMOTE_USER_FAIL,
  DEMOTE_USER_REQUEST,
  DEMOTE_USER_SUCCESS,
  DE_ACTIVATE_USER_FAIL,
  DE_ACTIVATE_USER_REQUEST,
  DE_ACTIVATE_USER_SUCCESS,
  PROMOTE_USER_FAIL,
  PROMOTE_USER_REQUEST,
  PROMOTE_USER_SUCCESS,
} from '../../constants/dashboardconstants/dashboard.constants';
import axios from 'axios';
import { SERVER_URL } from '../../routes/apiRoutes';

interface UpdateUserInterface {
  _id: string;
}

export const activateUserAction =
  ({ _id }: UpdateUserInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ activateUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: ACTIVATE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
          //   'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/activate-user/${_id}`,
        config
      );

      // console.log({ activate: data });

      dispatch({ type: ACTIVATE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: ACTIVATE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deActivateuserAction =
  ({ _id }: UpdateUserInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deActivateUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DE_ACTIVATE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/deactivate-user/${_id}`,
        config
      );

      // console.log({ deactivate: data });

      dispatch({ type: DE_ACTIVATE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DE_ACTIVATE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const blockuserAction =
  ({ _id }: UpdateUserInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ blockUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: BLOCK_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/block-user/${_id}`,
        config
      );

      // console.log({ blockUser: data });

      dispatch({ type: BLOCK_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: BLOCK_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const promoteUserAction =
  ({ _id }: UpdateUserInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ promoteUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: PROMOTE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/promote-user/${_id}`,
        config
      );

      // console.log({ promoteUser: data });

      dispatch({ type: PROMOTE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: PROMOTE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const demoteUserAction =
  ({ _id }: UpdateUserInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ demoteUser }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DEMOTE_USER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.put(
        `${SERVER_URL}/demote-user/${_id}`,
        config
      );

      // console.log({ demoteUser: data });

      dispatch({ type: DEMOTE_USER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: DEMOTE_USER_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
