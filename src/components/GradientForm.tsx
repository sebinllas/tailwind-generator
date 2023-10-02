/* eslint-disable jsx-a11y/label-has-associated-control */
import { useReducer } from 'react';
import { IconRotate2, IconRotateClockwise2 } from '@tabler/icons-react';
import { Toggle } from './Toggle';
import { Slider } from './Slider';
import { NumberInput } from './NumberInput';
import { GradientProps } from '../types';

const GRADIENT_ORIENTATION_STEPS = 8;
enum Actions {
  'TURN_RIGHT',
  'TURN_LEFT',
  'SET_FROM_COLOR',
  'SET_FROM_PERCENTAGE',
  'SET_TO_COLOR',
  'SET_TO_PERCENTAGE',
  'SET_VIA_COLOR',
  'SET_VIA_PERCENTAGE',
  'SET_VIA_ENABLED',
}

interface Action {
  type: Actions;
  payload: any;
}

interface Props {
  onChange: (gradient: GradientProps) => void;
}

export default function GradientForm({ onChange }: Props) {
  const reducer = (state: GradientProps, action: Action) => {
    const stepSize = 1 / GRADIENT_ORIENTATION_STEPS;
    const { orientation } = state;
    let newState = null;
    switch (action.type) {
      case Actions.TURN_RIGHT:
        newState = { ...state, orientation: (orientation + stepSize) % 1 };
        break;
      case Actions.TURN_LEFT:
        newState = orientation - stepSize > 0
          ? { ...state, orientation: (orientation - stepSize) }
          : { ...state, orientation: 1 - stepSize };
        break;

      case Actions.SET_FROM_COLOR:
        newState = { ...state, fromColorStop: { ...state.fromColorStop, color: action.payload } };
        break;

      case Actions.SET_FROM_PERCENTAGE:
        newState = {
          ...state,
          fromColorStop:
          { ...state.fromColorStop, percentage: action.payload },
        };
        break;

      case Actions.SET_TO_COLOR:
        newState = { ...state, toColorStop: { ...state.toColorStop, color: action.payload } };
        break;

      case Actions.SET_TO_PERCENTAGE:
        newState = {
          ...state,
          toColorStop:
          { ...state.toColorStop, percentage: action.payload },
        };
        break;

      case Actions.SET_VIA_COLOR:
        newState = { ...state, viaColorStop: { ...state.viaColorStop, color: action.payload } };
        break;

      case Actions.SET_VIA_PERCENTAGE:
        newState = {
          ...state,
          viaColorStop:
          { ...state.viaColorStop, percentage: action.payload },
        };
        break;

      case Actions.SET_VIA_ENABLED:
        newState = {
          ...state,
          viaColorStop:
          { ...state.viaColorStop, enabled: action.payload },
        };
        break;

      default:
        newState = state;
        break;
    }
    onChange(newState);
    return newState;
  };

  const [gradient, dispatch] = useReducer(reducer, {
    orientation: 0,
    fromColorStop: {
      color: '#ffff3f',
      percentage: 0,
    },
    viaColorStop: {
      color: '#3377ff',
      percentage: 50,
      enabled: false,
    },
    toColorStop: {
      color: '#ff3f3f',
      percentage: 100,
    },
  });
  return (
    <form
      className='flex flex-col divide-y justify-evenly divide-slate-700 [&>div]:p-3
      [&>label]:p-3'
    >
      <h2 className='py-1 text-lg font-bold text-center bg-gray-950'>Orientation </h2>
      <div className='flex justify-center gap-3 grow'>
        <button
          className='flex items-center h-full gap-2 px-2 py-1 rounded-md bg-gray-950 ring-2
          ring-slate-700 justify-evenly'
          type='button'
          onClick={() => dispatch({ type: Actions.TURN_LEFT, payload: null })}
        >
          <IconRotate2 />
          Rotate Left
        </button>
        <button
          className='flex items-center h-full gap-2 px-2 py-1 rounded-md bg-gray-950 ring-2
          ring-slate-700 justify-evenly'
          type='button'
          onClick={() => dispatch({ type: Actions.TURN_RIGHT, payload: null })}
        >
          <IconRotateClockwise2 />
          Rotate Right
        </button>
      </div>
      <h2 className='py-1 text-lg font-bold text-center bg-gray-950'>
        First Stop color
      </h2>

      <label htmlFor='from-color-input' className='flex gap-2'>
        <p>
          <span>color:</span>
          <code className='w-full p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
            {gradient.fromColorStop.color}
          </code>
        </p>
        <input
          id='from-color-input'
          name='from'
          type='color'
          value={gradient.fromColorStop.color}
          className='rounded-md bg-gray-950'
          onChange={(e) => {
            dispatch({ type: Actions.SET_FROM_COLOR, payload: e.target.value });
          }}
        />
      </label>
      <label htmlFor='from-percentage-input'>
        <span>percentage:</span>
        <NumberInput
          id='from-percentage-input'
          value={gradient.fromColorStop.percentage}
          onChange={(e) => {
            dispatch({ type: Actions.SET_FROM_PERCENTAGE, payload: Number(e.target.value) });
          }}
          min={0}
          max={100}
        />
        <br />
        <Slider
          className='w-full'
          value={gradient.fromColorStop.percentage}
          min={0}
          max={100}
          onChange={(e) => {
            dispatch({ type: Actions.SET_FROM_PERCENTAGE, payload: Number(e.target.value) });
          }}
        />
      </label>
      <h2 className='py-1 text-lg font-bold text-center bg-gray-950'>
        Middle Stop color
      </h2>

      <label className='flex gap-3' htmlFor='via-color-enabled-input'>
        <span>enabled:</span>
        <Toggle
          id='via-color-enabled-input'
          onChange={(checked) => {
            dispatch({ type: Actions.SET_VIA_ENABLED, payload: checked });
          }}
        />
      </label>
      <label htmlFor='via-color-input' className='flex gap-2'>
        <p>

          <span>color:</span>
          <code className='w-full p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
            {gradient.viaColorStop.color}
          </code>
        </p>
        <input
          id='via-color-input'
          name='from'
          type='color'
          disabled={!gradient.viaColorStop.enabled}
          value={gradient.viaColorStop.color}
          className='rounded-md bg-gray-950'
          onChange={(e) => {
            dispatch({ type: Actions.SET_VIA_COLOR, payload: e.target.value });
          }}
        />
      </label>
      <label htmlFor='via-percentage-input'>
        <span>percentage:</span>
        <NumberInput
          id='via-percentage-input'
          disabled={!gradient.viaColorStop.enabled}
          value={gradient.viaColorStop.percentage}
          onChange={(e) => {
            dispatch({ type: Actions.SET_VIA_PERCENTAGE, payload: Number(e.target.value) });
          }}
          min={0}
          max={100}
        />
        <br />
        <Slider
          className='w-full'
          value={gradient.viaColorStop.percentage}
          disabled={!gradient.viaColorStop.enabled}
          min={0}
          max={100}
          onChange={(e) => {
            dispatch({ type: Actions.SET_VIA_PERCENTAGE, payload: Number(e.target.value) });
          }}
        />
      </label>
      <h2 className='py-1 text-lg font-bold text-center bg-gray-950'>
        End Stop color
      </h2>
      <label htmlFor='to-color-input' className='flex gap-2'>
        <p>
          <span>color:</span>
          <code className='w-full p-1 ml-2 font-mono rounded-md w-15 bg-gray-950'>
            {gradient.toColorStop.color}
          </code>
        </p>
        <input
          id='to-color-input'
          name='from'
          type='color'
          value={gradient.toColorStop.color}
          className='rounded-md bg-gray-950'
          onChange={(e) => {
            dispatch({ type: Actions.SET_TO_COLOR, payload: e.target.value });
          }}
        />
      </label>
      <label htmlFor='to-percentage-input'>
        <span>percentage:</span>
        <NumberInput
          id='to-percentage-input'
          value={gradient.toColorStop.percentage}
          onChange={(e) => {
            dispatch({ type: Actions.SET_TO_PERCENTAGE, payload: Number(e.target.value) });
          }}
          min={0}
          max={100}
        />
        <br />
        <Slider
          className='w-full'
          value={gradient.toColorStop.percentage}
          min={0}
          max={100}
          onChange={(e) => {
            dispatch({ type: Actions.SET_TO_PERCENTAGE, payload: Number(e.target.value) });
          }}
        />
      </label>
    </form>
  );
}
