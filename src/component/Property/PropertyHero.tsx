import React, { useEffect, useState } from 'react';
import { GreaterThan, Like, PropertyBg } from '../../assets/icons';
import { PropertyArrayType, PropertyInterface } from './types';
import { propertyValues } from './data';

type Props = {};

const PropertyHero = (props: Props) => {
  const [data, setData] = useState<PropertyArrayType>([]);
  const [dataIndex, setDataIndex] = useState<Number>(0);

  const handleNext = () => {
    setDataIndex((prev) => Number(prev) + 1);
  };

  useEffect(() => {
    let dataLastIndex = data?.length - 1;

    if (Number(dataIndex) > Number(dataLastIndex)) {
      setDataIndex(0);
    }

    if (Number(dataIndex) < 0) {
      setDataIndex(dataLastIndex);
    }
  }, [dataIndex]);

  useEffect(() => {
    setData(propertyValues);
  }, []);
  return (
    <main className="relative ">
      <div className="  ">
        <img
          src={PropertyBg}
          alt="icon"
          className="z-[-999] w-full xl:h-auto h-[1012px] object-cover"
        />
      </div>

      <section className="absolute left-0 right-0 xl:top-[30%] top-[15%] bottom-[50%] px-[32px] xl:pl-[133px] block xl:flex">
        <h2 className="xl:text-[48px] text-[38px] text-[#000] w-full xl:w-[630px]">
          Find the most affordable place to stay with{' '}
          <span className="text-[#69B99D]">HouseLinkUp</span>, your most trusted
          alien
        </h2>
        <section className="w-full xl:w-[518px] h-[550px] bg-[#fff] p-[54px] animate__slideInRight transition-all">
          {data?.length > 0
            ? data?.map((item: PropertyInterface, index: any) => {
                return (
                  <div
                    className={`${index === dataIndex ? 'block' : 'hidden'}`}
                  >
                    <Card
                      key={index}
                      image={item?.image}
                      location={item?.location}
                      price={item?.price}
                      handleNext={handleNext}
                    />
                  </div>
                );
              })
            : null}
        </section>
      </section>
    </main>
  );
};

export default PropertyHero;

type Properties = {
  image: string;
  location: string;
  price: Number;
  handleNext: Function;
};

const Card = ({ image, location, price, handleNext }: Properties) => {
  return (
    <div className="mb-4 relative">
      <div className="flex justify-between items-center mb-[29px]">
        <div className="flex items-start gap-4">
          {' '}
          <span className="text-[#08110C] font-semibold text-[18px]">
            $ {Number(price).toLocaleString()}
          </span>{' '}
          <span>New</span>
        </div>{' '}
        <span className="bg-[#69B99D] text-[#fff] py-[2px] px-[8px] rounded-[50px]">
          FOR RENT
        </span>
      </div>
      <div className="w-full xl:w-[419px] md:w-auto h-[270px] mb-[14px]">
        <img
          src={image}
          alt="house image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-[30px] flex justify-between items-center">
        <p className="w-[219px] text-[1rem] text-[#27563A]">{location}</p>{' '}
        <img src={Like} alt="like" width={24} height={24} />
      </div>
      <div className="w-[175px] m-auto">
        <button className="  bg-[#69B99D] text-[#fff] py-[11px] px-[25px] rounded-[50px]">
          Browse Now
        </button>
      </div>

      <div
        className="absolute top-[40%] bottom-[50%] right-[2%] w-[28px] h-[28px] p-1 bg-[grey] rounded-full cursor-pointer"
        onClick={() => handleNext()}
      >
        <img src={GreaterThan} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
