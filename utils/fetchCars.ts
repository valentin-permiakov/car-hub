const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': '4e4b358d68msh39e998a87b3d47dp18d298jsn3ed02192d441',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=a3',
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
};
export default fetchCars;
