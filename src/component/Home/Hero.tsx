import { useEffect, useState } from 'react';
import { ArrowDown, Rbg } from '../../assets/icons';
import { housevalues, locationData, piceRangevalues } from './data';
import {
  HouseTypeData,
  HouseTypeInterface,
  LocatiionTypesData,
  LocationInterface,
  PriceInterface,
  PriceListData,
} from './types';
import State from '../select/State';

const Hero = () => {
  return (
    <>
      <HeroWithImage />
      <HeroCard />
    </>
  );
};

export default Hero;

export const HeroWithImage = () => {
  return (
    <main className="">
      <div className=" w-full  ">
        <img
          src={Rbg}
          alt="Bg image"
          className="w-full h-[1100px]  object-cover"
        />
      </div>
      <section className="absolute xl:top-[117px] top-[120px] px-[32px] xl:px-0 w-full">
        <section className=" mt-[97px] text-center ">
          <h4 className="text-[54px] text-[#131313] font-semibold mb-[20px]">
            Find a home <br /> where you can relax
          </h4>
          <p className="text-[#131313] text-[1rem]">
            Search house for rent. Get Results from 8 Engines Instantly.
            Information 24/7. <br /> Web, Images & Videos. Trusted by Billions.
          </p>
        </section>
      </section>
    </main>
  );
};

const HeroCard = () => {
  const [index, setIndex] = useState<Number>(1);

  useEffect(() => {
    setIndex(1);
  }, []);
  return (
    <div className="mt-[-2rem] mb-5 relative w-[751px] xl:ml-[96px] ml-[54px]">
      <div className="bg-[#fff] py-3 w-[109px]">
        <button
          onClick={() => setIndex(1)}
          className={`${
            index === 1 ? 'text-[#69B99D]' : 'text-[#909090]'
          } w-[54px] font-semibold`}
        >
          Buy
        </button>
        <button
          onClick={() => setIndex(2)}
          className={`${
            index === 2 ? 'text-[#69B99D]' : 'text-[#909090]'
          } w-[54px] font-semibold`}
        >
          Rent
        </button>
      </div>
      <div className="block xl:flex xl:w-[951px] xl:flex-1 w-full items-start gap-[1rem] xl:px-[32px] bg-[#fefefe] py-4">
        <State location="Location" />
        <HouseType />
        <PriceRange />

        <button
          type="button"
          className="w-[153px] text-[#fff] text-[1rem] font-semibold tracking-wider bg-[#69B99D] py-[18px] px-[48px] shadow-2xl"
        >
          Search
        </button>
      </div>
    </div>
  );
};

const Location = () => {
  const [data, setData] = useState<LocatiionTypesData>([]);
  const [selected, setSelected] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  const [arrayObj, setArrayObj] = useState<LocatiionTypesData>([]);
  const [selectedTwo, setSelectedTwo] = useState<string>('');

  useEffect(() => {
    setArrayObj(locationData);
    setData(locationData);
  }, []);

  return (
    <div className=" ">
      <div>
        {data?.length > 0
          ? data?.map((item: LocationInterface, index: any) => {
              return (
                <div key={index} className="mb-4">
                  <label htmlFor={`${item?.label}`} className="mb-2">
                    {item?.label}
                  </label>
                  <p
                    className="w-[241px] xl:min-w-[151px] h-8 border-none outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
                    onClick={() => setShowDropDown((prev) => !prev)}
                  >
                    <input
                      type="text"
                      value={selected}
                      onChange={(e) => e.target.value}
                      placeholder="Select location "
                    />

                    <img
                      src={ArrowDown}
                      alt="arrow icon"
                      width={18}
                      height={18}
                      className="text-end ml-auto"
                    />
                  </p>

                  {showDropDown && (
                    <div className="h-[10rem] overflow-y-auto ">
                      {item.value
                        ? item?.value?.map((obj: any, index: any) => {
                            return (
                              <div
                                key={index}
                                onClick={() => setShowDropDown(false)}
                              >
                                <p
                                  onClick={() => setSelected(obj)}
                                  className="cursor-pointer"
                                >
                                  {obj}
                                </p>
                              </div>
                            );
                          })
                        : null}
                    </div>
                  )}
                </div>
              );
            })
          : null}
      </div>

      {/* <section>
        <p>Location</p>
        <p
          className="w-[241px] xl:min-w-[151px] h-8 border-none outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
          onClick={() => setShowDropDown((prev) => !prev)}
        >
          <input
            type="text"
            value={selected}
            onChange={(e) => e.target.value}
            placeholder="Select location "
          />

          <img
            src={ArrowDown}
            alt="arrow icon"
            width={18}
            height={18}
            className="text-end ml-auto"
          />
        </p>

        {showDropDown ? (
          <>
            {arrayObj?.length > 0
              ? arrayObj?.map((item: LocationInterface, index: any) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setShowDropDown(false)}
                      className=" border mt-3 h-[8rem] overflow-y-auto pl-3"
                    >
                      <div>
                        {item?.houses?.map((d: any, i: any) => {
                          return (
                            <div key={index}>
                              <h4 className="font-semibold bg-[rgba(245,241,241,0.7)] text-[#333] pl-3 uppercase mb-2">
                                {d?.heading}
                              </h4>
                              {d?.values?.map((d: any, i: any) => {
                                return (
                                  <p
                                    key={index}
                                    onClick={() => setSelected(d)}
                                    className="cursor-pointer"
                                  >
                                    {d}
                                  </p>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {item?.rent?.map((d: any, i: any) => {
                          return (
                            <div key={index}>
                              <h4 className="font-semibold bg-[rgba(245,241,241,0.7)] text-[#333] pl-3 uppercase my-2">
                                {d?.heading}
                              </h4>
                              {d?.values?.map((d: any, i: any) => {
                                return (
                                  <p key={index} onClick={() => setSelected(d)}>
                                    {d}
                                  </p>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              : null}
          </>
        ) : null}
      </section> */}
    </div>
  );
};

