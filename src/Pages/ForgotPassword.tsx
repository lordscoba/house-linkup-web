import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreReducerTypes } from '../redux/store';
import { forgotPassordAction } from '../redux/actions/user.actions';
import CircularLoader from '../component/loader/CircularLoader';
import Message from '../component/message/Message';

type Props = {};

const ForgotPassword = (props: Props) => {
  const dispatch = useDispatch();

  const [successMessage, setSuccessMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null) as any;

  const [email, setEmail] = useState('');

  const forgotPassword = useSelector(
    (state: StoreReducerTypes) => state?.forgotPassword
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassordAction({ email }) as any);
  };

  useEffect(() => {
    const Success = forgotPassword?.success;
    const Loading = forgotPassword?.loading;
    const message = forgotPassword?.serverResponse?.message;
    setSuccessMessage(message);
    setSuccess(Success);
    setLoading(Loading);
  }, [
    forgotPassword?.loading,
    forgotPassword?.success,
    forgotPassword?.serverResponse,
  ]);

  useEffect(() => {
    const Error = forgotPassword?.error;
    const Loading = forgotPassword?.loading;
    const ErrorMessage = forgotPassword?.serverError?.data?.message;
    setError(Error);
    setLoading(Loading);
    setErrorMessage(ErrorMessage);
  }, [
    forgotPassword?.error,
    forgotPassword?.serverError,
    forgotPassword?.loading,
  ]);

  // console.log({ err: forgotPassword?.serverError });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    setErrorMessage('');
    if (success) {
      timeout = setTimeout(() => {
        setSuccessMessage('');
        // navigate('/');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [success]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (errorMessage) {
      timeout = setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [errorMessage]);

  return (
    <div className="h-screen flex flex-col items-center   w-full max-w-[50rem] m-auto text-center pt-[3rem]">
      <section className="border rounded-lg w-full xl:w-[35rem] lg:w-[35rem] md:w-[35rem] flex justify-center flex-col items-center py-6">
        <h2 className="mb-[2rem] font-semibold xl:text-[32px] text-[25px]">
          Forgot Password
        </h2>

        {loading ? <CircularLoader /> : null}
        {success ? <Message type="success">{successMessage}</Message> : null}
        {error ? <Message type="danger"> {errorMessage}</Message> : null}
        <form className="w-[25rem] px-[38px]" onSubmit={handleSubmit}>
          <h4 className="   text-center capitalize font-medium mb-[1.5rem]">
            Enter Email address
          </h4>
          <div className="mb-[30px] relative">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
              placeholder="Enter Email"
              className="border w-full rounded-lg pl-3 py-2 mb-4"
            />
          </div>
          <div>
            <Link to={'/login'} className="text-[#909090] mb-3">
              {' '}
              Back to login
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#69B99D] rounded-lg text-[#fff] font-semibold mt-8"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default ForgotPassword;
