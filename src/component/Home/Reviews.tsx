import React, { useEffect, useState } from 'react';
import { ReviewsData, ReviewsInterface } from './types';
import { ReviewValues } from './data';
import Rating from '../Rating/Rating';

type Props = {};

const Reviews = (props: Props) => {
  const [data, setData] = useState<ReviewsData>([]);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    let dataLastIndex = data?.length - 1;

    if (dataIndex > dataLastIndex) {
      setDataIndex(0);
    }

    if (dataIndex < 0) {
      setDataIndex(dataLastIndex);
    }
  }, [dataIndex]);

  useEffect(() => {
    setData(ReviewValues);
  }, []);
  return (
    <section className="xl:pl-[71px] px-[32px] mt-[134px] xl:flex block py-[57px] bg-[#F5FFFB] ">
      <div className=" relative">
        {data?.length > 0
          ? data?.map((item: ReviewsInterface, index: any) => {
              return (
                <div
                  key={index}
                  className={`${
                    index === dataIndex ? 'block xl:flex' : 'hidden'
                  }   items-center  gap-[78px]`}
                >
                  <div className="w-full h-[679px] xl:px-0 xl:w-[518px] ">
                    <img
                      src={item?.icon}
                      alt="icon"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full xl:w-[531px]">
                    <p className="xl:text-[36px] text-[26px] mt-3 xl:mt-0 text-[#191919] font-semibold mb-[58px]">
                      &apos;&apos;{item?.p}&apos;&apos;
                    </p>
                    <p className="text-[30px] text-[#191919] font-semibold">
                      {item?.name}
                    </p>
                    <p className="text-[30px] text-[#636363] font-semibold mb-[1rem]">
                      {item?.location}
                    </p>
                    <p className="xl:absolute bottom-0 mb-3 xl:mb-0">
                      {/* {Number(item?.rating)} */}
                      <Rating rating={Number(item?.rating)} />
                    </p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className="flex xl:justify-end justify-center items-end gap-4 cursor-pointer">
        <svg
          onClick={() => setDataIndex((prev) => prev - 1)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 disabled:${dataIndex === 0}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        <svg
          onClick={() => setDataIndex((prev) => prev + 1)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 disabled:${dataIndex === 0}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Reviews;
