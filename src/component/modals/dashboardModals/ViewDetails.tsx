import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ImageInterface } from '../../dashboard/AdminDashboard/users/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  activateUserAction,
  blockuserAction,
  deActivateuserAction,
  demoteUserAction,
  promoteUserAction,
} from '../../../redux/actions/dashboardactions/dashboard.actions';
import { EDIT_USER_RESET } from '../../../redux/constants/dashboardconstants/dashboard.constants';
import { GrStatusGood } from 'react-icons/gr';
import { StoreReducerTypes } from '../../../redux/store';
import { userDetailsAction } from '../../../redux/actions/auth.actions';
// import { ImageInterface } from '../../dashboard/users/types';
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
  username?: string;
  role: string;
  _id: string;
}

interface IdInterface {
  id: string;
}

type Props = {
  open: boolean;
  setOpen: (a: any) => void;
  userId: string;
  userName: string;
  userEmail: string;
  user_number: string;
  user_location: string;
  user_fullName: string;
  isActive: boolean;
  isDeActivate: boolean;
  isBlock: boolean;
  role: string;
  imageUrl: Array<ImageInterface>;
  // data: UserInterface;
};

const ViewDetails = ({
  open,
  setOpen,
  userEmail,
  userId,
  userName,
  user_fullName,
  user_location,
  user_number,
  isActive,
  isBlock,
  isDeActivate,
  role,
  imageUrl,
}: Props) => {
  // const joinedDate = new Date(createdAt).toDateString();
  const dispatch = useDispatch();

  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState('');
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);

  const [isactive, setIsActive] = useState<boolean>(isActive || false);
  const [isDeActivated, setIsDeActivated] = useState<boolean>(
    isDeActivate || false
  );
  const [isBlocked, setIsBlocked] = useState<boolean>(isBlock || false);

  const userDetails = useSelector(
    (state: StoreReducerTypes) => state.userDetails
  );

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
    setIsActive(activeState);
  }, [activate]);

  useEffect(() => {
    const DeActivateState = deActivate?.serverResponse?.user?.de_activated;
    setIsDeActivated(DeActivateState);
  }, [deActivate]);

  useEffect(() => {
    const blockState = block?.serverResponse?.user?.blocked;
    setIsBlocked(blockState);
  }, [block]);

  useEffect(() => {
    setIsActive(isactive);
    setIsDeActivated(isDeActivate);
    setIsBlocked(isBlock);
  }, [isActive, isDeActivate, isBlock]);

  useEffect(() => {
    setIsActive(isActive);
    setIsDeActivated(isDeActivate);
    setIsBlocked(isBlock);
  }, []);

  useLayoutEffect(() => {
    dispatch(userDetailsAction({ _id: userId }) as any);
  }, [userId]);

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
              <span className="font-medium">{userId}</span>
            </div>

            <section className="flex flex-col justify-center flex-wrap  items-center my-8">
              <div className="flex items-center gap-2">
                {imageUrl?.length > 0 ? (
                  <img
                    src={
                      imageUrl[0]?.url
                        ? imageUrl[0]?.url
                        : userDetails?.serverResponse?.image?.[0]?.url
                    }
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
                  {user_fullName}{' '}
                </span>
              </div>

              <div className=" mb-6 text-[1.2rem]">
                <span className="text-[#222] font-[470]">Email :</span>
                <span className="text-[#222] font-[600]"> {userEmail} </span>
              </div>
              <div className=" mb-6 text-[1.2rem]">
                <span className="text-[#222] font-[470]">Username :</span>
                <span className="text-[#222] font-[600] capitalize">
                  {' '}
                  {userName || 'No username'}{' '}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <h4 className="text-[#222] font-medium">Status :</h4>
                <p className="text-[#222] font-bold">
                  {' '}
                  {isactive
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
                <span className="font-bold">{role}</span>
              </div>

              <div className="my-4">
                <h4 className="text-[#222] font-bold text-[1.2rem] uppercase border-b  border-[#69B99D] mb-2">
                  Promote / Demote
                </h4>
                <div>
                  <div className="flex items-center gap-3">
                    {role === 'User' ? (
                      <GrStatusGood className="" />
                    ) : (
                      <input
                        type="checkbox"
                        name="user"
                        id="user"
                        checked={checkbox1Checked}
                        disabled={role === 'User'}
                        value="User"
                        onChange={handleCheckbox1Change}
                      />
                    )}

                    <label htmlFor="user" className="text-[#222]">
                      User
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    {role === 'Admin' ? (
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
                    onClick={() => demoteUserFunc({ id: userId })}
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
                    onClick={() => promoteUserFunc({ id: userId })}
                    className=" bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                  >
                    Promote User
                  </button>
                ) : null}
              </div>

              <div className="text-[#69B99D] mt-8 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={() => activateUserFunc({ id: userId })}
                  disabled={isActive}
                  className={` ${
                    isActive ? 'text-[#909090]' : ''
                  } border rounded-lg py-2 w-[8rem]  font-bold`}
                >
                  Activate
                </button>
                <button
                  type="button"
                  onClick={() => blockUserFunc({ id: userId })}
                  disabled={isBlocked}
                  className={`${
                    isBlocked ? 'text-[#909090]' : ''
                  }  border rounded-lg py-2 w-[8rem]  font-bold`}
                >
                  Block
                </button>
                <button
                  type="button"
                  onClick={() => deActivateUserFunc({ id: userId })}
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

export default ViewDetails;

// const ViewDetails = ({ open, setOpen, data }: Props) => {
//   // const joinedDate = new Date(createdAt).toDateString();
//   useEffect(() => {
//     console.log({ dd: data });
//   }, []);
//   console.log({ dd: data });

//   return (
//     <>
//       {open ? (
//         <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
//           <div className="bg-[#fff] w-full md:w-[40rem] h-[550px] px-6 rounded-lg">
//             <p
//               //   onClick={handleModalClosed}
//               onClick={() => setOpen(false)}
//               className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
//             >
//               <span className="text-[1rem] text-[#fff]">X</span>
//             </p>

//             <article className="mt-8 flex justify-center flex-col items-center">
//               <h2 className="text-[#222] uppercase font-bold mb-4">
//                 {data?.full_name} Details
//               </h2>

//               {data?.image?.length > 0 ? (
//                 <img
//                   src={data?.image?.[0]?.url}
//                   alt=""
//                   className="w-[120px] h-[120px] object-cover rounded-full"
//                 />
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   className="w-[80px] h-[80px] border-2 rounded-full p-2 fill-[grey]"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                   />
//                 </svg>
//               )}
//               <div className="flex items-center gap-8 text-[#222] mt-4">
//                 <h4 className="uppercase font-[500] text-[grey]">
//                   Joined Date :{' '}
//                 </h4>
//                 <p className="font-[600] text-[1.1rem]">
//                   {new Date(data?.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="flex items-center gap-8 text-[#222] mt-2">
//                 <h4 className="uppercase font-[500] text-[grey]">
//                   Full Name :{' '}
//                 </h4>
//                 <p className="font-[600] text-[1.1rem]">{data?.full_name}</p>
//               </div>
//               <div className="flex items-center gap-8 text-[#222] mt-2">
//                 <h4 className="uppercase font-[500] text-[grey]">Email : </h4>
//                 <p className="font-[600] text-[1.1rem]">{data?.email}</p>
//               </div>
//               <div className="flex items-center gap-8 text-[#222] mt-2">
//                 <h4 className="uppercase font-[500] text-[grey]">
//                   Position :{' '}
//                 </h4>
//                 <p className="font-[600] text-[1.1rem]">{data?.role}</p>
//               </div>

//               <div className="flex items-center gap-8 text-[#222] mt-2">
//                 <h4 className="uppercase font-[500] text-[grey]">Status :</h4>
//                 <p className="font-[600] text-[1.1rem]">
//                   {data?.active ? <span className="">Active</span> : null}
//                   {data?.blocked ? <span className="">Blocked</span> : null}
//                   {data?.de_activated ? (
//                     <span className="">Deactivated</span>
//                   ) : null}
//                 </p>
//               </div>
//             </article>
//           </div>
//         </section>
//       ) : null}
//     </>
//   );
// };
