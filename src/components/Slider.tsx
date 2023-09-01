import React, { InputHTMLAttributes } from 'react';

export function Slider({
  id, name, onChange, min, max, value, className,
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`
        ${className}
        bg-emerald-600
        appearance-none
        rounded-full
        ring-white/50
        ring-[1px]

        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:bg-black/25
        [&::-webkit-slider-thumb]:ring
        [&::-webkit-slider-thumb]:ring-white
        [&::-webkit-slider-thumb]:relative
        [&::-webkit-slider-thumb]:top-1/2
        [&::-webkit-slider-thumb]:-translate-y-1/2
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:h-2
        [&::-webkit-slider-thumb]:w-2

        [&::-webkit-slider-runnable-track]:appearance-none
        [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:bg-transparent
        [&::-webkit-slider-runnable-track]:h-1
      `}
      type='range'
      id={id}
      name={name}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
}
