// const SERVER_URL = 'http://localhost:5004/api/v1';
const SERVER_URL = 'https://house-linkup.cyclic.cloud/api/v1';

const dataFromStorage =
  typeof !undefined && localStorage.getItem('loginUser')
    ? JSON.parse(localStorage?.getItem('loginUser') as any)
    : null;
// forgotpassword

console.log(dataFromStorage);

export const apiRoutes = {
  auth: {
    user: {
      register: SERVER_URL + '/register',
      login: SERVER_URL + '/login',
      forgotPassword: SERVER_URL + '/forgotpassword',
      resetPassword: SERVER_URL + `/reset-password`,
      getUserDetails:
        SERVER_URL + `/user-details/${dataFromStorage?.userDoc?._id}`,
      updateProfile:
        SERVER_URL + `/update-profile/${dataFromStorage?.userDoc?._id}`,
    },
  },
};
