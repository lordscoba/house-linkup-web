import React from 'react';
import { ImageInterface } from '../../dashboard/users/types';
interface UserInterface {
  active: boolean;
  blocked: boolean;
  createdAt?: string | any;
  de_activated: boolean;
  email: string;
  full_name: string;
  image: Array<ImageInterface>;
  password?: string;
  updatedAt: string;
  isAdmin?: boolean;
  role: string;
  _id: string;
}

type Props = {
  open: boolean;
  setOpen: (a: any) => void;
  data: UserInterface;
};

const ViewDetails = ({ open, setOpen, data }: Props) => {
  // const joinedDate = new Date(createdAt).toDateString();

  return (
    <>
      {open ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[40rem] h-[550px] px-6 rounded-lg">
            <p
              //   onClick={handleModalClosed}
              onClick={() => setOpen(false)}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>

            <article className="mt-8 flex justify-center flex-col items-center">
              <h2 className="text-[#222] uppercase font-bold mb-4">
                {data?.full_name} Details
              </h2>

              {data?.image?.length > 0 ? (
                <img
                  src={data?.image?.[0]?.url}
                  alt=""
                  className="w-[120px] h-[120px] object-cover rounded-full"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[80px] h-[80px] border-2 rounded-full p-2 fill-[grey]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              )}
              <div className="flex items-center gap-8 text-[#222] mt-4">
                <h4 className="uppercase font-[500] text-[grey]">
                  Joined Date :{' '}
                </h4>
                <p className="font-[600] text-[1.1rem]">
                  {new Date(data?.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-8 text-[#222] mt-2">
                <h4 className="uppercase font-[500] text-[grey]">
                  Full Name :{' '}
                </h4>
                <p className="font-[600] text-[1.1rem]">{data?.full_name}</p>
              </div>
              <div className="flex items-center gap-8 text-[#222] mt-2">
                <h4 className="uppercase font-[500] text-[grey]">Email : </h4>
                <p className="font-[600] text-[1.1rem]">{data?.email}</p>
              </div>
              <div className="flex items-center gap-8 text-[#222] mt-2">
                <h4 className="uppercase font-[500] text-[grey]">
                  Position :{' '}
                </h4>
                <p className="font-[600] text-[1.1rem]">{data?.role}</p>
              </div>

              <div className="flex items-center gap-8 text-[#222] mt-2">
                <h4 className="uppercase font-[500] text-[grey]">Status :</h4>
                <p className="font-[600] text-[1.1rem]">
                  {data?.active ? <span className="">Active</span> : null}
                  {data?.blocked ? <span className="">Blocked</span> : null}
                  {data?.de_activated ? (
                    <span className="">Deactivated</span>
                  ) : null}
                </p>
              </div>
            </article>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ViewDetails;
