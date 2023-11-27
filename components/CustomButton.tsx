'use client';
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

type CustomButtonProps = {
  title: string;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}) => {
  return (
    <button
      disabled={false}
      type={btnType ? btnType : 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt={rightIcon}
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};
export default CustomButton;
