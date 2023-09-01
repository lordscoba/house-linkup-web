import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashBoardNav from '../../../component/dashboard/AdminDashboard/DashBoardNav';
import DashboardSideBar from '../../../component/dashboard/AdminDashboard/sidebarMenu/DashboardSideBar';

type Props = {};

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="hide-scrollbar">
      <DashBoardNav setShow={setShow} />

      <section className="flex   ">
        <DashboardSideBar show={show} setShow={setShow} />

        <h2
          className={`${
            show ? 'md:pl-[19rem]' : 'md:pl-[5rem]'
          } flex-1   pt-[6rem] h-screen bg-[black] text-[#fff] px-2`}
        >
          Dashboard
        </h2>
      </section>
    </div>
  );
};

export default Dashboard;
