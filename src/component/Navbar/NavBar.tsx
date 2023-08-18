import React, {
  useEffect,
  useState,
  useLayoutEffect,
  ButtonHTMLAttributes,
} from 'react';
import { NavData, NavTypes } from './navTypes';
import { data } from './data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducerTypes } from '../../redux/store';
import { userDetailsAction } from '../../redux/actions/user.actions';
import { LOG_OUT } from '../../redux/constants/user.constants';

type Props = {};

const NavBar = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [links, setLinks] = useState<NavData>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState<Boolean>(false);

  const [showNav, setShowNav] = useState<Boolean>(false);
  const { pathname } = useLocation();
  const route = pathname.split('/')[1];

  const LoginUser = useSelector((state: StoreReducerTypes) => state.loginUser);
  const LoginSuccess = LoginUser?.success;

  const dataFromStorage =
    typeof !undefined && localStorage.getItem('loginUser')
      ? JSON.parse(localStorage?.getItem('loginUser') as any)
      : null;

  const NoToken = Boolean(!dataFromStorage);

  const userDetails = useSelector(
    (state: StoreReducerTypes) => state.userDetails
  );

  useEffect(() => {
    setLinks(data);
  }, []);

  useEffect(() => {
    const checkTokenExist = localStorage.getItem('loginUser');

    dispatch(userDetailsAction() as any);
    if (checkTokenExist) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (NoToken) {
      setIsLoggedIn(false);
    }
  }, [NoToken]);

  const handleLogout = () => {
    dispatch({ type: LOG_OUT });
    localStorage.clear();
    console.log({ isLoggedIn, LoginSuccess });
  };

  return (
    <>
      {' '}
      {pathname === '/sign-up' || pathname === '/login' ? (
        ''
      ) : (
        <div className={`bg-[#CBD0D0] z-50  relative  pb-3`}>
          <div className=" max-w-[1440px] m-auto xl:pt-[51px] block xl:flex items-center gap-[311px] px-3">
            <div className="flex items-center  justify-between">
              <div className=" flex items-center gap-4">
                <img
                  onClick={() => navigate('/')}
                  src={Logo}
                  width={71}
                  height={64}
                  alt=""
                  className="cursor-pointer"
                />
                <h2
                  onClick={() => navigate('/')}
                  className="text-[24px] font-semibold text-[#4BA586] cursor-pointer"
                >
                  HouseLinkUp
                </h2>
              </div>

              <div
                className="block xl:hidden  cursor-pointer"
                onClick={() => setShowNav((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
            </div>

            <section
              className={`${
                showNav ? 'block' : 'hidden'
              }   xl:flex  items-center gap-[4rem] xl:mt-0 mt-3 `}
            >
              <div className="block xl:flex  items-center flex-1  gap-[48px]">
                {links?.length > 0
                  ? links?.map((item: NavTypes, index: any) => {
                      return (
                        <div key={index}>
                          <section className=" flex xl:block items-center gap-4 max-w-max xl:mb-0 mb-2">
                            <Link
                              onClick={() => setShowNav((prev) => !prev)}
                              to={item?.link}
                              className={` ${
                                pathname === item?.link
                                  ? 'text-[#4BA586]'
                                  : 'text-[#222]'
                              } text-[18px] `}
                            >
                              {item?.text}
                            </Link>
                            {'/' + route === item?.link ? (
                              <p className="w-2 h-2 rounded-full bg-[#4BA586] m-auto mt-[8px]"></p>
                            ) : null}
                          </section>
                        </div>
                      );
                    })
                  : null}
              </div>
              {isLoggedIn || LoginSuccess ? (
                <div className=" ">
                  <div className="flex items-center gap-4">
                    <p className="w-[44px] h-[44px] border-2 rounded-full p-2 uppercase flex items-center justify-center">
                      <p className="text-[#69B99D]">
                        {' '}
                        {dataFromStorage?.userDoc?.full_name.slice(0, 1)}
                      </p>
                    </p>
                    <div className="relative w-[7rem]">
                      <svg
                        onClick={() => setShow((prev) => !prev)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 cursor-pointer "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                      <div className="absolute top-6 z-20 left-0 right-0">
                        {show ? (
                          <LogoutAndProfile
                            setShow={setShow}
                            logOut={handleLogout}
                            data={dataFromStorage}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <section>
                  <button
                    onClick={() => navigate('/sign-up')}
                    className="w-[151px] bg-[#fff] text-[#69B99D] border border-[#69B99D] py-[1rem] mr-[.7rem] text-[1rem] font-semibold"
                  >
                    Sign up
                  </button>
                  <button
                    onClick={() => navigate('/login')}
                    className="w-[151px] bg-[#69B99D] text-[#fff] py-[1rem] text-[1rem] font-semibold"
                  >
                    login
                  </button>
                </section>
              )}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;

interface LinkInterface {
  setShow: Function;
  logOut: () => void;
  data: {
    userDoc: {
      _id: string;
    };
  };
}

const LogoutAndProfile = ({ setShow, logOut, data }: LinkInterface) => {
  return (
    <div className="bg-[grey] px-2 text-[#fff]" onClick={() => setShow(false)}>
      <Link
        to={`/profile/${data?.userDoc?._id}`}
        className="cursor-pointer block"
      >
        Profile
      </Link>
      <Link to={'#'} className="cursor-pointer block">
        DashBoard
      </Link>
      <button type="button" onClick={logOut}>
        Log out
      </button>
    </div>
  );
};
