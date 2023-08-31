import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../../../assets/icons';
import { UserDashboardArray, UserDashboardInterface } from './types';
import { userDashboardNavValues } from './data';
import { useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../../redux/store';

type Props = {};

const UserDashboardNav = (props: Props) => {
  const navigate = useNavigate();

  const [links, setLinks] = useState<UserDashboardArray>([]);
  const [showNav, setShowNav] = useState<Boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { pathname } = useLocation();
  const route = pathname.split('/')[3];

  const userFromstorage = localStorage.getItem('loginUser')
    ? JSON.parse(localStorage.getItem('loginUser') as any)
    : null;

  const userDetails = useSelector(
    (state: StoreReducerTypes) => state.userDetails
  );

  useEffect(() => {
    setLinks(userDashboardNavValues);
  }, []);
  return (
    <div className="block xl:flex items-center  gap-[85px]  pt-4 border-b">
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <img
            onClick={() => navigate('/')}
            src={Logo}
            // width={71}
            // height={64}
            alt=""
            className="cursor-pointer w-[44px] h-[51px] xl:w-[64px] xl:h-[71px]"
          />
          <h2
            onClick={() => navigate('/')}
            className="xl:text-[24px] lg:text-[22px] text-[20px] font-semibold text-[#4BA586] cursor-pointer"
          >
            HouseLinkUp
          </h2>
        </div>

        <div
          className="block xl:hidden  cursor-pointer"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>
      <section
        className={`${
          showNav ? 'block' : 'hidden'
        }   xl:flex flex-1  items-center gap-[42px] xl:mt-0 mt-3 `}
        //   className="block xl:flex gap-[42px]   flex-1"
      >
        <div className="block xl:flex  items-center   gap-[48px]">
          {links?.length > 0
            ? links?.map((item: UserDashboardInterface, index: any) => {
                return (
                  <div key={index}>
                    <section className=" flex xl:block items-center gap-4 max-w-max xl:mb-0 mb-2">
                      <Link
                        onClick={() => setShowNav(false)}
                        to={item?.link}
                        className={` ${
                          pathname === item?.link
                            ? 'text-[#4BA586]'
                            : 'text-[#222]'
                        } text-[18px] md:text-[1rem] `}
                      >
                        {item?.text}
                      </Link>
                      {pathname === item?.link || item?.link.includes(route) ? (
                        <p className="w-2 h-2 rounded-full bg-[#4BA586] m-auto mt-[8px]"></p>
                      ) : null}
                    </section>
                  </div>
                );
              })
            : null}
        </div>
        <div className="hidden xl:flex my-6 border rounded-[50px] pr-2 w-full  lg:max-w-[22rem] xl:max-w-[26rem]  items-center m-auto gap-2 ">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 py-2 pl-2 rounded-[50px] text-[#222] outline-none border-none focus:border-none focus:outline-none "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  text-[grey]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <div className="flex items-center gap-4">
          <Link to={`/profile`}>
            {userFromstorage?.userDoc?.image?.length > 0 ? (
              <img
                src={userFromstorage?.userDoc?.image?.[0]?.url}
                alt=""
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
            ) : userDetails?.serverResponse?.image?.length > 0 ? (
              <img
                src={userDetails?.serverResponse?.image[0]?.url}
                alt=""
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-[50px] h-[50px] border-2 rounded-full p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            )}
          </Link>
          <div className="">
            <h4 className="text-[1rem] font-bold">
              {userFromstorage?.userDoc?.full_name}
            </h4>
            <p className="text-[#2B67F6] font-[400]">Renter</p>
          </div>
        </div>

        <div className="flex xl:hidden my-6 border rounded-[50px] pr-2 w-full  lg:max-w-[22rem] xl:max-w-[26rem]  items-center m-auto gap-2 ">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 py-2 pl-2 rounded-[50px] text-[#222] outline-none border-none focus:border-none focus:outline-none "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6  text-[grey]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default UserDashboardNav;
