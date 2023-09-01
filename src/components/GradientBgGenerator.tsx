import { useReducer, useState } from 'react';
import { TailwindColorPicker } from './TailwindColorPicker';

export function GradientBgGenerator() {
  const gradientOrientations = [
    'bg-gradient-to-t',
    'bg-gradient-to-tr',
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'bg-gradient-to-b',
    'bg-gradient-to-bl',
    'bg-gradient-to-l',
    'bg-gradient-to-tl',
  ];

  enum Actions {
    'TURN_RIGHT',
    'TURN_LEFT',
  }

  const reducer = (state: number, action: Actions) => {
    const { length } = gradientOrientations;
    switch (action) {
      case Actions.TURN_RIGHT:
        return (state + 1) % length;
      case Actions.TURN_LEFT:
        return state - 1 > 0 ? (state - 1) % length : length - 1;
      default:
        return state;
    }
  };

  // user reducer
  const [orientation, dispatch] = useReducer(reducer, 0);
  const [fromColor, setFromColor] = useState('#000000');
  const [toColor, setToColor] = useState('#ffffff');
  const [viaColor, setViaColor] = useState('#ffffff');

  return (
    <div>
      <div className='flex items-center justify-center p-10 bg-slate-200'>
        <div
          className={`w-40 h-40 border border-black ${orientation}`}
          style={{
            background: `linear-gradient(${
              orientation / gradientOrientations.length
            }turn, ${fromColor}, ${viaColor}, ${toColor})`,
          }}
        />
      </div>
      <div>
        <button
          type='button'
          className='bg-yellow-500'
          onClick={() => dispatch(Actions.TURN_LEFT)}
        >
          Left
        </button>
        <button
          type='button'
          className='bg-yellow-500'
          onClick={() => dispatch(Actions.TURN_RIGHT)}
        >
          Right
        </button>
        <label className='flex gap-3 p-3 grow' htmlFor='from-color-input'>
          <p>
            From Color:
            <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
              {fromColor}
            </code>
          </p>

          <input
            id='from-color-input'
            name='from'
            type='color'
            value={fromColor}
            className='rounded-md bg-gray-950'
            onChange={(e) => {
              setFromColor(e.target.value);
            }}
          />
        </label>

        <label className='flex gap-3 p-3 grow' htmlFor='via-color-input'>
          <p>
            Via Color:
            <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
              {viaColor}
            </code>
          </p>
          <input
            id='via-color-input'
            name='via'
            type='color'
            value={viaColor}
            className='rounded-md bg-gray-950'
            onChange={(e) => {
              setViaColor(e.target.value);
            }}
          />
        </label>
        <label className='flex gap-3 p-3 grow' htmlFor='to-color-input'>
          <p>
            To Color:
            <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
              {toColor}
            </code>
          </p>
          <input
            id='to-color-input'
            name='to'
            type='color'
            value={toColor}
            className='rounded-md bg-gray-950'
            onChange={(e) => {
              setToColor(e.target.value);
            }}
          />
        </label>
        <div>
          <p>Tailwind Code:</p>
          <code>{` ${gradientOrientations[orientation]} from-${fromColor} via-${viaColor} to-${toColor}`}</code>
        </div>
      </div>

      {/*
      //selector for  color stops percentages
      <input
        className={`
        appearance-none
        rounded-full
        bg-transparent

        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:ring-[1.5px]
        [&::-webkit-slider-thumb]:ring-white
        [&::-webkit-slider-thumb]:relative
        [&::-webkit-slider-thumb]:-top-4
        [&::-webkit-slider-thumb]:-translate-y-1/2
        [&::-webkit-slider-thumb]:rounded-tr-full
        [&::-webkit-slider-thumb]:-rotate-45
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:w-4

        [&::-webkit-slider-runnable-track]:appearance-none
        [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:bg-transparent
        [&::-webkit-slider-runnable-track]:h-1
      `}
        type='range'
      /> */}
      <TailwindColorPicker />
    </div>
  );
}
