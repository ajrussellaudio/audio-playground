import React from "react";
import Oscillator from "./Oscillator";

class Gain extends React.Component {
  state = { gain: null };

  connect = () => {
    this.state.gain.connect(this.props.output);
  };

  componentDidMount() {
    this.setState(
      {
        gain: this.props.context.createGain()
      },
      this.connect
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1>Gain</h1>
        <Oscillator context={this.props.context} output={this.state.gain} />
      </React.Fragment>
    );
  }
}

export default Gain;