import React from 'react';

type Props = {
  text: string;
  name: string;
  show: boolean;
  setShow: (a: any) => void;

  yesOnclick: () => void;
};

const InfoModal = ({ name, text, show, setShow, yesOnclick }: Props) => {
  return (
    <>
      {show ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center  py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[30rem] h-[250px] px-6 rounded-lg mt-8">
            <p
              onClick={() => setShow((prev: boolean) => !prev)}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>
            <section className="flex flex-col items-center justify-center mt-4">
              <p className="text-[#222] text-[1.1rem]">{text}</p>
              <h4 className="text-[#222] font-bold my-3">{name}</h4>
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
                  onClick={yesOnclick}
                  className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                >
                  YES
                </button>
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default InfoModal;
