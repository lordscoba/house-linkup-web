import React from 'react';
import LocationManagement from './locationmanagement/LocationManagement';

type Props = {};

const AdminDashboardIndex = (props: Props) => {
  return (
    <div>
      Admin Index
      <LocationManagement />
    </div>
  );
};

export default AdminDashboardIndex;
