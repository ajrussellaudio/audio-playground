import React from "react";

const LinSlider = ({ min, max, steps, value, onChange, log }) => {
  const scale = max - min;

  const scaled = position => {
    return position * scale + min;
  };

  const descaled = value => {
    return (value - min) / scale;
  };

  return (
    <input
      type="range"
      max={1}
      min={0}
      step={1 / steps}
      onChange={event => onChange(scaled(event.target.valueAsNumber))}
      value={descaled(value)}
    />
  );
};

export default LinSlider;
