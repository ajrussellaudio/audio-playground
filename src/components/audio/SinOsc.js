import React from "react";

class SinOsc extends React.Component {
  state = {};

  connect = () => {
    this.state.oscillator.connect(this.props.output);
    this.state.oscillator.start();
  };

  setFrequency = newFreq => {
    this.state.oscillator.frequency.setValueAtTime(
      newFreq,
      this.props.context.currentTime
    );
  };

  componentDidMount() {
    const ctx = this.props.context;
    const oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    this.setState(
      {
        oscillator: oscillator
      },
      this.connect
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.oscillator) this.setFrequency(nextProps.freq);
  }

  render() {
    return null;
  }
}

export default SinOsc;
