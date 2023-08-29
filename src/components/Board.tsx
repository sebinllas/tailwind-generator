import { ReactNode, useState } from 'react';
import { Toggle } from './Toggle';
import { BackgroundPreview } from './BackgroundPreview';

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
      className='flex relative justify-center items-center min-h-[24rem] grow bg-gray-950 flex-col'
      style={{
        backgroundImage:
          bgImageIndex || bgImageIndex === 0
            ? `url(${bgImages[bgImageIndex]})`
            : 'none',
      }}
    >
      <div className='z-20 grow flex justify-center items-center'>
        {children}
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full z-10 ${
          dark ? 'backdrop-invert-[0.9]' : ''
        }`}
        style={{
          transition: 'backdrop-filter 500ms ease-in-out',
        }}
      />
      <div
        className='flex items-center z-30 gap-3 bg-black border-t
        border-slate-700 bg-opacity-50 p-3 w-full'
      >
        <Toggle
          className='z-20'
          onChange={(checked) => {
            setDark(checked);
          }}
        />
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
      </div>
    </div>
  );
}
