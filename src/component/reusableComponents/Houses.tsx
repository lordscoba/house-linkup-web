import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Clock, Dollar, Like } from '../../assets/icons';
import { FindHouseNearYouInterface } from '../Property/types';
// import { FindHouseInterface } from '../Property/ExploreHouseNearYou';

const Houses = ({
  NumOfBathRooms,
  NumOfBedRooms,
  SquareFt,
  Year,
  image,
  location,
  price,
  _id,
}: FindHouseNearYouInterface) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [clicked, setCliked] = useState<Boolean>(false);

  // useEffect(() => {
  //   const link = `${pathname}/${_id}`;
  //   console.log({ house: link });

  // }, []);
  return (
    <div className="w-full xl:w-[32%] border-t pt-3 pb-5">
      <div className="flex items-center justify-between mb-[19px]">
        <h2 className="flex items-center gap-2 text-[18px] font-bold">
          <img src={Dollar} alt="dollar icon" className="w-[16px] h-[16px] " />{' '}
          {Number(price).toLocaleString()}
        </h2>
        <span
          className="bg-[#69B99D] text-[#fff] py-[2px] px-[12px] rounded-[50px] cursor-pointer"
          onClick={() => navigate(`${pathname}/${_id}`)}
        >
          FOR SALE
        </span>
      </div>
      <div className=" flex justify-between mb-[28px]">
        <div className=" flex gap-1 text-[14px]">
          <span>{Number(NumOfBedRooms)} beds</span>{' '}
          <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
          <span>{Number(NumOfBathRooms)} baths</span>{' '}
          <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
          <span>{Number(SquareFt)} sqft</span>{' '}
          <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
          <span>Eco-friendly</span>{' '}
        </div>

        <div className="flex items-center gap-1 text-[14px] ">
          <img src={Clock} alt="clock icon" className="w-[.8rem] h-[.8rem] " />
          <span>{Number(Year)} year(s) ago</span>
        </div>
      </div>
      <div
        className="mb-[20px] cursor-pointer"
        onClick={() => navigate(`${pathname}/${_id}`)}
      >
        <img src={image} alt="house picture" className="object-cover" />
      </div>
      <div className="flex justify-between items-center">
        <p className="w-[60%] text-[1rem] text-[#27563A]">{location}</p>

        <svg
          onClick={() => setCliked((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className={`${
            clicked ? 'fill-[#69B99D]' : 'fill-none'
          } w-6 h-6 cursor-pointer`}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Houses;
