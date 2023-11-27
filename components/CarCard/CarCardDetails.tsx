import React from 'react';
import Image from 'next/image';

type CarCardDetailsProps = {
  imgSrc: string;
  imgAlt: string;
  transmission?: 'a' | 'm';
  drive?: 'fwd' | 'rwd' | 'awd' | '4wd';
  city_mpg?: number;
};

const CarCardDetails: React.FC<CarCardDetailsProps> = ({
  imgSrc,
  transmission,
  imgAlt,
  drive,
  city_mpg,
}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={20}
        height={20}
      />
      {transmission && (
        <p className='text-[14px]'>
          {transmission === 'a' ? 'Automatic' : 'Manual'}
        </p>
      )}
      {drive && <p className='text-[14px]'>{drive.toUpperCase()}</p>}
      {city_mpg && <p className='text-[14px]'>{city_mpg} MPG</p>}
    </div>
  );
};
export default CarCardDetails;
