import React, { useState } from 'react';
import UserDashboardNav from '../../../component/dashboard/UserDashboard/UserDashboardNav';
import ApplicationComponent from '../../../component/dashboard/UserDashboard/ApplicationComponent';

type Props = {};

const Application = (props: Props) => {
  return (
    <div className="overflow-x-hidden mt-[35px] hide-scrollbar md:px-[2rem] px-2">
      <UserDashboardNav />
      <ApplicationComponent />
    </div>
  );
};

export default Application;
