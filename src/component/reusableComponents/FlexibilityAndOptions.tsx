import React from 'react';
import {
  Flexibility_1,
  Flexibility_2,
  Flexibility_3,
  Flexibility_4,
} from '../../assets/images';

type Props = {};

const FlexibilityAndOptions = (props: Props) => {
  return (
    <div className="w-full px-[32px] xl:px-0 xl:w-[1220px] block xl:flex gap-[76px] m-auto">
      <section className="mt-[89px]">
        <section className="flex items-end gap-[20px] mb-[20px]">
          <div className="w-full xl:w-[250px] h-[334px]  rounded-[5px] relative">
            <img src={Flexibility_1} alt="flexibility placeholder" />
            <p className="absolute top-[10%] bottom-[80%] left-0 right-0 text-center text-[#fff] font-semibold text-[24px]">
              Flexible Leases
            </p>
          </div>
          <div className="w-full xl:w-[270px] h-[270px] rounded-[5px] relative">
            <img src={Flexibility_2} alt="flexibility placeholder" />
            <p className="absolute top-[10%] bottom-[80%] left-0 right-0 text-center text-[#fff] font-semibold text-[24px]">
              7-Day Happiness Guaranteed
            </p>
          </div>
        </section>
        <section className="flex items-start gap-[20px]">
          <div className="w-full xl:w-[212px] h-[285px]  rounded-[5px] relative">
            <img src={Flexibility_3} alt="flexibility placeholder" />
            <p className="absolute top-[10%] bottom-[80%] left-0 right-0 text-center text-[#fff] font-semibold text-[24px]">
              Monthly House Cleaning
            </p>
          </div>
          <div className="w-full xl:w-[338px] h-[356px]  rounded-[5px] relative">
            <img src={Flexibility_4} alt="flexibility placeholder" />
            <p className="absolute top-[10%] bottom-[80%] left-0 right-0 text-center text-[#fff] font-semibold text-[24px]">
              Choose Your <br /> Own Roommate
            </p>
          </div>
        </section>
      </section>
      <section className="mt-[12px] w-full xl:w-[637px]">
        <div className="xl:w-[189px] w-[100px] h-[100px] xl:h-[189px] rounded-full bg-[#8CFBA4] ml-auto mb-[55px]"></div>
        <article className="xl:px-[48px]">
          <h3 className="xl:text-[44px] text-[32px] text-[#18191F] font-semibold">
            Flexibility and options to suit your lifestyle.
          </h3>
          <p className="xl:text-[22px] text-[18px] mb-[40px]">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <button className="w-[185px] py-4 bg-[#8CFBA4] rounded-lg text-[18px] text-[#fff] font-semibold">
            Contact Us
          </button>
        </article>
      </section>
    </div>
  );
};

export default FlexibilityAndOptions;
