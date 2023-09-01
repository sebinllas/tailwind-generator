import { tailwindColors as colors } from '../utils/color';

export function TailwindColorPicker() {
  return (
    <div>
      {Object.keys(colors).map((color) => (
        <div key={color}>
          <h2>{color}</h2>
          <ul className='flex'>
            {Object.keys(colors[color]).map((colorIntensity) => (
              <li
                key={colors[color][colorIntensity]}
                className='grow'
                style={{ backgroundColor: colors[color][colorIntensity] }}
              >
                {colors[color][colorIntensity]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
