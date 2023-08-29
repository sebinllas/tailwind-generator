/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable jsx-a11y/click-events-have-key-events
// eslint-disable jsx-a11y/click-events-have-key-events
// eslint-disable jsx-a11y/no-static-element-interactions
import { ReactNode, useState } from 'react';
import { Toggle } from './Toggle';

type Props = {
  children: ReactNode;
  backgroundImagesUrl: string[];
};

export function Board({ children, backgroundImagesUrl }: Props) {
  const [dark, setDark] = useState(false);
  const [bgImageIndex, setBgImageIndex] = useState<number>();
  const bgImages = backgroundImagesUrl;
  return (
    <div
      className='flex relative justify-center items-center min-h-[24rem] grow bg-gray-950'
      style={{
        backgroundImage:
          bgImageIndex || bgImageIndex === 0
            ? `url(${bgImages[bgImageIndex]})`
            : 'none',
      }}
    >
      <div className='z-20'>{children}</div>
      <div
        className='absolute top-0 left-0 w-full h-full z-10'
        style={{
          backdropFilter: dark ? 'none' : 'invert(0.9)',
          WebkitTransition: 'backdrop-filter 500ms ease-in-out',
        }}
      />
      <div className='absolute right-1 bottom-1 flex gap-3'>
        <Toggle
          className='z-20'
          onChange={(checked) => {
            setDark(checked);
          }}
        />
        <div className='flex gap-3 z-0'>
          {bgImages.map((imgUrl, index) => (
            <div
              className='w-16 h-16 rounded-lg bg-gray-950 bg-[length:300px_300px]
            border border-gray-200'
              style={{
                backgroundImage: `url(${imgUrl})`,
              }}
              onClick={() => setBgImageIndex(index)}
            />
          ))}
          <div
            className='w-16 h-16 rounded-lg bg-gray-950 bg-[length:300px_300px]
            border border-gray-200'
            onClick={() => setBgImageIndex(undefined)}
          />
        </div>
      </div>
    </div>
  );
}
