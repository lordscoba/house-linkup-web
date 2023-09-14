import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLocalGovAction } from '../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action';

type Props = {
  country: string;
  state: string;
  countryId: string;
  stateId: string;
  show: boolean;
  setShow: (a: any) => void;
};

const AddLgaModal = ({
  country,
  countryId,
  setShow,
  show,
  state,
  stateId,
}: Props) => {
  const dispatch = useDispatch();
  const [localGov, setLocalGov] = useState('');

  const handleSubmit = () => {
    if (!localGov) return;
    dispatch(
      addLocalGovAction({
        countryId,
        local_government_name: localGov,
        stateId,
      }) as any
    );
    setShow(false);
  };
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
                Region / Country : {country}
              </h4>
              <h4> State : {state}</h4>
              <form className=" w-full my-6">
                <div>
                  <label htmlFor="local-gov"> Add LGA :</label>

                  <input
                    type="text"
                    name="local-gov"
                    id="local-gov"
                    value={localGov}
                    onChange={(e: any) => setLocalGov(e.target.value)}
                    placeholder="Add Local Gov"
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

export default AddLgaModal;
