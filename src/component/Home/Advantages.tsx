import React, { useEffect, useState } from 'react';
import { AdvantagesData, AdvantagesInterface } from './types';
import { advantagesValues } from './data';
import { GroupImg } from '../../assets/images';

type Props = {};

const Advantages = (props: Props) => {
  return (
    <div>
      <h2 className="my-[88px] text-center xl:text-[48px] text-[34px]  font-semibold text-[#131313]">
        Advantages of HouseLinkUp
      </h2>

      <AdvantageCard />
      <LiveHappilly />
    </div>
  );
};

export default Advantages;

const AdvantageCard = () => {
  const [data, setData] = useState<AdvantagesData>([]);

  useEffect(() => {
    setData(advantagesValues);
  }, []);
  return (
    <div className="block xl:flex gap-[32px] xl:px-[96px] px-[34px] justify-center  mb-[78px]">
      {data?.length > 0
        ? data?.map((item: AdvantagesInterface, index: any) => {
            return (
              <div
                key={index}
                className={` bg-[#fff]
                 flex-1 h-[396px]  border rounded-[12px] text-center pt-[42px] pb-[68px] px-[32px] mb-4 xl:mb-0`}
              >
                <div
                  className={`${
                    index === 1 ? 'bg-[#F8DAC5]' : 'bg-[#D2F7C6]'
                  } rounded-full p-3 max-w-max m-auto mb-[29px]`}
                >
                  <img
                    src={item?.icon}
                    alt={item?.header}
                    width={44}
                    height={44}
                  />
                </div>
                <h2 className="text-[26px] text-[#131313] mb-[1rem] font-semibold">
                  {item?.header}
                </h2>
                <p className=" text-[#979797] text-[24px]">{item?.p}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

const LiveHappilly = () => {
  //pt-[112px] pb-[175px]
  return (
    <section className="bg-[#F5FFFB] py-[40px] xl:py-0  px-[32px] xl:pl-[96px] block xl:flex justify-between items-center">
      <div className="">
        <h4 className="w-[520px] text-[38px] tracking-wider ">
          Live Happily, <br />
          HouseLinkUp helps you <br /> for Finding homes
        </h4>
        <p className="w-[449px] my-[32px] text-[20px]">
          Properties to rent. Find rental property listed directly from private
          landlords and letting agents from all over.
        </p>

        <p className="w-[404px] text-[20px]">
          Search house for rent. Get Results from 8 Engines Instantly.
          Information 24/7. Web, Images & Videos. Trusted by Billions.
        </p>
        <div className="mt-[32px] ml-auto">
          <button className="w-[152px] border border-[#131313] rounded-[6px] py-2">
            Explore More
          </button>
        </div>
      </div>

      <div className=" xl:w-[50%] w-full  mt-[49px] mb-4">
        {/* <div className=" w-[186px] h-[186px] rounded-full bg-[#8CFBA4] ml-auto"></div> */}
        <div className=" z-50">
          <img src={GroupImg} alt="group image" width={512} height={683} />
        </div>
        {/* <div className=" mb-[-5rem] ml-[-5rem] w-[341px]  h-[341px] rounded-full bg-[#96A0F9] "></div> */}
      </div>
    </section>
  );
};
