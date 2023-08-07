import React from 'react';
import { HeroNewPlaceBg } from '../../assets/images';
import Search from '../reusableComponents/Search';

type Props = {};

const VideoAndSearch = (props: Props) => {
  return (
    <div className="px-[32px] xl:px-0 mt-[78px]">
      <div className=" w-full xl:w-[1220px] h-[320px] xl:h-[680px] m-auto">
        <video
          src="/video-2.mp4"
          loop
          controls={true}
          muted
          className="w-full h-full object-cover"
        />
        <p className="w-full xl:w-[381px] md:w-[381px] py-[34px] px-[58px] text-[36px] medium text-[#fff] bg-[#69B99D] ml-auto relative xl:mt-[-6rem] md:mt-[-6rem] xl:mr-8 md:mr-8 mt-4 ">
          Explore all <br /> your needs at a glance
        </p>
      </div>

      <Search />
    </div>
  );
};

export default VideoAndSearch;
