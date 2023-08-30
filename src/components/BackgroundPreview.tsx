/* eslint-disable jsx-a11y/control-has-associated-label */
export function BackgroundPreview({
  backgroundUrl = '',
  onClick,
  dark = false,
}: {
  backgroundUrl?: string;
  onClick: () => void;
  dark?: boolean;
}) {
  return (
    <div
      className='w-12 h-12 rounded-lg bg-gray-950 bg-[length:15rem_15rem] ring-2
      ring-slate-700 overflow-hidden'
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <button
        type='button'
        className={`w-full h-full ${dark ? '' : 'backdrop-invert-[0.9]'}`}
        onClick={onClick}
        style={{
          transition: 'backdrop-filter 500ms ease-in-out',
        }}
      />
    </div>
  );
}
