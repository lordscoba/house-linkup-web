import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { EditIcon, RedDeleteIcon } from '../../../../assets/icons';
import {
  deleteLocalGovAction,
  fecthAllRegionsAction,
} from '../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action';
import {
  RESET_DELETE_LOCAL_GOV,
  RESET_STATE,
} from '../../../../redux/constants/dashboardconstants/locationConstants/location.constants';
import { StoreReducerTypes } from '../../../../redux/store';
import AddLgaModal from '../../../modals/dashboardModals/locationModal/AddLgaModal';
import DeleteModal from '../../../modals/dashboardModals/locationModal/DeleteModal';
import { LocalGovInterface } from '../types';
import EditLgaModal from '../../../modals/dashboardModals/locationModal/EditLgaModal';

type Props = {};

const ViewLocalGovernment = (props: Props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [state_id, setState_id] = useState('');
  // const [showDelete, setShowDelete] = useState<boolean>(false);

  const [showAddLgaModal, setShowAddLgaModal] = useState<boolean>(false);

  const location = useLocation().pathname?.split('/')[3];
  const index = useLocation().pathname?.split('/')[4];

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );

  const ResSuccess = Region?.success;

  const lga = useSelector((state: StoreReducerTypes) => state?.addLocalGov);
  const editLocalGov = useSelector(
    (state: StoreReducerTypes) => state?.editLocalGov
  );
  // const deleleLocalGov = useSelector(
  //   (state: StoreReducerTypes) => state?.deleteLocalGov
  // );

  const openLgaModal = () => {
    setShowAddLgaModal(true);
  };

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
    dispatch({ type: RESET_STATE });
  }, []);

  useEffect(() => {
    if (ResSuccess) {
      const array = Region?.serverResponse;
      const countryIndex = array.findIndex(
        (x: any) => JSON.stringify(x?._id) === JSON.stringify(location)
      );
      const find = array[countryIndex]?.states[index]?.local_government;
      const country = array[countryIndex]?.region;
      const state = array[countryIndex]?.states[index]?.state;
      const stateId = array[countryIndex]?.states[index]?._id;
      setState_id(stateId);
      setCountry(country);
      setState(state);
      setData(find);
    }
  }, [ResSuccess]);

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
    dispatch({ type: RESET_STATE });
  }, [lga, editLocalGov]);

  return (
    <>
      <div className="bg-[#fff] w-full md:w-[95%]   m-auto px-6 py-4 rounded-lg my-8">
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold">
          Region / Country : {country}
        </h4>
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold">
          {' '}
          State : {state}
        </h4>
        <div onClick={openLgaModal} className=" w-[12rem]  ml-auto my-4 ">
          <button className="w-full border md:px-8 md:py-1 px-2 py-2 bg-[#6726A8] text-[#fff] rounded-lg text-[.8rem] md:text-[1rem]">
            ADD LGA
          </button>
        </div>
        <section className="bg-[#fff] p-[1rem] rounded-lg mt-2  overflow-x-auto  w-full hide-scrollbar   ">
          <table className=" w-full bg-[#fff] rounded-lg ">
            <thead className="bg-[#fff] text-[#333]">
              <tr className="border-b-2 border-[#6726A8]">
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
                  LGA
                </th>
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center">
                  View Towns
                </th>
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center">
                  Update LGA
                </th>

                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
                  Delete LGA
                </th>
              </tr>
            </thead>
            {data?.length > 0
              ? data
                  ?.map((d: LocalGovInterface, i: any) => {
                    return (
                      <>
                        <LocalGovTables
                          key={i}
                          index={i}
                          localGov={d?.local_government_name}
                          countryId={location}
                          LGAID={d?._id}
                          country={country}
                          stateId={state_id}
                        />
                      </>
                    );
                  })
                  .sort((a: any, b: any) => b?.state?.localeCompare(a.state))
              : null}
          </table>
        </section>
      </div>
      <AddLgaModal
        country={country}
        countryId={location}
        setShow={setShowAddLgaModal}
        show={showAddLgaModal}
        state={state}
        stateId={state_id}
      />
    </>
  );
};

export default ViewLocalGovernment;

interface KeyProps {
  index: string;
  localGov: string;
  countryId: string;
  country: string;
  // countryIndex: number | any
  stateId: string;
  LGAID: number | any;
}

const LocalGovTables = ({
  index,
  localGov,
  countryId,
  LGAID,
  country,
  stateId,
}: KeyProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showEditLga, setShowEditLga] = useState<boolean>(false);
  const deleleLocalGov = useSelector(
    (state: StoreReducerTypes) => state?.deleteLocalGov
  );

  const handleLocalGovDelete = () => {
    dispatch(
      deleteLocalGovAction({
        documentId: countryId,
        localGovId: LGAID,
        stateId,
      }) as any
    );
    dispatch({ type: RESET_DELETE_LOCAL_GOV });
    setShowDelete(false);
  };

  const openDelModal = () => {
    setShowDelete(true);
  };

  const viewTowns = () => {
    const id = `${countryId}_${stateId}`;
    navigate(`/dashboard/view-towns/${id}/${index}`);
  };

  const editLocalGov = () => {
    setShowEditLga(true);
  };

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
    dispatch({ type: RESET_STATE });
  }, [deleleLocalGov]);

  return (
    <>
      <tbody className="">
        <tr>
          <td className="px-4 py-2 text-[black]  whitespace-nowrap text-center uppercase ">
            {localGov}
          </td>

          <td
            onClick={viewTowns}
            className="px-4 py-2 text-[black]  whitespace-nowrap  text-center"
          >
            {' '}
            <button className="bg-[#D9F4DD] text-[green] px-6 py-1 rounded-[50px] ">
              View Towns
            </button>
          </td>
          <td
            onClick={editLocalGov}
            className="px-4 py-2 text-[black]  whitespace-nowrap text-center"
          >
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
        deleteFunc={handleLocalGovDelete}
        state={localGov}
        text="LGA"
      />
      <EditLgaModal
        Region={country}
        countryId={countryId}
        localGovId={LGAID}
        stateId={stateId}
        setShow={setShowEditLga}
        show={showEditLga}
        local_gov_name={localGov}
      />
    </>
  );
};
