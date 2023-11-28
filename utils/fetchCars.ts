import { CarData } from '@/components/CarCard/CarCard';

export interface FilterProps {
  manufacturer: string;
  year: string;
  fuel: string;
  limit: string;
  model: string;
}

const fetchCars = async (filters: FilterProps): Promise<Array<CarData>> => {
  const { manufacturer, model, fuel, year, limit } = filters;
  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const url = new URL('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars');

  url.searchParams.append('make', manufacturer);
  url.searchParams.append('model', model);
  url.searchParams.append('fuel_type', fuel);
  url.searchParams.append('year', year);
  url.searchParams.append('limit', limit);

  const response = await fetch(url, {
    headers,
  });

  const result = await response.json();

  return result;
};
export default fetchCars;
