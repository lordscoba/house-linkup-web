// LOCATION MANAGEMENT

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
  GET_TOWNS_FAIL,
  GET_TOWNS_REQUEST,
  GET_TOWNS_SUCCESS,
  RESET_ADD_LOCAL_GOV,
  RESET_DELETE_LOCAL_GOV,
  RESET_DELETE_STATE,
  RESET_LOCAL_GOV,
  RESET_STATE,
  RESET_TOWNS,
} from '../../../constants/dashboardconstants/locationConstants/location.constants';
import { ResponseType, initialStateRequest } from '../../../responseType';

export const createRegionReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case CREATE_REGION_REQUEST:
      return { ...state, loading: true };
    case CREATE_REGION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case CREATE_REGION_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_STATE:
      return initialStateRequest;

    default:
      return state;
  }
};

export const fetchAllRegionReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case GET_ALL_REGION_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_REGION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case GET_ALL_REGION_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_STATE:
      return initialStateRequest;

    default:
      return state;
  }
};

export const addStateReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case ADD_STATE_REQUEST:
      return { ...state, loading: true };
    case ADD_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case ADD_STATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case RESET_STATE:
      return initialStateRequest;

    default:
      return state;
  }
};

export const deleteStateReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DELETE_STATE_REQUEST:
      return { ...state, loading: true };
    case DELETE_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DELETE_STATE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_DELETE_STATE:
      return state;

    default:
      return state;
  }
};

export const addLocalGovReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case ADD_LOCAL_GOV_REQUEST:
      return { ...state, loading: true };
    case ADD_LOCAL_GOV_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case ADD_LOCAL_GOV_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_ADD_LOCAL_GOV:
      return state;

    default:
      return state;
  }
};

export const getLocalGovReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case GET_LOCAL_GOV_REQUEST:
      return { ...state, loading: true };
    case GET_LOCAL_GOV_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case GET_LOCAL_GOV_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_LOCAL_GOV:
      return state;

    default:
      return state;
  }
};

export const getTownsReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case GET_TOWNS_REQUEST:
      return { ...state, loading: true };
    case GET_TOWNS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case GET_TOWNS_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_TOWNS:
      return state;

    default:
      return state;
  }
};

export const deleteLocalGovReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DELETE_LOCAL_GOV_REQUEST:
      return { ...state, loading: true };
    case DELETE_LOCAL_GOV_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DELETE_LOCAL_GOV_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_DELETE_LOCAL_GOV:
      return state;

    default:
      return state;
  }
};
