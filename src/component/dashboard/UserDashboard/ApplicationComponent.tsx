import React, { useEffect, useState } from 'react';
import UploadForm from '../../reusableComponents/UploadForm';
import BookingCard from '../../reusableComponents/BookingCard';
import { User_Dashboard_img_1 } from '../../../assets/images';
// import { UserDashboardDataArray, UserDashboardDataInterface } from './types';
import { Dollar, Like } from '../../../assets/icons';
import Rating from '../../Rating/Rating';
import { UserDashboardDataArray, UserDashboardDataInterface } from './types';

const mockedData = [
  {
    address: '1995 Broadway, New York',
    image: User_Dashboard_img_1,
    // likeIcon: Like,
    // locationIcon: '',
    interior: [
      'Wifi',
      'Air conditioning',
      'Kitchen',
      'Heating',
      'Smokers',
      'Parking',
      'Balcony',
      'Animal friendly',
    ],
    rating: 4.5,
    reviews: 7,
    title: ' Brownstone Lodge',
    rentPermonth: 4200,
  },
];

type Props = {};

const ApplicationComponent = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<UserDashboardDataArray>([]);

  useEffect(() => {
    setData(mockedData);
  }, []);

  return (
    <div>
      <div className="flex xl:justify-between justify-center  flex-wrap mt-[21px]">
        <div>
          <GetUploadedHouse data={data} />
        </div>
        <div>
          <BookingCard amount={20000} />
        </div>
      </div>

      <div>
        <article className="text-center lg:text-start">
          <h2 className="font-bold text-[#000] text-[22px]">
            Personal Details
          </h2>
          <p className="text-[#737373] font-medium">
            Please fill-in your personal details
          </p>
          <p className="text-[#737373] font-medium">
            NOTE: Your peronal information is private
          </p>
        </article>
        <div className=" flex justify-start flex-1">
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default ApplicationComponent;

interface UploadedPropertyInterface {
  // show: boolean;
  data: UserDashboardDataArray;
}

const GetUploadedHouse = ({ data }: UploadedPropertyInterface) => {
  return (
    <>
      <div className="mb-2 border w-full max-w-[754px] xl:h-[261px] ">
        <section>
          {data?.length > 0
            ? data?.map((item: UserDashboardDataInterface, index: any) => {
                return (
                  <div
                    key={index}
                    className="my-[38px] bg-[#fff] shadow-2xl rounded-xl py-[30px] px-[32px] flex flex-wrap justify-center  gap-[21px]"
                  >
                    <div>
                      <img
                        src={item?.image}
                        alt={item?.address}
                        className="w-full object-cover"
                      />
                    </div>

                    <section className="flex-1">
                      <div className=" flex  justify-between">
                        <div>
                          <h4>{item?.title}</h4>
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="16"
                              viewBox="0 0 12 16"
                              fill="none"
                            >
                              <path
                                d="M5.99998 0C2.69154 0 0 2.69723 0 6.01258C0 11.3438 5.39888 15.5396 5.62874 15.7157L6.00002 16L6.37106 15.7157C6.60092 15.5396 12 11.3438 12 6.01258C12 2.69719 9.30846 0 5.99998 0ZM5.99954 14.4343C4.81703 13.4145 1.22249 9.98674 1.22249 6.01258C1.22249 3.37267 3.36536 1.22505 5.99998 1.22505C8.63413 1.22505 10.7775 3.37271 10.7775 6.01258C10.7775 9.97823 7.18154 13.4129 5.99954 14.4343Z"
                                fill="#333333"
                              />
                              <path
                                d="M6.10578 9.00037C4.46435 9.00037 3.12891 7.66509 3.12891 6.02375C3.12891 4.38232 4.46431 3.04688 6.10578 3.04688C7.74721 3.04688 9.08261 4.38228 9.08261 6.02375C9.08261 7.66509 7.74721 9.00037 6.10578 9.00037ZM6.10578 4.02315C5.00264 4.02315 4.10514 4.92065 4.10514 6.02379C4.10514 7.12681 5.00264 8.02418 6.10578 8.02418C7.20888 8.02418 8.10638 7.12681 8.10638 6.02379C8.10638 4.92061 7.20892 4.02315 6.10578 4.02315Z"
                                fill="#333333"
                              />
                            </svg>
                            <p>{item?.address}</p>
                          </div>
                        </div>
                        <div>
                          <img src={Like} alt="like icon" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 w-[407px] mt-3">
                        {item?.interior?.map((a: any, index: any) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-1"
                            >
                              <p className="w-[4px] h-[4px] rounded-full bg-[#222]"></p>
                              <span>{a}</span>
                            </div>
                          );
                        })}
                      </div>
                      {/* Ratings */}

                      <div className="mt-6 flex justify-between">
                        <div className="flex gap-2">
                          <span>{Number(item?.rating)}</span>
                          <Rating rating={Number(item?.rating)} />
                          <span>({Number(item?.reviews)} Reviews)</span>
                        </div>
                        <div className="flex item-center">
                          <img
                            src={Dollar}
                            alt="dollar"
                            className="w-[14px] lg:w-[20px] h-[14px] lg:h-[20px] fill-[green] mt-2"
                          />
                          <p className="font-bold text-[18px] lg:text-[24px]">
                            {Number(item?.rentPermonth).toLocaleString()}{' '}
                            <sub className="text-[#333] text-[1rem] font-[400]">
                              / month
                            </sub>
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                );
              })
            : null}
        </section>
      </div>
    </>
  );
};
