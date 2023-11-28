import React from 'react';
import CarCard, { CarData } from './CarCard/CarCard';
import SearchBar from './Search/SearchBar';
import CustomFilter from './CustomFilter';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from './ShowMore';
import { SearchParams } from '@/app/page';

type CarCatalogueProps = {
  isDataEmpty: boolean;
  allCars: CarData[];
  searchParams: SearchParams;
};

const CarCatalogue: React.FC<CarCatalogueProps> = ({
  isDataEmpty,
  allCars,
  searchParams,
}) => {
  return (
    <div
      className='mt-12 padding-x padding-y max-width'
      id='discover'
    >
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className='home__filters'>
        <SearchBar />
        <div className='home__filter-container'>
          <CustomFilter
            title='fuel_type'
            options={fuels}
          />
          <CustomFilter
            title='year'
            options={yearsOfProduction}
          />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car, index) => (
              <CarCard
                key={index}
                car={car}
              />
            ))}
          </div>
          <ShowMore
            pageNumber={(Number(searchParams.limit) || 10) / 10}
            isNext={(Number(searchParams.limit) || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold mb-40'>
            Oops! No Results
          </h2>
        </div>
      )}
    </div>
  );
};
export default CarCatalogue;
