import React from 'react';

type Props = {};

const FlexibilityAndOptions = (props: Props) => {
  return (
    <div className="w-full px-[32px] xl:px-0 xl:w-[1220px] block xl:flex gap-[76px] m-auto">
      <section className="mt-[89px]">
        <section className="flex items-end gap-[20px] mb-[20px]">
          <div className="w-full xl:w-[250px] h-[334px] bg-[red] rounded-[5px]"></div>
          <div className="w-full xl:w-[270px] h-[270px] bg-[green] rounded-[5px]"></div>
        </section>
        <section className="flex items-start gap-[20px]">
          <div className="w-full xl:w-[212px] h-[285px] bg-[yellow] rounded-[5px]"></div>
          <div className="w-full xl:w-[338px] h-[356px] bg-[#8a2eff] rounded-[5px]"></div>
        </section>
      </section>
      <section className="mt-[12px] w-full xl:w-[637px]">
        <div className="xl:w-[189px] w-[140px] h-[140px] xl:h-[189px] rounded-full bg-[#8CFBA4] ml-auto mb-[55px]"></div>
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
