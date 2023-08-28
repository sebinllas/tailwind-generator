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
    <div className='divide-y flex flex-col justify-evenly min-w-[320px] divide-slate-700'>
      <label className='flex flex-col justify-center p-3 grow' htmlFor='inset-input'>
        <p>
          Inset:
          {' '}
          <code className='px-1 bg-gray-950'>
            {shadow.inset ? 'true' : 'false'}
          </code>
        </p>
        <Toggle
          onChange={() => {
            const newShadow = { ...shadow, inset: !shadow.inset };
            onChange(newShadow);
            setShadow(newShadow);
          }}
        />
      </label>
      <label className='flex flex-col justify-center p-3 grow' htmlFor='x-offset-input'>
        <p>
          Offset X:
          {' '}
          <code className='px-1 bg-gray-950'>
            {shadow.offsetX}
          </code>
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
      <label className='flex flex-col justify-center p-3 grow' htmlFor='y-offset-input'>
        <p>
          Offset Y:
          {' '}
          <code className='px-1 bg-gray-950'>
            {shadow.offsetY}
          </code>
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
      <label className='flex flex-col justify-center p-3 grow' htmlFor='blur-radius-input'>
        <p>
          Blur Radius:
          {' '}
          <code className='px-1 bg-gray-950'>
            {shadow.blurRadius}
          </code>
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
      <label className='flex flex-col justify-center p-3 grow' htmlFor='spread-radius-input'>
        <p>
          Spread Radius:
          {' '}
          <code className='px-1 bg-gray-950'>
            {shadow.spreadRadius}
          </code>
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
      <label className='flex flex-col justify-center p-3 grow' htmlFor='color-input'>
        <p>
          Shadow Color:
          {' '}
          <code className='px-1 bg-gray-950'>
            {color}
          </code>
        </p>
        <input
          id='color-input'
          name='color'
          type='color'
          value={color}
          onChange={
            (e) => {
              const newColor = e.target.value;
              const newShadow = {
                ...shadow,
                color: hexToRbga(newColor, colorOpacity),
              };
              setColor(newColor);
              onChange(newShadow);
              setShadow(newShadow);
            }
          }
        />

      </label>
      <label className='flex flex-col justify-center p-3 grow' htmlFor='color-opacity-input'>
        <p>
          Color Opacity:
          {' '}
          <code className='px-1 bg-gray-950'>
            {colorOpacity / 100}
          </code>
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
