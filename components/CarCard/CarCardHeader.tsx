import React from 'react';

type CarCardHeaderProps = {
  make: string;
  model: string;
};

const CarCardHeader: React.FC<CarCardHeaderProps> = ({ make, model }) => {
  return (
    <div className='car-card__content'>
      <h2 className='car-card__content-title'>
        {make} {model}
      </h2>
    </div>
  );
};
export default CarCardHeader;
