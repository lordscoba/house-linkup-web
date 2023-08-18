import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StoreReducerTypes } from '../redux/store';
import { userDetailsAction } from '../redux/actions/user.actions';

type Props = {};

const Profile = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const fileInputRef = useRef('') as any;

  const dataFromStorage =
    typeof !undefined && localStorage.getItem('loginUser')
      ? JSON.parse(localStorage?.getItem('loginUser') as any)
      : null;

  const userDetails = useSelector(
    (state: StoreReducerTypes) => state.userDetails
  );

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event?.target?.files?.[0];

  //   if (file && file.type.startsWith('image/')) {
  //     const imageURL = URL.createObjectURL(file);

  //     setImage(imageURL);
  //   }
  // };

  // const handleLabelClick = () => {
  //   fileInputRef.current.click();
  // };

  useEffect(() => {
    dispatch(userDetailsAction() as any);
    console.log({ d: userDetails });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center pt-[4rem]">
      <section className="relative">
        <div className="w-[144px] h-[144px] border-2 rounded-full p-1 uppercase flex items-center justify-center ">
          {/* <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          /> */}

          {userDetails?.success ? (
            <>
              {userDetails?.serverResponse?.image?.length > 0 ? (
                <img
                  src={userDetails?.serverResponse?.image[0]?.url}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <p className="text-[#69B99D] text-[4rem]">
                  {' '}
                  {userDetails?.serverResponse?.full_name.slice(0, 1)}
                </p>
              )}
            </>
          ) : (
            <p className="text-[#69B99D] text-[4rem]">
              {' '}
              {dataFromStorage?.userDoc?.full_name.slice(0, 1)}
            </p>
          )}
        </div>
        {/* <svg
          onClick={handleLabelClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute right-0 top-[60%] cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg> */}
      </section>
      <div>
        <h2 className="uppercase mt-2 font-bold">
          {userDetails?.serverResponse?.full_name
            ? userDetails?.serverResponse?.full_name
            : dataFromStorage?.userDoc?.full_name}
        </h2>
        <button className="w-full border mt-1 py-1 px-6 rounded-lg bg-[#723d3d] text-[#fff]">
          Log Out
        </button>
      </div>
      <section className="mt-[2rem] w-full xl:w-[30rem] max-w-[30rem] px-[32px]">
        <h2 className="border-b border-[#69B99D] pb-1 font-bold my-6">
          Email:{' '}
          <span className="font-normal">
            {userDetails?.serverResponse?.email
              ? userDetails?.serverResponse?.email
              : dataFromStorage?.userDoc?.email}
          </span>
        </h2>
        <h2 className="border-b border-[#69B99D] pb-1 font-bold my-6">
          Location:{' '}
          <span className="font-normal">
            {userDetails?.serverResponse?.location
              ? userDetails?.serverResponse?.location
              : dataFromStorage?.userDoc?.location || 'Add Location'}
          </span>
        </h2>

        <h2 className="border-b border-[#69B99D] pb-1 font-bold my-6">
          Phone Number:{' '}
          <span className="font-normal">
            {userDetails?.serverResponse?.phone_number
              ? userDetails?.serverResponse?.phone_number
              : dataFromStorage?.userDoc?.phone_number || 'Add Phone Number'}
          </span>
        </h2>

        <button
          type="button"
          onClick={() =>
            navigate(`/update-profile/${dataFromStorage?.userDoc?._id}`)
          }
          className="w-full py-2 bg-[#69B99D] rounded-lg text-[#fff] font-semibold mt-8"
        >
          Update Profile
        </button>
      </section>
    </div>
  );
};

export default Profile;
