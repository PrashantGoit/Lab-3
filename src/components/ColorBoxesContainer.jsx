import React from 'react';
import ColorBox from './ColorBox';
import colors from '../assets/data';

export default function ColorBoxesContainer() {
  return (
    <div className="Container">
      {colors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </div>
  );
}
