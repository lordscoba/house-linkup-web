import React, { useState, useEffect } from 'react';
import { FindHouseArray, FindHouseNearYouInterface } from './types';
import { findHouseNearYouValues } from './data';
import { Clock, Dollar, Like } from '../../assets/icons';
import Houses from '../reusableComponents/Houses';
const navData = [
  {
    text: 'Near to market',
  },
  {
    text: 'Nature Nearby',
  },
  {
    text: 'Most viewed homes',
  },
];

const ExploreHouseNearYou = () => {
  const [btnData, setBtnData] = useState<Array<{ text: string }>>([]);
  const [btnIndex, setBtnIndex] = useState<Number>(0);
  const [houseData, setHouseData] = useState<FindHouseArray>([]);

  const handleBtnClick = (e: Number) => {
    setBtnIndex(e);
  };

  useEffect(() => {
    setBtnData(navData);
    setHouseData(findHouseNearYouValues);
  }, []);

  return (
    <div className="px-[32px]  xl:px-0 w-full xl:w-[1220px] m-auto mt-[72px] ">
      <h2 className="text-[#000] xl:text-[32px] text-[22px]  font-bold mb-[1rem]">
        Explore HouseLinkUp Homes Near You.
      </h2>
      <section className="flex items-center gap-4 mb-[44px]">
        {navData?.length > 0
          ? navData?.map((item: { text: string }, index: any) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => handleBtnClick(index)}
                    type="button"
                    className={`${
                      index === btnIndex
                        ? 'text-[#69B99D] border-b-2 border-[#27563A]'
                        : 'text-[#313131]'
                    } text-[1rem] font-medium`}
                  >
                    {item?.text}
                  </button>
                </div>
              );
            })
          : null}
      </section>
      {/* <hr className="block h-[.2rem] bg-[#27563A]" /> */}
      <section className="block xl:flex gap-[19px] flex-wrap">
        {houseData?.length > 0
          ? houseData?.map((item: FindHouseNearYouInterface, index: any) => {
              return (
                <Houses
                  key={index}
                  NumOfBathRooms={item?.NumOfBathRooms}
                  NumOfBedRooms={item?.NumOfBedRooms}
                  SquareFt={item?.SquareFt}
                  Year={item?.Year}
                  image={item?.image}
                  location={item?.location}
                  price={item?.price}
                  _id={item?._id}
                />
              );
            })
          : null}
      </section>
    </div>
  );
};

export default ExploreHouseNearYou;

// export interface FindHouseInterface {
//   price: Number;
//   NumOfBedRooms: Number;
//   NumOfBathRooms: Number;
//   SquareFt: Number;
//   Year: Number;
//   image: string;
//   location: string;
//   index: Number;
// }

// const Houses = ({
//   NumOfBathRooms,
//   NumOfBedRooms,
//   SquareFt,
//   Year,
//   image,
//   location,
//   price,
//   index,
// }: FindHouseInterface) => {
//   return (
//     <div className="w-full xl:w-[32%] border-t pt-3 pb-5">
//       <div className="flex items-center justify-between mb-[19px]">
//         <h2 className="flex items-center gap-2 text-[18px] font-bold">
//           <img src={Dollar} alt="dollar icon" className="w-[16px] h-[16px] " />{' '}
//           {Number(price).toLocaleString()}
//         </h2>
//         <span className="bg-[#69B99D] text-[#fff] py-[2px] px-[12px] rounded-[50px]">
//           FOR SALE
//         </span>
//       </div>
//       <div className=" flex justify-between mb-[28px]">
//         <div className=" flex gap-1 text-[14px]">
//           <span>{Number(NumOfBedRooms)} beds</span>{' '}
//           <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
//           <span>{Number(NumOfBathRooms)} baths</span>{' '}
//           <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
//           <span>{Number(SquareFt)} sqft</span>{' '}
//           <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
//           <span>Eco-friendly</span>{' '}
//         </div>

//         <div className="flex items-center gap-1 text-[14px]">
//           <img src={Clock} alt="clock icon" className="w-[.8rem] h-[.8rem] " />
//           <span>{Number(Year)} year(s) ago</span>
//         </div>
//       </div>
//       <div className="mb-[20px]">
//         <img src={image} alt="house picture" className="object-cover" />
//       </div>
//       <div className="flex justify-between items-center">
//         <p className="w-[60%] text-[1rem] text-[#27563A]">{location}</p>
//         <img src={Like} alt="like icon" />
//       </div>
//     </div>
//   );
// };
