import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EditIcon, RedDeleteIcon } from '../../../../assets/icons';
import { deleteStateAction } from '../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action';
import { RESET_DELETE_STATE } from '../../../../redux/constants/dashboardconstants/locationConstants/location.constants';
import AddLgaModal from '../../../modals/dashboardModals/locationModal/AddLgaModal';
import DeleteModal from '../../../modals/dashboardModals/locationModal/DeleteModal';
import ViewLga from '../../../modals/dashboardModals/locationModal/ViewLga';
import { LocalGovArray, RegionArray, StateInterface } from '../types';
import EditStateModal from '../../../modals/dashboardModals/locationModal/EditStateModal';

type Props = {
  item: Array<StateInterface>;

  countryIndex: string;
  data: RegionArray;
  setData: (a: any) => void;
};

const LocationTables = ({
  item,

  setData,
  countryIndex,
  data,
}: Props) => {
  return (
    <section className="bg-[#fff] p-3 rounded-lg mt-2overflow-x-auto  w-full hide-scrollbar  overflow-x-auto ">
      <table className=" w-full bg-[#fff] rounded-lg">
        <thead className="bg-[#fff] text-[#333]">
          <tr className="border-b-2 border-[#6726A8]">
            <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
              States
            </th>
            {/* <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center">
              Add LGA
            </th> */}
            <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center">
              View LGA
            </th>

            <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-center border-r ">
              Update State
            </th>
            <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
              Delete State
            </th>
          </tr>
        </thead>
        {item?.length > 0
          ? item
              ?.map((d: StateInterface, i: any) => {
                return (
                  <TableValues
                    key={i}
                    index={i}
                    state={d?.state}
                    data={data}
                    countryIndex={countryIndex}
                    stateId={d?._id}
                    // setData={setData}
                  />
                );
              })
              .sort((a: any, b: any) => b?.state?.localeCompare(a.state))
          : null}
      </table>
    </section>
  );
};

export default LocationTables;

interface TableInterface {
  state: string;
  index: string | any;
  stateId: string;
  // setData: (a: any) => void;
  data: RegionArray;
  countryIndex: string | any;
}

const TableValues = ({
  state,
  index,
  // setData,
  stateId,
  data,
  countryIndex,
}: TableInterface) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stateName, setStateName] = useState('');
  const [showAddLGA, setShowAddLGA] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [country, setCountry] = useState('');
  const [state_id, setState_id] = useState('');
  const [country_id, setCountry_id] = useState('');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const [showLga, setShowLga] = useState<boolean>(false);
  const [lgaData, setLgaData] = useState<LocalGovArray>([]);

  const deleteBtn = (index: string | any) => {
    const country = data[countryIndex];
    const regionName = country?.region;
    const documentId = country?._id;
    const state = country?.states[index];
    const stateId = state?._id;
    const state_name = state?.state;
    setCountry(regionName);
    setStateName(state_name);
    setCountry_id(documentId);
    setState_id(stateId);
    setShowDelete(true);
  };

  const handleStateDelete = () => {
    dispatch(
      deleteStateAction({ documentId: country_id, stateId: state_id }) as any
    );
    dispatch({ type: RESET_DELETE_STATE });
    setShowDelete(false);
  };

  const addLocalGov = (index: any) => {
    const country = data[countryIndex];
    const countryName = country?.region;
    const countryId = data[countryIndex]?._id;
    const stateId = country?.states[index]?._id;
    const state = country?.states[index]?.state;
    setCountry_id(countryId);
    setState_id(stateId);
    setCountry(countryName);
    setStateName(state);
    setShowAddLGA(true);
  };

  const viewLga = (index: any) => {
    const country = data[countryIndex];
    const countryName = country?.region;
    const countryId = country?._id;
    const state = country?.states[index]?.state;
    const stateId = country?.states[index]?._id;
    const Lga = country?.states[index]?.local_government;
    navigate(`/dashboard/view-local-gov/${countryId}/${index}`);
  };

  const editState = () => {
    const country = data[countryIndex];
    const regionName = country?.region;
    const documentId = country?._id;
    const state = country?.states[index];
    const stateId = state?._id;
    const state_name = state?.state;

    setCountry(regionName);
    setStateName(state_name);
    setCountry_id(documentId);
    setState_id(stateId);
    setShowEditModal(true);
  };

  return (
    <>
      <tbody className="">
        {' '}
        <tr>
          <td className="px-4 py-2 text-[black]  whitespace-nowrap text-center ">
            {state}
          </td>
          <td
            onClick={() => viewLga(index)}
            className="px-4 py-2 text-[black]  whitespace-nowrap  text-center"
          >
            {' '}
            <button className="bg-[#D9F4DD] text-[green] px-6 py-1 rounded-lg">
              View LGA
            </button>
          </td>

          <td
            onClick={editState}
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
            onClick={() => deleteBtn(index)}
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
        state={stateName}
        // setData={setData}
        text="State"
      />
      <AddLgaModal
        country={country}
        countryId={country_id}
        setShow={setShowAddLGA}
        show={showAddLGA}
        state={state}
        stateId={state_id}
      />
      <ViewLga
        country={country}
        data={lgaData}
        setShow={setShowLga}
        show={showLga}
        state={state}
      />

      <EditStateModal
        Region={country}
        countryId={country_id}
        setShow={setShowEditModal}
        show={showEditModal}
        state_name={state}
        stateId={stateId}
      />
    </>
  );
};
