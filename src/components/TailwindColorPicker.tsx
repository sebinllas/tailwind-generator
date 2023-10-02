/* eslint-disable jsx-a11y/control-has-associated-label */
import { tailwindColors as colors } from '../utils/color';

export function TailwindColorPicker() {
  return (
    <table className=' [&_td]:m-2'>
      {Object.entries(colors).map(([colorName, colorVariants], index) => (
        <>
          { index === 0 && (
          <tr key='header'>
            <th className='p-2'>Color</th>
            {Object.keys(colorVariants).map((variantName) => (
              <th key={variantName} className='p-2'>
                {variantName}
              </th>
            ))}
          </tr>
          )}
          <tr key={colorName}>
            <th className='p-2'>{colorName}</th>
            {Object.entries(colorVariants).map(([variantName, variantValue]) => (
              <td
                key={variantName}
                className='p-2'
                style={{
                  backgroundColor: variantValue,
                }}
              />
            ))}
          </tr>
        </>
      ))}
    </table>
  );
}
