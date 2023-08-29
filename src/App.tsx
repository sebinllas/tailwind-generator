import { useState } from 'react';
import { type ShadowProps } from './types';
import { ShadowForm } from './components/ShadowForm';
import './App.css';
import { hexToRbga } from './utils/color';
import { Board } from './components/Board';

export default function App() {
  const [shadow, setShadow] = useState<ShadowProps>({
    inset: false,
    offsetX: 0,
    offsetY: 0,
    blurRadius: 0,
    spreadRadius: 0,
    color: hexToRbga('#000000', 100),
  });

  return (
    <div
      className='flex h-[100vh] border divide-x rounded-xl
      border-slate-700 divide-slate-700 flex-wrap'
    >
      <aside className='grow sm:grow-0 shrink-0'>
        <ShadowForm
          onChange={(s) => {
            setShadow(s);
          }}
        />
      </aside>
      <main className='flex flex-col grow basis-96'>
        <Board
          backgroundImagesUrl={['src/assets/grid.svg', 'src/assets/dots.svg']}
        >
          <div
            className='w-36 h-36 bg-slate-500 rounded-2xl'
            style={{
              boxShadow: `${shadow.inset ? 'inset' : ''} 
                ${shadow.offsetX}px 
                ${shadow.offsetY}px 
                ${shadow.blurRadius}px 
                ${shadow.spreadRadius}px 
                ${shadow.color}`,
            }}
          />
        </Board>
        <footer className='p-4'>
          <p>
            Tailwindcss classes:
            <br />
            <code className='p-1 rounded-sm w-15 bg-gray-950'>
              {`shadow-[${shadow.inset ? 'inset_' : ''}${shadow.offsetX}px_${
                shadow.offsetY
              }px_${shadow.blurRadius}px_${shadow.spreadRadius}px_${
                shadow.color
              }]`}
            </code>
          </p>
          <p>
            CSS code:
            <br />
            <code className='p-1 rounded-sm w-15 bg-gray-950'>
              {`box-shadow: ${shadow.inset ? 'inset' : ''} 
              ${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px 
              ${shadow.spreadRadius}px ${shadow.color}`}
            </code>
          </p>
        </footer>
      </main>
    </div>
  );
}
