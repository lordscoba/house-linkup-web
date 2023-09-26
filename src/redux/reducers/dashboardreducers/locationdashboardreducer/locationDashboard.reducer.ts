// LOCATION MANAGEMENT

import {
  ADD_LOCAL_GOV_FAIL,
  ADD_LOCAL_GOV_REQUEST,
  ADD_LOCAL_GOV_SUCCESS,
  ADD_STATE_FAIL,
  ADD_STATE_REQUEST,
  ADD_STATE_SUCCESS,
  ADD_TOWN_FAIL,
  ADD_TOWN_REQUEST,
  ADD_TOWN_SUCCESS,
  CREATE_REGION_FAIL,
  CREATE_REGION_REQUEST,
  CREATE_REGION_SUCCESS,
  DELETE_COUNTRY_FAIL,
  DELETE_COUNTRY_REQUEST,
  DELETE_COUNTRY_SUCCESS,
  DELETE_LOCAL_GOV_FAIL,
  DELETE_LOCAL_GOV_REQUEST,
  DELETE_LOCAL_GOV_SUCCESS,
  DELETE_STATE_FAIL,
  DELETE_STATE_REQUEST,
  DELETE_STATE_SUCCESS,
  DELETE_TOWN_FAIL,
  DELETE_TOWN_REQUEST,
  DELETE_TOWN_SUCCESS,
  GET_ALL_REGION_FAIL,
  GET_ALL_REGION_REQUEST,
  GET_ALL_REGION_SUCCESS,
  RESET_ADD_LOCAL_GOV,
  RESET_ADD_TOWN,
  RESET_DELETE_COUNTRY,
  RESET_DELETE_LOCAL_GOV,
  RESET_DELETE_STATE,
  RESET_DELETE_TOWN,
  RESET_STATE,
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

export const addTownReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case ADD_TOWN_REQUEST:
      return { ...state, loading: true };
    case ADD_TOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case ADD_TOWN_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_ADD_TOWN:
      return state;

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

export const deleteTownReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DELETE_TOWN_REQUEST:
      return { ...state, loading: true };
    case DELETE_TOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DELETE_TOWN_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_DELETE_TOWN:
      return state;

    default:
      return state;
  }
};

export const deleteCountryReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DELETE_COUNTRY_REQUEST:
      return { ...state, loading: true };
    case DELETE_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DELETE_COUNTRY_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };
    case RESET_DELETE_COUNTRY:
      return state;

    default:
      return state;
  }
};
