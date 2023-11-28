import CarCatalogue from '@/components/CarCatalogue';
import Hero from '@/components/Hero';
import fetchCars from '@/utils/fetchCars';

export interface SearchParams {
  [key: string]: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || '2022',
    fuel: searchParams.fuel_type || '',
    limit: searchParams.limit || '10',
    model: searchParams.model || '',
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <CarCatalogue
        allCars={allCars}
        isDataEmpty={isDataEmpty}
        searchParams={searchParams}
      />
    </main>
  );
}
