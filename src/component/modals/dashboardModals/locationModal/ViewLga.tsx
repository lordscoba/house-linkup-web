import React from 'react';
import {
  LocalGovArray,
  LocalGovInterface,
} from '../../../dashboard/AdminDashboard/types';
import { EditIcon, RedDeleteIcon } from '../../../../assets/icons';

type Props = {
  data: LocalGovArray;
  show: boolean;
  setShow: (a: any) => void;
  country: string;
  state: string;
};

const ViewLga = ({ data, setShow, show, country, state }: Props) => {
  return (
    <>
      {show ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center  py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[80%]  h-[650px] m-auto px-6 rounded-lg mt-8">
            <p
              onClick={() => setShow((prev: boolean) => !prev)}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>

            <h4 className="text-[#222] text-[1.1rem]">
              Region / Country : {country}
            </h4>
            <h4> State : {state}</h4>
            <section className="bg-[#fff] p-[1rem] rounded-lg mt-2 shadow-2xl overflow-x-auto  w-full hide-scrollbar   ">
              <table className=" w-full bg-[#fff]   shadow-2xl rounded-lg ">
                <thead className="bg-[#fff] text-[#333]">
                  <tr className="border-b-2 border-[#6726A8]">
                    <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
                      LGA
                    </th>
                    <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center">
                      View Towns
                    </th>
                    <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center">
                      Update LGA
                    </th>

                    <th className=" uppercase px-[12px] py-[8px] whitespace-nowrap border-r text-center ">
                      Delete LGA
                    </th>
                  </tr>
                </thead>
                {data?.length > 0
                  ? data
                      ?.map((d: LocalGovInterface, i: any) => {
                        return (
                          <LocalGovTables
                            key={i}
                            index={i}
                            state={d?.local_government_name}
                          />
                        );
                      })
                      .sort((a: any, b: any) =>
                        b?.state?.localeCompare(a.state)
                      )
                  : null}
              </table>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ViewLga;

interface KeyProps {
  index: string;
  state: string;
}

const LocalGovTables = ({ index, state }: KeyProps) => {
  return (
    <>
      <tbody className="">
        <tr>
          <td className="px-4 py-2 text-[black]  whitespace-nowrap text-center ">
            {state}
          </td>

          <td
            // onClick={() => viewLga(index)}
            className="px-4 py-2 text-[black]  whitespace-nowrap  text-center"
          >
            {' '}
            <button className="bg-[#D9F4DD] text-[green] px-6 py-1 rounded-[50px] ">
              View Towns
            </button>
          </td>
          <td className="px-4 py-2 text-[black]  whitespace-nowrap text-center">
            <p className="text-center border flex justify-center">
              <img
                src={EditIcon}
                alt="Edit icon"
                className="w-6 h-6 cursor-pointer"
              />
            </p>
          </td>
          <td
            // onClick={() => deleteBtn(index)}
            className="px-4 py-2 text-[black]  whitespace-nowrap m-auto "
          >
            <p className="text-center border flex justify-center">
              <img
                src={RedDeleteIcon}
                alt="Red delete icon"
                className="w-6 h-6 cursor-pointer "
              />
            </p>
          </td>
        </tr>
      </tbody>
    </>
  );
};
