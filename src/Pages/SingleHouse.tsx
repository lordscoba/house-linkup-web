import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  FindHouseArray,
  FindHouseNearYouInterface,
} from '../component/Property/types';
import { findHouseNearYouValues } from '../component/Property/data';
import { ArrowRightUp } from '../assets/icons';
import Search from '../component/reusableComponents/Search';
import BookingCard from '../component/reusableComponents/BookingCard';

type Props = {};

const SingleHouse = (props: Props) => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const _id = pathname.split('/')[2];

  const [houseData, setHouseData] = useState<FindHouseArray>([]);
  const [data, setData] = useState<FindHouseNearYouInterface>();
  const containerRef = useRef(null) as any;

  useEffect(() => {
    setHouseData(findHouseNearYouValues);
  }, []);

  useEffect(() => {
    const dd = findHouseNearYouValues?.find(
      (item: FindHouseNearYouInterface) => item?._id === `${_id}`
    );
    setData(dd);
  }, [houseData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [_id]);

  return (
    <main className="overflow-x-hidden  " ref={containerRef}>
      <FirstSection
        NumOfBathRooms={Number(data?.NumOfBathRooms)}
        NumOfBedRooms={Number(data?.NumOfBedRooms)}
        SquareFt={Number(data?.SquareFt)}
        image={data?.image}
        kitchenImage={data?.kitchenImage}
        parlourImage={data?.parlourImage}
        street={data?.street}
        active={data?.active}
      />

      <SecondSection amount={Number(data?.rentAmount)} />
      <Search />
    </main>
  );
};

export default SingleHouse;

interface FirstSectionInterface {
  street: string | undefined;
  image: string | undefined;
  parlourImage: string | undefined;
  kitchenImage: string | undefined;
  NumOfBedRooms: Number;
  NumOfBathRooms: Number;
  SquareFt: Number;
  active: Boolean | undefined;
}

const FirstSection = ({
  NumOfBathRooms,
  NumOfBedRooms,
  SquareFt,
  image,
  kitchenImage,
  parlourImage,
  street,
  active,
}: FirstSectionInterface) => {
  const navigate = useNavigate();

  return (
    <section className="pt-[66px] bg-[#D9D9D9] pb-[44px]">
      <section className=" px-[32px]  xl:px-0 w-full xl:w-[1220px] m-auto">
        <div
          className="flex items-center xl:gap-2 gap-1 cursor-pointer xl:pl-12"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="xl:w-6 xl:h-6 w-4 h-4 text-[#69B99D] xl:mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <h2 className="text-[#69B99D] xl:text-[24px] text-[18px] font-[600]">
            {' '}
            Back to Property
          </h2>
        </div>
        <h2 className="xl:pl-12 text-[40px] text-[#000] font-[500] mb-[15px]">
          {street}
        </h2>

        <section className="block xl:flex items-center gap-[28px] mb-[19px]">
          <div className="w-full xl:w-[848px] h-[535px] mb-[28px]">
            <img
              src={image}
              alt="house"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={parlourImage}
              alt="parlor"
              className="block w-full xl:w-[417px] h-[260px] object-cover mb-[15px]"
            />
            <div className="relative">
              <img
                src={kitchenImage}
                alt="kitchen"
                className="block w-full xl:w-[417px] h-[260px] object-cover rounded-lg"
              />
              <div className="absolute bottom-[30%] top-[60%] right-[3%] ">
                <button
                  type="button"
                  className="w-[175px] bg-[#69B99D] rounded-[50px]  py-[11px] text-[14px] font-[600] text-[#fff] flex items-center justify-center"
                >
                  View more <img src={ArrowRightUp} alt="arrow up" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className=" flex items-center justify-center gap-[33px] w-full xl:w-[605px] md:w-[605px] py-[40px]  xl:px-[70px] md:px-[70px]  bg-[rgba(255,255,255,0.65)] font-[400]">
          <div>
            <p className="text-[#1F2744] text-[15px]">Bedroom</p>
            <p className="text-[#A6A6A6] text-[15px]">
              {Number(NumOfBedRooms)}bed(s)
            </p>
          </div>
          <div>
            <p className="text-[#1F2744] text-[15px]">Bathroom</p>
            <p className="text-[#A6A6A6] text-[15px]">
              {Number(NumOfBathRooms)}bathroom(s)
            </p>
          </div>
          <div>
            <p className="text-[#1F2744] text-[15px]">Square area</p>
            <p className="text-[#A6A6A6] text-[15px]">
              {Number(SquareFt)} sq ft
            </p>
          </div>
          <div>
            <p className="text-[#1F2744] text-[15px]">Status</p>
            <p className="text-[#A6A6A6] text-[15px]">
              {active ? 'Active' : 'Not Active'}
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

interface SecondSectionInterface {
  amount: Number;
}

const SecondSection = ({ amount }: SecondSectionInterface) => {
  return (
    <>
      <div className=" block xl:flex gap-[39px] mb-[99px] px-[32px]  xl:px-0 w-full xl:w-[1220px] m-auto">
        <article className="w-full xl:w-[842px] pt-[112px]">
          <h2 className="mb-[29px] text-[40px] text-[#000] font-[600]">
            About this home
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. In aliquam dolor nisl et.
            Purus leo senectus in aenean. Nec nibh gravida enim maecenas etiam
            nec quam. Blandit dolor sit gravida nisl neque malesuada sed. Et
            mauris proin proin tincidunt dignissim sed elementum velit nullam.
            Ante vel habitant hendrerit gravida elementum massa nec consequat
            amet. Quam vitae suscipit praesent porta nec quis. Iaculis et ut
            etiam quis pharetra tellus. Id adipiscing dui mauris feugiat. Id eu
            pellentesque bibendum dolor. Odio ornare commodo id erat. Sodales
            tellus sed vitae urna. Mattis condimentum sem semper nisi dignissim
            mattis.
          </p>
        </article>

        <div className="  bg-[grey] xl:mt-[-10rem] mt-8">
          <BookingCard amount={amount} />
        </div>
      </div>
    </>
  );
};
