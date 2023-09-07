import React, { useEffect, useState, useLayoutEffect } from 'react';
import { GrStatusGood } from 'react-icons/gr';
// import { ImageInterface } from '../../dashboard/users/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  activateUserAction,
  blockuserAction,
  deActivateuserAction,
  demoteUserAction,
  promoteUserAction,
} from '../../../redux/actions/dashboardactions/dashboard.actions';
import { EDIT_USER_RESET } from '../../../redux/constants/dashboardconstants/dashboard.constants';
import { StoreReducerTypes } from '../../../redux/store';
import { ImageInterface } from '../../dashboard/AdminDashboard/users/types';

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

interface IdInterface {
  id: string;
}

type Props = {
  open: boolean;
  setOpen: (a: any) => void;
  data: UserInterface;
};

const DashboardEditModal = ({ open, setOpen, data }: Props) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState('');
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isDeActivated, setIsDeActivated] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const activate = useSelector(
    (state: StoreReducerTypes) => state?.activateUser
  );
  const deActivate = useSelector(
    (state: StoreReducerTypes) => state?.deActivateUser
  );
  const block = useSelector((state: StoreReducerTypes) => state?.blockUser);

  const handleCheckbox1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox1Checked((prev) => !prev);
    setCheckbox2Checked(false);
    setUser(e.target.value);
  };

  const handleCheckbox2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox1Checked(false);
    setCheckbox2Checked((prev) => !prev);
    setAdmin(e.target.value);
    // console.log({ admin });
  };

  const handleModalClosed = () => {
    setOpen((prev: boolean) => !prev);
    setCheckbox1Checked(false);
    setCheckbox2Checked(false);
  };

  const activateUserFunc = ({ id }: IdInterface) => {
    dispatch(activateUserAction({ _id: id }) as any);
    dispatch({ type: EDIT_USER_RESET });
  };

  const deActivateUserFunc = ({ id }: IdInterface) => {
    dispatch(deActivateuserAction({ _id: id }) as any);
    dispatch({ type: EDIT_USER_RESET });
  };

  const blockUserFunc = ({ id }: IdInterface) => {
    dispatch(blockuserAction({ _id: id }) as any);
    dispatch({ type: EDIT_USER_RESET });
  };

  const promoteUserFunc = ({ id }: IdInterface) => {
    dispatch(promoteUserAction({ _id: id }) as any);
    dispatch({ type: EDIT_USER_RESET });
  };

  const demoteUserFunc = ({ id }: IdInterface) => {
    dispatch(demoteUserAction({ _id: id }) as any);
    dispatch({ type: EDIT_USER_RESET });
  };

  useEffect(() => {
    const activeState = activate?.serverResponse?.user?.active;
    data.active = activeState;
    // setIsActive(activeState);
  }, [activate, activate?.success]);

  useEffect(() => {
    const DeActivateState = deActivate?.serverResponse?.user?.de_activated;
    data.de_activated = DeActivateState;
    // setIsDeActivated(DeActivateState);
  }, [deActivate, deActivate?.success]);

  useEffect(() => {
    const blockState = block?.serverResponse?.user?.blocked;
    data.blocked = blockState;
    // setIsBlocked(blockState);
  }, [block, block?.success]);

  useEffect(() => {
    setIsActive(data?.active);
    setIsDeActivated(data?.de_activated);
    setIsBlocked(data?.blocked);
  }, [data?.active, data?.de_activated, data?.blocked]);

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
                  {isActive
                    ? 'Active'
                    : isBlocked
                    ? 'Blocked'
                    : isDeActivated
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
                    onClick={() => demoteUserFunc({ id: data?._id })}
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
                    onClick={() => promoteUserFunc({ id: data?._id })}
                    className=" bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                  >
                    Promote User
                  </button>
                ) : null}
              </div>

              <div className="text-[#69B99D] mt-8 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={() => activateUserFunc({ id: data?._id })}
                  disabled={isActive}
                  className={` ${
                    isActive ? 'text-[#909090]' : ''
                  } border rounded-lg py-2 w-[8rem]  font-bold`}
                >
                  Activate
                </button>
                <button
                  type="button"
                  onClick={() => blockUserFunc({ id: data?._id })}
                  disabled={isBlocked}
                  className={`${
                    isBlocked ? 'text-[#909090]' : ''
                  }  border rounded-lg py-2 w-[8rem]  font-bold`}
                >
                  Block
                </button>
                <button
                  type="button"
                  onClick={() => deActivateUserFunc({ id: data?._id })}
                  disabled={isDeActivated}
                  className={`${
                    isDeActivated ? 'text-[#909090]' : ''
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
