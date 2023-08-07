import React, { useEffect, useState } from 'react';
import { AboutCardInterface, AboutDataArray } from './types';
import { AboutValues } from './data';

type Props = {};

const OurAdvantage = (props: Props) => {
  const [data, setData] = useState<AboutDataArray>([]);
  useEffect(() => {
    setData(AboutValues);
  }, []);
  return (
    <div className="px-[32px] xl:pl-0  bg-[#C9CDCE] py-[80px]">
      <section className="w-full xl:w-[1220px] m-auto">
        <h2 className="text-[#69B99D] text-[18px] font-medium ml-[24px] mb-[28px]">
          OUR ADVANTAGE
        </h2>
        <h4 className="text-[#054457] text-[48px] w-full xl:w-[438px] mb-[68px] font-bold">
          Giving you peace of mind
        </h4>

        <section className="block xl:flex items-center flex-wrap gap-[32px]">
          {data?.length > 0
            ? data?.map((item: AboutCardInterface, index: any) => {
                return (
                  <div
                    key={index}
                    className="w-full xl:w-[376px] h-[268px] mb-[12px] xl:mb-0 px-[20px]"
                  >
                    <div className="mb-[1rem]">
                      <img src={item?.icon} alt="icon" width={45} height={42} />
                    </div>
                    <div className=" pb-[20px]">
                      <h4 className="text-[#054457] text-[28px] mb-[1rem]">
                        {item?.title}
                      </h4>
                      <p className="text-[#2a2a2b] text-[1rem]">{item?.text}</p>
                    </div>
                  </div>
                );
              })
            : null}
        </section>
      </section>
    </div>
  );
};

export default OurAdvantage;
