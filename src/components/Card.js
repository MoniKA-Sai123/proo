import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
  let review = props.review;

  return (
    <div className='flex flex-col md:relative items-center md:items-start'>
      {/* Image Container */}
      <div className='relative md:absolute md:top-[-7rem] md:left-0 md:translate-x-0'>
        <img
          className="aspect-square rounded-full w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[140px] md:h-[140px] z-[10]"
          src={review.image}
          alt="User"
        />
        <div
          className='w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[140px] md:h-[140px] bg-violet-500 rounded-full absolute 
          top-2 left-2 sm:top-[-2px] sm:left-[12px] md:top-[-6px] md:left-[10px] z-[-10]'
        ></div>
      </div>

      {/* Name and Job Title */}
      <div className='text-center md:text-left mt-8 md:mt-7 md:ml-[160px]'>
        <p className='tracking-wider font-bold text-xl sm:text-2xl capitalize'>
          {review.name}
        </p>
        <p className='text-violet-300 uppercase text-sm sm:text-base'>
          {review.job}
        </p>
      </div>

      {/* Quote Icons and Text */}
      <div className='text-violet-400 mx-auto md:ml-[160px] mt-5'>
        <FaQuoteLeft />
      </div>
      <div className='text-center md:text-left mt-4 text-slate-500 text-sm sm:text-base md:ml-[160px]'>
        {review.text}
      </div>
      <div className='text-violet-400 mx-auto md:ml-[160px] mt-5'>
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
