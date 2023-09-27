import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editStateAction,
  fecthAllRegionsAction,
} from '../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action';
import {
  RESET_EDIT_STATE,
  RESET_STATE,
} from '../../../../redux/constants/dashboardconstants/locationConstants/location.constants';
import { StoreReducerTypes } from '../../../../redux/store';

type Props = {
  Region: string;
  countryId: string;
  state_name: string;
  show: boolean;
  setShow: (a: any) => void;
  stateId: string;
};

const EditStateModal = ({
  Region,
  countryId,
  setShow,
  show,
  state_name,
  stateId,
}: Props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');

  //   const editState = useSelector((state: StoreReducerTypes) => state?.editState);

  const handleSubmit = () => {
    if (!(countryId && state)) return;
    dispatch(
      editStateAction({
        documentId: countryId,
        state_name: state,
        stateId,
      }) as any
    );
    dispatch({ type: RESET_EDIT_STATE });
    setShow(false);
  };

  useEffect(() => {
    setState(state_name);
  }, [show]);

  //   useEffect(() => {
  //     dispatch(fecthAllRegionsAction() as any);
  //     dispatch({ type: RESET_STATE });
  //   }, [editState]);
  return (
    <>
      {show ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center  py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[30rem] h-[350px] px-6 rounded-lg mt-8">
            <p
              onClick={() => setShow((prev: boolean) => !prev)}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>
            <section className="flex flex-col items-center justify-center mt-4">
              <h4 className="text-[#222] text-[1.1rem]">
                Region / Country : {Region}
              </h4>
              <form className=" w-full my-6">
                <div>
                  <label htmlFor="state"> Edit State :</label>

                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={state}
                    onChange={(e: any) => setState(e.target.value)}
                    placeholder="Edit State"
                    className="py-2 border w-full px-2 my-2"
                  />
                </div>
              </form>

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
                  onClick={handleSubmit}
                  className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                >
                  Submit
                </button>
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default EditStateModal;
