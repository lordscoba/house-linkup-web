import React, { useEffect } from 'react';

const SERVER_URL = 'http://localhost:5004/api';

const dataFromStorage =
  typeof !undefined && localStorage.getItem('loginUser')
    ? JSON.parse(localStorage?.getItem('loginUser') as any)
    : null;

export const apiRoutes = {
  auth: {
    user: {
      register: SERVER_URL + '/user/register',
      login: SERVER_URL + '/user/login',
      forgotPassword: SERVER_URL + '/user/forgot-password',
      resetPassword: SERVER_URL + `/user/reset-password`,
      getUserDetails:
        SERVER_URL + `/user/user-details/${dataFromStorage?.userDoc?._id}`,
      updateProfile:
        SERVER_URL + `/user/update-profile/${dataFromStorage?.userDoc?._id}`,
    },
  },
};
