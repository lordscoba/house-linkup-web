import { Dispatch } from 'redux';
import { StoreReducerTypes } from '../../../store';
import axios from 'axios';
import { SERVER_URL, apiRoutes } from '../../../routes/apiRoutes';

import {
  AddLocalGovInterface,
  AddStateInterface,
  CreateNewRegionInterface,
  DeleteStateInterface,
  deleteLocaGovInterface,
  getLocalGovByIdInterface,
  getTownsByIdInterface,
} from './types';
import {
  ADD_LOCAL_GOV_FAIL,
  ADD_LOCAL_GOV_REQUEST,
  ADD_LOCAL_GOV_SUCCESS,
  ADD_STATE_FAIL,
  ADD_STATE_REQUEST,
  ADD_STATE_SUCCESS,
  CREATE_REGION_FAIL,
  CREATE_REGION_REQUEST,
  CREATE_REGION_SUCCESS,
  DELETE_LOCAL_GOV_FAIL,
  DELETE_LOCAL_GOV_REQUEST,
  DELETE_LOCAL_GOV_SUCCESS,
  DELETE_STATE_FAIL,
  DELETE_STATE_REQUEST,
  DELETE_STATE_SUCCESS,
  GET_ALL_REGION_FAIL,
  GET_ALL_REGION_REQUEST,
  GET_ALL_REGION_SUCCESS,
  GET_LOCAL_GOV_FAIL,
  GET_LOCAL_GOV_REQUEST,
  GET_LOCAL_GOV_SUCCESS,
  GET_TOWNS_REQUEST,
} from '../../../constants/dashboardconstants/locationConstants/location.constants';
import { LocationInterface } from '../../../../component/Home/types';

export const createNewRegionAction =
  ({ region, state }: CreateNewRegionInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ createNewRegion }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: CREATE_REGION_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        apiRoutes.adminDashboard.createNewRegion,
        { region, state },
        config
      );

      // console.log({ demoteUser: data });

      dispatch({ type: CREATE_REGION_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: CREATE_REGION_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const fecthAllRegionsAction =
  () =>
  async (
    dispatch: Dispatch,
    getState: ({ fetchAllRegion }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: GET_ALL_REGION_REQUEST });
      const { data } = await axios.get(
        apiRoutes.adminDashboard.fecthAllRegions
      );

      dispatch({ type: GET_ALL_REGION_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: GET_ALL_REGION_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const addStateAction =
  ({ countryId, state }: AddStateInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ addState }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: ADD_STATE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${SERVER_URL}/add-state/${countryId}`,
        { state },
        config
      );

      dispatch({ type: ADD_STATE_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: ADD_STATE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteStateAction =
  ({ documentId, stateId }: DeleteStateInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteState }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_STATE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-state?documentId=${documentId}&stateId=${stateId}`
      );

      dispatch({ type: DELETE_STATE_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_STATE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const addLocalGovAction =
  ({ countryId, local_government_name, stateId }: AddLocalGovInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ addLocalGov }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: ADD_LOCAL_GOV_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${SERVER_URL}/add-local-gov/${countryId}`,
        { stateId, local_government_name },
        config
      );

      dispatch({ type: ADD_LOCAL_GOV_SUCCESS, payload: data });
      console.log({ ad: data });
    } catch (error: any) {
      dispatch({
        type: ADD_LOCAL_GOV_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const getLocalGovAction =
  ({ countryId, stateId }: getLocalGovByIdInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ getLocalGov }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: GET_LOCAL_GOV_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${SERVER_URL}/all-local-gov/${countryId}`,
        { stateId },
        config
      );

      dispatch({ type: GET_LOCAL_GOV_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: GET_LOCAL_GOV_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const getStateAction =
  ({ countryId, stateId, local_govId }: getTownsByIdInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ getTowns }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: GET_TOWNS_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${SERVER_URL}/all-towns/${countryId}`,
        { stateId, local_govId },
        config
      );

      dispatch({ type: GET_LOCAL_GOV_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: GET_LOCAL_GOV_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const deleteLocalGovAction =
  ({ countryId, localGovId, stateId }: deleteLocaGovInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ deleteLocalGov }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: DELETE_LOCAL_GOV_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.delete(
        `${SERVER_URL}/delete-local-gov?countryId=${countryId}&stateId=${stateId}$localGovId=${localGovId}`
      );

      dispatch({ type: DELETE_LOCAL_GOV_SUCCESS, payload: data });
      // console.log({ re: data });
    } catch (error: any) {
      dispatch({
        type: DELETE_LOCAL_GOV_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
