import { useState } from 'react';
import { type ShadowProps } from '../types';
import { hexToRbga } from '../utils/color';
import { Toggle } from './Toggle';
import { Slider } from './Slider';

type Props = {
  onChange: (shadow: ShadowProps) => void;
};

export function ShadowForm({ onChange }: Props) {
  const [colorOpacity, setColorOpacity] = useState<number>(100);
  const [color, setColor] = useState<string>('#000000');
  const [shadow, setShadow] = useState<ShadowProps>({
    inset: false,
    offsetX: 0,
    offsetY: 0,
    blurRadius: 0,
    spreadRadius: 0,
    color: hexToRbga('#000000', 100),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newShadow = { ...shadow, [name]: value };
    onChange(newShadow);
    setShadow(newShadow);
  };

  return (
    <form className='flex flex-col divide-y justify-evenly divide-slate-700'>
      <label
        className='flex items-center gap-3 p-3 grow'
        htmlFor='shadow-inset-input'
      >
        <span>
          Inset:
        </span>
        <code className='p-1 ml-2 font-mono rounded-md grow-0 shrink-0 basis-14 bg-gray-950'>
          {shadow.inset ? 'true' : 'false'}
        </code>
        <Toggle
          onChange={() => {
            const newShadow = { ...shadow, inset: !shadow.inset };
            onChange(newShadow);
            setShadow(newShadow);
          }}
        />
      </label>
      <label
        className='flex gap-3 p-3 grow'
        htmlFor='shadow-color-input'
      >
        <p>
          Shadow Color:
          {' '}
          <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
            {color}
          </code>
        </p>
        <input
          id='shadow-color-input'
          name='color'
          type='color'
          value={color}
          className='rounded-md bg-gray-950'
          onChange={(e) => {
            const newColor = e.target.value;
            const newShadow = {
              ...shadow,
              color: hexToRbga(newColor, colorOpacity),
            };
            setColor(newColor);
            onChange(newShadow);
            setShadow(newShadow);
          }}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='shadow-color-opacity-input'
      >
        <p>
          Color Opacity:
          {' '}
          <input
            type='number'
            max={100}
            min={-100}
            value={colorOpacity}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950'
            onChange={(e) => {
              const opacity = parseInt(e.target.value, 10);
              const newShadow = {
                ...shadow,
                color: hexToRbga(color, opacity),
              };
              setColorOpacity(opacity);
              onChange(newShadow);
              setShadow(newShadow);
            }}
          />
        </p>
        <Slider
          id='shadow-color-opacity-input'
          name='colorOpacity'
          min='0'
          max='100'
          value={colorOpacity}
          onChange={(e) => {
            const opacity = parseInt(e.target.value, 10);
            const newShadow = {
              ...shadow,
              color: hexToRbga(color, opacity),
            };
            setColorOpacity(opacity);
            onChange(newShadow);
            setShadow(newShadow);
          }}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='shadow-x-offset-input'
      >
        <p>
          Offset X:
          {' '}
          <input
            type='number'
            max={100}
            min={-100}
            value={shadow.offsetX}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950 accent-blue-600'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newShadow = {
                ...shadow,
                offsetX: Number(e.target.value),
              };
              onChange(newShadow);
              setShadow(newShadow);
            }}
          />
        </p>
        <Slider
          id='shadow-x-offset-input'
          name='offsetX'
          min='-100'
          max='100'
          value={shadow.offsetX}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='shadow-y-offset-input'
      >
        <p>
          Offset Y:
          <input
            type='number'
            max={100}
            min={-100}
            value={shadow.offsetY}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newShadow = {
                ...shadow,
                offsetY: Number(e.target.value),
              };
              onChange(newShadow);
              setShadow(newShadow);
            }}
          />
        </p>
        <Slider
          id='shadow-y-offset-input'
          name='offsetY'
          min='-100'
          max='100'
          value={shadow.offsetY}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='shadow-blur-radius-input'
      >
        <p>
          Blur Radius:
          {' '}
          <input
            type='number'
            max={100}
            min={0}
            value={shadow.blurRadius}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newShadow = {
                ...shadow,
                blurRadius: Number(e.target.value),
              };
              onChange(newShadow);
              setShadow(newShadow);
            }}
          />
        </p>
        <Slider
          id='shadow-blur-radius-input'
          name='blurRadius'
          min='0'
          max='100'
          value={shadow.blurRadius}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='shadow-spread-radius-input'
      >
        <p>
          Spread Radius:
          {' '}
          <input
            type='number'
            max={100}
            min={-100}
            value={shadow.spreadRadius}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const newShadow = {
                ...shadow,
                spreadRadius: Number(e.target.value),
              };
              onChange(newShadow);
              setShadow(newShadow);
            }}
          />
        </p>
        <Slider
          id='shadow-spread-radius-input'
          name='spreadRadius'
          min='-100'
          max='100'
          value={shadow.spreadRadius}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
