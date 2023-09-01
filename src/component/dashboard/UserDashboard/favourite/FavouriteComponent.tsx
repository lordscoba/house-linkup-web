import React, { useState, useEffect } from 'react';
import UserDashboardNav from '../UserDashboardNav';
import DashboardSearch from '../DashboarSearch';
import { Dollar, SortingArrow_2 } from '../../../../assets/icons';
import { FavouriteDataArray, FavouriteInterface } from './types';
import { favouriteValues } from './favouriteData';

type Props = {};

const FavouriteComponent = (props: Props) => {
  const [data, setData] = useState<FavouriteDataArray>([]);

  useEffect(() => {
    setData(favouriteValues);
  }, []);

  return (
    <div className="overflow-x-hidden mt-[2.1875rem] hide-scrollbar md:px-[32px] px-2">
      <UserDashboardNav />
      <DashboardSearch />
      <AllHouses data={data} />
    </div>
  );
};

export default FavouriteComponent;

interface HouseInterface {
  data: FavouriteDataArray;
}

const AllHouses = ({ data }: HouseInterface) => {
  return (
    <div className="mt-[33px] lg:px-[98px]">
      <div className="w-full max-w-[626px] flex gap-[12px] items-center justify-between ">
        <h4 className="text-[18px] lg:[24px] text-[#000] font-[400]">
          Apartment for Rent
        </h4>
        <p className="text-[rgba(0,0,0,0.50)] text-[12px] font-[300]">
          (2.672) results found.
        </p>

        <div className="border flex w-[218px] py-2 justify-between px-3">
          <p className="text-[15px] font-[300] text-[#000]">Smart Sorting</p>
          <img src={SortingArrow_2} alt="" className="h-[20px] fill-[red]" />
        </div>
      </div>

      <section className="flex justify-center gap-[24px] flex-wrap mt-[26px]">
        {data?.length > 0
          ? data?.map((item: FavouriteInterface, index: any) => {
              return <Houses key={index} item={item} />;
            })
          : null}
      </section>
    </div>
  );
};

interface DatavaluesInterface {
  item: FavouriteInterface;
}

const Houses = ({ item }: DatavaluesInterface) => {
  return (
    <div className="">
      <div>
        <img src={item?.image} alt="" className="w-full md:w-[265px]" />
      </div>
      <div className="flex  items-center gag-6 text-[20px] font-[500] text-[#000] mt-[10px]">
        <span>{item?.price}</span>{' '}
        <img src={Dollar} alt="" className="w-[1rem] h-[1rem]" />
      </div>
      <h4 className="mt-[10px] lg:text-start text-center">{item?.title}</h4>
      <p className="mt-[10px] text-[rgba(0,0,0,0.50)] text-[14px] lg:text-start text-center">
        {item?.street}
      </p>
      <p className="mt-[10px] text-[rgba(0,0,0,0.50)] text-[14px] lg:text-start text-center">
        {item?.date}
      </p>
      <section className="flex lg:justify-start justify-center gap-4 mt-[10px]">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M10.3125 13.5938V9.375H4.6875V13.5938C4.6875 13.875 4.5 14.0625 4.21875 14.0625H10.7812C10.5 14.0625 10.3125 13.875 10.3125 13.5938Z"
              fill="black"
            />
            <path
              d="M12.6562 6.14062V3.65625C12.6562 2.4375 11.625 1.40625 10.4062 1.40625H4.59375C3.375 1.40625 2.34375 2.4375 2.34375 3.65625V6.14062C1.54688 6.32812 0.9375 7.07812 0.9375 7.96875V12.6562C0.9375 13.4531 1.54688 14.0625 2.34375 14.0625H4.21875C3.9375 14.0625 3.75 13.875 3.75 13.5938V7.96875C3.75 7.45312 3.32812 7.03125 2.8125 7.03125C2.53125 7.03125 2.34375 6.84375 2.34375 6.5625C2.34375 6.28125 2.53125 6.09375 2.8125 6.09375C3.84375 6.09375 4.6875 6.9375 4.6875 7.96875V8.4375H10.3125V7.96875C10.3125 6.9375 11.1562 6.09375 12.1875 6.09375C12.4688 6.09375 12.6562 6.28125 12.6562 6.5625C12.6562 6.84375 12.4688 7.03125 12.1875 7.03125C11.6719 7.03125 11.25 7.45312 11.25 7.96875V13.5938C11.25 13.875 11.0625 14.0625 10.7812 14.0625H12.6562C13.4531 14.0625 14.0625 13.4531 14.0625 12.6562V7.96875C14.0625 7.07812 13.4531 6.375 12.6562 6.14062Z"
              fill="black"
            />
          </svg>
          <span>{item?.fit}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_447_735)">
              <path
                d="M14.237 2.95724H11.4968C11.0758 2.95724 10.7346 3.29819 10.7346 3.71933V5.69764H8.75632C8.33517 5.69764 7.99399 6.03846 7.99399 6.45963V8.43806H6.01568C5.59453 8.43806 5.25347 8.77938 5.25347 9.20009V11.2738H3.18021C2.97791 11.2738 2.78405 11.354 2.64117 11.4968C2.49817 11.6396 2.41797 11.8343 2.41797 12.0358L2.41822 13.6303C2.41822 14.0518 2.75953 14.3927 3.18043 14.3927H14.237C14.6581 14.3927 14.9992 14.0518 14.9992 13.6303V3.7193C14.9992 3.29819 14.6581 2.95724 14.237 2.95724Z"
                fill="black"
              />
              <path
                d="M10.2266 0.760775C10.0304 0.559679 9.70912 0.555815 9.50814 0.751469C6.24859 3.9267 3.14766 7.02801 0.148905 10.0265C0.0534895 10.1219 0 10.2515 0 10.386V13.8635C0 14.1437 0.227408 14.3717 0.508119 14.3717C0.788553 14.3717 1.01636 14.1438 1.01636 13.8635V10.5963C3.96645 7.64611 7.01643 4.5977 10.2171 1.47927C10.418 1.28364 10.4221 0.961747 10.2266 0.760775Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_447_735">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>{item?.numOfStirs}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_447_254)">
              <path
                d="M11.9935 2.12696H3.00798C2.57562 2.12696 2.22389 2.47847 2.22389 2.91058V12.0895C2.22389 12.5218 2.5754 12.8735 3.00798 12.8735H11.9935C12.4258 12.8735 12.7775 12.522 12.7775 12.0895V2.91058C12.7773 2.47847 12.4257 2.12696 11.9935 2.12696ZM9.28449 9.36396H7.77294V5.94526L6.45822 8.0312L5.14872 5.94526V9.36418H3.6416V3.29503H5.14872L6.45822 5.38098L7.77294 3.29503H9.28449V9.36396ZM13.4638 0H1.53761C0.759741 0 0.128906 0.630799 0.128906 1.40856V13.5911C0.128906 14.3692 0.759741 15 1.53761 15H13.464C14.2418 15 14.8727 14.3692 14.8727 13.5911V1.40856C14.8727 0.630799 14.2418 0 13.4638 0ZM13.3328 12.0895C13.3328 12.8278 12.732 13.4288 11.9935 13.4288H3.00798C2.26958 13.4288 1.66857 12.828 1.66857 12.0895V2.91058C1.66857 2.17243 2.26936 1.57139 3.00798 1.57139H11.9935C12.7318 1.57139 13.3328 2.17218 13.3328 2.91058V12.0895Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_447_254">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>
            {item?.meters}M<sup>2</sup>
          </span>
        </div>
      </section>
    </div>
  );
};
