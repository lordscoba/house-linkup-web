import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StoreReducerTypes } from '../redux/store';
import {
  updateProfileAction,
  userDetailsAction,
} from '../redux/actions/auth.actions';
import CircularLoader from '../component/loader/CircularLoader';
import Message from '../component/message/Message';
import { UPDATE_PROFILE_RESET } from '../redux/constants/auth.constants';

type Props = {};

const UpdateUserDetails = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef('') as any;

  const [successMessage, setSuccessMessage] = useState('') as any;
  const [errorMessage, setErrorMessage] = useState<string>('') as any;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isshown, setIsShown] = useState(false);

  const dataFromStorage =
    typeof !undefined && localStorage.getItem('loginUser')
      ? JSON.parse(localStorage?.getItem('loginUser') as any)
      : null;

  const userId = dataFromStorage?.userDoc?._id;

  const userDetails = useSelector(
    (state: StoreReducerTypes) => state.userDetails
  );

  const [image, setImage] = useState('') as any;
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');

  const updateProfile = useSelector(
    (state: StoreReducerTypes) => state.updateProfile
  );

  // console.log({ r: updateProfile?.serverResponse?.getUser?.image[0]?.url });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    setImage(file);
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  // console.log({ d: dataFromStorage?.userDoc });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      updateProfileAction({
        email,
        image,
        location,
        phone_number: phoneNumber,
        id: userId,
        username,
      }) as any
    );
    dispatch({ type: UPDATE_PROFILE_RESET });
  };

  useEffect(() => {
    const email = userDetails?.serverResponse?.email;
    const location = userDetails?.serverResponse?.location;
    const phoneNumber = userDetails?.serverResponse?.phone_number;
    const username = userDetails?.serverResponse?.username;
    setEmail(email);
    setLocation(location);
    setPhoneNumber(phoneNumber);
    setUsername(username);
  }, []);

  useEffect(() => {
    dispatch(userDetailsAction({ _id: userId }) as any);
  }, []);

  useEffect(() => {
    const Success = updateProfile?.success;
    const Loading = updateProfile?.loading;
    const message = updateProfile?.serverResponse?.message;
    // const img = updateProfile?.serverResponse?.image[0]?.url;
    setLoading(Loading);
    if (Success) {
      setSuccessMessage(message);
      setSuccess(Success);
    }
  }, [updateProfile]);

  useEffect(() => {
    const updateProfileLoading = updateProfile?.loading;
    const updateProfileError = updateProfile?.error;
    const updateProfileErrorMessage = updateProfile?.serverError;
    setLoading(updateProfileLoading);

    if (updateProfileError) {
      setError(updateProfileError);
      setErrorMessage(updateProfileErrorMessage);
    }
  }, [updateProfile?.error, updateProfile]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    setErrorMessage('');
    if (success) {
      timeout = setTimeout(() => {
        setSuccessMessage('');
        // setSuccess(false);
        setIsShown(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [success]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (errorMessage) {
      timeout = setTimeout(() => {
        setErrorMessage('');
        setIsShown(true);
        setError(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [errorMessage]);

  return (
    <div className="flex flex-col items-center justify-center pt-[4rem]">
      <section className="relative">
        <div className="w-[144px] h-[144px] border-2 rounded-full p-1 uppercase flex items-center justify-center ">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <img
              src={
                userDetails?.serverResponse?.image?.[0]?.url ? (
                  userDetails?.serverResponse?.image?.[0]?.url
                ) : (
                  <p className="text-[#69B99D] text-[4rem]">
                    {dataFromStorage?.userDoc?.full_name?.slice(0, 1)}
                  </p>
                )
              }
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          )}
        </div>
        <svg
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
        </svg>
      </section>
      <div>
        <h2 className="uppercase mt-2 font-bold">
          {userDetails?.serverResponse?.full_name
            ? userDetails?.serverResponse?.full_name
            : null}
        </h2>
      </div>
      <button
        onClick={() => navigate('/')}
        type="button"
        className="px-6 py-2 bg-[#69B99D] rounded-lg text-[#fff] font-semibold mt-8"
      >
        Go Home
      </button>

      <section className="mt-[2rem] w-full xl:w-[30rem] max-w-[30rem] px-[32px]">
        <div>
          {loading ? <CircularLoader /> : null}

          {success ? <Message type="success">{successMessage}</Message> : null}

          {error ? <Message type="danger">{errorMessage}</Message> : null}
        </div>
        <form onSubmit={handleProfileUpdate}>
          <h2 className=" font-bold my-1">Email: </h2>
          <div className="font-normal">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter Email"
              className="w-full border py-2 pl-3 rounded-lg"
            />
          </div>
          <h2 className=" font-bold my-1">Username: </h2>
          <div className="font-normal">
            <input
              type="location"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              id="location"
              placeholder="Enter Username"
              className="w-full border py-2 pl-3 rounded-lg"
            />
          </div>

          <h2 className=" font-bold my-1">Location: </h2>
          <div className="font-normal">
            <input
              type="location"
              value={location}
              onChange={(e: any) => setLocation(e.target.value)}
              id="location"
              placeholder="Enter Location"
              className="w-full border py-2 pl-3 rounded-lg"
            />
          </div>
          <h2 className=" font-bold my-1">Phone Number: </h2>
          <div className="font-normal">
            <input
              type="tel"
              name="phone_number"
              value={phoneNumber}
              onChange={(e: any) => setPhoneNumber(e.target.value)}
              id="phone_number"
              placeholder="Enter Phone Number"
              className="w-full border py-2 pl-3 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#69B99D] rounded-lg text-[#fff] font-semibold mt-8"
          >
            Update Profile
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateUserDetails;
