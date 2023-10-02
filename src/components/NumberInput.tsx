/* eslint-disable react/prop-types */
import React from 'react';

export function NumberInput({
  name,
  id,
  max,
  min,
  value,
  className,
  disabled,
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type='number'
      name={name}
      id={id}
      max={max}
      min={min}
      value={value}
      disabled={disabled}
      className={`${className} px-1 ml-2 font-mono rounded-sm w-15 bg-gray-950 
    [&::-webkit-outer-spin-button]:bg-red-500
    [&::-webkit-inner-spin-button]:bg-red-500`}
      onChange={onChange}
    />
  );
}
