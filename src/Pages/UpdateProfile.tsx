import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import {
  updateProfileAction,
  userDetailsAction,
} from '../redux/actions/user.actions';
import CircularLoader from '../component/loader/CircularLoader';
import Message from '../component/message/Message';

type Props = {};

const UpdateProfile = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef('') as any;

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null) as any;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dataFromStorage =
    typeof !undefined && localStorage.getItem('loginUser')
      ? JSON.parse(localStorage?.getItem('loginUser') as any)
      : null;

  const userDetails = useSelector(
    (state: StoreReducerTypes) => state.userDetails
  );

  const [image, setImage] = useState('') as any;
  const [email, setEmail] = useState(userDetails?.serverResponse?.email || '');
  const [location, setLocation] = useState(
    userDetails?.serverResponse?.location || ''
  );
  const [phoneNumber, setPhoneNumber] = useState(
    userDetails?.serverResponse?.phone_number || ''
  );

  const updateProfile = useSelector(
    (state: StoreReducerTypes) => state.updateProfile
  );

  // const UpdateSuccess = updateProfile?.success;
  // const UpdateLoading = updateProfile?.loading;
  // const message = updateProfile?.serverResponse?.message;
  // const UpdateError = updateProfile?.error;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    setImage(file);
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      updateProfileAction({
        email,
        image,
        location,
        phone_number: phoneNumber,
      }) as any
    );
  };

  useEffect(() => {
    const updateSuccess = updateProfile?.success;

    const updateLoading = updateProfile?.loading;

    setSuccess(updateSuccess);

    setLoading(updateLoading);
  }, [
    updateProfile?.loading,
    updateProfile?.success,
    updateProfile?.serverResponse,
  ]);

  useEffect(() => {
    const updateProfileError = updateProfile?.error;

    const updateProfileErrorMessage = updateProfile?.serverError;

    setError(updateProfileError);

    setErrorMessage(updateProfileErrorMessage);
  }, [updateProfile?.error, updateProfile?.serverError]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    setErrorMessage('');
    if (success) {
      const message = updateProfile?.serverResponse?.message;

      setSuccessMessage(message);
      timeout = setTimeout(() => {
        setSuccessMessage('');
        navigate(`/profile/${dataFromStorage?.userDoc?._id}`);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [success]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (error) {
      timeout = setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  useEffect(() => {
    dispatch(userDetailsAction() as any);
  }, []);

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
                userDetails?.serverResponse?.image[0]?.url ? (
                  userDetails?.serverResponse?.image[0]?.url
                ) : (
                  <p className="text-[#69B99D] text-[4rem]">
                    {dataFromStorage?.userDoc?.full_name.slice(0, 1)}
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
          {userDetails?.serverResponse?.full_name}
        </h2>
      </div>

      <section className="mt-[2rem] w-full xl:w-[30rem] max-w-[30rem] px-[32px]">
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

          <div>
            {loading ? <CircularLoader /> || 'Loading' : null}

            {success ? (
              <Message type="success">{successMessage}</Message>
            ) : null}

            {error ? <Message type="danger">{errorMessage}</Message> : null}
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

export default UpdateProfile;
