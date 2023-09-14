import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashBoardNav from '../../../component/dashboard/AdminDashboard/DashBoardNav';
import DashboardSideBar from '../../../component/dashboard/AdminDashboard/sidebarMenu/DashboardSideBar';
import AdminDashboardIndex from '../../../component/dashboard/AdminDashboard/AdminDashboardIndex';

type Props = {};

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="hide-scrollbar">
      <DashBoardNav setShow={setShow} />

      <section className="flex   ">
        <DashboardSideBar show={show} setShow={setShow} />

        {/* <h2
          className={`${
            show ? 'md:pl-[19rem]' : 'md:pl-[5rem]'
          } flex-1   pt-[6rem] h-screen bg-[#F3F4F6] text-[#333] px-2`}
        ></h2> */}

        <div
          className={`${
            show ? 'md:pl-[19rem]' : 'md:pl-[5rem]'
          } flex-1   pt-[6rem]  bg-[#F3F4F6] text-[#333] px-2 overflow-x-hidden`}
        >
          <AdminDashboardIndex />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
