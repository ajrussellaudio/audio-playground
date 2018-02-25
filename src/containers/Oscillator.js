import React from "react";
import SinOsc from "../components/audio/SinOsc";
import Slider from "../components/ui/Slider";

class Oscillator extends React.Component {
  state = { frequency: 440 };

  handleFrequencySlider = newFreq => {
    this.setState({ frequency: newFreq });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.context ? (
          <SinOsc freq={this.state.frequency} {...this.props} />
        ) : null}
        <Slider
          onChange={this.handleFrequencySlider}
          value={this.state.frequency}
        />
      </React.Fragment>
    );
  }
}

export default Oscillator;
