import React from "react";

class Generator extends React.Component {
  state = {};

  connect = () => {
    this.state.oscillator.connect(this.props.output);
    this.state.oscillator.start();
  };

  setFrequency = newFreq => {
    const now = this.props.context.currentTime;
    if (this.state.oscillator) {
      this.state.oscillator.frequency.setValueAtTime(newFreq, now);
    }
  };

  componentDidMount() {
    const oscillator = this.props.context.createOscillator();
    oscillator.type = this.props.waveform;
    this.setState({ oscillator: oscillator }, this.connect);
  }

  componentWillReceiveProps(nextProps) {
    this.setFrequency(nextProps.freq);
  }

  render() {
    return null;
  }
}

export default Generator;
