import calculateCarRent from '@/utils/calculateCarRent';
import React from 'react';

type RentPriceProps = {
  city_mpg: number;
  year: number;
};

const RentPrice: React.FC<RentPriceProps> = ({ city_mpg, year }) => {
  const rentPrice = calculateCarRent(city_mpg, year);
  return (
    <p className='flex mt-6 text-[32px] font-extrabold'>
      <span className='self-start text-[14px] font-semibold'>$</span>
      {rentPrice}
      <span className='self-end text-[14px] font-medium'>/day</span>
    </p>
  );
};
export default RentPrice;
