import { useState } from 'react';
import { type ShadowProps } from './types';
import { ShadowForm } from './components/ShadowForm';
import './App.css';
import { hexToRbga } from './utils/color';

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
    <div className=''>
      <div className='flex h-[100vh] border divide-x rounded-xl border-slate-700 divide-slate-700'>
        <ShadowForm onChange={(s) => { setShadow(s); }} />
        <div className='flex flex-col grow'>
          <div className='flex items-center justify-center bg-white grow'>
            <div
              className='bg-gray-400 h-36 rounded-2xl w-36 '
              style={
              {
                boxShadow:
                `${shadow.inset ? 'inset' : ''} 
                ${shadow.offsetX}px 
                ${shadow.offsetY}px 
                ${shadow.blurRadius}px 
                ${shadow.spreadRadius}px 
                ${shadow.color}`,
              }
            }
            />
          </div>
          <div className='p-4'>
            <p>
              Tailwindcss classes:
              <br />
              <code className='bg-gray-950'>
                {
                  `shadow-[${shadow.inset ? 'inset_' : ''}${shadow.offsetX}px_${shadow.offsetY}px_${shadow.blurRadius}px_${shadow.spreadRadius}px_${shadow.color}]`
                }
              </code>
            </p>
            <p>
              CSS code:
              <br />
              <code className='bg-gray-950'>
                {`box-shadow: ${shadow.inset ? 'inset' : ''} 
              ${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px 
              ${shadow.spreadRadius}px ${shadow.color}`}
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
