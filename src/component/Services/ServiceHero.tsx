import React, { useState, useEffect } from 'react';
import { ServicesBg } from '../../assets/images';
import { ArrowRightUp } from '../../assets/icons';
import { ServiceBgArray, ServiceInterface } from './types';
import { serviceHeroValues } from './data';

type Props = {};

const ServiceHero = (props: Props) => {
  const [bgImage, setBgImage] = useState<ServiceBgArray>([]);
  const [bgindex, setBgIndex] = useState<Number>(0);

  useEffect(() => {
    setBgImage(serviceHeroValues);
  }, []);

  useEffect(() => {
    let ImageLength = serviceHeroValues?.length;
    let ImageLastIndex = ImageLength;

    if (bgindex === ImageLastIndex) {
      setBgIndex(0);
    }

    if (Number(bgindex) < 0) {
      setBgIndex(ImageLastIndex);
    }
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(() => {
      setBgIndex((prev) => Number(prev) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [bgindex]);

  return (
    <div>
      <div className="relative  ">
        {bgImage?.length > 0
          ? bgImage?.map((item: ServiceInterface, index: any) => {
              return (
                <div key={index}>
                  <img
                    src={item?.image}
                    alt="bg"
                    className={`${
                      index === bgindex ? 'block' : 'hidden'
                    } z-[-999] w-full  h-[1012px] object-cover`}
                  />
                </div>
              );
            })
          : null}
      </div>
      <section className="absolute left-0 right-0 xl:top-[50%] top-[25%] bottom-[50%] px-[32px] xl:pl-[133px]">
        <h2 className="xl:text-[48px] text-[38px] text-[#fff] w-full xl:w-[630px] font-[600]">
          Find the most affordable place to stay with{' '}
          <span className="text-[#69B99D]">HouseLinkUp</span> , your most
          trusted alien
        </h2>

        <div className="mt-[38px]">
          <button
            type="button"
            className="w-[175px] bg-[#69B99D] rounded-[50px] m-auto xl:m-0  py-[11px] text-[14px] font-[600] text-[#fff] flex items-center justify-center"
          >
            Explore more <img src={ArrowRightUp} alt="arrow up" />
          </button>
        </div>

        <section className="flex gap-2 mt-[45px]">
          <div className="border-b border-[#fff]">
            <h2 className="text-[#fff] text-[40px] font-[600]">40K+</h2>
            <small className="block mb-[13px] text-[1rem] font-[400] text-[#fff]">
              Happy Clients
            </small>
          </div>
          <div className="border-b border-[#fff]">
            <h2 className="text-[#fff] text-[40px] font-[600]">540K+</h2>
            <small className="block mb-[13px] text-[1rem] font-[400] text-[#fff]">
              Projects Completed
            </small>
          </div>
          <div className="border-b border-[#fff]">
            <h2 className="text-[#fff] text-[40px] font-[600]">300</h2>
            <small className="block mb-[13px] text-[1rem] font-[400] text-[#fff]">
              Dedicated Members
            </small>
          </div>
          <div className="border-b border-[#fff]">
            <h2 className="text-[#fff] text-[40px] font-[600]">25+</h2>
            <small className="block mb-[13px] text-[1rem] font-[400] text-[#fff]">
              Awards Won
            </small>
          </div>
        </section>
      </section>
      <div className="flex justify-center gap-8 absolute  bottom-[-30%] left-0 right-0 ">
        {bgImage?.length > 0
          ? bgImage?.map((item: ServiceInterface, index) => {
              return (
                <div key={index}>
                  <p
                    onClick={() => setBgIndex(index)}
                    className={`${
                      index === bgindex ? 'bg-[#69B99D]' : 'bg-[#fff]'
                    } w-8 h-8 rounded-full  cursor-pointer`}
                  ></p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ServiceHero;