const HouseType = () => {
  const [data, setData] = useState<HouseTypeData>([]);
  const [selected, setSelected] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  useEffect(() => {
    setData(housevalues);
  }, []);

  return (
    <div className="mb-4 ">
      <section>
        <p>House Type</p>
        <p
          className="w-[241px] xl:min-w-[151px] h-8 border-none outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
          onClick={() => setShowDropDown((prev) => !prev)}
        >
          <input
            type="text"
            value={selected}
            onChange={(e) => e.target.value}
            placeholder="Select location "
          />

          <img
            src={ArrowDown}
            alt="arrow icon"
            width={18}
            height={18}
            className="text-end ml-auto"
          />
        </p>

        {showDropDown ? (
          <>
            {data?.length > 0
              ? data?.map((item: HouseTypeInterface, index: any) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setShowDropDown(false)}
                      className=" border mt-3 h-[8rem] overflow-y-auto "
                    >
                      <div>
                        {item?.houses?.map((d: any, i: any) => {
                          return (
                            <div key={index}>
                              <h4 className="font-semibold bg-[rgba(245,241,241,0.7)] text-[#333] pl-3 uppercase mb-2">
                                {d?.heading}
                              </h4>
                              {d?.values?.map((d: any, i: any) => {
                                return (
                                  <p
                                    key={index}
                                    onClick={() => setSelected(d)}
                                    className="cursor-pointer"
                                  >
                                    {d}
                                  </p>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {item?.rent?.map((d: any, i: any) => {
                          return (
                            <div key={index}>
                              <h4 className="font-semibold bg-[rgba(245,241,241,0.7)] text-[#333] pl-3 uppercase my-2">
                                {d?.heading}
                              </h4>
                              {d?.values?.map((d: any, i: any) => {
                                return (
                                  <p key={index} onClick={() => setSelected(d)}>
                                    {d}
                                  </p>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              : null}
          </>
        ) : null}
      </section>
    </div>
  );
};

const PriceRange = () => {
  const [data, setData] = useState<PriceListData>([]);
  const [selected, setSelected] = useState<String>('');
  const [showDropDown, setShowDropDown] = useState<Boolean>(false);

  useEffect(() => {
    setData(piceRangevalues);
  }, []);

  return (
    <div className="mb-4 ">
      {data?.length > 0
        ? data?.map((item: PriceInterface, index: any) => {
            return (
              <div key={index} className=" ">
                <label htmlFor={`${item?.label}`} className="mb-2">
                  {item?.label}
                </label>
                <p
                  className="w-[241px] mb-2 xl:min-w-[151px] h-8 border-none outline-none flex justify-between items-center text-[#443e3e] text-[14px]"
                  onClick={() => setShowDropDown((prev) => !prev)}
                >
                  <input
                    type="text"
                    value={selected.toString()}
                    onChange={(e) => e.target.value}
                    placeholder="Search price range "
                  />

                  <img
                    src={ArrowDown}
                    alt="arrow icon"
                    width={18}
                    height={18}
                    className="text-end ml-auto"
                  />
                </p>

                {showDropDown && (
                  <div className=" h-[10rem] overflow-y-scroll">
                    {item.value
                      ? item?.value?.map((obj: String, index: any) => {
                          return (
                            <div
                              key={index}
                              onClick={() => setShowDropDown(false)}
                            >
                              <p
                                onClick={() => setSelected('$' + obj)}
                                className="cursor-pointer font-[500] py-2"
                              >
                                ${obj}
                              </p>
                            </div>
                          );
                        })
                      : null}
                  </div>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};
