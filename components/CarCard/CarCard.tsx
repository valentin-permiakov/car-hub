'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import CarModal from '../CarModal/CarModal';
import CustomButton from '../CustomButton';
import CarCardDetails from './CarCardDetails';
import CarCardHeader from './CarCardHeader';
import RentPrice from './RentPrice';
import generateCarImageUrl from '@/utils/generateCarImageUrl';

export interface CarData {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: 'fwd' | 'rwd' | 'awd' | '4wd';
  fuel_type: 'gas' | 'diesel' | 'electricity';
  highway_mpg: number;
  make: string;
  model: string;
  transmission: 'm' | 'a';
  year: number;
  error?: string;
}

type CarCardProps = {
  car: CarData;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='car-card group'>
      <CarCardHeader
        make={make}
        model={model}
      />
      <RentPrice
        city_mpg={city_mpg}
        year={year}
      />
      <div className='relative w-full h-40  my-3 object-contain'>
        <Image
          src={generateCarImageUrl(car)}
          alt='car model'
          fill
          priority
          className='object-contain'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <CarCardDetails
            imgSrc='/steering-wheel.svg'
            imgAlt='steering wheel'
            transmission={transmission}
          />
          <CarCardDetails
            imgSrc='/tire.svg'
            imgAlt='tire'
            drive={drive}
          />
          <CarCardDetails
            imgSrc='/gas.svg'
            imgAlt='fuel efficiency'
            city_mpg={city_mpg}
          />
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};
export default CarCard;
