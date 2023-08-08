import React from 'react';
import { AboutGroupImage, AboutHeroImage } from '../../assets/icons';

type Props = {};

const AboutHero = (props: Props) => {
  return (
    <div className="bg-[#C9CDCE] xl:px-[72px] px-[32px] ">
      <section className="  pt-[72px] block xl:flex items-center gap-[54px] pb-[72px] ">
        <section className=" mb-[54px] xl:mb-0">
          <div className="flex items-center gap-[1rem] mb-[12px]">
            <p className="bg-[#69B99D] h-[2px] w-[60px]"></p>
            <h2 className="text-[#69B99D]">WHO WE ARE</h2>
          </div>
          <article className="w-full xl:w-[604px]">
            <h2 className="text-[#08110C] text-[48px] font-semibold mb-[10px]">
              Discover Sustainable Luxury Living with{' '}
              <span className="text-[#69B99D]">HouseLinkUp</span> Realty.
            </h2>
            <p className="text-[24px] text-[#313131]">
              HouseLinkUp is a real estate agency specialising in rental homes
              and sustainable living. We offer a range of pocket-friendly
              properties, including energy-efficient homes, homes built with
              long-lasting materials, and homes equipped with sustainable
              technologies such as solar panels and smart-houses.
            </p>
          </article>
        </section>

        <section className="w-full xl:w-[638px] xl:mb-[73px]">
          <img
            src={AboutHeroImage}
            alt="hero image"
            className="w-full h-full object-cover"
          />
        </section>
      </section>
      {/* Second section */}
      <section className=" block xl:flex items-center gap-[54px] mb-[38px] xl:mb-[192px] ">
        <section>
          <div className="w-full xl:w-[604px] mb-6 xl:mb-0">
            <img
              src={AboutGroupImage}
              alt="about group image"
              className="w-full h-full object-cover xl:mb-[-2rem] "
            />
          </div>
        </section>
        <section className="py-6">
          <div className="flex items-center gap-[1rem] xl:mb-[12px]">
            <p className="bg-[#69B99D] h-[2px] w-[60px]"></p>
            <h2 className="text-[#69B99D]">WHO WE ARE</h2>
          </div>
          <article className="w-full xl:w-[604px] xl:mb-[-14rem]">
            <h2 className="text-[#08110C] text-[48px] font-semibold mb-[10px]">
              Building a Better Future with{' '}
              <span className="text-[#69B99D]">HouseLinkUp</span> Homes.
            </h2>
            <p className="text-[24px] text-[#313131]">
              The agency's mission is to provide clients with a selection of
              properties that meet high environmental standards, while also
              providing a comfortable and luxurious lifestyle.
            </p>
          </article>
        </section>
      </section>
    </div>
  );
};

export default AboutHero;
