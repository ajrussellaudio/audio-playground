import React from "react";

const LogSlider = ({ min, max, steps, value, onChange, log }) => {
  const scale = Math.log(max) - Math.log(min);

  const logValue = lin => {
    return Math.exp(lin * scale + Math.log(min));
  };

  const linValue = log => {
    return (Math.log(log) - Math.log(min)) / scale;
  };

  return (
    <input
      type="range"
      max={1}
      min={0}
      step={1 / steps}
      onChange={event => onChange(logValue(event.target.valueAsNumber))}
      value={linValue(value)}
    />
  );
};

export default LogSlider;
