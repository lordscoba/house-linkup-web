import { useState } from "react";
import DashBoardNav from "../../../component/dashboard/AdminDashboard/DashBoardNav";
import DashboardSideBar from "../../../component/dashboard/AdminDashboard/sidebarMenu/DashboardSideBar";
import UsersTable from "../../../component/dashboard/AdminDashboard/users/UsersTable";

type Props = {};

const Users = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="hide-scrollbar">
      <DashBoardNav setShow={setShow} />
      <section className="flex   ">
        <DashboardSideBar show={show} setShow={setShow} />
        <div
          className={`${
            show ? "md:pl-[15rem]" : "md:pl-[5rem]"
          } flex-1  pt-[6rem] bg-[#F3F4F6] text-[#333] overflow-x-hidden`}
        >
          <UsersTable show={show} />
        </div>
      </section>
    </div>
  );
};

export default Users;
