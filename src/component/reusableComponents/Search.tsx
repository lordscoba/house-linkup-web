import React from 'react';
import { HeroNewPlaceBg } from '../../assets/images';

type Props = {};

const Search = (props: Props) => {
  return (
    <>
      <div className="xl:mt-[189px] mt-[3rem] xl:w-[1220px] h-[600px] xl:h-auto w-full m-auto relative">
        <img
          src={HeroNewPlaceBg}
          alt="bg image"
          className="w-full h-full object-cover"
        />
        <div className="block xl:flex  justify-between items-center absolute xl:top-[50%] xl:bottom-[50%] top-[20%] bottom-[20%] right-0 left-0 xl:pl-[62px] xl:pr-[24px] px-4">
          <p className="text-center xl:text-start text-[39px] text-[#fff] font-bold">
            Ready to find your <br /> New Place?
          </p>
          <div className="w-full xl:w-[631px] py-[6px] px-[11px] bg-[#fff] flex justify-between rounded-[15px]">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full border-none outline-none focus:border-none focus:outline-none"
            />
            <button className="xl:py-[18px] py-[12px] px-[24px] xl:px-[48px] bg-[#69B99D] text-[#fff] rounded-[10px]">
              send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
