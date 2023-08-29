import React, { useState, useEffect } from 'react';
import { SideBarDataArray, SideBarInterface } from './types';
import { sidebarValues } from './data';
import { User, dropDown } from '../../../assets/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type Props = {
  show: boolean;
  setShow: any;
};

const DashboardSideBar = ({ show, setShow }: Props) => {
  return (
    <div
      className={`${
        show ? ' w-full max-w-[18rem]  border-2 rounded-lg shadow-2xl px-4' : ''
      } h-screen overflow-y-auto hide-scrollbar pt-[6rem]   fixed bg-[#fff]  text-[grey]  `}
    >
      <div className="hidden md:flex flex-col text-[#222]">
        {show ? (
          <>
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Admin"
              dropDownText="Admin"
              link="/dashboard/admin"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="User"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Admin"
              dropDownText="Admin"
              link="/dashboard/admin"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="User"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Admin"
              dropDownText="Admin"
              link="/dashboard/admin"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="User"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Admin"
              dropDownText="Admin"
              link="/dashboard/admin"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="User"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Admin"
              dropDownText="Admin"
              link="/dashboard/admin"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="User"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Admin"
              dropDownText="Admin"
              link="/dashboard/admin"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="User"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Admin"
              dropDownText="Admin"
              link="/dashboard/admin"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="User"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
          </>
        ) : (
          <>
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
            <SideBarIcon />
          </>
        )}
      </div>
      <div className="md:hidden">
        {show ? (
          <>
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Dashboard"
              dropDownText="Dashboard"
              link="/dashboard"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="Admin"
              dropDownText="Admin"
              link="/dashboard/admin"
            />
            <TextAndDropDown
              icon={User}
              icon_2={dropDown}
              text="User"
              dropDownText="Users"
              link="/dashboard/all-users"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default DashboardSideBar;

const SideBarIcon = () => {
  const [links, setLinks] = useState<SideBarDataArray>([]);

  useEffect(() => {
    setLinks(sidebarValues);
  }, []);

  return (
    <div className="px-2 z-10">
      {links?.length > 0
        ? links?.map((item: SideBarInterface, index: any) => {
            return (
              <div className="">
                <img
                  src={item?.icon}
                  alt="icon"
                  className="w-8 h-8 object-cover mb-6 cursor-pointer"
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

interface TextAnDropDownInterface {
  icon: string | any;
  icon_2: string | any;
  text: string;
  dropDownText: string;
  link: string;
}

const TextAndDropDown = ({
  icon,
  icon_2,
  text,
  dropDownText,
  link,
}: TextAnDropDownInterface) => {
  const [rotate, setRotate] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setRotate((prev) => !prev)}
        className={`${
          rotate ? 'text-[purple]' : 'text-[grey]'
        } flex items-center justify-between mb-6`}
      >
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            src={icon}
            alt="icon"
            className={`${
              rotate ? 'text-[purple]' : 'text-[grey]'
            } w-8 h-8 object-cover`}
          />

          <h2>{text}</h2>
        </div>

        <img
          src={icon_2}
          alt="icon"
          className={`${
            rotate ? 'rotate-[90deg] text-[purple] fill-[purple]' : ''
          } w-6 h-6 object-cover cursor-pointer`}
        />
      </div>
      {rotate ? (
        <Link
          to={link}
          className="block mb-4 text-center cursor-pointer text-[#4BA586]"
        >
          {dropDownText}
        </Link>
      ) : null}
    </>
  );
};

// interface TextInterface {
//   text: string;
// }

// const DropDownText = ({ text }: TextInterface) => {
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   );
// };
