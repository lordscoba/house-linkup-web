import {
  UPLOAD_BATH_ROOM_IMAGE_FAIL,
  UPLOAD_BATH_ROOM_IMAGE_REQUEST,
  UPLOAD_BATH_ROOM_IMAGE_SUCCESS,
  UPLOAD_HOUSE_FAIL,
  UPLOAD_HOUSE_REQUEST,
  UPLOAD_HOUSE_RESET,
  UPLOAD_HOUSE_SUCCESS,
  UPLOAD_KITCHEN_IMAGE_FAIL,
  UPLOAD_KITCHEN_IMAGE_REQUEST,
  UPLOAD_KITCHEN_IMAGE_SUCCESS,
  UPLOAD_PARLOR_IMAGE_FAIL,
  UPLOAD_PARLOR_IMAGE_REQUEST,
  UPLOAD_PARLOR_IMAGE_SUCCESS,
  UPLOAD_ROOM_IMAGE_FAIL,
  UPLOAD_ROOM_IMAGE_REQUEST,
  UPLOAD_ROOM_IMAGE_SUCCESS,
  UPLOAD_TOILET_IMAGE_FAIL,
  UPLOAD_TOILET_IMAGE_REQUEST,
  UPLOAD_TOILET_IMAGE_SUCCESS,
} from '../../../constants/dashboardconstants/usersdashboardconstants/usersdashboard.constants';
import { ResponseType, initialStateRequest } from '../../../responseType';

export const uploadHouseReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPLOAD_HOUSE_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPLOAD_HOUSE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPLOAD_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const uploaParlorImageReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPLOAD_PARLOR_IMAGE_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_PARLOR_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPLOAD_PARLOR_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPLOAD_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const uploadKitchenImageReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPLOAD_KITCHEN_IMAGE_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_KITCHEN_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPLOAD_KITCHEN_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPLOAD_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const uploadToiletImageReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPLOAD_TOILET_IMAGE_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_TOILET_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPLOAD_TOILET_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPLOAD_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};

export const uploadRoomImageReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPLOAD_ROOM_IMAGE_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_ROOM_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPLOAD_ROOM_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPLOAD_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};
export const uploadBathRoomImageReducer = (
  state: ResponseType = initialStateRequest,
  action: any
) => {
  switch (action.type) {
    case UPLOAD_BATH_ROOM_IMAGE_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_BATH_ROOM_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        serverResponse: action.payload,
      };

    case UPLOAD_BATH_ROOM_IMAGE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        serverError: action.payload,
      };

    case UPLOAD_HOUSE_RESET:
      return initialStateRequest;

    default:
      return state;
  }
};
