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
        <AdminDashboardIndex />
      </section>
    </div>
  );
};

export default Dashboard;
