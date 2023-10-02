/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import GradientForm from '../components/GradientForm';
import { GradientProps } from '../types';
import { Board } from '../components/Board';

const tailwindGradientOrientations : {
  [key: number]: string
} = {
  0: 'bg-gradient-to-r',
  0.125: 'bg-gradient-to-br',
  0.25: 'bg-gradient-to-b',
  0.375: 'bg-gradient-to-bl',
  0.5: 'bg-gradient-to-l',
  0.625: 'bg-gradient-to-tl',
  0.75: 'bg-gradient-to-t',
  0.875: 'bg-gradient-to-tr',
};

export function GradientBgGenerator() {
  const [
    {
      orientation, fromColorStop, toColorStop, viaColorStop,
    },
    setGradientProps,
  ] = useState<GradientProps>({
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
    <div
      className='flex flex-wrap min-h-screen'
    >
      <main className='flex flex-col border-l border-r border-slate-700 grow basis-96'>
        <Board
          darkInitial
          backgroundImagesUrl={['src/assets/grid.svg', 'src/assets/dots.svg']}
        >
          <div
            className='w-72 h-72 bg-slate-500 rounded-2xl'
            style={{
              background: `linear-gradient(
              ${orientation}turn,
              ${fromColorStop.color} ${fromColorStop.percentage}%,
              ${viaColorStop.enabled ? `${viaColorStop.color} ${viaColorStop.percentage}%,` : ''}
              ${toColorStop.color} ${toColorStop.percentage}%)`,
            }}
          />
        </Board>
        <footer className='p-4'>
          <p className='mb-2'>
            <h3>
              Tailwind classes:
            </h3>
            <code className='w-full p-1 text-xs rounded-sm bg-gray-950'>
              {` 
              ${tailwindGradientOrientations[orientation]} 
              from-[${fromColorStop.percentage}%] 
              from-[${fromColorStop.color}] 
              ${viaColorStop.enabled ? `via-[${viaColorStop.percentage}%]` : ''} 
              ${viaColorStop.enabled ? `via-[${viaColorStop.color}]` : ''} 
              to-[${toColorStop.percentage}%]
              to-[${toColorStop.color}]
            `}
            </code>
          </p>
          <p className='w-full'>
            <h3>
              CSS Code:
            </h3>
            <code className='w-full p-1 text-xs rounded-sm bg-gray-950'>
              {
              `background: linear-gradient(
              ${orientation} turn,
              ${fromColorStop.color} ${fromColorStop.percentage}%,
              ${viaColorStop.enabled ? `${viaColorStop.color} ${viaColorStop.percentage}%,` : ''}
              ${toColorStop.color} ${toColorStop.percentage}%)`
            }
            </code>
          </p>

        </footer>
      </main>
      <aside
        className='
        grow md:grow-0 shrink-0 border-b border-slate-700
        md:max-h-screen sm:overflow-y-scroll divide-slate-700 divide-y
        [&::-webkit-scrollbar]:absolute
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-thumb]:bg-slate-700
        [&::-webkit-scrollbar]:bg-gray-950
        [&::-webkit-scrollbar-thumb]:rounded-full
      '
      >
        <GradientForm onChange={(gradient) => { setGradientProps(gradient); }} />
      </aside>
    </div>
  );
}
