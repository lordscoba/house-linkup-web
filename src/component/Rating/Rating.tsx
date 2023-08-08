import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

type Props = {
  rating: Number;
};

const Rating = ({ rating }: Props) => {
  const Star = Array.from({ length: 5 }, (elem: any, index: any) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-[2rem] text-[orange]" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="text-[2rem] text-[orange]" />
        ) : (
          <AiOutlineStar className="text-[2rem] " />
        )}
      </span>
    );
  });
  return <div className="flex">{Star}</div>;
};

export default Rating;
