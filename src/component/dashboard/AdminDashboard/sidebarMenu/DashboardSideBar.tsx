import { useState } from "react";
// import { User, dropDown } from '../../../assets/icons';
import { FaUsers } from "react-icons/fa";
import { MdHome, MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { User, dropDown } from "../../../../assets/icons";

type Props = {
  show: boolean;
  setShow: any;
};

const DashboardSideBar = ({ show, setShow }: Props) => {
  return (
    <div
      className={`${
        show ? " w-full max-w-[18rem]  border-2 rounded-lg shadow-2xl px-4" : ""
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
          </>
        ) : (
          <>
            <SideBarIcon text={"Home"} link={"/dashboard"} icon={<MdHome />} />
            <SideBarIcon
              text={"Users"}
              link={"/dashboard/all-users"}
              icon={<FaUsers />}
            />
            <SideBarIcon
              text={"Dashboard"}
              link={"/dashboard/location"}
              icon={<MdOutlineLocationOn />}
            />
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

const SideBarIcon = ({ link, text, icon }: any) => {
  return (
    <div className="px-4 flex ">
      <div className="hidden">{text}</div>
      <Link className="text-2xl" to={link}>
        {icon}
      </Link>
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
          rotate ? "text-[purple]" : "text-[grey]"
        } flex items-center justify-between mb-6`}
      >
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            src={icon}
            alt="icon"
            className={`${
              rotate ? "text-[purple]" : "text-[grey]"
            } w-8 h-8 object-cover`}
          />

          <h2>{text}</h2>
        </div>

        <img
          src={icon_2}
          alt="icon"
          className={`${
            rotate ? "rotate-[90deg] text-[purple] fill-[purple]" : ""
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
