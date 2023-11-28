'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import CustomButton from './CustomButton';
import updateSearchParams from '@/utils/updateSearchParams';

type ShowMoreProps = {
  pageNumber: number;
  isNext: boolean;
};

const ShowMore: React.FC<ShowMoreProps> = ({ pageNumber, isNext }) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    console.log(newLimit);
    const newPathName = updateSearchParams('limit', `${newLimit}`);

    router.push(newPathName, { scroll: false });
  };
  return (
    <div className='w-full flex justify-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
export default ShowMore;
