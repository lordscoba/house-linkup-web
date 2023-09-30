import { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { EditIcon, RedDeleteIcon } from '../../../../assets/icons';
import {
  deleteUserAction,
  getAllUsersAction,
} from '../../../../redux/actions/user.action';
import { StoreReducerTypes } from '../../../../redux/store';
import DashboardEditModal from '../../../modals/dashboardModals/DashboardEditModal';
import InfoModal from '../../../modals/dashboardModals/InfoModal';
import RegisterFormModal from '../../../modals/dashboardModals/RegisterFormModal';
import ViewDetails from '../../../modals/dashboardModals/ViewDetails';
import { ImageInterface, TableArrays, TableInterface } from './types';
import UpdateProfileModal from '../../../modals/dashboardModals/UpdateProfileModal';

interface ShoweInterface {
  show: boolean;
}

interface PaginationInterface {
  totalPages: number;
}

interface DeleteUserInterface {
  index: any;
  setList: Function;
}

interface EditUserInterface {
  index: any;
}

export interface TableDataInterface {
  image: Array<ImageInterface>;
  email: string;
  full_name: string;
  position: string;
  // startDate: string;
  active: boolean;
  blocked: boolean;
  de_activated: boolean;
  location: string;
  createdAt: string;
  _id: string;
  index: any;
  list: TableArrays;
  isAdmin?: boolean;
  role: string;
  setList: (a: any) => void;
  // deleteUserFunc: Function;
  handleOpenEditButton: (a: any) => void;
  handleViewUserButton: (a: any) => void;
  phone_number: string;
  username: string;
}

const UsersTable = ({ show }: ShoweInterface) => {
  const dispatch = useDispatch();

  const [tableList, setTableList] = useState([]);

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pages, setPages] = useState(0) as any;

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDetailsModal, setOpenDetailsModal] = useState<boolean>(false);
  const [createUserModal, setCreateUserModal] = useState<boolean>(false);

  const [singleUserDetails, setSingleUserDetails] = useState({}) as any;

  const [searchQuery, setSearchQuery] = useState<string>('');

  const allUsers = useSelector((state: StoreReducerTypes) => state?.allUsers);
  const updateProfile = useSelector(
    (state: StoreReducerTypes) => state.updateProfile
  );
  const activate = useSelector(
    (state: StoreReducerTypes) => state?.activateUser
  );
  const deActivate = useSelector(
    (state: StoreReducerTypes) => state?.deActivateUser
  );
  const block = useSelector((state: StoreReducerTypes) => state?.blockUser);

  const Pagination = ({ totalPages }: PaginationInterface) => {
    const handlePageChange = (page: number) => {
      setPageNumber(page);
      dispatch(getAllUsersAction({ pageNumber }) as any);
    };
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={` border border-[grey] mr-2 rounded-md font-semibold px-6 text-[#222]`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="mt-4 flex justify-center md:justify-end">
        {pageButtons}
      </div>
    );
  };

  const handleEditOpen = ({ index }: EditUserInterface) => {
    setOpenModal(true);
    const UserToEdit = tableList[index];
    setSingleUserDetails(UserToEdit);
  };

  const handleViewUser = ({ index }: EditUserInterface) => {
    setOpenDetailsModal(true);
    const UserToView = tableList[index];
    setSingleUserDetails(UserToView);
  };
  useEffect(() => {
    dispatch(getAllUsersAction({ pageNumber }) as any);
  }, [pageNumber]);

  useEffect(() => {
    setTableList(allUsers?.serverResponse?.Users);
    const totalPage = allUsers?.serverResponse?.totalPages;
    setPages(Number(totalPage));
  }, [
    allUsers,
    allUsers?.success,
    activate?.success,
    deActivate?.success,
    block?.success,
  ]);

  useEffect(() => {
    dispatch(getAllUsersAction({ pageNumber }) as any);
  }, [activate?.success, deActivate?.success, block?.success, updateProfile]);

  useEffect(() => {
    dispatch(getAllUsersAction({ pageNumber }) as any);
    // console.log({ t: tableList });
  }, []);

  return (
    <section>
      <h2 className="text-center font-bold md:text-[2rem] text-[1.2rem]">
        Users List
      </h2>
      <div className=" mt-2 border rounded-[50px] pl-2 w-full  max-w-[26rem] flex items-center m-auto gap-2 bg-[#fff]">
        <span className="text-2xl">
          <MdSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 py-2 pl-2 rounded-[50px] text-[#222] outline-none"
        />
      </div>
      <div className="mt-4 flex justify-end px-4  ">
        <button
          type="button"
          onClick={() => setCreateUserModal(true)}
          className="border px-8 py-2 bg-[#6726A8] text-[#fff] rounded-lg"
        >
          Create New User
        </button>
      </div>
      {/* TABLE SECTION */}
      <section className="bg-[#fff] p-[1rem] rounded-lg mt-10 overflow-x-auto overflow-y-auto md:h-auto w-full hide-scrollbar   ">
        <div className=" w-[22rem] md:w-[31rem] lg:w-[35rem]  xl:w-full">
          <table className=" w-full bg-[#fff] rounded-lg ">
            <thead className="bg-[#fff] text-[#333]">
              <tr className="">
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap text-start pl-14 ">
                  User
                </th>
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap text-start">
                  Email
                </th>
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                  Position
                </th>
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                  View Details
                </th>
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                  Status
                </th>

                {/* actions */}

                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                  edit
                </th>
                <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap  text-start">
                  delete
                </th>
              </tr>
            </thead>

            {tableList
              ?.filter((item: TableDataInterface) => {
                return searchQuery?.toLocaleLowerCase() === ''
                  ? item
                  : item?.full_name
                      ?.toLowerCase()
                      ?.includes(searchQuery?.toLowerCase());
              })
              .map((item: TableInterface, index: any) => {
                return (
                  <TableData
                    key={index}
                    active={item?.active}
                    blocked={item?.blocked}
                    de_activated={item?.de_activated}
                    email={item?.email}
                    full_name={item?.full_name}
                    image={item?.image}
                    position={item?.position}
                    createdAt={item?.createdAt}
                    location={item?.location}
                    _id={item?._id}
                    index={index}
                    list={tableList}
                    setList={setTableList}
                    // deleteUserFunc={deleteUser}
                    handleOpenEditButton={handleEditOpen}
                    handleViewUserButton={handleViewUser}
                    role={item?.role}
                    phone_number={item?.phone_number}
                    username={item?.username}
                  />
                );
              })}
          </table>
        </div>
        <Pagination totalPages={pages} />
      </section>

      <RegisterFormModal setShow={setCreateUserModal} show={createUserModal} />
    </section>
  );
};

