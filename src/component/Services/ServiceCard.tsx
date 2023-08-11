import React, { useState, useEffect } from 'react';
import { ServiceCardArray, ServiceCardInterface } from './types';
import { cardValues } from './data';

type Props = {};

const ServiceCard = (props: Props) => {
  const [cardData, setCardData] = useState<ServiceCardArray>([]);

  useEffect(() => {
    setCardData(cardValues);
  }, []);
  return (
    <div className="w-full px-[32px] xl:w-[1260px] xl:h-[506px] h-full m-auto rounded-lg xl:mt-[74px] xl:mb-[185px] mt-4 bg-[#bed6b8] pt-[32px] pb-4">
      <section>
        <h5 className="text-[#69B99D] text-[14px] font-[700]">SERVICES</h5>
        <div>
          <h2 className="text-[#000] font-[700] text-[32px]">
            What do we offer
          </h2>
          <p className="w-full xl:w-[608px] text-[18px] font-[400] text-[#000] mb-[39px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore etdolore magna aliqua.
          </p>
        </div>
        <section className="block xl:flex justify-between ">
          {cardData?.length > 0
            ? cardData?.map((item: ServiceCardInterface, index: any) => {
                return (
                  <div
                    key={index}
                    className="bg-[#fff] shadow-lg w-full xl:w-[276px] h-[383px] mb-[18px] py-[37px] px-[16px] rounded-lg"
                  >
                    <div className="mb-[29px]">
                      <img
                        src={item?.icon}
                        alt=""
                        className="w-[60px] h-[60px] m-auto object-cover"
                      />
                    </div>
                    <p className="mb-[29px] text-center text-[#000] text-[18px] font-[600]">
                      {item.heading}
                    </p>
                    <p>{item?.p}</p>
                  </div>
                );
              })
            : null}
        </section>
      </section>
    </div>
  );
};

export default ServiceCard;
