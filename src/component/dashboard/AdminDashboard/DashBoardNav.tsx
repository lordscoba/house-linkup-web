import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header/Header';
import { Logo } from '../../../assets/icons';

type Props = {
  setShow: (e: any) => void;
};

const DashBoardNav = ({ setShow }: Props) => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center gap-4 border bg-[black] text-[#fff] fixed left-0 right-0 py-2 z-50">
      <div className=" flex items-center gap-4">
        <img
          onClick={() => navigate('/')}
          src={Logo}
          width={71}
          height={64}
          alt=""
          className="cursor-pointer"
        />
        <h2
          onClick={() => navigate('/')}
          className="text-[24px] font-semibold text-[#4BA586] cursor-pointer"
        >
          HouseLinkUp
        </h2>
      </div>
      <div
        className=" cursor-pointer"
        onClick={() => {
          setShow((prev: boolean) => !prev);
        }}
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
      <Header />
    </section>
  );
};

export default DashBoardNav;
