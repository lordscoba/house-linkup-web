import React, { useEffect } from 'react';

// const SERVER_URL = 'http://localhost:5004/api/v1';
const SERVER_URL = 'https://house-linkup.cyclic.cloud/api/v1';

const dataFromStorage =
  typeof !undefined && localStorage.getItem('loginUser')
    ? JSON.parse(localStorage?.getItem('loginUser') as any)
    : null;

export const apiRoutes = {
  auth: {
    user: {
      register: SERVER_URL + '/register',
      login: SERVER_URL + '/login',
      forgotPassword: SERVER_URL + '/forgot-password',
      resetPassword: SERVER_URL + `/reset-password`,
      getUserDetails:
        SERVER_URL + `/user-details/${dataFromStorage?.userDoc?._id}`,
      updateProfile:
        SERVER_URL + `/update-profile/${dataFromStorage?.userDoc?._id}`,
    },
  },
};
