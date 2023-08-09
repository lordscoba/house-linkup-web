import React, { useEffect, useState } from 'react';
import { MiniCostImage } from '../../assets/icons';
import { MiniCostArray, MiniCostInterface } from './types';
import { miniCostValues } from './data';

type Props = {};

const MinimumLivingCost = (props: Props) => {
  const [data, setData] = useState<MiniCostArray>([]);

  useEffect(() => {
    setData(miniCostValues);
  }, []);
  return (
    <div className="px-[32px] xl:px-0 w-full xl:w-[1220px] m-auto">
      <h4 className="text-[#18191F] xl:text-[48px] text-[38px] font-semibold  capitalize">
        minimum living cost takes care of everything
      </h4>

      <section className="block xl:flex items-center gap-[65px] mt-[38px]">
        <div className="mb-[65px] ">
          <img src={MiniCostImage} alt="" className="object-cover w-full" />
        </div>
        <div className="flex gap-[2rem] items-center  justify-center xl:justify-start flex-wrap text-center xl:text-start  ">
          {data?.length > 0
            ? data?.map((item: MiniCostInterface, index: any) => {
                return (
                  <MiniCostCard
                    icon={item?.icon}
                    title={item?.title}
                    key={index}
                  />
                );
              })
            : null}
        </div>
      </section>
    </div>
  );
};

export default MinimumLivingCost;

interface MiniCardInterface {
  icon: string;
  title: string;
}

const MiniCostCard = ({ icon, title }: MiniCardInterface) => {
  return (
    <div className="w-[200px] xl:w-[200px] h-[168px] ">
      <div className="w-[77px] h-[77px] p-[1rem] bg-[#eceaea] rounded-[8px] mb-[21px] m-auto xl:m-0  ">
        <img src={icon} alt="icon" />
      </div>
      <h4 className="text-[1rem] text-[#18191F] font-semibold xl:w-[162px] w-full">
        {title}
      </h4>
    </div>
  );
};
