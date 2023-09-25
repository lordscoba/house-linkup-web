import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../../../redux/store';
import {
  deleteLocalGovAction,
  fecthAllRegionsAction,
} from '../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action';
import {
  RESET_DELETE_LOCAL_GOV,
  RESET_DELETE_STATE,
  RESET_STATE,
} from '../../../../redux/constants/dashboardconstants/locationConstants/location.constants';

type Props = {
  country: string;
  state: string;
  show: boolean;
  stateId?: string;
  countryId?: string;
  localGovId?: string;
  setShow: (a: any) => void;
  deleteFunc?: (a: any) => void;
  // setData: (a: any) => void;
  text: string;
};

const DeleteModal = ({
  country,
  deleteFunc,
  setShow,
  show,
  state,
  countryId,
  stateId,
  localGovId,
  // setData,
  text,
}: Props) => {
  const dispatch = useDispatch();

  const handleStateDelete = () => {
    dispatch(
      deleteLocalGovAction({
        documentId: countryId,
        localGovId,
        stateId,
      }) as any
    );
    dispatch({ type: RESET_DELETE_LOCAL_GOV });
    setShow(false);
  };

  return (
    <>
      {show ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center  py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[30rem] h-[250px] px-6 rounded-lg mt-8">
            <p
              onClick={() => setShow((prev: boolean) => !prev)}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>
            <section className="flex flex-col items-center justify-center mt-4">
              <p className="text-[#222] text-[1.1rem] font-medium">
                {' '}
                Region / Country : {country}
              </p>

              <p className="py-6">
                Are You sure you want to delete{' '}
                <span className="font-bold">
                  {state} {text}
                </span>{' '}
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShow((prev: boolean) => !prev)}
                  className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  onClick={deleteFunc}
                  className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                >
                  YES
                </button>
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default DeleteModal;
