import SideBar from '@/components/SideBar';
import React from 'react';

const layout = ({
  children,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
}) => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="w-full">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default layout;
