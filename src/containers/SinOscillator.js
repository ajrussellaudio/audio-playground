import React from "react";
import Generator from "../components/audio/Generator";
import LogSlider from "../components/ui/LogSlider";

class SinOscillator extends React.Component {
  state = { frequency: 440 };

  handleFrequencySlider = newFreq => {
    this.setState({ frequency: newFreq });
  };

  render() {
    const generator = (
      <Generator
        freq={this.state.frequency}
        waveform="sawtooth"
        {...this.props}
      />
    );
    return (
      <React.Fragment>
        {this.props.context ? generator : null}
        <LogSlider
          min={40}
          max={1000}
          steps={128}
          value={this.state.frequency}
          onChange={this.handleFrequencySlider}
        />
      </React.Fragment>
    );
  }
}

export default SinOscillator;
