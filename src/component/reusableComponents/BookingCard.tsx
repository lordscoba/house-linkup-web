import React, { useState } from 'react';

type Props = {
  amount: Number;
};

const BookingCard = ({ amount }: Props) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-[#fff] px-[40px] pt-[52px] pb-[43px] h-full border border-[rgba(151,151,151,0.83)] rounded-lg">
      <p className="text-[#313131] text-[15px] font-[500]">Rent price</p>
      <h2 className="text-[#69B99D] text-[36px] font-[600] mb-[21px]">
        #{Number(amount).toLocaleString()}
        <sub className="text-[#313131] text-[15px]">/year</sub>
      </h2>{' '}
      <div className="mb-[28px]">
        <button className="bg-[#69B99D] py-[8px] rounded-[4px] font-[700] text-[#fff] uppercase w-full">
          Apply now
        </button>
      </div>
      <hr className="mb-[15px]" />
      <h5 className="text-[20px] text-[#313131] font-[500] mb-[15px]">
        Request a home tour
      </h5>
      <div className="flex items-center gap-2 mb-[15px]">
        <p
          onClick={() => setIndex(0)}
          className={`${
            index === 0 ? 'bg-[#69B99D] text-[#fff]' : 'bg-transparent'
          } w-[154px] py-[15px] border text-center text-[14px] text-[#000] cursor-pointer`}
        >
          In Person
        </p>
        <p
          onClick={() => setIndex(1)}
          className={`${
            index === 1 ? 'bg-[#69B99D] text-[#fff]' : 'bg-transparent'
          } w-[154px] py-[15px] border text-center text-[14px] cursor-pointer`}
        >
          Virtual{' '}
        </p>
      </div>
      <div className="mb-[29px]">
        <input type="date" className="border w-full py-2 px-2" />
      </div>
      <div className="mb-[19px]">
        <button className="bg-[#69B99D] py-[8px] rounded-[4px] font-[700] text-[#fff] uppercase w-full">
          request a tour
        </button>
      </div>
      <p className="text-[#979797] text-[13px] font-[500]">
        It`s free, with no obligation cancel anytime
      </p>
    </div>
  );
};

export default BookingCard;
