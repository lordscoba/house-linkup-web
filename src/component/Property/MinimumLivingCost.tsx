import { useEffect, useState } from "react";
import { MiniCostImage } from "../../assets/icons";
import { miniCostValues } from "./data";
import { MiniCostArray, MiniCostInterface } from "./types";

type Props = {};

const MinimumLivingCost = (props: Props) => {
  const [data, setData] = useState<MiniCostArray>([]);

  useEffect(() => {
    setData(miniCostValues);
  }, []);
  return (
    <div className="px-[32px] xl:px-0 w-full m-auto">
      <h4 className="text-[#18191F] xl:text-[48px] text-[38px] font-semibold  capitalize">
        minimum living cost takes care of everything
      </h4>

      <section className="flex flex-wrap md:flex-row items-center gap-2 mt-4">
        <div className="mb-[65px] md:w-5/12">
          <img src={MiniCostImage} alt="" className="object-cover w-full" />
        </div>
        <div className="flex md:w-5/12 gap-[2rem] items-center  justify-center xl:justify-start flex-wrap text-center xl:text-start ">
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
    <div className="w-1/4 h-[168px] ">
      <div className="w-[77px] h-[77px] p-[1rem] bg-[#eceaea] rounded-[8px] mb-[21px] m-auto xl:m-0">
        <img src={icon} alt="icon" />
      </div>
      <h4 className="text-[1rem] text-[#18191F] font-semibold xl:w-[162px] w-full">
        {title}
      </h4>
    </div>
  );
};
