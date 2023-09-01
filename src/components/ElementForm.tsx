import { useState } from 'react';
import { Slider } from './Slider';

interface ElementProps {
  backgroundColor: string;
  borderRadius: number;
  width: number;
  height: number;
}

interface Props {
  onChange: (elementProps: ElementProps) => void;
}

export function ElementForm({ onChange }: Props) {
  const [elementProps, setElementProps] = useState<ElementProps>({
    backgroundColor: '#8b8b8b',
    borderRadius: 0,
    width: 100,
    height: 100,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newElementProps = { ...elementProps, [name]: value };
    onChange(newElementProps);
    setElementProps(newElementProps);
  };

  return (
    <form className='flex flex-col divide-y justify-evenly divide-slate-700'>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='element-border-radius-input'
      >
        <p>
          Border radius:
          {' '}
          <input
            type='number'
            name='borderRadius'
            max={100}
            min={0}
            value={elementProps.borderRadius}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950 accent-blue-600'
            onChange={handleChange}
          />
        </p>
        <Slider
          id='element-border-radius-input'
          name='borderRadius'
          min='0'
          max='100'
          value={elementProps.borderRadius}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='element-width-input'
      >
        <p>
          Width:
          <input
            type='number'
            name='width'
            max={200}
            min={0}
            value={elementProps.width}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950'
            onChange={handleChange}
          />
        </p>
        <Slider
          id='element-width-input'
          name='width'
          min='0'
          max='200'
          value={elementProps.width}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex flex-col justify-center gap-3 p-3 grow'
        htmlFor='element-height-input'
      >
        <p>
          Height:
          <input
            type='number'
            name='height'
            max={200}
            min={0}
            value={elementProps.height}
            className='px-1 ml-2 font-mono rounded-md w-15 bg-gray-950'
            onChange={handleChange}
          />
        </p>
        <Slider
          id='element-height-input'
          name='height'
          min='0'
          max='200'
          value={elementProps.height}
          onChange={handleChange}
        />
      </label>
      <label
        className='flex gap-3 p-3 grow'
        htmlFor='element-background-color-input'
      >
        <p>
          Background Color:
          {' '}
          <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
            {elementProps.backgroundColor}
          </code>
        </p>
        <input
          id='element-background-color-input'
          name='backgroundColor'
          type='color'
          value={elementProps.backgroundColor}
          className='rounded-md bg-gray-950'
          onChange={(e) => {
            const newElementProps = {
              ...elementProps,
              backgroundColor: e.target.value,
            };
            setElementProps(newElementProps);
            onChange(newElementProps);
          }}
        />
      </label>
    </form>
  );
}
