import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { RegionArray } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../../../redux/store';
import { addLocalGovAction } from '../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action';
import { RESET_ADD_LOCAL_GOV } from '../../../../redux/constants/dashboardconstants/locationConstants/location.constants';

type Props = {};

const AddLocalGovernment = (Props: Props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<RegionArray>([]);
  const [localGov, setLocalGov] = useState('');
  const [stateId, setStateId] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const location = useLocation().pathname?.split('/')[3];
  const index = useLocation().pathname?.split('/')[4];

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );
  const ResSuccess = Region?.success;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addLocalGovAction({
        countryId: location,
        local_government_name: localGov,
        stateId,
      }) as any
    );
    dispatch({ type: RESET_ADD_LOCAL_GOV });
  };

  useEffect(() => {
    if (ResSuccess) {
      const array = Region?.serverResponse;
      const countryIndex = array.findIndex(
        (x: any) => JSON.stringify(x?._id) === JSON.stringify(location)
      );
      const find = array[countryIndex]?.find((x: any) => x?._id);
      console.log({ countryIndex });
      setData(array);
    }
  }, [ResSuccess]);
  return (
    <section className="h-screen ">
      <div className="flex flex-col items-center justify-center  w-full   px-2 border border-[#9090980] rounded-lg md:w-[30rem] h-[40rem]  m-auto">
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold">
          Region / Country : {country}
        </h4>
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold">
          {' '}
          State :
        </h4>
        <form className=" w-full  my-8 ">
          <div>
            {/* <label htmlFor="local-gov"> Add LGA :</label> */}

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
      </div>
    </section>
  );
};

export default AddLocalGovernment;
