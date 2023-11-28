const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);
  if (type === 'fuel_type' || type === 'year') {
    searchParams.set('limit', '10');
  }

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

export default updateSearchParams;
