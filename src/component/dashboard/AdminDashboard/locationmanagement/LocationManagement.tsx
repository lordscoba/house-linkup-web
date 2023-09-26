import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthAllRegionsAction } from "../../../../redux/actions/dashboardactions/locationmanagement/locationmanagement.action";
import { RESET_STATE } from "../../../../redux/constants/dashboardconstants/locationConstants/location.constants";
import { StoreReducerTypes } from "../../../../redux/store";
import AddCountryModal from "../../../modals/dashboardModals/locationModal/AddCountryModal";
import AddStateModal from "../../../modals/dashboardModals/locationModal/AddStateModal";
import { AdminDashboardInterface, RegionArray } from "../types";
import LocationTables from "./LocationTables";

type Props = {};

const LocationManagement = (props: Props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<RegionArray>([]);
  const [id, setId] = useState("");
  const [country, setCountry] = useState("");
  const [show, setShow] = useState<boolean>(false);
  const [showAddCountryModal, setShowAddCountryModal] =
    useState<boolean>(false);

  const Region = useSelector(
    (state: StoreReducerTypes) => state.fetchAllRegion
  );
  const ResSuccess = Region?.success;

  const CreateNewCountry = useSelector(
    (state: StoreReducerTypes) => state.createNewRegion
  );

  const CreateState = useSelector(
    (state: StoreReducerTypes) => state?.addState
  );

  const deleteState = useSelector(
    (state: StoreReducerTypes) => state.deleteState
  );

  const addLocalGov = useSelector(
    (state: StoreReducerTypes) => state.addLocalGov
  );

  const addState = (index: any) => {
    const country = data[index]?.region;
    const _id = data[index]?._id;
    setId(_id);
    setCountry(country);
    setShow((prev) => !prev);
  };

  const openCountryModal = () => {
    setShowAddCountryModal(true);
  };

  useEffect(() => {
    dispatch(fecthAllRegionsAction() as any);
    dispatch({ type: RESET_STATE });
  }, []);

  useEffect(() => {
    if (ResSuccess) {
      const array = Region?.serverResponse;
      setData(array);
    }
  }, [ResSuccess]);

  useEffect(() => {
    if (CreateState?.success) {
      dispatch(fecthAllRegionsAction() as any);
      dispatch({ type: RESET_STATE });
      if (ResSuccess) {
        const array = Region?.serverResponse;
        setData(array);
      }
    }
  }, [CreateState?.success]);

  useEffect(() => {
    if (deleteState?.success) {
      dispatch(fecthAllRegionsAction() as any);
      if (ResSuccess) {
        const array = Region?.serverResponse;
        setData(array);
      }
      dispatch({ type: RESET_STATE });
    }
  }, [deleteState, deleteState?.success]);

  useEffect(() => {
    if (addLocalGov?.success) {
      dispatch(fecthAllRegionsAction() as any);
      if (ResSuccess) {
        const array = Region?.serverResponse;
        setData(array);
      }
      dispatch({ type: RESET_STATE });
    }
  }, [addLocalGov, addLocalGov?.success]);

  useEffect(() => {
    if (CreateNewCountry?.success) {
      dispatch(fecthAllRegionsAction() as any);
      if (ResSuccess) {
        const array = Region?.serverResponse;
        setData(array);
      }
      dispatch({ type: RESET_STATE });
    }
  }, [CreateNewCountry, CreateNewCountry?.success]);

  return (
    <>
      <div className="p-3 md:p-5 flex flex-col gap-5">
        <h2 className=" max-w-max m-auto text-2xl font-bold uppercase border-b-2">
          Location Management
        </h2>

        <div onClick={openCountryModal} className=" w-[12rem]  ml-auto my-4 ">
          <button className="w-full border md:px-8 md:py-1 p-3 bg-[#6726A8] text-[#fff] rounded-lg">
            Add Country
          </button>
        </div>

        {data?.length > 0
          ? data?.map((item: AdminDashboardInterface, index: any) => {
              return (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex flex-wrap justify-between gap-4">
                    <h2 className="my-2">
                      Region / Country :{" "}
                      <span className="font-bold text-[1.1rem]">
                        {item?.region}
                      </span>
                    </h2>
                    <div className="flex gap-3">
                      <button className="  border md:px-8 md:py-1 p-3 bg-[#6726A8] text-[#fff] rounded-lg">
                        Delete Country
                      </button>
                      <button
                        onClick={() => addState(index)}
                        className=" border md:px-8 md:py-1 p-3 bg-[#6726A8] text-[#fff] rounded-lg"
                      >
                        Add State
                      </button>
                    </div>
                  </div>

                  <LocationTables
                    item={item?.states}
                    countryIndex={index}
                    data={data}
                    setData={setData}
                  />
                </div>
              );
            })
          : null}
      </div>
      <AddStateModal
        Region={country}
        countryId={id}
        setShow={setShow}
        show={show}
      />
      <AddCountryModal
        setShow={setShowAddCountryModal}
        show={showAddCountryModal}
      />
    </>
  );
};

export default LocationManagement;
