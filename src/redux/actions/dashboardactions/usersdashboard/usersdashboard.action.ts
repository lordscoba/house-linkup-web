import { Dispatch } from 'redux';
import { StoreReducerTypes } from '../../../store';
import {
  GET_USER_UPLOADED_HOUSE_FAIL,
  GET_USER_UPLOADED_HOUSE_REQUEST,
  GET_USER_UPLOADED_HOUSE_SUCCESS,
  UPLOAD_BATH_ROOM_IMAGE_FAIL,
  UPLOAD_BATH_ROOM_IMAGE_REQUEST,
  UPLOAD_BATH_ROOM_IMAGE_SUCCESS,
  UPLOAD_HOUSE_FAIL,
  UPLOAD_HOUSE_REQUEST,
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
import axios from 'axios';
import { SERVER_URL, apiRoutes } from '../../../routes/apiRoutes';
import {
  UploadHouseInterface,
  UploadImageInterface,
  UserHouseUploadsInterface,
} from './userDashboardTypes';

export const uploadHouseUserAction =
  ({
    address,
    city,
    description,
    email,
    frontImage,
    full_Name,
    house_type,
    local_government,
    poster,
    price,
    state,
    status,
    totalNum_ofBathroom,
    totalNum_ofKitchen,
    totalNum_ofParlor,
    totalNum_ofRooms,
    totalNum_ofToilet,
    token,
  }: UploadHouseInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ uploadHouse }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPLOAD_HOUSE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const FD = new FormData();
      FD.append('file', frontImage);
      FD.append('address', address);
      FD.append('city', city);
      FD.append('description', description);
      FD.append('email', email);
      FD.append(' full_Name', full_Name);
      FD.append('house_type', house_type);
      FD.append('local_government', local_government);
      FD.append('poster', poster);
      FD.append('price', price);
      FD.append('state', state);
      FD.append('status', status);
      FD.append('totalNum_ofBathroom', totalNum_ofBathroom);
      FD.append('totalNum_ofKitchen', totalNum_ofKitchen);
      FD.append('totalNum_ofParlor', totalNum_ofParlor);
      FD.append('totalNum_ofRooms', totalNum_ofRooms);
      FD.append('totalNum_ofToilet', totalNum_ofToilet);
      FD.append('token', token);

      const { data } = await axios.post(
        apiRoutes.usersdashboard.uploadHouse,
        FD,
        config
      );

      console.log({ postHouse: data });

      dispatch({ type: UPLOAD_HOUSE_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: UPLOAD_HOUSE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const uploadParlorImageAction =
  ({ image }: UploadImageInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ uploadparlorImage }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPLOAD_PARLOR_IMAGE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const FD = new FormData();
      FD.set('parlor_image', image);

      const { data } = await axios.put(
        `${SERVER_URL}/update-property/parlor-image`,
        FD,
        config
      );
      dispatch({ type: UPLOAD_PARLOR_IMAGE_SUCCESS, payload: data });
      console.log({ paylor: data });
    } catch (error: any) {
      dispatch({
        type: UPLOAD_PARLOR_IMAGE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const uploadKitchenImageAction =
  ({ image }: UploadImageInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ uploadKitchenImage }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPLOAD_KITCHEN_IMAGE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const FD = new FormData();
      FD.append('kitchen_image', image);

      const { data } = await axios.put(
        `${SERVER_URL}/update-property/kitchen-image`,
        FD,
        config
      );
      dispatch({ type: UPLOAD_KITCHEN_IMAGE_SUCCESS, payload: data });
      console.log({ kitchen: data });
    } catch (error: any) {
      dispatch({
        type: UPLOAD_KITCHEN_IMAGE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const uploadToiletImageAction =
  ({ image }: UploadImageInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ uploadToiletImage }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPLOAD_TOILET_IMAGE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const FD = new FormData();
      FD.append('toilet_image', image);

      const { data } = await axios.put(
        `${SERVER_URL}/update-property/toilet-image`,
        FD,
        config
      );
      dispatch({ type: UPLOAD_TOILET_IMAGE_SUCCESS, payload: data });
      console.log({ toilet: data });
    } catch (error: any) {
      dispatch({
        type: UPLOAD_TOILET_IMAGE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const uploadRoomImageAction =
  ({ image }: UploadImageInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ uploadRoomImage }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPLOAD_ROOM_IMAGE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const FD = new FormData();
      FD.append('room_image', image);

      const { data } = await axios.put(
        `${SERVER_URL}/update-property/room-image`,
        FD,
        config
      );
      dispatch({ type: UPLOAD_ROOM_IMAGE_SUCCESS, payload: data });
      console.log({ room: data });
    } catch (error: any) {
      dispatch({
        type: UPLOAD_ROOM_IMAGE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const uploadBathRoomImageAction =
  ({ image }: UploadImageInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ uploadBathRoomImage }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: UPLOAD_BATH_ROOM_IMAGE_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const FD = new FormData();
      FD.append('bathroom_image', image);

      const { data } = await axios.put(
        `${SERVER_URL}/update-property/bathroom-image`,
        FD,
        config
      );
      dispatch({ type: UPLOAD_BATH_ROOM_IMAGE_SUCCESS, payload: data });
      console.log({ bathroom: data });
    } catch (error: any) {
      dispatch({
        type: UPLOAD_BATH_ROOM_IMAGE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };

export const getUserUploadedHouseAction =
  ({ id }: UserHouseUploadsInterface) =>
  async (
    dispatch: Dispatch,
    getState: ({ getUserUploads }: StoreReducerTypes) => void
  ) => {
    try {
      dispatch({ type: GET_USER_UPLOADED_HOUSE_REQUEST });

      const { data } = await axios.get(`${SERVER_URL}/all-property/${id}`);
      dispatch({ type: GET_USER_UPLOADED_HOUSE_SUCCESS, payload: data });
      console.log({ userHouses: data });
    } catch (error: any) {
      dispatch({
        type: GET_USER_UPLOADED_HOUSE_FAIL,
        payload: error?.response && error?.response?.data?.message,
      });
    }
  };
