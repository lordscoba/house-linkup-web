import React from 'react';

type Props = {};

const DashboardSearch = (props: Props) => {
  return (
    <div>
      <SearchNav />
    </div>
  );
};

export default DashboardSearch;

const SearchNav = () => {
  return (
    <div className="lg:mx-[52px] lg:px-[60px] px-2 py-2 flex flex-wrap items-center gap-[15px] border mt-[30px]">
      <div className="flex  flex-wrap gap-[15px]">
        <select className="border w-[155px]">
          <option value="" disabled selected hidden>
            Select a province
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="border w-[155px]">
          <option value="" disabled selected hidden>
            Select Housing
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="border w-[155px]">
          <option value="" disabled selected hidden>
            Select Price
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="border w-[155px]">
          <option value="" disabled selected hidden>
            Select Sq M
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="border w-[155px]">
          <option value="" disabled selected hidden>
            Num Of Rooms
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="border flex justify-between">
        <input type="text" name="" id="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6  text-[grey]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};
