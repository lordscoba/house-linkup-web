import { useState } from "react";
import AdminDashboardIndex from "../../../component/dashboard/AdminDashboard/AdminDashboardIndex";
import DashBoardNav from "../../../component/dashboard/AdminDashboard/DashBoardNav";
import DashboardSideBar from "../../../component/dashboard/AdminDashboard/sidebarMenu/DashboardSideBar";

type Props = {};

const Dashboard = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="hide-scrollbar">
      <DashBoardNav setShow={setShow} />
      <section className="flex  h-[80vh] ">
        <DashboardSideBar show={show} setShow={setShow} />
        <div
          className={`${
            show ? "md:pl-[15rem]" : "md:pl-[5rem]"
          } flex-1   pt-[6rem]  bg-[#F3F4F6] text-[#333] px-2 overflow-x-hidden`}
        >
          <AdminDashboardIndex />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
