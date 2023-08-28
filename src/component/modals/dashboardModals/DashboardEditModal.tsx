import React, { useState } from 'react';
import { GrStatusGood } from 'react-icons/gr';
import { ImageInterface } from '../../dashboard/users/types';

interface UserInterface {
  active: boolean;
  blocked: boolean;
  createdAt?: string;
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

const DashboardEditModal = ({ open, setOpen, data }: Props) => {
  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState('');
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);

  const handleCheckbox1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox1Checked((prev) => !prev);
    setCheckbox2Checked(false);
    setUser(e.target.value);
    // console.log({ user });
  };

  const handleCheckbox2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox1Checked(false);
    setCheckbox2Checked((prev) => !prev);
    setAdmin(e.target.value);
    console.log({ admin });
  };

  const handleModalClosed = () => {
    setOpen((prev: boolean) => !prev);
    setCheckbox1Checked(false);
    setCheckbox2Checked(false);
  };
  return (
    <>
      {open ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[40rem] h-[750px] px-6 rounded-lg">
            <p
              onClick={handleModalClosed}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>

            <div className="text-[#222] text-center mt-6 text-[1.2rem]">
              <span className="font-bold">Edit User</span> :{' '}
              <span className="font-medium">{data?._id}</span>
            </div>
            <section className="flex flex-col justify-center flex-wrap  items-center my-8">
              <div className="flex items-center gap-2">
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
              </div>

              <div className=" my-2 text-[1.2rem]">
                <span className="text-[#222] font-[470]">Full Name :</span>
                <span className="text-[#222] font-[600]">
                  {' '}
                  {data?.full_name}{' '}
                </span>
              </div>

              <div className=" mb-6 text-[1.2rem]">
                <span className="text-[#222] font-[470]">Email :</span>
                <span className="text-[#222] font-[600]"> {data?.email} </span>
              </div>

              <div className="flex items-center gap-3">
                <h4 className="text-[#222] font-medium">Status :</h4>
                <p className="text-[#222] font-bold">
                  {' '}
                  {data?.active
                    ? 'Active'
                    : data?.blocked
                    ? 'Blocked'
                    : data?.de_activated
                    ? 'DeActivated'
                    : null}
                </p>
              </div>

              <div className="text-[#222]">
                <span className="font-medium">Position : </span>
                <span className="font-bold">{data?.role}</span>
              </div>

              <div className="my-4">
                <h4 className="text-[#222] font-bold text-[1.2rem] uppercase border-b  border-[#69B99D] mb-2">
                  Promote / Demote
                </h4>
                <div>
                  <div className="flex items-center gap-3">
                    {data?.role === 'User' ? (
                      <GrStatusGood className="" />
                    ) : (
                      <input
                        type="checkbox"
                        name="user"
                        id="user"
                        checked={checkbox1Checked}
                        disabled={data?.role === 'User'}
                        value="User"
                        onChange={handleCheckbox1Change}
                      />
                    )}

                    <label htmlFor="user" className="text-[#222]">
                      User
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    {data?.role === 'Admin' ? (
                      <GrStatusGood />
                    ) : (
                      <input
                        type="checkbox"
                        name="admin"
                        id="admin"
                        checked={checkbox2Checked}
                        value="Admin"
                        onChange={handleCheckbox2Change}
                      />
                    )}

                    <label htmlFor="admin" className="text-[#222]">
                      Admin
                    </label>
                  </div>
                </div>
              </div>

              <div>
                {checkbox1Checked ? (
                  <button
                    type="button"
                    className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                  >
                    Demote User
                  </button>
                ) : null}
              </div>

              <div>
                {checkbox2Checked ? (
                  <button
                    type="button"
                    className=" bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                  >
                    Promote User
                  </button>
                ) : null}
              </div>

              <div className="text-[#69B99D] mt-8 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  disabled={data?.active}
                  className={` ${
                    data?.active ? 'text-[#909090]' : ''
                  } border rounded-lg py-2 w-[8rem]  font-bold`}
                >
                  Activate
                </button>
                <button
                  type="button"
                  disabled={data?.blocked}
                  className={`${
                    data?.blocked ? 'text-[#909090]' : ''
                  }  border rounded-lg py-2 w-[8rem]  font-bold`}
                >
                  Block
                </button>
                <button
                  type="button"
                  disabled={data?.de_activated}
                  className={`${
                    data?.de_activated ? 'text-[#909090]' : ''
                  }  border rounded-lg py-2 w-[8rem] font-bold`}
                >
                  De Activate
                </button>
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default DashboardEditModal;
