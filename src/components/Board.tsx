import { ReactNode, useState } from 'react';
import { Toggle } from './Toggle';
import { BackgroundPreview } from './BackgroundPreview';

type Props = {
  children: ReactNode;
  backgroundImagesUrl: string[];
  darkInitial?: boolean;
};

export function Board({ children, backgroundImagesUrl, darkInitial = false }: Props) {
  const [dark, setDark] = useState(darkInitial);
  const [bgImageIndex, setBgImageIndex] = useState<number>();
  const bgImages = backgroundImagesUrl;
  return (
    <>
      <div
        className='flex relative justify-center items-center min-h-[24rem]
        grow bg-gray-950 flex-col'
        style={{
          backgroundImage:
          bgImageIndex || bgImageIndex === 0
            ? `url(${bgImages[bgImageIndex]})`
            : 'none',
        }}
      >
        <div className='z-20 flex items-center justify-center grow'>
          {children}
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full z-10 ${
            dark ? '' : 'backdrop-invert-[0.9]'
          }`}
          style={{
            transition: 'backdrop-filter 500ms ease-in-out',
          }}
        />
      </div>
      <div
        className='z-30 flex items-center justify-center w-full gap-3 p-3 bg-opacity-50 border-y
        border-slate-700'
      >
        {bgImages.map((imgUrl, index) => (
          <BackgroundPreview
            backgroundUrl={imgUrl}
            onClick={() => setBgImageIndex(index)}
            key={imgUrl}
            dark={dark}
          />
        ))}
        <BackgroundPreview
          onClick={() => setBgImageIndex(undefined)}
          dark={dark}
        />
        <div className='flex items-center h-full gap-2 px-2 py-1 rounded-md bg-gray-950 ring-2
          ring-slate-700'
        >
          <span className='text-xs font-light text-slate-300'>
            Dark background
          </span>
          <Toggle
            value={dark}
            className='z-20'
            onChange={(checked) => {
              setDark(checked);
            }}
          />
        </div>
      </div>
    </>
  );
}
