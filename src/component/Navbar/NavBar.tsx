import React, { useEffect, useState } from 'react';
import { NavData, NavTypes } from './navTypes';
import { data } from './data';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../assets/icons';

type Props = {};

const NavBar = (props: Props) => {
  const [links, setLinks] = useState<NavData>([]);

  const [showNav, setShowNav] = useState<Boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setLinks(data);
  }, []);

  return (
    <div className="z-50  bg-[#C9CDCE] relative  pb-3">
      <div className=" max-w-[1440px] m-auto xl:pt-[51px] block xl:flex items-center justify-between px-3">
        <div className="flex items-center  justify-between">
          <div className=" flex items-center gap-4">
            <img src={Logo} width={71} height={64} alt="" />
            <h2 className="text-[24px] font-semibold text-[#4BA586]">
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
          }  xl:flex items-center gap-[32px] xl:mt-0 mt-3 `}
        >
          <div className="block xl:flex items-center flex-1 gap-[48px]">
            {links?.length > 0
              ? links?.map((item: NavTypes, index: any) => {
                  return (
                    <div key={index}>
                      <section className=" flex xl:block items-center gap-4 max-w-max xl:mb-0 mb-2">
                        <Link
                          to={item?.link}
                          className={` ${
                            pathname === item?.link
                              ? 'text-[#4BA586]'
                              : 'text-[#222]'
                          } text-[18px] `}
                        >
                          {item?.text}
                        </Link>
                        {pathname === item?.link ? (
                          <p className="w-2 h-2 rounded-full bg-[#4BA586] m-auto mt-[8px]"></p>
                        ) : null}
                      </section>
                    </div>
                  );
                })
              : null}
          </div>
          <section>
            <button className="w-[151px] bg-[#fff] text-[#69B99D] border border-[#69B99D] py-[1rem] mr-[.7rem] text-[1rem] font-semibold">
              Sign up
            </button>
            <button className="w-[151px] bg-[#69B99D] text-[#fff] py-[1rem] text-[1rem] font-semibold">
              login
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
