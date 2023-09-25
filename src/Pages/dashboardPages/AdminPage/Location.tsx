import { useState } from "react";
import DashBoardNav from "../../../component/dashboard/AdminDashboard/DashBoardNav";
import LocationManagement from "../../../component/dashboard/AdminDashboard/locationmanagement/LocationManagement";
import DashboardSideBar from "../../../component/dashboard/AdminDashboard/sidebarMenu/DashboardSideBar";

const Location = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="hide-scrollbar">
      <DashBoardNav setShow={setShow} />

      <section className="flex   ">
        <DashboardSideBar show={show} setShow={setShow} />
        <div
          className={`${
            show ? "md:pl-[19rem]" : "md:pl-[5rem]"
          } flex-1   pt-[6rem]  bg-[#F3F4F6] text-[#333] px-2 overflow-x-hidden`}
        >
          <LocationManagement />
        </div>
      </section>
    </div>
  );
};

export default Location;
