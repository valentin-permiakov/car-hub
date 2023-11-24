'use client';
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

type CustomButtonProps = {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}) => {
  return (
    <button
      disabled={false}
      type={btnType ? btnType : 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={'flex-1'}>{title}</span>
    </button>
  );
};
export default CustomButton;
