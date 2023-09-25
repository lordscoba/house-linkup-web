import React, { useState, useEffect } from 'react';
import { LocalGovArray, RegionArray, StateInterface } from '../types';
import { EditIcon, RedDeleteIcon } from '../../../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from '../../../modals/dashboardModals/locationModal/DeleteModal';
import { deleteStateAction } from '../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action';
import { StoreReducerTypes } from '../../../../redux/store';
import { RESET_DELETE_STATE } from '../../../../redux/constants/dashboardconstants/locationConstants/location.constants';
import AddLgaModal from '../../../modals/dashboardModals/locationModal/AddLgaModal';
import ViewLga from '../../../modals/dashboardModals/locationModal/ViewLga';
import { useNavigate } from 'react-router-dom';

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
    <section className="bg-[#fff] p-[1rem] rounded-lg mt-2 shadow-2xl overflow-x-auto  w-full hide-scrollbar   ">
      <table className=" w-full bg-[#fff]   shadow-2xl rounded-lg ">
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

  // setData: (a: any) => void;
  data: RegionArray;
  countryIndex: string | any;
}

const TableValues = ({
  state,
  index,
  // setData,
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
    // setLgaData(Lga);
    // setCountry(countryName);
    // setStateName(state);
    // setShowLga(true);
    navigate(`/dashboard/view-local-gov/${countryId}/${index}`);
  };

  return (
    <>
      <tbody className="">
        {' '}
        <tr>
          <td className="px-4 py-2 text-[black]  whitespace-nowrap text-center ">
            {state}
          </td>
          {/* 
          <td
            onClick={() => addLocalGov(index)}
            className="px-4 py-2 text-[black]  whitespace-nowrap text-center"
          >
            {' '}
            <button className="bg-[#D9F4DD] text-[green] px-6 py-1 rounded-[50px]">
              Add LGA
            </button>
          </td> */}
          <td
            onClick={() => viewLga(index)}
            className="px-4 py-2 text-[black]  whitespace-nowrap  text-center"
          >
            {' '}
            <button className="bg-[#D9F4DD] text-[green] px-6 py-1 rounded-[50px] ">
              View LGA
            </button>
          </td>

          <td className="px-4 py-2 text-[black]  whitespace-nowrap text-center">
            <p className="text-center border flex justify-center">
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
            <p className="text-center border flex justify-center">
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
    </>
  );
};
