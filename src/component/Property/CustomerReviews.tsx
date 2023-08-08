import { useEffect, useState, useRef } from 'react';
import { CustomerReviewsArray, CustomerReviewsInterface } from './types';
import { customerReviewsValues } from './data';
import { GreaterThanBlack, LessThan, Qoute } from '../../assets/icons';
import Rating from '../Rating/Rating';

const CustomerReviews = () => {
  const [reviewsData, setReviewsData] = useState<CustomerReviewsArray>([]);
  const scrollContainerRef = useRef(null) as any;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 100,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 100,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    setReviewsData(customerReviewsValues);
  }, []);
  return (
    <div className="px-[32px]  xl:px-0 w-full xl:w-[1220px] m-auto mt-[72px] ">
      <h2 className="text-center xl:text-[36px] text-[26px] text-[#08110C] font-bold mb-[12px]">
        What our customers say?
      </h2>
      <p className="text-[1rem] text-center text-[#141413]">
        Hear from our satisfied customers and clients.
      </p>

      <section
        className=" flex gap-[20px]  item-center overflow-x-auto transition-all hide-scrollbar mt-[53px] "
        ref={scrollContainerRef}
      >
        {reviewsData?.length > 0
          ? reviewsData?.map((item: CustomerReviewsInterface, index: any) => {
              return (
                <ReviewsCard
                  key={index}
                  name={item?.name}
                  p={item?.p}
                  rating={item?.rating}
                />
              );
            })
          : null}
      </section>
      <div className="flex gap-4 justify-center items-center mt-[36px]">
        <button
          type="button"
          onClick={scrollRight}
          className="bg-[#E4E5DF] w-[56px] h-[56px] rounded-full flex items-center justify-center"
        >
          <img src={LessThan} alt="" width={26} height={26} />
        </button>
        <button
          onClick={scrollLeft}
          className="bg-[#E4E5DF] w-[56px] h-[56px] rounded-full flex items-center justify-center"
        >
          <img src={GreaterThanBlack} alt="" width={26} height={26} />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;

interface ReviewsInterface {
  name: string;
  rating: Number;
  p: string;
}

const ReviewsCard = ({ name, p, rating }: ReviewsInterface) => {
  return (
    <div className="min-w-[390px] xl:min-w-[490px]   mb-[20px] animate__slideInRight ">
      <div className="w-[72px] h-[72px] rounded-full bg-[#E4E5DF] flex items-center justify-center mb-[-6%] ml-[36px] relative">
        <img src={Qoute} alt="" width={32} height={32} />
      </div>
      <article className="border rounded-[5px] xl:px-[36px] px-[12px] pb-[40px] h-[257px]">
        <h4 className="mt-[28px] text-[20px] text-[#08110C] font-bold">
          {name}
        </h4>
        <div className="flex items-center gap-1  mb-[14px]">
          <span>{Number(rating)}</span>
          <Rating rating={Number(rating)} />
        </div>
        <p>{p}</p>
      </article>
    </div>
  );
};
