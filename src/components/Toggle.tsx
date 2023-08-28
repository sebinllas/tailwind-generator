/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { useState } from 'react';

interface Props {
  onChange: (checked: boolean) => void;
}

export function Toggle({ onChange }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    onChange(!checked);
    setChecked(!checked);
  };

  return (
    <>
      <input type='checkbox' checked={checked} className='sr-only peer' readOnly />
      <div
        onClick={handleChange}
        role='checkbox'
        aria-checked={checked}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
            handleChange();
          }
        }}
        className='relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1
        peer-focus:ring-white dark:peer-focus:ring-white rounded-full peer
        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
        after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300
        after:border after:rounded-full after:h-5 after:w-5 after:transition-all
        dark:border-gray-600 peer-checked:bg-blue-600'
      />
    </>
  );
}