export default UsersTable;

const TableData = ({
  active,
  blocked,
  de_activated,
  email,
  full_name,
  image,
  position,
  createdAt,
  location,
  _id,
  index,
  list,
  setList,
  handleOpenEditButton,
  handleViewUserButton,
  role,
  phone_number,
  username,
}: TableDataInterface) => {
  const dispatch = useDispatch();
  const router = useLocation();
  const navigate = useNavigate();
  const joinedDate = new Date(createdAt).toDateString();
  const [open, setOpen] = useState<boolean>(false);
  const [openView, setOpenView] = useState<boolean>(false);

  const [name, setName] = useState('');
  const [d, setD] = useState('');

  const handleOpenModal = () => {
    setOpen(true);
    const clickedUser: any = list[index];
    const userName = clickedUser?.full_name;
    setName(userName);
  };

  const handleDelete = () => {
    const filter = list?.filter((item, i) => i !== index);
    setList(filter);
    const clickedUser: any = list[index];
    const _id = clickedUser?._id;
    dispatch(deleteUserAction({ _id }) as any);
    setOpen((prev: boolean) => !prev);

    // console.log({ index, _id, clickedUser });
  };

  // console.log({ username });

  const openEditModal = () => {
    setOpen(true);
  };

  const openViewModal = () => {
    setOpenView(true);

    const user = list.find((x) => x?._id);

    const n = user?.username;

    console.log({ n: n, user });
  };

  return (
    <>
      <tbody className="">
        {' '}
        <tr>
          <td className="px-4 py-2 text-[black]  whitespace-nowrap">
            <p className="flex items-center gap-2">
              {image?.length > 0 ? (
                <img
                  src={image?.[0]?.url}
                  alt=""
                  className="w-[60px] h-[60px] object-cover rounded-full"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[60px] h-[60px] border-2 rounded-full p-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              )}

              <p>
                <span className="capitalize">{full_name}</span> <br />
                <span>{location ? location : 'Not Specified Yet'}</span>
              </p>
            </p>
          </td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap">{email}</td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap">{role}</td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap  ">
            <span
              onClick={openViewModal}
              className="cursor-pointer hover:bg-[#bcecbc] px-4 py-1 rounded-[50px]"
            >
              view
            </span>
          </td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap">
            {active ? (
              <span className="bg-[#D9F4DD] text-[green] px-6 py-1 rounded-[50px]">
                Active
              </span>
            ) : null}
            {blocked ? (
              <span className="bg-[#FFDBDB] text-[#FF3C0F] px-4 py-1 rounded-[50px]">
                Blocked
              </span>
            ) : null}
            {de_activated ? (
              <span className="bg-[#FEEEDB] text-[#FAA47E] px-3 py-1 rounded-[50px]">
                Deactivated
              </span>
            ) : null}
          </td>
          <td className="px-4 py-2 text-[black] whitespace-nowrap ">
            <img
              onClick={openEditModal}
              src={EditIcon}
              alt="Edit icon"
              className="w-6 h-6 cursor-pointer"
            />
          </td>
          <td className="px-4 py-4 text-[black] whitespace-nowrap  ">
            {' '}
            <img
              onClick={handleOpenModal}
              src={RedDeleteIcon}
              alt="delete icon"
              className="w-6 h-6 cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
      <InfoModal
        name={name}
        setShow={setOpen}
        show={open}
        text={`Are You Sure You want To Delete`}
        yesOnclick={handleDelete}
      />

      <ViewDetails
        open={openView}
        setOpen={setOpenView}
        isActive={active}
        isBlock={blocked}
        isDeActivate={de_activated}
        role={role}
        userEmail={email}
        userId={_id}
        userName={username}
        user_fullName={full_name}
        user_location={location}
        user_number={phone_number}
        imageUrl={image}

        // data={singleUserDetails}
      />
      <UpdateProfileModal
        open={open}
        setOpen={setOpen}
        userId={_id}
        userEmail={email}
        userName={username}
        user_fullName={full_name}
        user_location={location}
        user_number={phone_number}
        imageUrl={image}

        // data={data}
      />
    </>
  );
};
