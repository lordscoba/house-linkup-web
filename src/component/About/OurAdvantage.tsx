import { useEffect, useState } from "react";
import { AboutValues } from "./data";
import { AboutCardInterface, AboutDataArray } from "./types";

type Props = {};

const OurAdvantage = (props: Props) => {
  const [data, setData] = useState<AboutDataArray>([]);
  useEffect(() => {
    setData(AboutValues);
  }, []);
  return (
    <div className="p-5 md:px-[32px] xl:pl-0  bg-[#C9CDCE] py-[80px]">
      <section className="w-full xl:w-[1220px] m-auto">
        <h2 className="text-[#69B99D] text-[18px] font-medium ml-[24px] mb-[28px]">
          OUR ADVANTAGE
        </h2>
        <h4 className="text-[#054457] text-[48px] w-full xl:w-[438px] mb-[68px] font-bold">
          Giving you peace of mind
        </h4>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-[32px]">
          {data?.length > 0
            ? data?.map((item: AboutCardInterface, index: any) => {
                return (
                  <div key={index} className="w-full h-[268px] px-2">
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
