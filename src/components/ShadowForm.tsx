import { useState } from 'react';
import { type ShadowProps } from '../types';
import { hexToRbga } from '../utils/color';
import { Toggle } from './Toggle';

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
    <div className='flex flex-col divide-y justify-evenly divide-slate-700'>
      <label
        className='flex items-center gap-3 p-3 grow'
        htmlFor='inset-input'
      >
        <span>
          Inset:
        </span>
        <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
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
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='x-offset-input'
      >
        <p>
          Offset X:
          {' '}
          <input
            type='number'
            max={100}
            min={-100}
            value={shadow.offsetX}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950'
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
        <input
          id='x-offset-input'
          name='offsetX'
          type='range'
          min='-100'
          max='100'
          value={shadow.offsetX}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='y-offset-input'
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
        <input
          id='y-offset-input'
          name='offsetY'
          type='range'
          min='-100'
          max='100'
          value={shadow.offsetY}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='blur-radius-input'
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
        <input
          id='blur-radius-input'
          name='blurRadius'
          type='range'
          min='0'
          max='100'
          value={shadow.blurRadius}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='spread-radius-input'
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
        <input
          id='spread-radius-input'
          name='spreadRadius'
          type='range'
          min='-100'
          max='100'
          value={shadow.spreadRadius}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex justify-center gap-3 p-3 grow'
        htmlFor='color-input'
      >
        <p>
          Shadow Color:
          {' '}
          <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
            {color}
          </code>
        </p>
        <input
          id='color-input'
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
        htmlFor='color-opacity-input'
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
        <input
          id='color-opacity-input'
          name='colorOpacity'
          type='range'
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
    </div>
  );
}
