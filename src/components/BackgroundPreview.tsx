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
      className={`w-14 h-14 rounded-lg bg-gray-950 bg-[length:200px_200px] border ${
        dark ? 'border-gray-200' : 'border-salte-700'
      } overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <button
        type='button'
        className={`w-full h-full ${dark ? 'backdrop-invert-[0.9]' : ''}`}
        onClick={onClick}
        style={{
          transition: 'backdrop-filter 500ms ease-in-out',
        }}
      />
    </div>
  );
}
