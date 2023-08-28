import React, { useState } from 'react';
import SideBar from '../../component/dashboard/sidebarMenu/SideBar';
import Header from '../../component/dashboard/header/Header';
import DashboardSideBar from '../../component/dashboard/sidebarMenu/DashboardSideBar';
import { Logo } from '../../assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import DashBoardNav from '../../component/dashboard/DashBoardNav';
// import Users from './Users';

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
