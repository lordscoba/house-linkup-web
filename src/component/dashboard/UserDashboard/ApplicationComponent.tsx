import React, { useEffect, useState } from 'react';
import UploadForm from '../../reusableComponents/UploadForm';
import BookingCard from '../../reusableComponents/BookingCard';
import { User_Dashboard_img_1 } from '../../../assets/images';
// import { UserDashboardDataArray, UserDashboardDataInterface } from './types';
import { Dollar, Like } from '../../../assets/icons';
import Rating from '../../Rating/Rating';
import { HouseUploadInterface, HouseUploadType } from './types';

type Props = {};

const ApplicationComponent = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<HouseUploadType>([]);

  return (
    <div>
      <div className="flex xl:justify-between justify-center  flex-wrap my-[21px]">
        <GetUploadedHouse data={data} />
      </div>

      <div className="mt-[1rem]">
        <article className="text-center ">
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

        <UploadForm setData={setData} />
      </div>
    </div>
  );
};

export default ApplicationComponent;

interface UploadedPropertyInterface {
  // show: boolean;
  data: HouseUploadType;
}

const GetUploadedHouse = ({ data }: UploadedPropertyInterface) => {
  return (
    <>
      <div className="mb-2 m-auto  w-full max-w-[754px]   ">
        <section>
          {data?.length > 0 ? (
            data?.map((item: HouseUploadInterface, index: any) => {
              const url = URL.createObjectURL(item?.image);
              return (
                <div
                  key={index}
                  className="my-[38px] bg-[#fff] shadow-2xl  py-[20px]  px-2 rounded-xl"
                >
                  <section className=" flex gap-2 flex-wrap   ">
                    <div className="w-full lg:w-[408px] h-[124px]">
                      <img
                        src={url}
                        alt={item?.address}
                        className="w-full object-cover h-full"
                      />
                    </div>

                    <section className="w-full lg:w-[40%] h-[324px] relative">
                      <h2 className="text-[#222] capitalize font-bold text-center lg:text-start mb-2 text-[18px]">
                        {item?.house_type}
                      </h2>
                      <div className=" flex-1 flex item-center gap-4 justify-center lg:justify-start ">
                        <div className="">
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
                        </div>
                        <div>
                          <p className="capitalize">
                            {item?.state}, {item?.city}{' '}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center lg:justify-start gap-3 flex-wrap my-2 italic text-[14px]">
                        <span>K = {item?.totalNum_ofKitchen}</span>
                        <span>T = {item?.totalNum_ofToilet}</span>
                        <span>P = {item?.totalNum_ofParlor}</span>
                        <span>R = {item?.totalNum_ofRooms}</span>
                        <span>BTh = {item?.totalNum_ofBathroom}</span>
                      </div>
                      <div className=" mt-[1.5rem]">
                        <h2 className="text-center font-bold text-[18px] tracking-wider">
                          Poster
                        </h2>
                        <p>
                          Name : <span>{item?.full_name}</span>
                        </p>
                        <p>
                          Email : <span>{item?.email}</span>
                        </p>
                        <p>
                          Address : <span>{item?.address}</span>
                        </p>
                      </div>
                      <div className="flex justify-between mt-3 lg:absolute bottom-0 right-0 left-0">
                        <div>
                          <h4 className="font-bold">Status : {item?.status}</h4>
                        </div>
                        <div>
                          <p className="font-bold">
                            <span>&#36;</span>{' '}
                            <span>{Number(item?.price).toLocaleString()}</span>
                          </p>
                        </div>
                      </div>
                    </section>
                  </section>
                  <div className="flex gap-3 flex-wrap mt-2">
                    <span>Kichen = K</span>
                    <span>Toilet = T</span>
                    <span>Parlor = P</span>
                    <span>Room = R</span>
                    <span>BathRoom = BTh</span>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <section className="h-[8rem] mb-2  w-full max-w-[754px] border flex items-center justify-center m-auto ">
                <p className="text-[1rem] lg:text-[18px] font-semibold">
                  No House Uploaded Yet
                </p>
              </section>
            </>
          )}
        </section>
      </div>
    </>
  );
};
