import { useReducer, useState } from 'react';

export function GradientBgGenerator() {
  const states = [
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

  const reducer = (state: typeof states[number], action:Actions) => {
    const currentIndex = states.indexOf(state);
    const { length } = states;
    switch (action) {
      case Actions.TURN_RIGHT:
        return states[(currentIndex + 1) % length];
      case Actions.TURN_LEFT:
        return states[(currentIndex - 1) > 0 ? (currentIndex - 1) % length : length - 1];
      default:
        return state;
    }
  };

  const getColorFromState = (color: string) => color.split('-')[1];
  // user reducer
  const [orientation, dispatch] = useReducer(reducer, 'bg-gradient-to-r');
  const [fromColor, setFromColor] = useState('#000000');
  const [toColor, setToColor] = useState('#ffffff');
  const [viaColor, setViaColor] = useState('#ffffff');

  return (
    <div>
      <div className='flex items-center justify-center p-10 bg-slate-200'>
        <div className={`w-40 h-40 border border-black ${orientation} ${fromColor} ${toColor} ${viaColor}`} />
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
        <label
          className='flex gap-3 p-3 grow'
          htmlFor='from-color-input'
        >
          <p>
            From Color:
            {' '}
            <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
              {getColorFromState(fromColor)}
            </code>
          </p>
          <input
            id='from-color-input'
            name='from'
            type='color'
            value={getColorFromState(fromColor)}
            className='rounded-md bg-gray-950'
            onChange={
              (e) => {
                setFromColor(`${e.target.name}-${e.target.value}`);
              }
            }
          />
        </label>
        <label
          className='flex gap-3 p-3 grow'
          htmlFor='to-color-input'
        >
          <p>
            From Color:
            {' '}
            <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
              {getColorFromState(toColor)}
            </code>
          </p>
          <input
            id='to-color-input'
            name='to'
            type='color'
            value={getColorFromState(toColor)}
            className='rounded-md bg-gray-950'
            onChange={
              (e) => {
                setToColor(`${e.target.name}-${e.target.value}`);
              }
            }
          />
        </label>
        <label
          className='flex gap-3 p-3 grow'
          htmlFor='via-color-input'
        >
          <p>
            From Color:
            {' '}
            <code className='p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
              {getColorFromState(viaColor)}
            </code>
          </p>
          <input
            id='via-color-input'
            name='via'
            type='color'
            value={getColorFromState(viaColor)}
            className='rounded-md bg-gray-950'
            onChange={
              (e) => {
                setViaColor(`${e.target.name}-${e.target.value}`);
              }
            }
          />
        </label>
      </div>

    </div>
  );
}
