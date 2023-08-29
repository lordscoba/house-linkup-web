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
  EDIT_USER_RESET,
  PROMOTE_USER_FAIL,
  PROMOTE_USER_REQUEST,
  PROMOTE_USER_SUCCESS,
  RESET_USER,
} from '../../constants/dashboardconstants/dashboard.constants';
import { ResponseType, initialStateRequest } from '../../responseType';

export const activateUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case ACTIVATE_USER_REQUEST:
      return { ...state, loading: true };
    case ACTIVATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case ACTIVATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case EDIT_USER_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const deActivateuserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DE_ACTIVATE_USER_REQUEST:
      return { ...state, loading: true };
    case DE_ACTIVATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DE_ACTIVATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case EDIT_USER_RESET:
      return initialStateRequest;
    default:
      return state;
  }
};

export const blockUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case BLOCK_USER_REQUEST:
      return { ...state, loading: true };
    case BLOCK_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case BLOCK_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case EDIT_USER_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const promoteUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case PROMOTE_USER_REQUEST:
      return { ...state, loading: true };
    case PROMOTE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case PROMOTE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case EDIT_USER_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const demoteUserReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case DEMOTE_USER_REQUEST:
      return { ...state, loading: true };
    case DEMOTE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case DEMOTE_USER_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case EDIT_USER_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};
