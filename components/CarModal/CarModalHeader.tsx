import React from 'react';
import Image from 'next/image';
import generateCarImageUrl from '@/utils/generateCarImageUrl';
import { CarData } from '../CarCard/CarCard';

type CarModalHeaderProps = {
  closeModal: () => void;
  car: CarData;
};

const CarModalHeader: React.FC<CarModalHeaderProps> = ({ closeModal, car }) => {
  return (
    <>
      <button
        type='button'
        onClick={closeModal}
        className='absolute top-2 right-2 z-10 w-fit p-2  bg-primary-blue-100 rounded-full'
      >
        <Image
          src='/close.svg'
          alt='close'
          width={20}
          height={20}
          className='object-contain'
        />
      </button>
      <div className='flex-1 flex flex-col gap-3'>
        <div className='relative w-100  h-40 bg-pattern bg-cover bg-center rounded-lg'>
          <Image
            src={generateCarImageUrl(car)}
            alt='car model'
            fill
            priority
            className='object-contain'
          />
        </div>
        <div className='flex gap-3'>
          <div className='flex-1 relative w-full h-24  bg-primary-blue-100 rounded-lg'>
            <Image
              src={generateCarImageUrl(car, '29')}
              alt='car model'
              fill
              priority
              className='object-contain'
            />
          </div>
          <div className='flex-1 relative w-full h-24  bg-primary-blue-100 rounded-lg'>
            <Image
              src={generateCarImageUrl(car, '33')}
              alt='car model'
              fill
              priority
              className='object-contain'
            />
          </div>
          <div className='flex-1 relative w-full h-24  bg-primary-blue-100 rounded-lg'>
            <Image
              src={generateCarImageUrl(car, '13')}
              alt='car model'
              fill
              priority
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CarModalHeader;
