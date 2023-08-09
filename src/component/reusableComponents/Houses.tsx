import { useNavigate } from 'react-router-dom';
import { Clock, Dollar, Like } from '../../assets/icons';
import { FindHouseNearYouInterface } from '../Property/types';
// import { FindHouseInterface } from '../Property/ExploreHouseNearYou';

const Houses = ({
  NumOfBathRooms,
  NumOfBedRooms,
  SquareFt,
  Year,
  image,
  location,
  price,
  _id,
}: FindHouseNearYouInterface) => {
  const navigate = useNavigate();
  return (
    <div className="w-full xl:w-[32%] border-t pt-3 pb-5">
      <div className="flex items-center justify-between mb-[19px]">
        <h2 className="flex items-center gap-2 text-[18px] font-bold">
          <img src={Dollar} alt="dollar icon" className="w-[16px] h-[16px] " />{' '}
          {Number(price).toLocaleString()}
        </h2>
        <span
          className="bg-[#69B99D] text-[#fff] py-[2px] px-[12px] rounded-[50px] cursor-pointer"
          onClick={() => navigate(`/property/${_id}`)}
        >
          FOR SALE
        </span>
      </div>
      <div className=" flex justify-between mb-[28px]">
        <div className=" flex gap-1 text-[14px]">
          <span>{Number(NumOfBedRooms)} beds</span>{' '}
          <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
          <span>{Number(NumOfBathRooms)} baths</span>{' '}
          <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
          <span>{Number(SquareFt)} sqft</span>{' '}
          <p className="w-[3px] h-[3px] rounded-full bg-[#000] mt-[12px]"></p>
          <span>Eco-friendly</span>{' '}
        </div>

        <div className="flex items-center gap-1 text-[14px] ">
          <img src={Clock} alt="clock icon" className="w-[.8rem] h-[.8rem] " />
          <span>{Number(Year)} year(s) ago</span>
        </div>
      </div>
      <div
        className="mb-[20px] cursor-pointer"
        onClick={() => navigate(`/property/${_id}`)}
      >
        <img src={image} alt="house picture" className="object-cover" />
      </div>
      <div className="flex justify-between items-center">
        <p className="w-[60%] text-[1rem] text-[#27563A]">{location}</p>
        <img src={Like} alt="like icon" />
      </div>
    </div>
  );
};

export default Houses;
