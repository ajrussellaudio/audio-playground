import React from "react";

class Slider extends React.Component {
  handleChange = event => {
    this.props.onChange(event.target.valueAsNumber);
  };

  render() {
    return (
      <input
        type="range"
        max="1000"
        min="0"
        onChange={this.handleChange}
        value={this.props.value}
      />
    );
  }
}

export default Slider;
