import React from 'react';

type CustomFilterProps = {
  title: 'fuel' | 'year';
};

const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
  return <div>{title}</div>;
};
export default CustomFilter;
