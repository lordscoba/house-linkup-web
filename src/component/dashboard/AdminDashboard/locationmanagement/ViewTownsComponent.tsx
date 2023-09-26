import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { EditIcon, RedDeleteIcon } from '../../../../assets/icons';
import {
  deleteLocalGovAction,
  deleteTownAction,
  fecthAllRegionsAction,
} from '../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action';
import {
  RESET_DELETE_LOCAL_GOV,
  RESET_DELETE_TOWN,
  RESET_STATE,
} from '../../../../redux/constants/dashboardconstants/locationConstants/location.constants';
import { StoreReducerTypes } from '../../../../redux/store';
import { TownsInterface } from '../../../dashboard/AdminDashboard/types';
import AddTownsModal from '../../../modals/dashboardModals/locationModal/AddTownsModal';
import DeleteModal from '../../../modals/dashboardModals/locationModal/DeleteModal';
// import DeleteModal from './DeleteModal';
// import AddTownsModal from './AddTownsModal';

type Props = {};

const ViewTownsComponent = (props: Props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const [localGovId, setLocalGovId] = useState('');
  const [show, setShow] = useState<boolean>(false);

  const countryId = useLocation().pathname?.split('_')[0].split('/')[3];
  const stateId = useLocation().pathname?.split('_')[1].split('/')[0];
  const index = useLocation().pathname?.split('/')[4];

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );
  const ResSuccess = Region?.success;

  const towns = useSelector((state: StoreReducerTypes) => state?.addTown);
  const delTown = useSelector((state: StoreReducerTypes) => state?.deleteTown);

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
    dispatch({ type: RESET_STATE });
  }, []);

  useEffect(() => {
    if (ResSuccess) {
      const array = Region?.serverResponse;
      const countryIndex = array.findIndex(
        (x: any) => JSON.stringify(x?._id) === JSON.stringify(countryId)
      );

      const country = array[countryIndex]?.region;
      const stateIndex = array[countryIndex]?.states.findIndex(
        (x: any) => JSON.stringify(x?._id) === JSON.stringify(stateId)
      );
      const state = array[countryIndex]?.states[stateIndex]?.state;
      const localGovId =
        array[countryIndex]?.states[stateIndex]?.local_government[index]?._id;
      const localGov =
        array[countryIndex]?.states[stateIndex]?.local_government[index]
          ?.local_government_name;
      const towns =
        array[countryIndex]?.states[stateIndex]?.local_government[index]?.towns;
      setCountry(country);
      setState(state);
      setData(towns);
      setLga(localGov);
      setLocalGovId(localGovId);
      // console.log({ array, stateId });
    }
  }, [ResSuccess]);

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
    dispatch({ type: RESET_STATE });
  }, [towns, delTown]);

  const openTownModal = () => {};
  return (
    <>
      <div className="bg-[#fff] w-full md:w-[95%]   m-auto px-6 py-4 rounded-lg my-8">
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold uppercase">
          Region / Country : {country}
        </h4>
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold uppercase">
          {' '}
          State : {state}
        </h4>
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold uppercase">
          {' '}
          LGA : {lga}
        </h4>
        <div onClick={openTownModal} className=" w-[12rem]  ml-auto my-4 ">
          <button
            onClick={() => setShow(true)}
            className="w-full border md:px-8 md:py-1 px-2 py-2 bg-[#6726A8] text-[#fff] rounded-lg text-[.8rem] md:text-[1rem]"
          >
            ADD TOWN
          </button>
        </div>
        <section className="bg-[#fff] p-[1rem] rounded-lg mt-2  overflow-x-auto  w-full hide-scrollbar   ">
          <table className=" w-full bg-[#fff] rounded-lg ">
            <thead className="bg-[#fff] text-[#333]">
              <tr className="border-b-2 border-[#6726A8]">
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
                  Towns
                </th>

                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
                  Update Town
                </th>

                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
                  Delete Town
                </th>
              </tr>
            </thead>
            {data?.length > 0
              ? data
                  ?.map((d: TownsInterface, i: any) => {
                    return (
                      <>
                        <TownsTable
                          // key={i}
                          // index={i}
                          town={d?.town_name}
                          countryId={countryId}
                          localGovId={localGovId}
                          country={country}
                          stateId={stateId}
                          townId={d?._id}
                        />
                      </>
                    );
                  })
                  .sort((a: any, b: any) => b?.state?.localeCompare(a.state))
              : null}
          </table>
        </section>
      </div>
      <AddTownsModal
        country={country}
        countryId={countryId}
        setShow={setShow}
        show={show}
        state={state}
        stateId={stateId}
        localGovId={localGovId}
      />
    </>
  );
};

export default ViewTownsComponent;

interface TInterface {
  town: string;
  country: string;
  countryId: string;
  stateId: string;
  localGovId: string;
  townId: string;
}

const TownsTable = ({
  town,
  country,
  stateId,
  localGovId,
  countryId,
  townId,
}: TInterface) => {
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState<boolean>(false);

  const handleStateDelete = () => {
    dispatch(
      deleteTownAction({
        documentId: countryId,
        localGovId,
        stateId,
        townId,
      }) as any
    );
    dispatch({ type: RESET_DELETE_TOWN });
    setShowDelete(false);
  };

  const openDelModal = () => {
    setShowDelete(true);
  };

  // useEffect(()=>{

  // },[delTown])
  return (
    <>
      <tbody className="">
        <tr>
          <td className="px-4 py-2 text-[black]  whitespace-nowrap text-center uppercase ">
            {town}
          </td>

          <td className="px-4 py-2 text-[black]  whitespace-nowrap text-center ">
            <p className="text-center flex justify-center">
              <img
                src={EditIcon}
                alt="Edit icon"
                className="w-6 h-6 cursor-pointer"
              />
            </p>
          </td>
          <td
            onClick={openDelModal}
            className="px-4 py-2 text-[black]  whitespace-nowrap m-auto "
          >
            <p className="text-center flex justify-center">
              <img
                src={RedDeleteIcon}
                alt="Red delete icon"
                className="w-6 h-6 cursor-pointer "
              />
            </p>
          </td>
        </tr>
      </tbody>
      <DeleteModal
        show={showDelete}
        setShow={setShowDelete}
        country={country}
        deleteFunc={handleStateDelete}
        state={town}
        text="Town"
      />
    </>
  );
};
