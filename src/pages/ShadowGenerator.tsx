import { useRef, useState } from 'react';
import { type ShadowProps } from '../types';
import { ShadowForm } from '../components/ShadowForm';
import { hexToRbga } from '../utils/color';
import { Board } from '../components/Board';
import { ElementForm } from '../components/ElementForm';
import { ToolLayout } from '../components/ToolLayout';

export function ShadowGenerator() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [shadow, setShadow] = useState<ShadowProps>({
    inset: false,
    offsetX: 0,
    offsetY: 0,
    blurRadius: 0,
    spreadRadius: 0,
    color: hexToRbga('#000000', 100),
  });

  return (
    <ToolLayout
      preview={(
        <Board
          backgroundImagesUrl={['src/assets/grid.svg', 'src/assets/dots.svg']}
        >
          <div
            ref={elementRef}
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
      )}
      footer={(
        <>
          <p>
            Tailwindcss classes:
            <br />
            <code className='p-1 rounded-sm bg-gray-950'>
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
            <code className='p-1 rounded-sm bg-gray-950'>
              {`box-shadow: ${shadow.inset ? 'inset' : ''} 
          ${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px 
          ${shadow.spreadRadius}px ${shadow.color}`}
            </code>
          </p>
        </>
      )}
      settings={(
        <div className='border-b border-slate-700'>
          <h2 className='py-1 text-lg font-bold text-center bg-gray-950'>
            Customize shadow
          </h2>
          <ShadowForm
            onChange={(s) => {
              setShadow(s);
            }}
          />
          <h2 className='py-1 text-lg font-bold text-center bg-gray-950'>
            Customize element
          </h2>
          <ElementForm
            onChange={(elementProps) => {
              if (elementRef.current) {
                const element = elementRef.current;
                element.style.backgroundColor = elementProps.backgroundColor;
                element.style.borderRadius = `${elementProps.borderRadius}px`;
                element.style.width = `${elementProps.width}px`;
                element.style.height = `${elementProps.height}px`;
                document.documentElement.style.setProperty(
                  '--main-color',
                  elementProps.backgroundColor,
                );
              }
            }}
          />
        </div>
      )}
    />
  );
}
