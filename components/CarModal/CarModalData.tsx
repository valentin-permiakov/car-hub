import React from 'react';
import { CarData } from '../CarCard/CarCard';

type CarModalDataProps = {
  car: CarData;
};

const CarModalData: React.FC<CarModalDataProps> = ({ car }) => {
  return (
    <div className='flex-1 flex flex-col gap-2'>
      <h2 className='font-semibold text-xl capitalize'>
        {car.make} {car.model}
      </h2>
      <div className='flex flex-wrap gap-4 mt3'>
        {Object.entries(car).map(([key, value]) => (
          <div
            className='flex justify-between gap-5 w-full text-right'
            key={key}
          >
            <h4 className='text-gray capitalize'>{key.replace('_', ' ')}</h4>
            <p className='text-black-100 font-semibold'>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CarModalData;
