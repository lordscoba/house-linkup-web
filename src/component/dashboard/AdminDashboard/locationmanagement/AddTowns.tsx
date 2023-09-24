import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RegionArray } from '../types';

type Props = {};

const AddTowns = (props: Props) => {
  const { id } = useParams();

  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<RegionArray>([]);
  const [town, setTown] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="h-screen ">
      <div className="flex flex-col items-center justify-center  w-full   px-2 border border-[#9090980] rounded-lg md:w-[30rem] h-[40rem]  m-auto">
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold">
          Region / Country : {country}
        </h4>
        <h4 className="text-[#222] md:text-[1.5rem] text-[1rem] font-semibold">
          {' '}
          State : {state}
        </h4>
        <form className=" w-full  my-8 ">
          <div>
            {/* <label htmlFor="local-gov"> Add LGA :</label> */}

            <input
              type="text"
              name="local-gov"
              id="local-gov"
              value={town}
              onChange={(e: any) => setTown(e.target.value)}
              placeholder="Add Local Gov"
              className="py-2 border w-full px-2 my-2"
            />
          </div>
        </form>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setShow((prev: boolean) => !prev)}
            className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
          >
            CANCEL
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddTowns;
